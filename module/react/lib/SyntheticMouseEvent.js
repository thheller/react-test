goog.provide("module$react$lib$SyntheticMouseEvent");
goog.require("module$react$lib$getEventModifierState");
goog.require("module$react$lib$ViewportMetrics");
goog.require("module$react$lib$SyntheticUIEvent");
var SyntheticUIEvent$$module$react$lib$SyntheticMouseEvent = module$react$lib$SyntheticUIEvent;
var ViewportMetrics$$module$react$lib$SyntheticMouseEvent = module$react$lib$ViewportMetrics;
var getEventModifierState$$module$react$lib$SyntheticMouseEvent = module$react$lib$getEventModifierState;
var MouseEventInterface$$module$react$lib$SyntheticMouseEvent = {screenX:null, screenY:null, clientX:null, clientY:null, ctrlKey:null, shiftKey:null, altKey:null, metaKey:null, getModifierState:getEventModifierState$$module$react$lib$SyntheticMouseEvent, button:function(event) {
  var button = event.button;
  if ("which" in event) {
    return button;
  }
  return button === 2 ? 2 : button === 4 ? 1 : 0;
}, buttons:null, relatedTarget:function(event) {
  return event.relatedTarget || (event.fromElement === event.srcElement ? event.toElement : event.fromElement);
}, pageX:function(event) {
  return "pageX" in event ? event.pageX : event.clientX + ViewportMetrics$$module$react$lib$SyntheticMouseEvent.currentScrollLeft;
}, pageY:function(event) {
  return "pageY" in event ? event.pageY : event.clientY + ViewportMetrics$$module$react$lib$SyntheticMouseEvent.currentScrollTop;
}};
function SyntheticMouseEvent$$module$react$lib$SyntheticMouseEvent(dispatchConfig, dispatchMarker, nativeEvent) {
  SyntheticUIEvent$$module$react$lib$SyntheticMouseEvent.call(this, dispatchConfig, dispatchMarker, nativeEvent);
}
SyntheticUIEvent$$module$react$lib$SyntheticMouseEvent.augmentClass(SyntheticMouseEvent$$module$react$lib$SyntheticMouseEvent, MouseEventInterface$$module$react$lib$SyntheticMouseEvent);
module$react$lib$SyntheticMouseEvent = SyntheticMouseEvent$$module$react$lib$SyntheticMouseEvent;
