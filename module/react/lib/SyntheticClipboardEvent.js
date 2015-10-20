goog.provide("module$react$lib$SyntheticClipboardEvent");
goog.require("module$react$lib$SyntheticEvent");
var SyntheticEvent$$module$react$lib$SyntheticClipboardEvent = module$react$lib$SyntheticEvent;
var ClipboardEventInterface$$module$react$lib$SyntheticClipboardEvent = {clipboardData:function(event) {
  return "clipboardData" in event ? event.clipboardData : window.clipboardData;
}};
function SyntheticClipboardEvent$$module$react$lib$SyntheticClipboardEvent(dispatchConfig, dispatchMarker, nativeEvent) {
  SyntheticEvent$$module$react$lib$SyntheticClipboardEvent.call(this, dispatchConfig, dispatchMarker, nativeEvent);
}
SyntheticEvent$$module$react$lib$SyntheticClipboardEvent.augmentClass(SyntheticClipboardEvent$$module$react$lib$SyntheticClipboardEvent, ClipboardEventInterface$$module$react$lib$SyntheticClipboardEvent);
module$react$lib$SyntheticClipboardEvent = SyntheticClipboardEvent$$module$react$lib$SyntheticClipboardEvent;
