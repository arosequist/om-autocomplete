(ns arosequist.om-autocomplete.bootstrap)

(defn add-bootstrap-m [opts]
  (let [with-container   (update-in opts [:opts :container-opts :class-name] str " " "dropdown")
        with-results   	 (update-in with-container [:opts :results-opts :class-name] str " " "dropdown-menu")
        with-result-item (update-in with-results [:opts :results-opts :result-item-opts :class-name-highlighted] str " " "active")]
    with-result-item))
