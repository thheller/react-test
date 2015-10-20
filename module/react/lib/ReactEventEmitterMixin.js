goog.provide("module$react$lib$ReactEventEmitterMixin");
goog.require("module$react$lib$EventPluginHub");
var EventPluginHub$$module$react$lib$ReactEventEmitterMixin = module$react$lib$EventPluginHub;
function runEventQueueInBatch$$module$react$lib$ReactEventEmitterMixin(events) {
  EventPluginHub$$module$react$lib$ReactEventEmitterMixin.enqueueEvents(events);
  EventPluginHub$$module$react$lib$ReactEventEmitterMixin.processEventQueue();
}
var ReactEventEmitterMixin$$module$react$lib$ReactEventEmitterMixin = {handleTopLevel:function(topLevelType, topLevelTarget, topLevelTargetID, nativeEvent) {
  var events = EventPluginHub$$module$react$lib$ReactEventEmitterMixin.extractEvents(topLevelType, topLevelTarget, topLevelTargetID, nativeEvent);
  runEventQueueInBatch$$module$react$lib$ReactEventEmitterMixin(events);
}};
module$react$lib$ReactEventEmitterMixin = ReactEventEmitterMixin$$module$react$lib$ReactEventEmitterMixin;
