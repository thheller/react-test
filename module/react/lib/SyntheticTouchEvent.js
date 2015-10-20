goog.provide("module$react$lib$SyntheticTouchEvent");
goog.require("module$react$lib$getEventModifierState");
goog.require("module$react$lib$SyntheticUIEvent");
var SyntheticUIEvent$$module$react$lib$SyntheticTouchEvent = module$react$lib$SyntheticUIEvent;
var getEventModifierState$$module$react$lib$SyntheticTouchEvent = module$react$lib$getEventModifierState;
var TouchEventInterface$$module$react$lib$SyntheticTouchEvent = {touches:null, targetTouches:null, changedTouches:null, altKey:null, metaKey:null, ctrlKey:null, shiftKey:null, getModifierState:getEventModifierState$$module$react$lib$SyntheticTouchEvent};
function SyntheticTouchEvent$$module$react$lib$SyntheticTouchEvent(dispatchConfig, dispatchMarker, nativeEvent) {
  SyntheticUIEvent$$module$react$lib$SyntheticTouchEvent.call(this, dispatchConfig, dispatchMarker, nativeEvent);
}
SyntheticUIEvent$$module$react$lib$SyntheticTouchEvent.augmentClass(SyntheticTouchEvent$$module$react$lib$SyntheticTouchEvent, TouchEventInterface$$module$react$lib$SyntheticTouchEvent);
module$react$lib$SyntheticTouchEvent = SyntheticTouchEvent$$module$react$lib$SyntheticTouchEvent;
