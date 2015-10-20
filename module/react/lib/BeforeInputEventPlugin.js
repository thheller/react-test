goog.provide("module$react$lib$BeforeInputEventPlugin");
goog.require("module$react$lib$keyOf");
goog.require("module$react$lib$SyntheticInputEvent");
goog.require("module$react$lib$SyntheticCompositionEvent");
goog.require("module$react$lib$FallbackCompositionState");
goog.require("module$react$lib$ExecutionEnvironment");
goog.require("module$react$lib$EventPropagators");
goog.require("module$react$lib$EventConstants");
var EventConstants$$module$react$lib$BeforeInputEventPlugin = module$react$lib$EventConstants;
var EventPropagators$$module$react$lib$BeforeInputEventPlugin = module$react$lib$EventPropagators;
var ExecutionEnvironment$$module$react$lib$BeforeInputEventPlugin = module$react$lib$ExecutionEnvironment;
var FallbackCompositionState$$module$react$lib$BeforeInputEventPlugin = module$react$lib$FallbackCompositionState;
var SyntheticCompositionEvent$$module$react$lib$BeforeInputEventPlugin = module$react$lib$SyntheticCompositionEvent;
var SyntheticInputEvent$$module$react$lib$BeforeInputEventPlugin = module$react$lib$SyntheticInputEvent;
var keyOf$$module$react$lib$BeforeInputEventPlugin = module$react$lib$keyOf;
var END_KEYCODES$$module$react$lib$BeforeInputEventPlugin = [9, 13, 27, 32];
var START_KEYCODE$$module$react$lib$BeforeInputEventPlugin = 229;
var canUseCompositionEvent$$module$react$lib$BeforeInputEventPlugin = ExecutionEnvironment$$module$react$lib$BeforeInputEventPlugin.canUseDOM && "CompositionEvent" in window;
var documentMode$$module$react$lib$BeforeInputEventPlugin = null;
if (ExecutionEnvironment$$module$react$lib$BeforeInputEventPlugin.canUseDOM && "documentMode" in document) {
  documentMode$$module$react$lib$BeforeInputEventPlugin = document.documentMode;
}
var canUseTextInputEvent$$module$react$lib$BeforeInputEventPlugin = ExecutionEnvironment$$module$react$lib$BeforeInputEventPlugin.canUseDOM && "TextEvent" in window && !documentMode$$module$react$lib$BeforeInputEventPlugin && !isPresto$$module$react$lib$BeforeInputEventPlugin();
var useFallbackCompositionData$$module$react$lib$BeforeInputEventPlugin = ExecutionEnvironment$$module$react$lib$BeforeInputEventPlugin.canUseDOM && (!canUseCompositionEvent$$module$react$lib$BeforeInputEventPlugin || documentMode$$module$react$lib$BeforeInputEventPlugin && documentMode$$module$react$lib$BeforeInputEventPlugin > 8 && documentMode$$module$react$lib$BeforeInputEventPlugin <= 11);
function isPresto$$module$react$lib$BeforeInputEventPlugin() {
  var opera = window.opera;
  return typeof opera === "object" && typeof opera.version === "function" && parseInt(opera.version(), 10) <= 12;
}
var SPACEBAR_CODE$$module$react$lib$BeforeInputEventPlugin = 32;
var SPACEBAR_CHAR$$module$react$lib$BeforeInputEventPlugin = String.fromCharCode(SPACEBAR_CODE$$module$react$lib$BeforeInputEventPlugin);
var topLevelTypes$$module$react$lib$BeforeInputEventPlugin = EventConstants$$module$react$lib$BeforeInputEventPlugin.topLevelTypes;
var eventTypes$$module$react$lib$BeforeInputEventPlugin = {beforeInput:{phasedRegistrationNames:{bubbled:keyOf$$module$react$lib$BeforeInputEventPlugin({onBeforeInput:null}), captured:keyOf$$module$react$lib$BeforeInputEventPlugin({onBeforeInputCapture:null})}, dependencies:[topLevelTypes$$module$react$lib$BeforeInputEventPlugin.topCompositionEnd, topLevelTypes$$module$react$lib$BeforeInputEventPlugin.topKeyPress, topLevelTypes$$module$react$lib$BeforeInputEventPlugin.topTextInput, topLevelTypes$$module$react$lib$BeforeInputEventPlugin.topPaste]}, 
compositionEnd:{phasedRegistrationNames:{bubbled:keyOf$$module$react$lib$BeforeInputEventPlugin({onCompositionEnd:null}), captured:keyOf$$module$react$lib$BeforeInputEventPlugin({onCompositionEndCapture:null})}, dependencies:[topLevelTypes$$module$react$lib$BeforeInputEventPlugin.topBlur, topLevelTypes$$module$react$lib$BeforeInputEventPlugin.topCompositionEnd, topLevelTypes$$module$react$lib$BeforeInputEventPlugin.topKeyDown, topLevelTypes$$module$react$lib$BeforeInputEventPlugin.topKeyPress, topLevelTypes$$module$react$lib$BeforeInputEventPlugin.topKeyUp, 
topLevelTypes$$module$react$lib$BeforeInputEventPlugin.topMouseDown]}, compositionStart:{phasedRegistrationNames:{bubbled:keyOf$$module$react$lib$BeforeInputEventPlugin({onCompositionStart:null}), captured:keyOf$$module$react$lib$BeforeInputEventPlugin({onCompositionStartCapture:null})}, dependencies:[topLevelTypes$$module$react$lib$BeforeInputEventPlugin.topBlur, topLevelTypes$$module$react$lib$BeforeInputEventPlugin.topCompositionStart, topLevelTypes$$module$react$lib$BeforeInputEventPlugin.topKeyDown, 
topLevelTypes$$module$react$lib$BeforeInputEventPlugin.topKeyPress, topLevelTypes$$module$react$lib$BeforeInputEventPlugin.topKeyUp, topLevelTypes$$module$react$lib$BeforeInputEventPlugin.topMouseDown]}, compositionUpdate:{phasedRegistrationNames:{bubbled:keyOf$$module$react$lib$BeforeInputEventPlugin({onCompositionUpdate:null}), captured:keyOf$$module$react$lib$BeforeInputEventPlugin({onCompositionUpdateCapture:null})}, dependencies:[topLevelTypes$$module$react$lib$BeforeInputEventPlugin.topBlur, 
topLevelTypes$$module$react$lib$BeforeInputEventPlugin.topCompositionUpdate, topLevelTypes$$module$react$lib$BeforeInputEventPlugin.topKeyDown, topLevelTypes$$module$react$lib$BeforeInputEventPlugin.topKeyPress, topLevelTypes$$module$react$lib$BeforeInputEventPlugin.topKeyUp, topLevelTypes$$module$react$lib$BeforeInputEventPlugin.topMouseDown]}};
var hasSpaceKeypress$$module$react$lib$BeforeInputEventPlugin = false;
function isKeypressCommand$$module$react$lib$BeforeInputEventPlugin(nativeEvent) {
  return (nativeEvent.ctrlKey || nativeEvent.altKey || nativeEvent.metaKey) && !(nativeEvent.ctrlKey && nativeEvent.altKey);
}
function getCompositionEventType$$module$react$lib$BeforeInputEventPlugin(topLevelType) {
  switch(topLevelType) {
    case topLevelTypes$$module$react$lib$BeforeInputEventPlugin.topCompositionStart:
      return eventTypes$$module$react$lib$BeforeInputEventPlugin.compositionStart;
    case topLevelTypes$$module$react$lib$BeforeInputEventPlugin.topCompositionEnd:
      return eventTypes$$module$react$lib$BeforeInputEventPlugin.compositionEnd;
    case topLevelTypes$$module$react$lib$BeforeInputEventPlugin.topCompositionUpdate:
      return eventTypes$$module$react$lib$BeforeInputEventPlugin.compositionUpdate;
  }
}
function isFallbackCompositionStart$$module$react$lib$BeforeInputEventPlugin(topLevelType, nativeEvent) {
  return topLevelType === topLevelTypes$$module$react$lib$BeforeInputEventPlugin.topKeyDown && nativeEvent.keyCode === START_KEYCODE$$module$react$lib$BeforeInputEventPlugin;
}
function isFallbackCompositionEnd$$module$react$lib$BeforeInputEventPlugin(topLevelType, nativeEvent) {
  switch(topLevelType) {
    case topLevelTypes$$module$react$lib$BeforeInputEventPlugin.topKeyUp:
      return END_KEYCODES$$module$react$lib$BeforeInputEventPlugin.indexOf(nativeEvent.keyCode) !== -1;
    case topLevelTypes$$module$react$lib$BeforeInputEventPlugin.topKeyDown:
      return nativeEvent.keyCode !== START_KEYCODE$$module$react$lib$BeforeInputEventPlugin;
    case topLevelTypes$$module$react$lib$BeforeInputEventPlugin.topKeyPress:
    ;
    case topLevelTypes$$module$react$lib$BeforeInputEventPlugin.topMouseDown:
    ;
    case topLevelTypes$$module$react$lib$BeforeInputEventPlugin.topBlur:
      return true;
    default:
      return false;
  }
}
function getDataFromCustomEvent$$module$react$lib$BeforeInputEventPlugin(nativeEvent) {
  var detail = nativeEvent.detail;
  if (typeof detail === "object" && "data" in detail) {
    return detail.data;
  }
  return null;
}
var currentComposition$$module$react$lib$BeforeInputEventPlugin = null;
function extractCompositionEvent$$module$react$lib$BeforeInputEventPlugin(topLevelType, topLevelTarget, topLevelTargetID, nativeEvent) {
  var eventType;
  var fallbackData;
  if (canUseCompositionEvent$$module$react$lib$BeforeInputEventPlugin) {
    eventType = getCompositionEventType$$module$react$lib$BeforeInputEventPlugin(topLevelType);
  } else {
    if (!currentComposition$$module$react$lib$BeforeInputEventPlugin) {
      if (isFallbackCompositionStart$$module$react$lib$BeforeInputEventPlugin(topLevelType, nativeEvent)) {
        eventType = eventTypes$$module$react$lib$BeforeInputEventPlugin.compositionStart;
      }
    } else {
      if (isFallbackCompositionEnd$$module$react$lib$BeforeInputEventPlugin(topLevelType, nativeEvent)) {
        eventType = eventTypes$$module$react$lib$BeforeInputEventPlugin.compositionEnd;
      }
    }
  }
  if (!eventType) {
    return null;
  }
  if (useFallbackCompositionData$$module$react$lib$BeforeInputEventPlugin) {
    if (!currentComposition$$module$react$lib$BeforeInputEventPlugin && eventType === eventTypes$$module$react$lib$BeforeInputEventPlugin.compositionStart) {
      currentComposition$$module$react$lib$BeforeInputEventPlugin = FallbackCompositionState$$module$react$lib$BeforeInputEventPlugin.getPooled(topLevelTarget);
    } else {
      if (eventType === eventTypes$$module$react$lib$BeforeInputEventPlugin.compositionEnd) {
        if (currentComposition$$module$react$lib$BeforeInputEventPlugin) {
          fallbackData = currentComposition$$module$react$lib$BeforeInputEventPlugin.getData();
        }
      }
    }
  }
  var event = SyntheticCompositionEvent$$module$react$lib$BeforeInputEventPlugin.getPooled(eventType, topLevelTargetID, nativeEvent);
  if (fallbackData) {
    event.data = fallbackData;
  } else {
    var customData = getDataFromCustomEvent$$module$react$lib$BeforeInputEventPlugin(nativeEvent);
    if (customData !== null) {
      event.data = customData;
    }
  }
  EventPropagators$$module$react$lib$BeforeInputEventPlugin.accumulateTwoPhaseDispatches(event);
  return event;
}
function getNativeBeforeInputChars$$module$react$lib$BeforeInputEventPlugin(topLevelType, nativeEvent) {
  switch(topLevelType) {
    case topLevelTypes$$module$react$lib$BeforeInputEventPlugin.topCompositionEnd:
      return getDataFromCustomEvent$$module$react$lib$BeforeInputEventPlugin(nativeEvent);
    case topLevelTypes$$module$react$lib$BeforeInputEventPlugin.topKeyPress:
      var which = nativeEvent.which;
      if (which !== SPACEBAR_CODE$$module$react$lib$BeforeInputEventPlugin) {
        return null;
      }
      hasSpaceKeypress$$module$react$lib$BeforeInputEventPlugin = true;
      return SPACEBAR_CHAR$$module$react$lib$BeforeInputEventPlugin;
    case topLevelTypes$$module$react$lib$BeforeInputEventPlugin.topTextInput:
      var chars = nativeEvent.data;
      if (chars === SPACEBAR_CHAR$$module$react$lib$BeforeInputEventPlugin && hasSpaceKeypress$$module$react$lib$BeforeInputEventPlugin) {
        return null;
      }
      return chars;
    default:
      return null;
  }
}
function getFallbackBeforeInputChars$$module$react$lib$BeforeInputEventPlugin(topLevelType, nativeEvent) {
  if (currentComposition$$module$react$lib$BeforeInputEventPlugin) {
    if (topLevelType === topLevelTypes$$module$react$lib$BeforeInputEventPlugin.topCompositionEnd || isFallbackCompositionEnd$$module$react$lib$BeforeInputEventPlugin(topLevelType, nativeEvent)) {
      var chars = currentComposition$$module$react$lib$BeforeInputEventPlugin.getData();
      FallbackCompositionState$$module$react$lib$BeforeInputEventPlugin.release(currentComposition$$module$react$lib$BeforeInputEventPlugin);
      currentComposition$$module$react$lib$BeforeInputEventPlugin = null;
      return chars;
    }
    return null;
  }
  switch(topLevelType) {
    case topLevelTypes$$module$react$lib$BeforeInputEventPlugin.topPaste:
      return null;
    case topLevelTypes$$module$react$lib$BeforeInputEventPlugin.topKeyPress:
      if (nativeEvent.which && !isKeypressCommand$$module$react$lib$BeforeInputEventPlugin(nativeEvent)) {
        return String.fromCharCode(nativeEvent.which);
      }
      return null;
    case topLevelTypes$$module$react$lib$BeforeInputEventPlugin.topCompositionEnd:
      return useFallbackCompositionData$$module$react$lib$BeforeInputEventPlugin ? null : nativeEvent.data;
    default:
      return null;
  }
}
function extractBeforeInputEvent$$module$react$lib$BeforeInputEventPlugin(topLevelType, topLevelTarget, topLevelTargetID, nativeEvent) {
  var chars;
  if (canUseTextInputEvent$$module$react$lib$BeforeInputEventPlugin) {
    chars = getNativeBeforeInputChars$$module$react$lib$BeforeInputEventPlugin(topLevelType, nativeEvent);
  } else {
    chars = getFallbackBeforeInputChars$$module$react$lib$BeforeInputEventPlugin(topLevelType, nativeEvent);
  }
  if (!chars) {
    return null;
  }
  var event = SyntheticInputEvent$$module$react$lib$BeforeInputEventPlugin.getPooled(eventTypes$$module$react$lib$BeforeInputEventPlugin.beforeInput, topLevelTargetID, nativeEvent);
  event.data = chars;
  EventPropagators$$module$react$lib$BeforeInputEventPlugin.accumulateTwoPhaseDispatches(event);
  return event;
}
var BeforeInputEventPlugin$$module$react$lib$BeforeInputEventPlugin = {eventTypes:eventTypes$$module$react$lib$BeforeInputEventPlugin, extractEvents:function(topLevelType, topLevelTarget, topLevelTargetID, nativeEvent) {
  return [extractCompositionEvent$$module$react$lib$BeforeInputEventPlugin(topLevelType, topLevelTarget, topLevelTargetID, nativeEvent), extractBeforeInputEvent$$module$react$lib$BeforeInputEventPlugin(topLevelType, topLevelTarget, topLevelTargetID, nativeEvent)];
}};
module$react$lib$BeforeInputEventPlugin = BeforeInputEventPlugin$$module$react$lib$BeforeInputEventPlugin;
