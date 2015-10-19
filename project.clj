(defproject react-test "0.1.0-SNAPSHOT"
  :description "FIXME: write description"
  :url "http://example.com/FIXME"
  :license {:name "Eclipse Public License"
            :url "http://www.eclipse.org/legal/epl-v10.html"}
  :dependencies [[org.clojure/clojure "1.7.0"]]

  :source-paths ["src/clj"
                 "src/cljs"]

  :profiles {:dev {:source-paths ["src/dev"]
                   :dependencies [[thheller/shadow-devtools "0.1.22"]]}})
