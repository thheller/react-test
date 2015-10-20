goog.provide("module$react$lib$MobileSafariClickEventPlugin");
goog.require("module$react$lib$emptyFunction");
goog.require("module$react$lib$EventConstants");
var EventConstants$$module$react$lib$MobileSafariClickEventPlugin = module$react$lib$EventConstants;
var emptyFunction$$module$react$lib$MobileSafariClickEventPlugin = module$react$lib$emptyFunction;
var topLevelTypes$$module$react$lib$MobileSafariClickEventPlugin = EventConstants$$module$react$lib$MobileSafariClickEventPlugin.topLevelTypes;
var MobileSafariClickEventPlugin$$module$react$lib$MobileSafariClickEventPlugin = {eventTypes:null, extractEvents:function(topLevelType, topLevelTarget, topLevelTargetID, nativeEvent) {
  if (topLevelType === topLevelTypes$$module$react$lib$MobileSafariClickEventPlugin.topTouchStart) {
    var target = nativeEvent.target;
    if (target && !target.onclick) {
      target.onclick = emptyFunction$$module$react$lib$MobileSafariClickEventPlugin;
    }
  }
}};
module$react$lib$MobileSafariClickEventPlugin = MobileSafariClickEventPlugin$$module$react$lib$MobileSafariClickEventPlugin;
