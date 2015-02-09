(ns arosequist.om-autocomplete.examples.bootstrap
  (:require-macros [cljs.core.async.macros :refer [go]])
  (:require [arosequist.om-autocomplete :as ac]
            [arosequist.om-autocomplete.bootstrap :as acb]
            [cljs.core.async :refer [<! chan put! timeout]]
            [om.core :as om :include-macros true]
            [om.dom :as dom :include-macros true]))

(defn suggestions [value suggestions-ch _]
  (go
    (<! (timeout 500))
    (put! suggestions-ch (mapv #(str value " " %) (range 1 10)))))

(defn autocomplete [app owner]
  (reify
    om/IInitState
    (init-state [_]
                {:result-ch (chan)})

    om/IWillMount
    (will-mount [_]
                (let [result-ch (om/get-state owner :result-ch)]
                  (go (loop []
                        (let [[idx result] (<! result-ch)]
                          (js/alert (str "Result is: " result))
                          (recur))))))

    om/IRenderState
    (render-state [_ {:keys [result-ch]}]
                  (om/build ac/autocomplete nil
                            (acb/add-bootstrap-m
                              {:opts
                               {:input-opts {:placeholder "Enter anything"}
                                :result-ch  result-ch
                                :result-text-fn (fn [item _] (str item))
                                :suggestions-fn suggestions}})))))

(om/root autocomplete (atom {}) {:target (js/document.getElementById "autocomplete")})
