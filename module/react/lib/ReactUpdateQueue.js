goog.provide("module$react$lib$ReactUpdateQueue");
goog.require("module$react$lib$warning");
goog.require("module$react$lib$invariant");
goog.require("module$react$lib$Object_assign");
goog.require("module$react$lib$ReactUpdates");
goog.require("module$react$lib$ReactInstanceMap");
goog.require("module$react$lib$ReactElement");
goog.require("module$react$lib$ReactCurrentOwner");
goog.require("module$react$lib$ReactLifeCycle");
var ReactLifeCycle$$module$react$lib$ReactUpdateQueue = module$react$lib$ReactLifeCycle;
var ReactCurrentOwner$$module$react$lib$ReactUpdateQueue = module$react$lib$ReactCurrentOwner;
var ReactElement$$module$react$lib$ReactUpdateQueue = module$react$lib$ReactElement;
var ReactInstanceMap$$module$react$lib$ReactUpdateQueue = module$react$lib$ReactInstanceMap;
var ReactUpdates$$module$react$lib$ReactUpdateQueue = module$react$lib$ReactUpdates;
var assign$$module$react$lib$ReactUpdateQueue = module$react$lib$Object_assign;
var invariant$$module$react$lib$ReactUpdateQueue = module$react$lib$invariant;
var warning$$module$react$lib$ReactUpdateQueue = module$react$lib$warning;
function enqueueUpdate$$module$react$lib$ReactUpdateQueue(internalInstance) {
  if (internalInstance !== ReactLifeCycle$$module$react$lib$ReactUpdateQueue.currentlyMountingInstance) {
    ReactUpdates$$module$react$lib$ReactUpdateQueue.enqueueUpdate(internalInstance);
  }
}
function getInternalInstanceReadyForUpdate$$module$react$lib$ReactUpdateQueue(publicInstance, callerName) {
  "production" !== process.env.NODE_ENV ? invariant$$module$react$lib$ReactUpdateQueue(ReactCurrentOwner$$module$react$lib$ReactUpdateQueue.current == null, "%s(...): Cannot update during an existing state transition " + "(such as within `render`). Render methods should be a pure function " + "of props and state.", callerName) : invariant$$module$react$lib$ReactUpdateQueue(ReactCurrentOwner$$module$react$lib$ReactUpdateQueue.current == null);
  var internalInstance = ReactInstanceMap$$module$react$lib$ReactUpdateQueue.get(publicInstance);
  if (!internalInstance) {
    if ("production" !== process.env.NODE_ENV) {
      "production" !== process.env.NODE_ENV ? warning$$module$react$lib$ReactUpdateQueue(!callerName, "%s(...): Can only update a mounted or mounting component. " + "This usually means you called %s() on an unmounted " + "component. This is a no-op.", callerName, callerName) : null;
    }
    return null;
  }
  if (internalInstance === ReactLifeCycle$$module$react$lib$ReactUpdateQueue.currentlyUnmountingInstance) {
    return null;
  }
  return internalInstance;
}
var ReactUpdateQueue$$module$react$lib$ReactUpdateQueue = {enqueueCallback:function(publicInstance, callback) {
  "production" !== process.env.NODE_ENV ? invariant$$module$react$lib$ReactUpdateQueue(typeof callback === "function", "enqueueCallback(...): You called `setProps`, `replaceProps`, " + "`setState`, `replaceState`, or `forceUpdate` with a callback that " + "isn't callable.") : invariant$$module$react$lib$ReactUpdateQueue(typeof callback === "function");
  var internalInstance = getInternalInstanceReadyForUpdate$$module$react$lib$ReactUpdateQueue(publicInstance);
  if (!internalInstance || internalInstance === ReactLifeCycle$$module$react$lib$ReactUpdateQueue.currentlyMountingInstance) {
    return null;
  }
  if (internalInstance._pendingCallbacks) {
    internalInstance._pendingCallbacks.push(callback);
  } else {
    internalInstance._pendingCallbacks = [callback];
  }
  enqueueUpdate$$module$react$lib$ReactUpdateQueue(internalInstance);
}, enqueueCallbackInternal:function(internalInstance, callback) {
  "production" !== process.env.NODE_ENV ? invariant$$module$react$lib$ReactUpdateQueue(typeof callback === "function", "enqueueCallback(...): You called `setProps`, `replaceProps`, " + "`setState`, `replaceState`, or `forceUpdate` with a callback that " + "isn't callable.") : invariant$$module$react$lib$ReactUpdateQueue(typeof callback === "function");
  if (internalInstance._pendingCallbacks) {
    internalInstance._pendingCallbacks.push(callback);
  } else {
    internalInstance._pendingCallbacks = [callback];
  }
  enqueueUpdate$$module$react$lib$ReactUpdateQueue(internalInstance);
}, enqueueForceUpdate:function(publicInstance) {
  var internalInstance = getInternalInstanceReadyForUpdate$$module$react$lib$ReactUpdateQueue(publicInstance, "forceUpdate");
  if (!internalInstance) {
    return;
  }
  internalInstance._pendingForceUpdate = true;
  enqueueUpdate$$module$react$lib$ReactUpdateQueue(internalInstance);
}, enqueueReplaceState:function(publicInstance, completeState) {
  var internalInstance = getInternalInstanceReadyForUpdate$$module$react$lib$ReactUpdateQueue(publicInstance, "replaceState");
  if (!internalInstance) {
    return;
  }
  internalInstance._pendingStateQueue = [completeState];
  internalInstance._pendingReplaceState = true;
  enqueueUpdate$$module$react$lib$ReactUpdateQueue(internalInstance);
}, enqueueSetState:function(publicInstance, partialState) {
  var internalInstance = getInternalInstanceReadyForUpdate$$module$react$lib$ReactUpdateQueue(publicInstance, "setState");
  if (!internalInstance) {
    return;
  }
  var queue = internalInstance._pendingStateQueue || (internalInstance._pendingStateQueue = []);
  queue.push(partialState);
  enqueueUpdate$$module$react$lib$ReactUpdateQueue(internalInstance);
}, enqueueSetProps:function(publicInstance, partialProps) {
  var internalInstance = getInternalInstanceReadyForUpdate$$module$react$lib$ReactUpdateQueue(publicInstance, "setProps");
  if (!internalInstance) {
    return;
  }
  "production" !== process.env.NODE_ENV ? invariant$$module$react$lib$ReactUpdateQueue(internalInstance._isTopLevel, "setProps(...): You called `setProps` on a " + "component with a parent. This is an anti-pattern since props will " + "get reactively updated when rendered. Instead, change the owner's " + "`render` method to pass the correct value as props to the component " + "where it is created.") : invariant$$module$react$lib$ReactUpdateQueue(internalInstance._isTopLevel);
  var element = internalInstance._pendingElement || internalInstance._currentElement;
  var props = assign$$module$react$lib$ReactUpdateQueue({}, element.props, partialProps);
  internalInstance._pendingElement = ReactElement$$module$react$lib$ReactUpdateQueue.cloneAndReplaceProps(element, props);
  enqueueUpdate$$module$react$lib$ReactUpdateQueue(internalInstance);
}, enqueueReplaceProps:function(publicInstance, props) {
  var internalInstance = getInternalInstanceReadyForUpdate$$module$react$lib$ReactUpdateQueue(publicInstance, "replaceProps");
  if (!internalInstance) {
    return;
  }
  "production" !== process.env.NODE_ENV ? invariant$$module$react$lib$ReactUpdateQueue(internalInstance._isTopLevel, "replaceProps(...): You called `replaceProps` on a " + "component with a parent. This is an anti-pattern since props will " + "get reactively updated when rendered. Instead, change the owner's " + "`render` method to pass the correct value as props to the component " + "where it is created.") : invariant$$module$react$lib$ReactUpdateQueue(internalInstance._isTopLevel);
  var element = internalInstance._pendingElement || internalInstance._currentElement;
  internalInstance._pendingElement = ReactElement$$module$react$lib$ReactUpdateQueue.cloneAndReplaceProps(element, props);
  enqueueUpdate$$module$react$lib$ReactUpdateQueue(internalInstance);
}, enqueueElementInternal:function(internalInstance, newElement) {
  internalInstance._pendingElement = newElement;
  enqueueUpdate$$module$react$lib$ReactUpdateQueue(internalInstance);
}};
module$react$lib$ReactUpdateQueue = ReactUpdateQueue$$module$react$lib$ReactUpdateQueue;
