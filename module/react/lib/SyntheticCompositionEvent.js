goog.provide("module$react$lib$SyntheticCompositionEvent");
goog.require("module$react$lib$SyntheticEvent");
var SyntheticEvent$$module$react$lib$SyntheticCompositionEvent = module$react$lib$SyntheticEvent;
var CompositionEventInterface$$module$react$lib$SyntheticCompositionEvent = {data:null};
function SyntheticCompositionEvent$$module$react$lib$SyntheticCompositionEvent(dispatchConfig, dispatchMarker, nativeEvent) {
  SyntheticEvent$$module$react$lib$SyntheticCompositionEvent.call(this, dispatchConfig, dispatchMarker, nativeEvent);
}
SyntheticEvent$$module$react$lib$SyntheticCompositionEvent.augmentClass(SyntheticCompositionEvent$$module$react$lib$SyntheticCompositionEvent, CompositionEventInterface$$module$react$lib$SyntheticCompositionEvent);
module$react$lib$SyntheticCompositionEvent = SyntheticCompositionEvent$$module$react$lib$SyntheticCompositionEvent;
