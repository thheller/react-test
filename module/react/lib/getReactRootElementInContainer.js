goog.provide("module$react$lib$getReactRootElementInContainer");
var DOC_NODE_TYPE$$module$react$lib$getReactRootElementInContainer = 9;
function getReactRootElementInContainer$$module$react$lib$getReactRootElementInContainer(container) {
  if (!container) {
    return null;
  }
  if (container.nodeType === DOC_NODE_TYPE$$module$react$lib$getReactRootElementInContainer) {
    return container.documentElement;
  } else {
    return container.firstChild;
  }
}
module$react$lib$getReactRootElementInContainer = getReactRootElementInContainer$$module$react$lib$getReactRootElementInContainer;
