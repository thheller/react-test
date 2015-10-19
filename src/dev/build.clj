(ns build
  (:require [shadow.cljs.build :as cljs]
            [shadow.devtools.server :as devtools]))


(defn dev [& args]
  (-> (cljs/init-state)
      (cljs/find-resources-in-classpath)
      (cljs/find-resources "src/cljs")
      (cljs/find-resources "module")
      (cljs/configure-module :test ['react-test.app] #{}
        {:prepend "process = {env: {NODE_ENV:'not-production'}};"})
      (devtools/start-loop {})
      ))
