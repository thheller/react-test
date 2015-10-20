goog.provide("module$react$lib$SyntheticWheelEvent");
goog.require("module$react$lib$SyntheticMouseEvent");
var SyntheticMouseEvent$$module$react$lib$SyntheticWheelEvent = module$react$lib$SyntheticMouseEvent;
var WheelEventInterface$$module$react$lib$SyntheticWheelEvent = {deltaX:function(event) {
  return "deltaX" in event ? event.deltaX : "wheelDeltaX" in event ? -event.wheelDeltaX : 0;
}, deltaY:function(event) {
  return "deltaY" in event ? event.deltaY : "wheelDeltaY" in event ? -event.wheelDeltaY : "wheelDelta" in event ? -event.wheelDelta : 0;
}, deltaZ:null, deltaMode:null};
function SyntheticWheelEvent$$module$react$lib$SyntheticWheelEvent(dispatchConfig, dispatchMarker, nativeEvent) {
  SyntheticMouseEvent$$module$react$lib$SyntheticWheelEvent.call(this, dispatchConfig, dispatchMarker, nativeEvent);
}
SyntheticMouseEvent$$module$react$lib$SyntheticWheelEvent.augmentClass(SyntheticWheelEvent$$module$react$lib$SyntheticWheelEvent, WheelEventInterface$$module$react$lib$SyntheticWheelEvent);
module$react$lib$SyntheticWheelEvent = SyntheticWheelEvent$$module$react$lib$SyntheticWheelEvent;
