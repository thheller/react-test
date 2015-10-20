goog.provide("module$react$lib$SyntheticKeyboardEvent");
goog.require("module$react$lib$getEventModifierState");
goog.require("module$react$lib$getEventKey");
goog.require("module$react$lib$getEventCharCode");
goog.require("module$react$lib$SyntheticUIEvent");
var SyntheticUIEvent$$module$react$lib$SyntheticKeyboardEvent = module$react$lib$SyntheticUIEvent;
var getEventCharCode$$module$react$lib$SyntheticKeyboardEvent = module$react$lib$getEventCharCode;
var getEventKey$$module$react$lib$SyntheticKeyboardEvent = module$react$lib$getEventKey;
var getEventModifierState$$module$react$lib$SyntheticKeyboardEvent = module$react$lib$getEventModifierState;
var KeyboardEventInterface$$module$react$lib$SyntheticKeyboardEvent = {key:getEventKey$$module$react$lib$SyntheticKeyboardEvent, location:null, ctrlKey:null, shiftKey:null, altKey:null, metaKey:null, repeat:null, locale:null, getModifierState:getEventModifierState$$module$react$lib$SyntheticKeyboardEvent, charCode:function(event) {
  if (event.type === "keypress") {
    return getEventCharCode$$module$react$lib$SyntheticKeyboardEvent(event);
  }
  return 0;
}, keyCode:function(event) {
  if (event.type === "keydown" || event.type === "keyup") {
    return event.keyCode;
  }
  return 0;
}, which:function(event) {
  if (event.type === "keypress") {
    return getEventCharCode$$module$react$lib$SyntheticKeyboardEvent(event);
  }
  if (event.type === "keydown" || event.type === "keyup") {
    return event.keyCode;
  }
  return 0;
}};
function SyntheticKeyboardEvent$$module$react$lib$SyntheticKeyboardEvent(dispatchConfig, dispatchMarker, nativeEvent) {
  SyntheticUIEvent$$module$react$lib$SyntheticKeyboardEvent.call(this, dispatchConfig, dispatchMarker, nativeEvent);
}
SyntheticUIEvent$$module$react$lib$SyntheticKeyboardEvent.augmentClass(SyntheticKeyboardEvent$$module$react$lib$SyntheticKeyboardEvent, KeyboardEventInterface$$module$react$lib$SyntheticKeyboardEvent);
module$react$lib$SyntheticKeyboardEvent = SyntheticKeyboardEvent$$module$react$lib$SyntheticKeyboardEvent;
