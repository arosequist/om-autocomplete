(defproject om-autocomplete-examples "0.1.0-SNAPSHOT"
  :description "Examples to the autocomplete component for Om."
  :url "http://github.com/arosequist/om-autocomplete"
  :license {:name "Eclipse Public License"
            :url "http://www.eclipse.org/legal/epl-v10.html"}

  :source-paths ["src"]

  :dependencies [[org.clojure/clojure "1.6.0"]
                 [org.clojure/clojurescript "0.0-2727" :scope "provided"]
                 [org.clojure/core.async "0.1.346.0-17112a-alpha" :scope "provided"]
                 [org.omcljs/om "0.8.8" :scope "provided"]]

  :plugins [[lein-cljsbuild "1.0.3"]
            [lein-git-deps "0.0.2-SNAPSHOT"]]

  :git-dependencies [["https://github.com/fterrier/om-autocomplete.git"]]

  :cljsbuild {
    :builds [; examples
             {:id "bootstrap"
              :source-paths ["bootstrap/src"]
              :compiler {
                :output-to "bootstrap/app.js"
                :source-map "bootstrap/app.js.map"
                :optimizations :advanced}}

             {:id "movies"
              :source-paths ["movies/src"]
              :compiler {
                :output-to "movies/app.js"
                :source-map "movies/app.js.map"
                :optimizations :advanced}}]})
