(ns react-test.app
  (:require [module$react$react :as react]
            [module$react$lib$ReactDOM :as rd]))

(defn test []
  (rd/h1 nil "hello from react"))

(react/render (test) (js/document.getElementById "app"))

(prn :yo)