goog.provide("module$react$lib$getEventModifierState");
var modifierKeyToProp$$module$react$lib$getEventModifierState = {"Alt":"altKey", "Control":"ctrlKey", "Meta":"metaKey", "Shift":"shiftKey"};
function modifierStateGetter$$module$react$lib$getEventModifierState(keyArg) {
  var syntheticEvent = this;
  var nativeEvent = syntheticEvent.nativeEvent;
  if (nativeEvent.getModifierState) {
    return nativeEvent.getModifierState(keyArg);
  }
  var keyProp = modifierKeyToProp$$module$react$lib$getEventModifierState[keyArg];
  return keyProp ? !!nativeEvent[keyProp] : false;
}
function getEventModifierState$$module$react$lib$getEventModifierState(nativeEvent) {
  return modifierStateGetter$$module$react$lib$getEventModifierState;
}
module$react$lib$getEventModifierState = getEventModifierState$$module$react$lib$getEventModifierState;
