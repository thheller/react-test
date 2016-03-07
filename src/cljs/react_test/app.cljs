(ns react-test.app)

(defn test []
  (js/React.DOM.h1 nil "hello from react"))

(js/React.render (test) (js/document.getElementById "app"))

;; only to make sure closure doesn't DCE all of cljs.core
(prn [{:yo "hi"}])