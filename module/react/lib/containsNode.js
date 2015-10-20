goog.provide("module$react$lib$containsNode");
goog.require("module$react$lib$isTextNode");
var isTextNode$$module$react$lib$containsNode = module$react$lib$isTextNode;
function containsNode$$module$react$lib$containsNode(outerNode, innerNode) {
  if (!outerNode || !innerNode) {
    return false;
  } else {
    if (outerNode === innerNode) {
      return true;
    } else {
      if (isTextNode$$module$react$lib$containsNode(outerNode)) {
        return false;
      } else {
        if (isTextNode$$module$react$lib$containsNode(innerNode)) {
          return containsNode$$module$react$lib$containsNode(outerNode, innerNode.parentNode);
        } else {
          if (outerNode.contains) {
            return outerNode.contains(innerNode);
          } else {
            if (outerNode.compareDocumentPosition) {
              return !!(outerNode.compareDocumentPosition(innerNode) & 16);
            } else {
              return false;
            }
          }
        }
      }
    }
  }
}
module$react$lib$containsNode = containsNode$$module$react$lib$containsNode;
