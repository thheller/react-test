goog.provide("module$react$lib$SyntheticInputEvent");
goog.require("module$react$lib$SyntheticEvent");
var SyntheticEvent$$module$react$lib$SyntheticInputEvent = module$react$lib$SyntheticEvent;
var InputEventInterface$$module$react$lib$SyntheticInputEvent = {data:null};
function SyntheticInputEvent$$module$react$lib$SyntheticInputEvent(dispatchConfig, dispatchMarker, nativeEvent) {
  SyntheticEvent$$module$react$lib$SyntheticInputEvent.call(this, dispatchConfig, dispatchMarker, nativeEvent);
}
SyntheticEvent$$module$react$lib$SyntheticInputEvent.augmentClass(SyntheticInputEvent$$module$react$lib$SyntheticInputEvent, InputEventInterface$$module$react$lib$SyntheticInputEvent);
module$react$lib$SyntheticInputEvent = SyntheticInputEvent$$module$react$lib$SyntheticInputEvent;
