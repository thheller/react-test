goog.provide("module$react$lib$EnterLeaveEventPlugin");
goog.require("module$react$lib$keyOf");
goog.require("module$react$lib$ReactMount");
goog.require("module$react$lib$SyntheticMouseEvent");
goog.require("module$react$lib$EventPropagators");
goog.require("module$react$lib$EventConstants");
var EventConstants$$module$react$lib$EnterLeaveEventPlugin = module$react$lib$EventConstants;
var EventPropagators$$module$react$lib$EnterLeaveEventPlugin = module$react$lib$EventPropagators;
var SyntheticMouseEvent$$module$react$lib$EnterLeaveEventPlugin = module$react$lib$SyntheticMouseEvent;
var ReactMount$$module$react$lib$EnterLeaveEventPlugin = module$react$lib$ReactMount;
var keyOf$$module$react$lib$EnterLeaveEventPlugin = module$react$lib$keyOf;
var topLevelTypes$$module$react$lib$EnterLeaveEventPlugin = EventConstants$$module$react$lib$EnterLeaveEventPlugin.topLevelTypes;
var getFirstReactDOM$$module$react$lib$EnterLeaveEventPlugin = ReactMount$$module$react$lib$EnterLeaveEventPlugin.getFirstReactDOM;
var eventTypes$$module$react$lib$EnterLeaveEventPlugin = {mouseEnter:{registrationName:keyOf$$module$react$lib$EnterLeaveEventPlugin({onMouseEnter:null}), dependencies:[topLevelTypes$$module$react$lib$EnterLeaveEventPlugin.topMouseOut, topLevelTypes$$module$react$lib$EnterLeaveEventPlugin.topMouseOver]}, mouseLeave:{registrationName:keyOf$$module$react$lib$EnterLeaveEventPlugin({onMouseLeave:null}), dependencies:[topLevelTypes$$module$react$lib$EnterLeaveEventPlugin.topMouseOut, topLevelTypes$$module$react$lib$EnterLeaveEventPlugin.topMouseOver]}};
var extractedEvents$$module$react$lib$EnterLeaveEventPlugin = [null, null];
var EnterLeaveEventPlugin$$module$react$lib$EnterLeaveEventPlugin = {eventTypes:eventTypes$$module$react$lib$EnterLeaveEventPlugin, extractEvents:function(topLevelType, topLevelTarget, topLevelTargetID, nativeEvent) {
  if (topLevelType === topLevelTypes$$module$react$lib$EnterLeaveEventPlugin.topMouseOver && (nativeEvent.relatedTarget || nativeEvent.fromElement)) {
    return null;
  }
  if (topLevelType !== topLevelTypes$$module$react$lib$EnterLeaveEventPlugin.topMouseOut && topLevelType !== topLevelTypes$$module$react$lib$EnterLeaveEventPlugin.topMouseOver) {
    return null;
  }
  var win;
  if (topLevelTarget.window === topLevelTarget) {
    win = topLevelTarget;
  } else {
    var doc = topLevelTarget.ownerDocument;
    if (doc) {
      win = doc.defaultView || doc.parentWindow;
    } else {
      win = window;
    }
  }
  var from, to;
  if (topLevelType === topLevelTypes$$module$react$lib$EnterLeaveEventPlugin.topMouseOut) {
    from = topLevelTarget;
    to = getFirstReactDOM$$module$react$lib$EnterLeaveEventPlugin(nativeEvent.relatedTarget || nativeEvent.toElement) || win;
  } else {
    from = win;
    to = topLevelTarget;
  }
  if (from === to) {
    return null;
  }
  var fromID = from ? ReactMount$$module$react$lib$EnterLeaveEventPlugin.getID(from) : "";
  var toID = to ? ReactMount$$module$react$lib$EnterLeaveEventPlugin.getID(to) : "";
  var leave = SyntheticMouseEvent$$module$react$lib$EnterLeaveEventPlugin.getPooled(eventTypes$$module$react$lib$EnterLeaveEventPlugin.mouseLeave, fromID, nativeEvent);
  leave.type = "mouseleave";
  leave.target = from;
  leave.relatedTarget = to;
  var enter = SyntheticMouseEvent$$module$react$lib$EnterLeaveEventPlugin.getPooled(eventTypes$$module$react$lib$EnterLeaveEventPlugin.mouseEnter, toID, nativeEvent);
  enter.type = "mouseenter";
  enter.target = to;
  enter.relatedTarget = from;
  EventPropagators$$module$react$lib$EnterLeaveEventPlugin.accumulateEnterLeaveDispatches(leave, enter, fromID, toID);
  extractedEvents$$module$react$lib$EnterLeaveEventPlugin[0] = leave;
  extractedEvents$$module$react$lib$EnterLeaveEventPlugin[1] = enter;
  return extractedEvents$$module$react$lib$EnterLeaveEventPlugin;
}};
module$react$lib$EnterLeaveEventPlugin = EnterLeaveEventPlugin$$module$react$lib$EnterLeaveEventPlugin;
