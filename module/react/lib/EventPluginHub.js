goog.provide("module$react$lib$EventPluginHub");
goog.require("module$react$lib$invariant");
goog.require("module$react$lib$forEachAccumulated");
goog.require("module$react$lib$accumulateInto");
goog.require("module$react$lib$EventPluginUtils");
goog.require("module$react$lib$EventPluginRegistry");
var EventPluginRegistry$$module$react$lib$EventPluginHub = module$react$lib$EventPluginRegistry;
var EventPluginUtils$$module$react$lib$EventPluginHub = module$react$lib$EventPluginUtils;
var accumulateInto$$module$react$lib$EventPluginHub = module$react$lib$accumulateInto;
var forEachAccumulated$$module$react$lib$EventPluginHub = module$react$lib$forEachAccumulated;
var invariant$$module$react$lib$EventPluginHub = module$react$lib$invariant;
var listenerBank$$module$react$lib$EventPluginHub = {};
var eventQueue$$module$react$lib$EventPluginHub = null;
var executeDispatchesAndRelease$$module$react$lib$EventPluginHub = function(event) {
  if (event) {
    var executeDispatch = EventPluginUtils$$module$react$lib$EventPluginHub.executeDispatch;
    var PluginModule = EventPluginRegistry$$module$react$lib$EventPluginHub.getPluginModuleForEvent(event);
    if (PluginModule && PluginModule.executeDispatch) {
      executeDispatch = PluginModule.executeDispatch;
    }
    EventPluginUtils$$module$react$lib$EventPluginHub.executeDispatchesInOrder(event, executeDispatch);
    if (!event.isPersistent()) {
      event.constructor.release(event);
    }
  }
};
var InstanceHandle$$module$react$lib$EventPluginHub = null;
function validateInstanceHandle$$module$react$lib$EventPluginHub() {
  var valid = InstanceHandle$$module$react$lib$EventPluginHub && InstanceHandle$$module$react$lib$EventPluginHub.traverseTwoPhase && InstanceHandle$$module$react$lib$EventPluginHub.traverseEnterLeave;
  "production" !== process.env.NODE_ENV ? invariant$$module$react$lib$EventPluginHub(valid, "InstanceHandle not injected before use!") : invariant$$module$react$lib$EventPluginHub(valid);
}
var EventPluginHub$$module$react$lib$EventPluginHub = {injection:{injectMount:EventPluginUtils$$module$react$lib$EventPluginHub.injection.injectMount, injectInstanceHandle:function(InjectedInstanceHandle) {
  InstanceHandle$$module$react$lib$EventPluginHub = InjectedInstanceHandle;
  if ("production" !== process.env.NODE_ENV) {
    validateInstanceHandle$$module$react$lib$EventPluginHub();
  }
}, getInstanceHandle:function() {
  if ("production" !== process.env.NODE_ENV) {
    validateInstanceHandle$$module$react$lib$EventPluginHub();
  }
  return InstanceHandle$$module$react$lib$EventPluginHub;
}, injectEventPluginOrder:EventPluginRegistry$$module$react$lib$EventPluginHub.injectEventPluginOrder, injectEventPluginsByName:EventPluginRegistry$$module$react$lib$EventPluginHub.injectEventPluginsByName}, eventNameDispatchConfigs:EventPluginRegistry$$module$react$lib$EventPluginHub.eventNameDispatchConfigs, registrationNameModules:EventPluginRegistry$$module$react$lib$EventPluginHub.registrationNameModules, putListener:function(id, registrationName, listener) {
  "production" !== process.env.NODE_ENV ? invariant$$module$react$lib$EventPluginHub(!listener || typeof listener === "function", "Expected %s listener to be a function, instead got type %s", registrationName, typeof listener) : invariant$$module$react$lib$EventPluginHub(!listener || typeof listener === "function");
  var bankForRegistrationName = listenerBank$$module$react$lib$EventPluginHub[registrationName] || (listenerBank$$module$react$lib$EventPluginHub[registrationName] = {});
  bankForRegistrationName[id] = listener;
}, getListener:function(id, registrationName) {
  var bankForRegistrationName = listenerBank$$module$react$lib$EventPluginHub[registrationName];
  return bankForRegistrationName && bankForRegistrationName[id];
}, deleteListener:function(id, registrationName) {
  var bankForRegistrationName = listenerBank$$module$react$lib$EventPluginHub[registrationName];
  if (bankForRegistrationName) {
    delete bankForRegistrationName[id];
  }
}, deleteAllListeners:function(id) {
  for (var registrationName in listenerBank$$module$react$lib$EventPluginHub) {
    delete listenerBank$$module$react$lib$EventPluginHub[registrationName][id];
  }
}, extractEvents:function(topLevelType, topLevelTarget, topLevelTargetID, nativeEvent) {
  var events;
  var plugins = EventPluginRegistry$$module$react$lib$EventPluginHub.plugins;
  for (var i = 0, l = plugins.length;i < l;i++) {
    var possiblePlugin = plugins[i];
    if (possiblePlugin) {
      var extractedEvents = possiblePlugin.extractEvents(topLevelType, topLevelTarget, topLevelTargetID, nativeEvent);
      if (extractedEvents) {
        events = accumulateInto$$module$react$lib$EventPluginHub(events, extractedEvents);
      }
    }
  }
  return events;
}, enqueueEvents:function(events) {
  if (events) {
    eventQueue$$module$react$lib$EventPluginHub = accumulateInto$$module$react$lib$EventPluginHub(eventQueue$$module$react$lib$EventPluginHub, events);
  }
}, processEventQueue:function() {
  var processingEventQueue = eventQueue$$module$react$lib$EventPluginHub;
  eventQueue$$module$react$lib$EventPluginHub = null;
  forEachAccumulated$$module$react$lib$EventPluginHub(processingEventQueue, executeDispatchesAndRelease$$module$react$lib$EventPluginHub);
  "production" !== process.env.NODE_ENV ? invariant$$module$react$lib$EventPluginHub(!eventQueue$$module$react$lib$EventPluginHub, "processEventQueue(): Additional events were enqueued while processing " + "an event queue. Support for this has not yet been implemented.") : invariant$$module$react$lib$EventPluginHub(!eventQueue$$module$react$lib$EventPluginHub);
}, __purge:function() {
  listenerBank$$module$react$lib$EventPluginHub = {};
}, __getListenerBank:function() {
  return listenerBank$$module$react$lib$EventPluginHub;
}};
module$react$lib$EventPluginHub = EventPluginHub$$module$react$lib$EventPluginHub;
