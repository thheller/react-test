goog.provide("module$react$lib$getUnboundedScrollPosition");
function getUnboundedScrollPosition$$module$react$lib$getUnboundedScrollPosition(scrollable) {
  if (scrollable === window) {
    return {x:window.pageXOffset || document.documentElement.scrollLeft, y:window.pageYOffset || document.documentElement.scrollTop};
  }
  return {x:scrollable.scrollLeft, y:scrollable.scrollTop};
}
module$react$lib$getUnboundedScrollPosition = getUnboundedScrollPosition$$module$react$lib$getUnboundedScrollPosition;
