goog.provide("module$react$lib$isNode");
function isNode$$module$react$lib$isNode(object) {
  return !!(object && (typeof Node === "function" ? object instanceof Node : typeof object === "object" && typeof object.nodeType === "number" && typeof object.nodeName === "string"));
}
module$react$lib$isNode = isNode$$module$react$lib$isNode;
