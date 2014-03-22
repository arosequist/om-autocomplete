# om-autocomplete

An autocomplete component for [Om](http://github.com/swannodette/om).

## Examples

There are currently two examples for om-autocomplete:

* [Bootstrap](http://arosequist.github.io/om-autocomplete/bootstrap/index.html) ([source](https://github.com/arosequist/om-autocomplete/blob/master/examples/bootstrap/src/arosequist/om_autocomplete/examples/bootstrap.cljs)) demonstrates basic usage of the built-in Twitter Bootstrap components. The suggestions recommended are just variants of the input text.

* [Movies](http://arosequist.github.io/om-autocomplete/movies/index.html) ([source](https://github.com/arosequist/om-autocomplete/blob/master/examples/movies/src/arosequist/om_autocomplete/examples/movies.cljs)) uses a remote webservice to fetch suggestions.

## Details

The `arosequist.om-autocomplete` namespace contains a single function, `autocomplete`. This is an Om component that handles the core autocomplete logic, but does not directly contain any DOM elements. The options for `autocomplete` are:

* **result-ch** is a channel that will receive an item once it's been selected.
* **suggestions-fn** is a function that takes three arguments: value (what the user has currently entered), suggestions-ch (a channel where you should put the suggestions once you've retrieved them), and cancel-ch (a channel that will be closed if the user changes the value).
* **container-view** is an Om component that will hold the other two autocomplete components. Typically, this will render a simple div. It will receive `input-component` and `results-component` as state (described below).
* **container-opts** contains any options that should be passed to the `container-view`.
* **input-view** is an Om component that will be responsible for taking user input. The state it receives will contain:
 * **:focus-ch** is a channel that you should put `true` on whenever the input receives focus, and `false` when the input loses focus.
 * **:value-ch** is a channel that you should put the user-supplied value onto.
 * **:highlight-ch** is a channel that you should put the index of the highlighted item onto. In a traditional autocompleter, this will be used when the user presses the up/down arrow keys.
 * **:select-ch** is a channel that you should put the index of the selected item onto. In a traditional autocompleter, this will be used when the user presses the Enter key.
 * **:value** is the current user-entered value.
 * **:highlighted-index** is the index of the suggestion that's currently highlighted.
* **input-view-opts** contains any options that should be passed to the `input-view`.
* **results-view** is an Om component that will be responsible for displaying autocompleted results. The state it receives will contain:
 * **:highlight-ch** is a channel that you should put the index of the highlighted item onto. In a traditional autocompleter, this will be used when the user hovers over a suggestion.
 * **:select-ch** is a channel that you should put the index of the selected item onto. In a traditional autocompleter, this will be used when the user clicks on a suggestion.
 * **:value** is the current user-entered value.
 * **:loading?** is a boolean that indicates if the suggestions are currently being loaded.
 * **:focused?** is a boolean that indicates if the input is currently focused.
 * **:suggestions** contains the suggestions.
 * **:highlighted-index** is the index of the suggestion that's currently highlighted.
* **results-view-opts** contains any options that should be passed to the `results-view`.
