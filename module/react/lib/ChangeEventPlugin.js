goog.provide("module$react$lib$ChangeEventPlugin");
goog.require("module$react$lib$keyOf");
goog.require("module$react$lib$isTextInputElement");
goog.require("module$react$lib$isEventSupported");
goog.require("module$react$lib$SyntheticEvent");
goog.require("module$react$lib$ReactUpdates");
goog.require("module$react$lib$ExecutionEnvironment");
goog.require("module$react$lib$EventPropagators");
goog.require("module$react$lib$EventPluginHub");
goog.require("module$react$lib$EventConstants");
var EventConstants$$module$react$lib$ChangeEventPlugin = module$react$lib$EventConstants;
var EventPluginHub$$module$react$lib$ChangeEventPlugin = module$react$lib$EventPluginHub;
var EventPropagators$$module$react$lib$ChangeEventPlugin = module$react$lib$EventPropagators;
var ExecutionEnvironment$$module$react$lib$ChangeEventPlugin = module$react$lib$ExecutionEnvironment;
var ReactUpdates$$module$react$lib$ChangeEventPlugin = module$react$lib$ReactUpdates;
var SyntheticEvent$$module$react$lib$ChangeEventPlugin = module$react$lib$SyntheticEvent;
var isEventSupported$$module$react$lib$ChangeEventPlugin = module$react$lib$isEventSupported;
var isTextInputElement$$module$react$lib$ChangeEventPlugin = module$react$lib$isTextInputElement;
var keyOf$$module$react$lib$ChangeEventPlugin = module$react$lib$keyOf;
var topLevelTypes$$module$react$lib$ChangeEventPlugin = EventConstants$$module$react$lib$ChangeEventPlugin.topLevelTypes;
var eventTypes$$module$react$lib$ChangeEventPlugin = {change:{phasedRegistrationNames:{bubbled:keyOf$$module$react$lib$ChangeEventPlugin({onChange:null}), captured:keyOf$$module$react$lib$ChangeEventPlugin({onChangeCapture:null})}, dependencies:[topLevelTypes$$module$react$lib$ChangeEventPlugin.topBlur, topLevelTypes$$module$react$lib$ChangeEventPlugin.topChange, topLevelTypes$$module$react$lib$ChangeEventPlugin.topClick, topLevelTypes$$module$react$lib$ChangeEventPlugin.topFocus, topLevelTypes$$module$react$lib$ChangeEventPlugin.topInput, 
topLevelTypes$$module$react$lib$ChangeEventPlugin.topKeyDown, topLevelTypes$$module$react$lib$ChangeEventPlugin.topKeyUp, topLevelTypes$$module$react$lib$ChangeEventPlugin.topSelectionChange]}};
var activeElement$$module$react$lib$ChangeEventPlugin = null;
var activeElementID$$module$react$lib$ChangeEventPlugin = null;
var activeElementValue$$module$react$lib$ChangeEventPlugin = null;
var activeElementValueProp$$module$react$lib$ChangeEventPlugin = null;
function shouldUseChangeEvent$$module$react$lib$ChangeEventPlugin(elem) {
  return elem.nodeName === "SELECT" || elem.nodeName === "INPUT" && elem.type === "file";
}
var doesChangeEventBubble$$module$react$lib$ChangeEventPlugin = false;
if (ExecutionEnvironment$$module$react$lib$ChangeEventPlugin.canUseDOM) {
  doesChangeEventBubble$$module$react$lib$ChangeEventPlugin = isEventSupported$$module$react$lib$ChangeEventPlugin("change") && (!("documentMode" in document) || document.documentMode > 8);
}
function manualDispatchChangeEvent$$module$react$lib$ChangeEventPlugin(nativeEvent) {
  var event = SyntheticEvent$$module$react$lib$ChangeEventPlugin.getPooled(eventTypes$$module$react$lib$ChangeEventPlugin.change, activeElementID$$module$react$lib$ChangeEventPlugin, nativeEvent);
  EventPropagators$$module$react$lib$ChangeEventPlugin.accumulateTwoPhaseDispatches(event);
  ReactUpdates$$module$react$lib$ChangeEventPlugin.batchedUpdates(runEventInBatch$$module$react$lib$ChangeEventPlugin, event);
}
function runEventInBatch$$module$react$lib$ChangeEventPlugin(event) {
  EventPluginHub$$module$react$lib$ChangeEventPlugin.enqueueEvents(event);
  EventPluginHub$$module$react$lib$ChangeEventPlugin.processEventQueue();
}
function startWatchingForChangeEventIE8$$module$react$lib$ChangeEventPlugin(target, targetID) {
  activeElement$$module$react$lib$ChangeEventPlugin = target;
  activeElementID$$module$react$lib$ChangeEventPlugin = targetID;
  activeElement$$module$react$lib$ChangeEventPlugin.attachEvent("onchange", manualDispatchChangeEvent$$module$react$lib$ChangeEventPlugin);
}
function stopWatchingForChangeEventIE8$$module$react$lib$ChangeEventPlugin() {
  if (!activeElement$$module$react$lib$ChangeEventPlugin) {
    return;
  }
  activeElement$$module$react$lib$ChangeEventPlugin.detachEvent("onchange", manualDispatchChangeEvent$$module$react$lib$ChangeEventPlugin);
  activeElement$$module$react$lib$ChangeEventPlugin = null;
  activeElementID$$module$react$lib$ChangeEventPlugin = null;
}
function getTargetIDForChangeEvent$$module$react$lib$ChangeEventPlugin(topLevelType, topLevelTarget, topLevelTargetID) {
  if (topLevelType === topLevelTypes$$module$react$lib$ChangeEventPlugin.topChange) {
    return topLevelTargetID;
  }
}
function handleEventsForChangeEventIE8$$module$react$lib$ChangeEventPlugin(topLevelType, topLevelTarget, topLevelTargetID) {
  if (topLevelType === topLevelTypes$$module$react$lib$ChangeEventPlugin.topFocus) {
    stopWatchingForChangeEventIE8$$module$react$lib$ChangeEventPlugin();
    startWatchingForChangeEventIE8$$module$react$lib$ChangeEventPlugin(topLevelTarget, topLevelTargetID);
  } else {
    if (topLevelType === topLevelTypes$$module$react$lib$ChangeEventPlugin.topBlur) {
      stopWatchingForChangeEventIE8$$module$react$lib$ChangeEventPlugin();
    }
  }
}
var isInputEventSupported$$module$react$lib$ChangeEventPlugin = false;
if (ExecutionEnvironment$$module$react$lib$ChangeEventPlugin.canUseDOM) {
  isInputEventSupported$$module$react$lib$ChangeEventPlugin = isEventSupported$$module$react$lib$ChangeEventPlugin("input") && (!("documentMode" in document) || document.documentMode > 9);
}
var newValueProp$$module$react$lib$ChangeEventPlugin = {get:function() {
  return activeElementValueProp$$module$react$lib$ChangeEventPlugin.get.call(this);
}, set:function(val) {
  activeElementValue$$module$react$lib$ChangeEventPlugin = "" + val;
  activeElementValueProp$$module$react$lib$ChangeEventPlugin.set.call(this, val);
}};
function startWatchingForValueChange$$module$react$lib$ChangeEventPlugin(target, targetID) {
  activeElement$$module$react$lib$ChangeEventPlugin = target;
  activeElementID$$module$react$lib$ChangeEventPlugin = targetID;
  activeElementValue$$module$react$lib$ChangeEventPlugin = target.value;
  activeElementValueProp$$module$react$lib$ChangeEventPlugin = Object.getOwnPropertyDescriptor(target.constructor.prototype, "value");
  Object.defineProperty(activeElement$$module$react$lib$ChangeEventPlugin, "value", newValueProp$$module$react$lib$ChangeEventPlugin);
  activeElement$$module$react$lib$ChangeEventPlugin.attachEvent("onpropertychange", handlePropertyChange$$module$react$lib$ChangeEventPlugin);
}
function stopWatchingForValueChange$$module$react$lib$ChangeEventPlugin() {
  if (!activeElement$$module$react$lib$ChangeEventPlugin) {
    return;
  }
  delete activeElement$$module$react$lib$ChangeEventPlugin.value;
  activeElement$$module$react$lib$ChangeEventPlugin.detachEvent("onpropertychange", handlePropertyChange$$module$react$lib$ChangeEventPlugin);
  activeElement$$module$react$lib$ChangeEventPlugin = null;
  activeElementID$$module$react$lib$ChangeEventPlugin = null;
  activeElementValue$$module$react$lib$ChangeEventPlugin = null;
  activeElementValueProp$$module$react$lib$ChangeEventPlugin = null;
}
function handlePropertyChange$$module$react$lib$ChangeEventPlugin(nativeEvent) {
  if (nativeEvent.propertyName !== "value") {
    return;
  }
  var value = nativeEvent.srcElement.value;
  if (value === activeElementValue$$module$react$lib$ChangeEventPlugin) {
    return;
  }
  activeElementValue$$module$react$lib$ChangeEventPlugin = value;
  manualDispatchChangeEvent$$module$react$lib$ChangeEventPlugin(nativeEvent);
}
function getTargetIDForInputEvent$$module$react$lib$ChangeEventPlugin(topLevelType, topLevelTarget, topLevelTargetID) {
  if (topLevelType === topLevelTypes$$module$react$lib$ChangeEventPlugin.topInput) {
    return topLevelTargetID;
  }
}
function handleEventsForInputEventIE$$module$react$lib$ChangeEventPlugin(topLevelType, topLevelTarget, topLevelTargetID) {
  if (topLevelType === topLevelTypes$$module$react$lib$ChangeEventPlugin.topFocus) {
    stopWatchingForValueChange$$module$react$lib$ChangeEventPlugin();
    startWatchingForValueChange$$module$react$lib$ChangeEventPlugin(topLevelTarget, topLevelTargetID);
  } else {
    if (topLevelType === topLevelTypes$$module$react$lib$ChangeEventPlugin.topBlur) {
      stopWatchingForValueChange$$module$react$lib$ChangeEventPlugin();
    }
  }
}
function getTargetIDForInputEventIE$$module$react$lib$ChangeEventPlugin(topLevelType, topLevelTarget, topLevelTargetID) {
  if (topLevelType === topLevelTypes$$module$react$lib$ChangeEventPlugin.topSelectionChange || topLevelType === topLevelTypes$$module$react$lib$ChangeEventPlugin.topKeyUp || topLevelType === topLevelTypes$$module$react$lib$ChangeEventPlugin.topKeyDown) {
    if (activeElement$$module$react$lib$ChangeEventPlugin && activeElement$$module$react$lib$ChangeEventPlugin.value !== activeElementValue$$module$react$lib$ChangeEventPlugin) {
      activeElementValue$$module$react$lib$ChangeEventPlugin = activeElement$$module$react$lib$ChangeEventPlugin.value;
      return activeElementID$$module$react$lib$ChangeEventPlugin;
    }
  }
}
function shouldUseClickEvent$$module$react$lib$ChangeEventPlugin(elem) {
  return elem.nodeName === "INPUT" && (elem.type === "checkbox" || elem.type === "radio");
}
function getTargetIDForClickEvent$$module$react$lib$ChangeEventPlugin(topLevelType, topLevelTarget, topLevelTargetID) {
  if (topLevelType === topLevelTypes$$module$react$lib$ChangeEventPlugin.topClick) {
    return topLevelTargetID;
  }
}
var ChangeEventPlugin$$module$react$lib$ChangeEventPlugin = {eventTypes:eventTypes$$module$react$lib$ChangeEventPlugin, extractEvents:function(topLevelType, topLevelTarget, topLevelTargetID, nativeEvent) {
  var getTargetIDFunc, handleEventFunc;
  if (shouldUseChangeEvent$$module$react$lib$ChangeEventPlugin(topLevelTarget)) {
    if (doesChangeEventBubble$$module$react$lib$ChangeEventPlugin) {
      getTargetIDFunc = getTargetIDForChangeEvent$$module$react$lib$ChangeEventPlugin;
    } else {
      handleEventFunc = handleEventsForChangeEventIE8$$module$react$lib$ChangeEventPlugin;
    }
  } else {
    if (isTextInputElement$$module$react$lib$ChangeEventPlugin(topLevelTarget)) {
      if (isInputEventSupported$$module$react$lib$ChangeEventPlugin) {
        getTargetIDFunc = getTargetIDForInputEvent$$module$react$lib$ChangeEventPlugin;
      } else {
        getTargetIDFunc = getTargetIDForInputEventIE$$module$react$lib$ChangeEventPlugin;
        handleEventFunc = handleEventsForInputEventIE$$module$react$lib$ChangeEventPlugin;
      }
    } else {
      if (shouldUseClickEvent$$module$react$lib$ChangeEventPlugin(topLevelTarget)) {
        getTargetIDFunc = getTargetIDForClickEvent$$module$react$lib$ChangeEventPlugin;
      }
    }
  }
  if (getTargetIDFunc) {
    var targetID = getTargetIDFunc(topLevelType, topLevelTarget, topLevelTargetID);
    if (targetID) {
      var event = SyntheticEvent$$module$react$lib$ChangeEventPlugin.getPooled(eventTypes$$module$react$lib$ChangeEventPlugin.change, targetID, nativeEvent);
      EventPropagators$$module$react$lib$ChangeEventPlugin.accumulateTwoPhaseDispatches(event);
      return event;
    }
  }
  if (handleEventFunc) {
    handleEventFunc(topLevelType, topLevelTarget, topLevelTargetID);
  }
}};
module$react$lib$ChangeEventPlugin = ChangeEventPlugin$$module$react$lib$ChangeEventPlugin;
