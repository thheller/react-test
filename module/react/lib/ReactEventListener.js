goog.provide("module$react$lib$ReactEventListener");
goog.require("module$react$lib$getUnboundedScrollPosition");
goog.require("module$react$lib$getEventTarget");
goog.require("module$react$lib$Object_assign");
goog.require("module$react$lib$ReactUpdates");
goog.require("module$react$lib$ReactMount");
goog.require("module$react$lib$ReactInstanceHandles");
goog.require("module$react$lib$PooledClass");
goog.require("module$react$lib$ExecutionEnvironment");
goog.require("module$react$lib$EventListener");
var EventListener$$module$react$lib$ReactEventListener = module$react$lib$EventListener;
var ExecutionEnvironment$$module$react$lib$ReactEventListener = module$react$lib$ExecutionEnvironment;
var PooledClass$$module$react$lib$ReactEventListener = module$react$lib$PooledClass;
var ReactInstanceHandles$$module$react$lib$ReactEventListener = module$react$lib$ReactInstanceHandles;
var ReactMount$$module$react$lib$ReactEventListener = module$react$lib$ReactMount;
var ReactUpdates$$module$react$lib$ReactEventListener = module$react$lib$ReactUpdates;
var assign$$module$react$lib$ReactEventListener = module$react$lib$Object_assign;
var getEventTarget$$module$react$lib$ReactEventListener = module$react$lib$getEventTarget;
var getUnboundedScrollPosition$$module$react$lib$ReactEventListener = module$react$lib$getUnboundedScrollPosition;
function findParent$$module$react$lib$ReactEventListener(node) {
  var nodeID = ReactMount$$module$react$lib$ReactEventListener.getID(node);
  var rootID = ReactInstanceHandles$$module$react$lib$ReactEventListener.getReactRootIDFromNodeID(nodeID);
  var container = ReactMount$$module$react$lib$ReactEventListener.findReactContainerForID(rootID);
  var parent = ReactMount$$module$react$lib$ReactEventListener.getFirstReactDOM(container);
  return parent;
}
function TopLevelCallbackBookKeeping$$module$react$lib$ReactEventListener(topLevelType, nativeEvent) {
  this.topLevelType = topLevelType;
  this.nativeEvent = nativeEvent;
  this.ancestors = [];
}
assign$$module$react$lib$ReactEventListener(TopLevelCallbackBookKeeping$$module$react$lib$ReactEventListener.prototype, {destructor:function() {
  this.topLevelType = null;
  this.nativeEvent = null;
  this.ancestors.length = 0;
}});
PooledClass$$module$react$lib$ReactEventListener.addPoolingTo(TopLevelCallbackBookKeeping$$module$react$lib$ReactEventListener, PooledClass$$module$react$lib$ReactEventListener.twoArgumentPooler);
function handleTopLevelImpl$$module$react$lib$ReactEventListener(bookKeeping) {
  var topLevelTarget = ReactMount$$module$react$lib$ReactEventListener.getFirstReactDOM(getEventTarget$$module$react$lib$ReactEventListener(bookKeeping.nativeEvent)) || window;
  var ancestor = topLevelTarget;
  while (ancestor) {
    bookKeeping.ancestors.push(ancestor);
    ancestor = findParent$$module$react$lib$ReactEventListener(ancestor);
  }
  for (var i = 0, l = bookKeeping.ancestors.length;i < l;i++) {
    topLevelTarget = bookKeeping.ancestors[i];
    var topLevelTargetID = ReactMount$$module$react$lib$ReactEventListener.getID(topLevelTarget) || "";
    ReactEventListener$$module$react$lib$ReactEventListener._handleTopLevel(bookKeeping.topLevelType, topLevelTarget, topLevelTargetID, bookKeeping.nativeEvent);
  }
}
function scrollValueMonitor$$module$react$lib$ReactEventListener(cb) {
  var scrollPosition = getUnboundedScrollPosition$$module$react$lib$ReactEventListener(window);
  cb(scrollPosition);
}
var ReactEventListener$$module$react$lib$ReactEventListener = {_enabled:true, _handleTopLevel:null, WINDOW_HANDLE:ExecutionEnvironment$$module$react$lib$ReactEventListener.canUseDOM ? window : null, setHandleTopLevel:function(handleTopLevel) {
  ReactEventListener$$module$react$lib$ReactEventListener._handleTopLevel = handleTopLevel;
}, setEnabled:function(enabled) {
  ReactEventListener$$module$react$lib$ReactEventListener._enabled = !!enabled;
}, isEnabled:function() {
  return ReactEventListener$$module$react$lib$ReactEventListener._enabled;
}, trapBubbledEvent:function(topLevelType, handlerBaseName, handle) {
  var element = handle;
  if (!element) {
    return null;
  }
  return EventListener$$module$react$lib$ReactEventListener.listen(element, handlerBaseName, ReactEventListener$$module$react$lib$ReactEventListener.dispatchEvent.bind(null, topLevelType));
}, trapCapturedEvent:function(topLevelType, handlerBaseName, handle) {
  var element = handle;
  if (!element) {
    return null;
  }
  return EventListener$$module$react$lib$ReactEventListener.capture(element, handlerBaseName, ReactEventListener$$module$react$lib$ReactEventListener.dispatchEvent.bind(null, topLevelType));
}, monitorScrollValue:function(refresh) {
  var callback = scrollValueMonitor$$module$react$lib$ReactEventListener.bind(null, refresh);
  EventListener$$module$react$lib$ReactEventListener.listen(window, "scroll", callback);
}, dispatchEvent:function(topLevelType, nativeEvent) {
  if (!ReactEventListener$$module$react$lib$ReactEventListener._enabled) {
    return;
  }
  var bookKeeping = TopLevelCallbackBookKeeping$$module$react$lib$ReactEventListener.getPooled(topLevelType, nativeEvent);
  try {
    ReactUpdates$$module$react$lib$ReactEventListener.batchedUpdates(handleTopLevelImpl$$module$react$lib$ReactEventListener, bookKeeping);
  } finally {
    TopLevelCallbackBookKeeping$$module$react$lib$ReactEventListener.release(bookKeeping);
  }
}};
module$react$lib$ReactEventListener = ReactEventListener$$module$react$lib$ReactEventListener;
