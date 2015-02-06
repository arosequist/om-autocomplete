# om-autocomplete

An autocomplete component for [Om](http://github.com/swannodette/om)ob.

## Examples

* [Bootstrap](http://fterrier.github.io/om-autocomplete/bootstrap/index.html) ([source](examples/bootstrap/src/arosequist/om_autocomplete/examples/bootstrap.cljs)) demonstrates basic usage of the built-in Twitter Bootstrap components. The suggestions recommended are just variants of the input text.

* [Movies](http://fterrier.github.io/om-autocomplete/movies/index.html) ([source](examples/movies/src/arosequist/om_autocomplete/examples/movies.cljs)) uses a remote webservice to fetch suggestions.

## Component documentation

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
        {:suggestions-fn    (fn [value suggestions-ch cancel-ch] ...)
            ; A function that puts the suggestions on suggestions-ch. If asyncronous,
            the suggestion call should also listen to cancel-ch. The autocomplete
            component closes the cancel-ch whenever the call should be canceled.

         :result-ch         result-ch}})
            ; A channel where the autocomplete component puts the result
            once it is selected.
```

Here is a documentation of all possible options:

```clojure
(ns arosequist.example
  (:require [arosequist.om-autocomplete :as ac]))


(om/build ac/autocomplete {}
    {:opts
        {:suggestions-fn    (fn [value suggestions-ch cancel-ch] ...)
         :result-ch         result-ch

         :result-text-fn    (fn [item _] (:name item))
            ; (optional) A function that, given a suggested item,
            returns the text that will be displayed.

         :input-opts
            {:input-focus-ch input-focus-ch
                ; (optional) Putting "true" into this channel will cause
                the autocomplete component to gain focus.
             :placeholder    input-placeholder
                ; (optional) A placeholder text for the input field.
             :id             input-id
                ; (optional) An id for the input field (in case you want to label it.)
             :class-name     input-class-name
                ; (optional) A class for the input element.
             :on-key-down    (fn [e value handler] ... (handler e))))}
                ; (optional) A handler that will be called whenever a key is pressed.
                You can chose whether you want to propagate it further to the default
                autocomplete handler or not.

        :loading-opts
            {:id         loading-id
                ; (optional) An id for the loading element
             :class-name loading-class-name}
                ; (optional) A class for the loading element

        :container-opts
            {:id         container-id
                ; (optional) An id for the container element
             :class-name container-class-name}
                ; (optional) An class for the container element

        :results-opts
            {:id         results-id
                ; (optional) An id for the results element
             :class-name results-class-name}
                ; (optional) An class for the results element

        :result-item-opts
            {:id         result-item-id
                ; (optional) An id for the result item element
             :class-name result-item-class-name}}})
                ; (optional) An class for the result item element
```

### Bootstrap wrapper

om-autocomplete contains some convenience functions for pages that are using Twitter Boostrap. They are located in the `arosequist.om-autocomplete.bootstrap` namespace.

If you want to add Boostrap specific classes to your component, wrap your options with `add-bootstrap-m` like this :

```clojure
(ns arosequist.example
  (:require [arosequist.om-autocomplete :as ac]
            [arosequist.om-autocomplete.bootstrap :as acb]))

(om/build ac/autocomplete
    {}
    (acb/add-bootstrap-m
      {:opts
       {:result-ch      result-ch
        :result-text-fn (fn [item _] (str item))
        :suggestions-fn suggestions}}))
```

## Deploy documentation

```
git subtree push --prefix examples/ origin gh-pages
lein cljsbuild once movies
lein cljsbuild once bootstrap
git add bootstrap/app.js movies/app.js
git commit -m 'added app.js'
git push origin gh-pages
```
