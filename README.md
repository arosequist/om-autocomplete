# om-autocomplete

An autocomplete component for [Om](http://github.com/swannodette/om).

## Examples

There are currently two examples for om-autocomplete:

* [Bootstrap](http://arosequist.github.io/om-autocomplete/bootstrap/index.html) ([source](https://github.com/arosequist/om-autocomplete/blob/master/examples/bootstrap/src/arosequist/om_autocomplete/examples/bootstrap.cljs)) demonstrates basic usage of the built-in Twitter Bootstrap components. The suggestions recommended are just variants of the input text.

* [Movies](http://arosequist.github.io/om-autocomplete/movies/index.html) ([source](https://github.com/arosequist/om-autocomplete/blob/master/examples/movies/src/arosequist/om_autocomplete/examples/movies.cljs)) uses a remote webservice to fetch suggestions.

## Details

The `arosequist.om-autocomplete` namespace contains a single function, `autocomplete`. This is an Om component that handles the core autocomplete logic, but does not directly render any DOM elements. The options for `autocomplete` are (as keywords):

* **result-ch**: a channel that will receive an item once it's been selected.
* **suggestions-fn**: a function that calculates the suggestions for a given input. It takes three arguments: the input value, a channel to place the suggestions (as a single seq), and a channel that, when closed, indicates that the input changed and you should cancel fetching suggestions (when applicable).
* **container-view**: an Om component that will hold the `input-component` and `results-component` (described below). Typically, this will just render a simple div.
* **container-opts**: any options that should be passed to the `container-view`.
* **input-view**: an Om component that will be responsible for taking user input. The state it receives will contain:
 * **focus-ch**: a channel that you should put `true` on whenever the input receives focus, and `false` when the input loses focus.
 * **value-ch**: a channel that you should put the user-supplied value onto.
 * **highlight-ch**: a channel that you should put the index of the highlighted item onto. In a traditional autocompleter, this will be used when the user presses the up/down arrow keys.
 * **select-ch**: a channel that you should put the index of the selected item onto. In a traditional autocompleter, this will be used when the user presses the Enter key.
 * **value**: the current user-entered value.
 * **highlighted-index**: the index of the suggestion that's currently highlighted.
* **input-view-opts**: any options that should be passed to the `input-view`.
* **results-view**: an Om component that will be responsible for displaying autocompleted results. The state it receives will contain:
 * **highlight-ch**: a channel that you should put the index of the highlighted item onto. In a traditional autocompleter, this will be used when the user hovers over a suggestion.
 * **select-ch**: a channel that you should put the index of the selected item onto. In a traditional autocompleter, this will be used when the user clicks on a suggestion.
 * **value**: the current user-entered value.
 * **loading?**: a boolean that indicates if the suggestions are currently being loaded.
 * **focused?**: a boolean that indicates if the input is currently focused.
 * **suggestions**: the suggestions, as provided by the `suggestions-fn`.
 * **highlighted-index**: the index of the suggestion that's currently highlighted.
* **results-view-opts**: any options that should be passed to the `results-view`.
