(ns react-test.app
  (:require [reagent.core :as r]))

(comment
  (def click-count (r/atom 0))

  (defn counting-component []
    [:div
     "The atom " [:code "click-count"] " has value: "
     @click-count ". "
     [:input {:type "button" :value "Click me!"
              :on-click #(swap! click-count inc)}]]))

(defn h1 []
  (js/React.DOM.h1 nil "hello world"))

(let [container (js/document.getElementById "app")]
  ;; (r/render [counting-component] container)
  (js/React.render (h1) container)
  )
