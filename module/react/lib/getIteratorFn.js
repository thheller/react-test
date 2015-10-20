goog.provide("module$react$lib$getIteratorFn");
var ITERATOR_SYMBOL$$module$react$lib$getIteratorFn = typeof Symbol === "function" && Symbol.iterator;
var FAUX_ITERATOR_SYMBOL$$module$react$lib$getIteratorFn = "@@iterator";
function getIteratorFn$$module$react$lib$getIteratorFn(maybeIterable) {
  var iteratorFn = maybeIterable && (ITERATOR_SYMBOL$$module$react$lib$getIteratorFn && maybeIterable[ITERATOR_SYMBOL$$module$react$lib$getIteratorFn] || maybeIterable[FAUX_ITERATOR_SYMBOL$$module$react$lib$getIteratorFn]);
  if (typeof iteratorFn === "function") {
    return iteratorFn;
  }
}
module$react$lib$getIteratorFn = getIteratorFn$$module$react$lib$getIteratorFn;
