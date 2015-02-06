# om-autocomplete

An autocomplete component for [Om](http://github.com/swannodette/om).

## Examples

* [Bootstrap](http://arosequist.github.io/om-autocomplete/bootstrap/index.html) ([source](https://github.com/arosequist/om-autocomplete/blob/master/examples/bootstrap/src/arosequist/om_autocomplete/examples/bootstrap.cljs)) demonstrates basic usage of the built-in Twitter Bootstrap components. The suggestions recommended are just variants of the input text.

* [Movies](http://arosequist.github.io/om-autocomplete/movies/index.html) ([source](https://github.com/arosequist/om-autocomplete/blob/master/examples/movies/src/arosequist/om_autocomplete/examples/movies.cljs)) uses a remote webservice to fetch suggestions.

## API documentation

Use the component this way. If you use Leiningen, put this in `project.clj`:

```clojure
TODO
```

To use the component with sensible defaults, use these parameters:

```clojure
(ns arosequist.example
  (:require [arosequist.om-autocomplete :as ac]))


(om/build ac/autocomplete {}
    {:opts
        {:suggestions-fn    (fn [value suggestions-ch cancel-ch]) ; A function that puts the suggestions on
                                                                    suggestions-ch. If asyncronous, the suggestion call should also listen to cancel-ch. The autocomplete component closes the cancel-ch whenever the call should be canceled.
         :result-ch         result-ch                             ; A channel where the autocomplete component puts
                                                                    the result once it is selected.
         :result-text-fn    (fn [item _] (:name item))            ; (optional) A function that, given a suggested
                                                                    item, returns the text that will be displayed.
         :input-opts        {:input-focus-ch input-focus-ch       ; (optional) Putting "true" into this channel will
                                                                    cause the autocomplete component to gain focus.
                             :placeholder    input-placeholder
                             :id             input-id
                             :on-key-down    (fn [e value handler]
                                               (let [keyCode (.-keyCode e)]
                                                 (case (.-keyCode e)
                                                   8  (when (str/blank? value) (put! backspace-ch true))
                                                   (handler e))))}}
        :loading-opts       {:id
                             :class-name }
        :container-opts     {:id
                             :class-name }
        :results-opts       {:id
                             :class-name }
        :result-item-opts   {:id
                             :class-name }}}})
```


## Bootstrap

om-autocomplete contains some convenience functions for pages that are using Twitter Boostrap. They are located in the `arosequist.om-autocomplete.bootstrap` namespace. *TODO: More documentation here*

Much of the code in this namespace isn't Bootstrap-specific, and I expect to create other helper namespaces for common use cases.
