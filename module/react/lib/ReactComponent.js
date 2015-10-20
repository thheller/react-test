goog.provide("module$react$lib$ReactComponent");
goog.require("module$react$lib$warning");
goog.require("module$react$lib$invariant");
goog.require("module$react$lib$ReactUpdateQueue");
var ReactUpdateQueue$$module$react$lib$ReactComponent = module$react$lib$ReactUpdateQueue;
var invariant$$module$react$lib$ReactComponent = module$react$lib$invariant;
var warning$$module$react$lib$ReactComponent = module$react$lib$warning;
function ReactComponent$$module$react$lib$ReactComponent(props, context) {
  this.props = props;
  this.context = context;
}
ReactComponent$$module$react$lib$ReactComponent.prototype.setState = function(partialState, callback) {
  "production" !== process.env.NODE_ENV ? invariant$$module$react$lib$ReactComponent(typeof partialState === "object" || typeof partialState === "function" || partialState == null, "setState(...): takes an object of state variables to update or a " + "function which returns an object of state variables.") : invariant$$module$react$lib$ReactComponent(typeof partialState === "object" || typeof partialState === "function" || partialState == null);
  if ("production" !== process.env.NODE_ENV) {
    "production" !== process.env.NODE_ENV ? warning$$module$react$lib$ReactComponent(partialState != null, "setState(...): You passed an undefined or null state object; " + "instead, use forceUpdate().") : null;
  }
  ReactUpdateQueue$$module$react$lib$ReactComponent.enqueueSetState(this, partialState);
  if (callback) {
    ReactUpdateQueue$$module$react$lib$ReactComponent.enqueueCallback(this, callback);
  }
};
ReactComponent$$module$react$lib$ReactComponent.prototype.forceUpdate = function(callback) {
  ReactUpdateQueue$$module$react$lib$ReactComponent.enqueueForceUpdate(this);
  if (callback) {
    ReactUpdateQueue$$module$react$lib$ReactComponent.enqueueCallback(this, callback);
  }
};
if ("production" !== process.env.NODE_ENV) {
  var deprecatedAPIs$$module$react$lib$ReactComponent = {getDOMNode:["getDOMNode", "Use React.findDOMNode(component) instead."], isMounted:["isMounted", "Instead, make sure to clean up subscriptions and pending requests in " + "componentWillUnmount to prevent memory leaks."], replaceProps:["replaceProps", "Instead, call React.render again at the top level."], replaceState:["replaceState", "Refactor your code to use setState instead (see " + "https://github.com/facebook/react/issues/3236)."], setProps:["setProps", 
  "Instead, call React.render again at the top level."]};
  var defineDeprecationWarning$$module$react$lib$ReactComponent = function(methodName, info) {
    try {
      Object.defineProperty(ReactComponent$$module$react$lib$ReactComponent.prototype, methodName, {get:function() {
        "production" !== process.env.NODE_ENV ? warning$$module$react$lib$ReactComponent(false, "%s(...) is deprecated in plain JavaScript React classes. %s", info[0], info[1]) : null;
        return undefined;
      }});
    } catch (x) {
    }
  };
  for (var fnName$$module$react$lib$ReactComponent in deprecatedAPIs$$module$react$lib$ReactComponent) {
    if (deprecatedAPIs$$module$react$lib$ReactComponent.hasOwnProperty(fnName$$module$react$lib$ReactComponent)) {
      defineDeprecationWarning$$module$react$lib$ReactComponent(fnName$$module$react$lib$ReactComponent, deprecatedAPIs$$module$react$lib$ReactComponent[fnName$$module$react$lib$ReactComponent]);
    }
  }
}
module$react$lib$ReactComponent = ReactComponent$$module$react$lib$ReactComponent;
