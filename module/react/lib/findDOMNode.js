goog.provide("module$react$lib$findDOMNode");
goog.require("module$react$lib$warning");
goog.require("module$react$lib$isNode");
goog.require("module$react$lib$invariant");
goog.require("module$react$lib$ReactMount");
goog.require("module$react$lib$ReactInstanceMap");
goog.require("module$react$lib$ReactCurrentOwner");
var ReactCurrentOwner$$module$react$lib$findDOMNode = module$react$lib$ReactCurrentOwner;
var ReactInstanceMap$$module$react$lib$findDOMNode = module$react$lib$ReactInstanceMap;
var ReactMount$$module$react$lib$findDOMNode = module$react$lib$ReactMount;
var invariant$$module$react$lib$findDOMNode = module$react$lib$invariant;
var isNode$$module$react$lib$findDOMNode = module$react$lib$isNode;
var warning$$module$react$lib$findDOMNode = module$react$lib$warning;
function findDOMNode$$module$react$lib$findDOMNode(componentOrElement) {
  if ("production" !== process.env.NODE_ENV) {
    var owner = ReactCurrentOwner$$module$react$lib$findDOMNode.current;
    if (owner !== null) {
      "production" !== process.env.NODE_ENV ? warning$$module$react$lib$findDOMNode(owner._warnedAboutRefsInRender, "%s is accessing getDOMNode or findDOMNode inside its render(). " + "render() should be a pure function of props and state. It should " + "never access something that requires stale data from the previous " + "render, such as refs. Move this logic to componentDidMount and " + "componentDidUpdate instead.", owner.getName() || "A component") : null;
      owner._warnedAboutRefsInRender = true;
    }
  }
  if (componentOrElement == null) {
    return null;
  }
  if (isNode$$module$react$lib$findDOMNode(componentOrElement)) {
    return componentOrElement;
  }
  if (ReactInstanceMap$$module$react$lib$findDOMNode.has(componentOrElement)) {
    return ReactMount$$module$react$lib$findDOMNode.getNodeFromInstance(componentOrElement);
  }
  "production" !== process.env.NODE_ENV ? invariant$$module$react$lib$findDOMNode(componentOrElement.render == null || typeof componentOrElement.render !== "function", "Component (with keys: %s) contains `render` method " + "but is not mounted in the DOM", Object.keys(componentOrElement)) : invariant$$module$react$lib$findDOMNode(componentOrElement.render == null || typeof componentOrElement.render !== "function");
  "production" !== process.env.NODE_ENV ? invariant$$module$react$lib$findDOMNode(false, "Element appears to be neither ReactComponent nor DOMNode (keys: %s)", Object.keys(componentOrElement)) : invariant$$module$react$lib$findDOMNode(false);
}
module$react$lib$findDOMNode = findDOMNode$$module$react$lib$findDOMNode;
