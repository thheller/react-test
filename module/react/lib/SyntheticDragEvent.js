goog.provide("module$react$lib$SyntheticDragEvent");
goog.require("module$react$lib$SyntheticMouseEvent");
var SyntheticMouseEvent$$module$react$lib$SyntheticDragEvent = module$react$lib$SyntheticMouseEvent;
var DragEventInterface$$module$react$lib$SyntheticDragEvent = {dataTransfer:null};
function SyntheticDragEvent$$module$react$lib$SyntheticDragEvent(dispatchConfig, dispatchMarker, nativeEvent) {
  SyntheticMouseEvent$$module$react$lib$SyntheticDragEvent.call(this, dispatchConfig, dispatchMarker, nativeEvent);
}
SyntheticMouseEvent$$module$react$lib$SyntheticDragEvent.augmentClass(SyntheticDragEvent$$module$react$lib$SyntheticDragEvent, DragEventInterface$$module$react$lib$SyntheticDragEvent);
module$react$lib$SyntheticDragEvent = SyntheticDragEvent$$module$react$lib$SyntheticDragEvent;
