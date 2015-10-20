goog.provide("module$react$lib$EventPluginUtils");
goog.require("module$react$lib$invariant");
goog.require("module$react$lib$EventConstants");
var EventConstants$$module$react$lib$EventPluginUtils = module$react$lib$EventConstants;
var invariant$$module$react$lib$EventPluginUtils = module$react$lib$invariant;
var injection$$module$react$lib$EventPluginUtils = {Mount:null, injectMount:function(InjectedMount) {
  injection$$module$react$lib$EventPluginUtils.Mount = InjectedMount;
  if ("production" !== process.env.NODE_ENV) {
    "production" !== process.env.NODE_ENV ? invariant$$module$react$lib$EventPluginUtils(InjectedMount && InjectedMount.getNode, "EventPluginUtils.injection.injectMount(...): Injected Mount module " + "is missing getNode.") : invariant$$module$react$lib$EventPluginUtils(InjectedMount && InjectedMount.getNode);
  }
}};
var topLevelTypes$$module$react$lib$EventPluginUtils = EventConstants$$module$react$lib$EventPluginUtils.topLevelTypes;
function isEndish$$module$react$lib$EventPluginUtils(topLevelType) {
  return topLevelType === topLevelTypes$$module$react$lib$EventPluginUtils.topMouseUp || topLevelType === topLevelTypes$$module$react$lib$EventPluginUtils.topTouchEnd || topLevelType === topLevelTypes$$module$react$lib$EventPluginUtils.topTouchCancel;
}
function isMoveish$$module$react$lib$EventPluginUtils(topLevelType) {
  return topLevelType === topLevelTypes$$module$react$lib$EventPluginUtils.topMouseMove || topLevelType === topLevelTypes$$module$react$lib$EventPluginUtils.topTouchMove;
}
function isStartish$$module$react$lib$EventPluginUtils(topLevelType) {
  return topLevelType === topLevelTypes$$module$react$lib$EventPluginUtils.topMouseDown || topLevelType === topLevelTypes$$module$react$lib$EventPluginUtils.topTouchStart;
}
var validateEventDispatches$$module$react$lib$EventPluginUtils;
if ("production" !== process.env.NODE_ENV) {
  validateEventDispatches$$module$react$lib$EventPluginUtils = function(event) {
    var dispatchListeners = event._dispatchListeners;
    var dispatchIDs = event._dispatchIDs;
    var listenersIsArr = Array.isArray(dispatchListeners);
    var idsIsArr = Array.isArray(dispatchIDs);
    var IDsLen = idsIsArr ? dispatchIDs.length : dispatchIDs ? 1 : 0;
    var listenersLen = listenersIsArr ? dispatchListeners.length : dispatchListeners ? 1 : 0;
    "production" !== process.env.NODE_ENV ? invariant$$module$react$lib$EventPluginUtils(idsIsArr === listenersIsArr && IDsLen === listenersLen, "EventPluginUtils: Invalid `event`.") : invariant$$module$react$lib$EventPluginUtils(idsIsArr === listenersIsArr && IDsLen === listenersLen);
  };
}
function forEachEventDispatch$$module$react$lib$EventPluginUtils(event, cb) {
  var dispatchListeners = event._dispatchListeners;
  var dispatchIDs = event._dispatchIDs;
  if ("production" !== process.env.NODE_ENV) {
    validateEventDispatches$$module$react$lib$EventPluginUtils(event);
  }
  if (Array.isArray(dispatchListeners)) {
    for (var i = 0;i < dispatchListeners.length;i++) {
      if (event.isPropagationStopped()) {
        break;
      }
      cb(event, dispatchListeners[i], dispatchIDs[i]);
    }
  } else {
    if (dispatchListeners) {
      cb(event, dispatchListeners, dispatchIDs);
    }
  }
}
function executeDispatch$$module$react$lib$EventPluginUtils(event, listener, domID) {
  event.currentTarget = injection$$module$react$lib$EventPluginUtils.Mount.getNode(domID);
  var returnValue = listener(event, domID);
  event.currentTarget = null;
  return returnValue;
}
function executeDispatchesInOrder$$module$react$lib$EventPluginUtils(event, cb) {
  forEachEventDispatch$$module$react$lib$EventPluginUtils(event, cb);
  event._dispatchListeners = null;
  event._dispatchIDs = null;
}
function executeDispatchesInOrderStopAtTrueImpl$$module$react$lib$EventPluginUtils(event) {
  var dispatchListeners = event._dispatchListeners;
  var dispatchIDs = event._dispatchIDs;
  if ("production" !== process.env.NODE_ENV) {
    validateEventDispatches$$module$react$lib$EventPluginUtils(event);
  }
  if (Array.isArray(dispatchListeners)) {
    for (var i = 0;i < dispatchListeners.length;i++) {
      if (event.isPropagationStopped()) {
        break;
      }
      if (dispatchListeners[i](event, dispatchIDs[i])) {
        return dispatchIDs[i];
      }
    }
  } else {
    if (dispatchListeners) {
      if (dispatchListeners(event, dispatchIDs)) {
        return dispatchIDs;
      }
    }
  }
  return null;
}
function executeDispatchesInOrderStopAtTrue$$module$react$lib$EventPluginUtils(event) {
  var ret = executeDispatchesInOrderStopAtTrueImpl$$module$react$lib$EventPluginUtils(event);
  event._dispatchIDs = null;
  event._dispatchListeners = null;
  return ret;
}
function executeDirectDispatch$$module$react$lib$EventPluginUtils(event) {
  if ("production" !== process.env.NODE_ENV) {
    validateEventDispatches$$module$react$lib$EventPluginUtils(event);
  }
  var dispatchListener = event._dispatchListeners;
  var dispatchID = event._dispatchIDs;
  "production" !== process.env.NODE_ENV ? invariant$$module$react$lib$EventPluginUtils(!Array.isArray(dispatchListener), "executeDirectDispatch(...): Invalid `event`.") : invariant$$module$react$lib$EventPluginUtils(!Array.isArray(dispatchListener));
  var res = dispatchListener ? dispatchListener(event, dispatchID) : null;
  event._dispatchListeners = null;
  event._dispatchIDs = null;
  return res;
}
function hasDispatches$$module$react$lib$EventPluginUtils(event) {
  return !!event._dispatchListeners;
}
var EventPluginUtils$$module$react$lib$EventPluginUtils = {isEndish:isEndish$$module$react$lib$EventPluginUtils, isMoveish:isMoveish$$module$react$lib$EventPluginUtils, isStartish:isStartish$$module$react$lib$EventPluginUtils, executeDirectDispatch:executeDirectDispatch$$module$react$lib$EventPluginUtils, executeDispatch:executeDispatch$$module$react$lib$EventPluginUtils, executeDispatchesInOrder:executeDispatchesInOrder$$module$react$lib$EventPluginUtils, executeDispatchesInOrderStopAtTrue:executeDispatchesInOrderStopAtTrue$$module$react$lib$EventPluginUtils, 
hasDispatches:hasDispatches$$module$react$lib$EventPluginUtils, injection:injection$$module$react$lib$EventPluginUtils, useTouchEvents:false};
module$react$lib$EventPluginUtils = EventPluginUtils$$module$react$lib$EventPluginUtils;
