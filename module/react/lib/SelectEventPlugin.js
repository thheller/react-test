goog.provide("module$react$lib$SelectEventPlugin");
goog.require("module$react$lib$shallowEqual");
goog.require("module$react$lib$keyOf");
goog.require("module$react$lib$isTextInputElement");
goog.require("module$react$lib$getActiveElement");
goog.require("module$react$lib$SyntheticEvent");
goog.require("module$react$lib$ReactInputSelection");
goog.require("module$react$lib$EventPropagators");
goog.require("module$react$lib$EventConstants");
var EventConstants$$module$react$lib$SelectEventPlugin = module$react$lib$EventConstants;
var EventPropagators$$module$react$lib$SelectEventPlugin = module$react$lib$EventPropagators;
var ReactInputSelection$$module$react$lib$SelectEventPlugin = module$react$lib$ReactInputSelection;
var SyntheticEvent$$module$react$lib$SelectEventPlugin = module$react$lib$SyntheticEvent;
var getActiveElement$$module$react$lib$SelectEventPlugin = module$react$lib$getActiveElement;
var isTextInputElement$$module$react$lib$SelectEventPlugin = module$react$lib$isTextInputElement;
var keyOf$$module$react$lib$SelectEventPlugin = module$react$lib$keyOf;
var shallowEqual$$module$react$lib$SelectEventPlugin = module$react$lib$shallowEqual;
var topLevelTypes$$module$react$lib$SelectEventPlugin = EventConstants$$module$react$lib$SelectEventPlugin.topLevelTypes;
var eventTypes$$module$react$lib$SelectEventPlugin = {select:{phasedRegistrationNames:{bubbled:keyOf$$module$react$lib$SelectEventPlugin({onSelect:null}), captured:keyOf$$module$react$lib$SelectEventPlugin({onSelectCapture:null})}, dependencies:[topLevelTypes$$module$react$lib$SelectEventPlugin.topBlur, topLevelTypes$$module$react$lib$SelectEventPlugin.topContextMenu, topLevelTypes$$module$react$lib$SelectEventPlugin.topFocus, topLevelTypes$$module$react$lib$SelectEventPlugin.topKeyDown, topLevelTypes$$module$react$lib$SelectEventPlugin.topMouseDown, 
topLevelTypes$$module$react$lib$SelectEventPlugin.topMouseUp, topLevelTypes$$module$react$lib$SelectEventPlugin.topSelectionChange]}};
var activeElement$$module$react$lib$SelectEventPlugin = null;
var activeElementID$$module$react$lib$SelectEventPlugin = null;
var lastSelection$$module$react$lib$SelectEventPlugin = null;
var mouseDown$$module$react$lib$SelectEventPlugin = false;
function getSelection$$module$react$lib$SelectEventPlugin(node) {
  if ("selectionStart" in node && ReactInputSelection$$module$react$lib$SelectEventPlugin.hasSelectionCapabilities(node)) {
    return {start:node.selectionStart, end:node.selectionEnd};
  } else {
    if (window.getSelection) {
      var selection = window.getSelection();
      return {anchorNode:selection.anchorNode, anchorOffset:selection.anchorOffset, focusNode:selection.focusNode, focusOffset:selection.focusOffset};
    } else {
      if (document.selection) {
        var range = document.selection.createRange();
        return {parentElement:range.parentElement(), text:range.text, top:range.boundingTop, left:range.boundingLeft};
      }
    }
  }
}
function constructSelectEvent$$module$react$lib$SelectEventPlugin(nativeEvent) {
  if (mouseDown$$module$react$lib$SelectEventPlugin || activeElement$$module$react$lib$SelectEventPlugin == null || activeElement$$module$react$lib$SelectEventPlugin !== getActiveElement$$module$react$lib$SelectEventPlugin()) {
    return null;
  }
  var currentSelection = getSelection$$module$react$lib$SelectEventPlugin(activeElement$$module$react$lib$SelectEventPlugin);
  if (!lastSelection$$module$react$lib$SelectEventPlugin || !shallowEqual$$module$react$lib$SelectEventPlugin(lastSelection$$module$react$lib$SelectEventPlugin, currentSelection)) {
    lastSelection$$module$react$lib$SelectEventPlugin = currentSelection;
    var syntheticEvent = SyntheticEvent$$module$react$lib$SelectEventPlugin.getPooled(eventTypes$$module$react$lib$SelectEventPlugin.select, activeElementID$$module$react$lib$SelectEventPlugin, nativeEvent);
    syntheticEvent.type = "select";
    syntheticEvent.target = activeElement$$module$react$lib$SelectEventPlugin;
    EventPropagators$$module$react$lib$SelectEventPlugin.accumulateTwoPhaseDispatches(syntheticEvent);
    return syntheticEvent;
  }
}
var SelectEventPlugin$$module$react$lib$SelectEventPlugin = {eventTypes:eventTypes$$module$react$lib$SelectEventPlugin, extractEvents:function(topLevelType, topLevelTarget, topLevelTargetID, nativeEvent) {
  switch(topLevelType) {
    case topLevelTypes$$module$react$lib$SelectEventPlugin.topFocus:
      if (isTextInputElement$$module$react$lib$SelectEventPlugin(topLevelTarget) || topLevelTarget.contentEditable === "true") {
        activeElement$$module$react$lib$SelectEventPlugin = topLevelTarget;
        activeElementID$$module$react$lib$SelectEventPlugin = topLevelTargetID;
        lastSelection$$module$react$lib$SelectEventPlugin = null;
      }
      break;
    case topLevelTypes$$module$react$lib$SelectEventPlugin.topBlur:
      activeElement$$module$react$lib$SelectEventPlugin = null;
      activeElementID$$module$react$lib$SelectEventPlugin = null;
      lastSelection$$module$react$lib$SelectEventPlugin = null;
      break;
    case topLevelTypes$$module$react$lib$SelectEventPlugin.topMouseDown:
      mouseDown$$module$react$lib$SelectEventPlugin = true;
      break;
    case topLevelTypes$$module$react$lib$SelectEventPlugin.topContextMenu:
    ;
    case topLevelTypes$$module$react$lib$SelectEventPlugin.topMouseUp:
      mouseDown$$module$react$lib$SelectEventPlugin = false;
      return constructSelectEvent$$module$react$lib$SelectEventPlugin(nativeEvent);
    case topLevelTypes$$module$react$lib$SelectEventPlugin.topSelectionChange:
    ;
    case topLevelTypes$$module$react$lib$SelectEventPlugin.topKeyDown:
    ;
    case topLevelTypes$$module$react$lib$SelectEventPlugin.topKeyUp:
      return constructSelectEvent$$module$react$lib$SelectEventPlugin(nativeEvent);
  }
}};
module$react$lib$SelectEventPlugin = SelectEventPlugin$$module$react$lib$SelectEventPlugin;
