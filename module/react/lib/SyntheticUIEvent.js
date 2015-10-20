goog.provide("module$react$lib$SyntheticUIEvent");
goog.require("module$react$lib$getEventTarget");
goog.require("module$react$lib$SyntheticEvent");
var SyntheticEvent$$module$react$lib$SyntheticUIEvent = module$react$lib$SyntheticEvent;
var getEventTarget$$module$react$lib$SyntheticUIEvent = module$react$lib$getEventTarget;
var UIEventInterface$$module$react$lib$SyntheticUIEvent = {view:function(event) {
  if (event.view) {
    return event.view;
  }
  var target = getEventTarget$$module$react$lib$SyntheticUIEvent(event);
  if (target != null && target.window === target) {
    return target;
  }
  var doc = target.ownerDocument;
  if (doc) {
    return doc.defaultView || doc.parentWindow;
  } else {
    return window;
  }
}, detail:function(event) {
  return event.detail || 0;
}};
function SyntheticUIEvent$$module$react$lib$SyntheticUIEvent(dispatchConfig, dispatchMarker, nativeEvent) {
  SyntheticEvent$$module$react$lib$SyntheticUIEvent.call(this, dispatchConfig, dispatchMarker, nativeEvent);
}
SyntheticEvent$$module$react$lib$SyntheticUIEvent.augmentClass(SyntheticUIEvent$$module$react$lib$SyntheticUIEvent, UIEventInterface$$module$react$lib$SyntheticUIEvent);
module$react$lib$SyntheticUIEvent = SyntheticUIEvent$$module$react$lib$SyntheticUIEvent;
