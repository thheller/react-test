goog.provide("module$react$lib$EventPropagators");
goog.require("module$react$lib$forEachAccumulated");
goog.require("module$react$lib$accumulateInto");
goog.require("module$react$lib$EventPluginHub");
goog.require("module$react$lib$EventConstants");
var EventConstants$$module$react$lib$EventPropagators = module$react$lib$EventConstants;
var EventPluginHub$$module$react$lib$EventPropagators = module$react$lib$EventPluginHub;
var accumulateInto$$module$react$lib$EventPropagators = module$react$lib$accumulateInto;
var forEachAccumulated$$module$react$lib$EventPropagators = module$react$lib$forEachAccumulated;
var PropagationPhases$$module$react$lib$EventPropagators = EventConstants$$module$react$lib$EventPropagators.PropagationPhases;
var getListener$$module$react$lib$EventPropagators = EventPluginHub$$module$react$lib$EventPropagators.getListener;
function listenerAtPhase$$module$react$lib$EventPropagators(id, event, propagationPhase) {
  var registrationName = event.dispatchConfig.phasedRegistrationNames[propagationPhase];
  return getListener$$module$react$lib$EventPropagators(id, registrationName);
}
function accumulateDirectionalDispatches$$module$react$lib$EventPropagators(domID, upwards, event) {
  if ("production" !== process.env.NODE_ENV) {
    if (!domID) {
      throw new Error("Dispatching id must not be null");
    }
  }
  var phase = upwards ? PropagationPhases$$module$react$lib$EventPropagators.bubbled : PropagationPhases$$module$react$lib$EventPropagators.captured;
  var listener = listenerAtPhase$$module$react$lib$EventPropagators(domID, event, phase);
  if (listener) {
    event._dispatchListeners = accumulateInto$$module$react$lib$EventPropagators(event._dispatchListeners, listener);
    event._dispatchIDs = accumulateInto$$module$react$lib$EventPropagators(event._dispatchIDs, domID);
  }
}
function accumulateTwoPhaseDispatchesSingle$$module$react$lib$EventPropagators(event) {
  if (event && event.dispatchConfig.phasedRegistrationNames) {
    EventPluginHub$$module$react$lib$EventPropagators.injection.getInstanceHandle().traverseTwoPhase(event.dispatchMarker, accumulateDirectionalDispatches$$module$react$lib$EventPropagators, event);
  }
}
function accumulateDispatches$$module$react$lib$EventPropagators(id, ignoredDirection, event) {
  if (event && event.dispatchConfig.registrationName) {
    var registrationName = event.dispatchConfig.registrationName;
    var listener = getListener$$module$react$lib$EventPropagators(id, registrationName);
    if (listener) {
      event._dispatchListeners = accumulateInto$$module$react$lib$EventPropagators(event._dispatchListeners, listener);
      event._dispatchIDs = accumulateInto$$module$react$lib$EventPropagators(event._dispatchIDs, id);
    }
  }
}
function accumulateDirectDispatchesSingle$$module$react$lib$EventPropagators(event) {
  if (event && event.dispatchConfig.registrationName) {
    accumulateDispatches$$module$react$lib$EventPropagators(event.dispatchMarker, null, event);
  }
}
function accumulateTwoPhaseDispatches$$module$react$lib$EventPropagators(events) {
  forEachAccumulated$$module$react$lib$EventPropagators(events, accumulateTwoPhaseDispatchesSingle$$module$react$lib$EventPropagators);
}
function accumulateEnterLeaveDispatches$$module$react$lib$EventPropagators(leave, enter, fromID, toID) {
  EventPluginHub$$module$react$lib$EventPropagators.injection.getInstanceHandle().traverseEnterLeave(fromID, toID, accumulateDispatches$$module$react$lib$EventPropagators, leave, enter);
}
function accumulateDirectDispatches$$module$react$lib$EventPropagators(events) {
  forEachAccumulated$$module$react$lib$EventPropagators(events, accumulateDirectDispatchesSingle$$module$react$lib$EventPropagators);
}
var EventPropagators$$module$react$lib$EventPropagators = {accumulateTwoPhaseDispatches:accumulateTwoPhaseDispatches$$module$react$lib$EventPropagators, accumulateDirectDispatches:accumulateDirectDispatches$$module$react$lib$EventPropagators, accumulateEnterLeaveDispatches:accumulateEnterLeaveDispatches$$module$react$lib$EventPropagators};
module$react$lib$EventPropagators = EventPropagators$$module$react$lib$EventPropagators;
