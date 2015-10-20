goog.provide("module$react$lib$SyntheticFocusEvent");
goog.require("module$react$lib$SyntheticUIEvent");
var SyntheticUIEvent$$module$react$lib$SyntheticFocusEvent = module$react$lib$SyntheticUIEvent;
var FocusEventInterface$$module$react$lib$SyntheticFocusEvent = {relatedTarget:null};
function SyntheticFocusEvent$$module$react$lib$SyntheticFocusEvent(dispatchConfig, dispatchMarker, nativeEvent) {
  SyntheticUIEvent$$module$react$lib$SyntheticFocusEvent.call(this, dispatchConfig, dispatchMarker, nativeEvent);
}
SyntheticUIEvent$$module$react$lib$SyntheticFocusEvent.augmentClass(SyntheticFocusEvent$$module$react$lib$SyntheticFocusEvent, FocusEventInterface$$module$react$lib$SyntheticFocusEvent);
module$react$lib$SyntheticFocusEvent = SyntheticFocusEvent$$module$react$lib$SyntheticFocusEvent;
