(ns arosequist.om-autocomplete.bootstrap
  (:require-macros [cljs.core.async.macros :refer [go alt!]])
  (:require [cljs.core.async :refer [<! chan put! timeout]]
            [om.core :as om :include-macros true]
            [om.dom :as dom :include-macros true]
            [goog.events :as gevents]
            [clojure.string :as str]))

(defn container-view [_ _ {:keys [class-name]}]
  (reify
    om/IRenderState
    (render-state [_ {:keys [input-component results-component mouse-ch]}]
                  (dom/div #js {:className (str "dropdown " class-name)}
                           input-component results-component))))

(defn input-view [_ owner {:keys [class-name placeholder id]}]
  (reify
    om/IWillMount
    (will-mount [_]
                (let [{:keys [input-focus-ch]} (om/get-state owner)]
                  (go
                    (loop []
                      (when-some [input-focus (<! input-focus-ch)]
                                 (.focus (om/get-node owner "input"))
                                 (recur))))))
    om/IRenderState
    (render-state [_ {:keys [focus-ch value-ch highlight-ch select-ch backspace-ch value highlighted-index mouse? displayed?]}]
                  (dom/input
                    #js {:id id
                         :type "text"
                         :autoComplete "off"
                         :spellCheck "false"
                         :className class-name
                         :placeholder placeholder
                         :value value
                         :ref "input"
                         :onFocus (fn [e]
                                    (put! focus-ch true)
                                    (.preventDefault e))
                         :onBlur (fn [e]
                                   (when (not mouse?) (put! focus-ch false))
                                   (.preventDefault e))
                         :onKeyDown (fn [e]
                                      (let [keyCode (.-keyCode e)]
                                        (case (.-keyCode e)
                                          40 (put! highlight-ch (inc highlighted-index)) ;; up
                                          38 (put! highlight-ch (dec highlighted-index)) ;; down
                                          13 (when displayed? (put! select-ch highlighted-index)) ;; enter
                                          9  (when displayed? (put! select-ch highlighted-index)) ;; tab
                                          8  (when (str/blank? value) (put! backspace-ch true))
                                          nil)
                                        (when (contains? #{40 38 13 9} keyCode) (.preventDefault e))))
                         :onChange (fn [e]
                                     (put! value-ch (.. e -target -value))
                                     (.preventDefault e))}))))

(defn results-view [app _ {:keys [class-name
                                  loading-view loading-view-opts
                                  render-item render-item-opts]}]
  (reify
    om/IRenderState
    (render-state [_ {:keys [highlight-ch select-ch value loading? focused? mouse-ch suggestions highlighted-index]}]
                  (let [display? (and focused? value (not= value ""))
                        display (if display? "block" "none")
                        attrs #js {:className (str "dropdown-menu " class-name)
                                   :style #js {:display display}
                                   :onMouseEnter (fn [e]
                                                   (put! mouse-ch true)
                                                   (.preventDefault e))
                                   :onMouseLeave (fn [e]
                                                   (put! mouse-ch false)
                                                   (.preventDefault e))}]
                    (cond
                      (and loading-view loading?)
                      (dom/ul attrs
                              (om/build loading-view app {:opts loading-view-opts}))

                      (not (empty? suggestions))
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
                               suggestions))

                      :otherwise (dom/ul #js {:className class-name :style #js {:display "none"}}))))))

(defn render-item [app owner {:keys [class-name text-fn]}]
  (reify
    om/IDidMount
    (did-mount [this]
               (let [{:keys [index highlight-ch select-ch]} (om/get-state owner)
                     node (om/get-node owner)]
                 (gevents/listen node (.-MOUSEOVER gevents/EventType) #(put! highlight-ch index))
                 (gevents/listen node (.-CLICK gevents/EventType) #(put! select-ch index))))

    om/IRenderState
    (render-state [_ {:keys [item index highlighted-index]}]
                  (let [highlighted? (= index highlighted-index)]
                    (dom/li #js {:className (if highlighted? (str "active " class-name) class-name)}
                            (dom/a #js {:href "#" :onClick (fn [e] (.preventDefault e))}
                                   (text-fn item index)))))))
