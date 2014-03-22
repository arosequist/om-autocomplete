(ns arosequist.om-autocomplete.bootstrap
  (:require-macros [cljs.core.async.macros :refer [go]])
  (:require [cljs.core.async :refer [<! chan put! timeout]]
            [om.core :as om :include-macros true]
            [om.dom :as dom :include-macros true]
            [goog.events :as gevents]))

(defn container-view [_ _ {:keys [class-name]}]
  (reify
    om/IRenderState
    (render-state [_ {:keys [input-component results-component]}]
      (dom/div #js {:className (str "dropdown " class-name)}
        input-component results-component))))

(defn input-view [_ _ {:keys [class-name placeholder]}]
  (reify
    om/IRenderState
    (render-state [_ {:keys [focus-ch value-ch highlight-ch select-ch value highlighted-index]}]
      (dom/input
        #js {:type "text"
             :autoComplete "off"
             :spellCheck "false"
             :className (str "form-control " class-name)
             :placeholder placeholder
             :value value
             :onFocus #(put! focus-ch true)
             :onBlur #(go (let [_ (<! (timeout 100))]
                        ; if we don't wait, then the dropdown will disappear before its onClick renders and a selection won't be made
                        ; this is a hack, of course, but I don't know how to fix it
                        (put! focus-ch false)))
             :onKeyDown (fn [e]
                          (case (.-keyCode e)
                            40 (put! highlight-ch (inc highlighted-index))
                            38 (put! highlight-ch (dec highlighted-index))
                            13 (put! select-ch highlighted-index)
                            nil))
             :onChange #(put! value-ch (.. % -target -value))}))))

(defn results-view [app _ {:keys [class-name
                                  loading-view loading-view-opts
                                  render-item render-item-opts]}]
  (reify
    om/IRenderState
    (render-state [_ {:keys [highlight-ch select-ch value loading? focused? suggestions highlighted-index]}]
      (let [display? (and focused? value (not= value ""))
            display (if display? "block" "none")
            attrs #js {:className "dropdown-menu"
                       :style #js {:display display}}]
        (if loading?
          (dom/ul attrs
            (om/build loading-view app {:opts loading-view-opts}))
          (apply dom/ul attrs
            (map-indexed
              (fn [idx item]
                (om/build render-item app {:init-state
                                            {:highlight-ch highlight-ch
                                             :select-ch select-ch}
                                           :state
                                            {:item item
                                             :index idx
                                             :highlighted-index highlighted-index}
                                           :opts render-item-opts}))
              suggestions)))))))

(defn render-item [app owner {:keys [class-name text-fn]}]
  (reify
    om/IInitState
    (init-state [_]
      {:click-ch (chan)})

    om/IWillMount
    (will-mount [_]
      (let [click-ch (om/get-state owner :click-ch)
            select-ch (om/get-state owner :select-ch)]
        (go (loop []
          (<! click-ch)
          (put! select-ch (om/get-state owner :index))))))

    om/IDidMount
    (did-mount [this]
      (let [index (om/get-state owner :index)
            highlight-ch (om/get-state owner :highlight-ch)
            click-ch (om/get-state owner :click-ch)
            node (om/get-node owner)]
        (gevents/listen node (.-MOUSEOVER gevents/EventType) #(put! highlight-ch index))
        (gevents/listen node (.-CLICK gevents/EventType) #(put! click-ch true))))

    om/IRenderState
    (render-state [_ {:keys [click-ch select-ch item index highlighted-index]}]
      (let [highlighted? (= index highlighted-index)]
        (dom/li #js {:className (if highlighted? (str "active " class-name) class-name)}
          (dom/a #js {:href "#"}
            (text-fn item index)))))))
