(defproject om-autocomplete "0.1.0-SNAPSHOT"
  :description "An autocomplete component for Om."
  :url "http://github.com/arosequist/om-autocomplete"
  :license {:name "Eclipse Public License"
            :url "http://www.eclipse.org/legal/epl-v10.html"}

  :source-paths ["src"]

  :dependencies [[org.clojure/clojure "1.6.0"]
                 [org.clojure/clojurescript "0.0-2277" :scope "provided"]
                 [org.clojure/core.async "0.1.301.0-deb34a-alpha" :scope "provided"]
                 [org.omcljs/om "0.8.7" :scope "provided"]]

  :plugins [[lein-cljsbuild "1.0.3"]]

  :cljsbuild {
    :builds [{:id "dev"
              :source-paths ["src"]
              :compiler {
                :output-to "om_autocomplete.js"
                :output-dir "out"
                :optimizations :none
                :source-map true}}

             ; examples
             {:id "bootstrap"
              :source-paths ["src" "examples/bootstrap/src"]
              :compiler {
                :output-to "examples/bootstrap/app.js"
                :output-dir "examples/bootstrap/out"
                :source-map "examples/bootstrap/app.js.map"
                :optimizations :none}}

             {:id "movies"
              :source-paths ["src" "examples/movies/src"]
              :compiler {
                :output-to "examples/movies/app.js"
                :output-dir "examples/movies/out"
                :source-map "examples/movies/app.js.map"
                :optimizations :none}}]})
