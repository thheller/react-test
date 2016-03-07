(ns build
  (:require [shadow.cljs.build :as cljs]
            [shadow.devtools.server :as devtools]
            [clojure.java.io :as io])
  (:import (com.google.javascript.jscomp CompilerOptions CustomPassExecutionTime)
           (info.persistent.react.jscomp ReactCompilerPass ReactWarningsGuard)))


(defn project-setup []
  (-> (cljs/init-state)
      (cljs/find-resources-in-classpath)
      (cljs/find-resources "src/cljs")
      (cljs/set-build-options
        {:pretty-print true
         :pseudo-names true})

      ;; this is ugly
      (cljs/merge-resource
        (let [file (io/file "lib/react.min.js")]
          {:type :js
           :requires #{}
           :require-order []
           :provides #{'cljsjs.react} ;; imposter
           :name "lib/react.js"
           :js-name "lib/react.js"
           :file file
           :last-modified (.lastModified file)
           :input (atom
                    (str "goog.provide('cljsjs.react');\n"
                         (slurp file)))}))
      (cljs/configure-module :test ['react-test.app] #{}
        {})
      (cljs/finalize-config)
      ))

(defn dev [& args]
  (-> (project-setup)
      (devtools/start-loop {})
      ))

(defn production [& args]
  (-> (project-setup)
      (cljs/add-closure-configurator
        (fn [cc ^CompilerOptions co]
          (.addWarningsGuard co (ReactWarningsGuard.))
          (.addCustomPass co CustomPassExecutionTime/BEFORE_CHECKS (ReactCompilerPass. cc) )))
      (assoc :optimizations :advanced)
      (cljs/compile-modules)
      (cljs/closure-optimize)
      (cljs/flush-modules-to-disk))
  :done)
