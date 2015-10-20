goog.provide("module$react$lib$isTextNode");
goog.require("module$react$lib$isNode");
var isNode$$module$react$lib$isTextNode = module$react$lib$isNode;
function isTextNode$$module$react$lib$isTextNode(object) {
  return isNode$$module$react$lib$isTextNode(object) && object.nodeType == 3;
}
module$react$lib$isTextNode = isTextNode$$module$react$lib$isTextNode;
