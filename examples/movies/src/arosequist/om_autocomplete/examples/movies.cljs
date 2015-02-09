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

(defn suggestions [value suggestions-ch cancel-ch]
  (let [xhr (XhrIo.)]
    (events/listen xhr goog.net.EventType.SUCCESS
                   (fn [e]
                     (put! suggestions-ch (js->clj (.getResponseJson xhr) :keywordize-keys true))))
    (go
      (<! cancel-ch)
      (.abort xhr))
    (.send xhr (str "http://www.omdbapi.com/?s=" value) "GET")))

(defn render-empty-suggestion []
  (dom/div #js {:className "suggestion"}
           (dom/div #js {:className "empty-suggestion-poster"})))

(defn render-suggestion [{:keys [imdbID Title]}]
  (dom/div #js {:className "suggestion"}
           (dom/a #js {:href (str "http://www.imdb.com/title/" imdbID), :target "_blank"}
                  (if Title
                    (dom/img #js {:src (str "http://lorempixel.com/150/225/food/" imdbID), :width "150px", :height "225px"})
                    (dom/div #js {:className "suggestion-poster-missing"})))
           (dom/div #js {:className "suggestion-title"} Title)))

(defn results-view [_ _]
  (reify
    om/IRenderState
    (render-state [_ {:keys [suggestions]}]
                  (apply dom/div nil
                         (if suggestions
                           (map render-suggestion (take 5 (:Search suggestions)))
                           (repeatedly 5 render-empty-suggestion))))))

(defn autocomplete [app owner]
  (reify
    om/IRenderState
    (render-state [_ _]
                  (om/build ac/autocomplete app
                            {:opts
                             {:results        results-view
                              :suggestions-fn suggestions}}))))

(om/root autocomplete (atom {}) {:target (js/document.getElementById "autocomplete")})
