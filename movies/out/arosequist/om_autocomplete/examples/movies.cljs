(ns arosequist.om-autocomplete.examples.movies
  (:require-macros [cljs.core.async.macros :refer [go]])
  (:require [arosequist.om-autocomplete :as ac]
            [cljs.core.async :refer [<! chan put!]]
            [om.core :as om :include-macros true]
            [om.dom :as dom :include-macros true]
            [goog.events :as events])
  (:import [goog.net XhrIo]
           goog.net.EventType
           [goog.events EventType]))

(defn container-view [_ _]
  (reify
    om/IRenderState
    (render-state [_ {:keys [input-component results-component]}]
      (dom/div nil input-component results-component))))

(defn suggestions [value suggestions-ch cancel-ch]
  (let [xhr (XhrIo.)]
    (events/listen xhr goog.net.EventType.SUCCESS
                   (fn [e]
                     (put! suggestions-ch (js->clj (.getResponseJson xhr) :keywordize-keys true))))
    (go
     (<! cancel-ch)
     (.abort xhr))
    (.send xhr (str "http://movies-api.elasticbeanstalk.com/items/movies?q=" value) "GET")))

(defn input-view [_ _]
  (reify
    om/IRenderState
    (render-state [_ {:keys [value-ch value]}]
      (dom/input
        #js {:type "text"
             :autoComplete "off"
             :spellCheck "false"
             :value value
             :onChange #(put! value-ch (.. % -target -value))}))))

(defn render-empty-suggestion []
  (dom/div #js {:className "suggestion"}
    (dom/div #js {:className "empty-suggestion-poster"})))

(defn render-suggestion [{:keys [image link title]}]
  (dom/div #js {:className "suggestion"}
    (dom/a #js {:href link, :target "_blank"}
      (if image
        (dom/img #js {:src image, :width "150px", :height "225px"})
        (dom/div #js {:className "suggestion-poster-missing"})))
      (dom/div #js {:className "suggestion-title"} title)))

(defn results-view [_ _]
  (reify
    om/IRenderState
    (render-state [_ {:keys [suggestions]}]
      (apply dom/div nil
        (if suggestions
          (map render-suggestion (take 5 suggestions))
          (repeatedly 5 render-empty-suggestion))))))

(defn autocomplete [app owner]
  (reify
    om/IRenderState
    (render-state [_ _]
      (om/build ac/autocomplete app
                {:opts
                 {:container-view container-view
                  :input-view input-view
                  :results-view results-view
                  :suggestions-fn suggestions}}))))

(om/root autocomplete (atom {}) {:target (js/document.getElementById "autocomplete")})
