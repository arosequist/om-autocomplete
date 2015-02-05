(ns arosequist.om-autocomplete.bootstrap)

(defn add-bootstrap-opts [opts]
  (let [with-container   (update-in opts [:container-opts :class-name] str " " "dropdown")
        with-results   	 (update-in with-container [:results-opts :class-name] str " " "dropdown-menu")
        with-result-item (update-in with-results [:results-opts :result-item-opts :class-name-highlighted] str " " "active")]
    with-result-item))
