(ns build
  (:require [shadow.cljs.build :as cljs]
            [shadow.devtools.server :as devtools]))


(defn project-setup []
  (-> (cljs/init-state)
      (cljs/find-resources-in-classpath)
      (cljs/find-resources "src/cljs")
      (cljs/find-resources "module")
      (cljs/configure-module :test ['react-test.app] #{}
        {:prepend-js "process = {env: {NODE_ENV:'production'}};"})
      (cljs/finalize-config)
      ))

(defn dev [& args]
  (-> (project-setup)
      (devtools/start-loop {})
      ))

(defn production [& args]
  (-> (project-setup)
      (assoc :optimizations :advanced)
      (cljs/compile-modules)
      (cljs/closure-optimize)
      (cljs/flush-modules-to-disk))
  :done)
