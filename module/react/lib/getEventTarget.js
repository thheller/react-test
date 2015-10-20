goog.provide("module$react$lib$getEventTarget");
function getEventTarget$$module$react$lib$getEventTarget(nativeEvent) {
  var target = nativeEvent.target || nativeEvent.srcElement || window;
  return target.nodeType === 3 ? target.parentNode : target;
}
module$react$lib$getEventTarget = getEventTarget$$module$react$lib$getEventTarget;
