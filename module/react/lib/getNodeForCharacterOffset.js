goog.provide("module$react$lib$getNodeForCharacterOffset");
function getLeafNode$$module$react$lib$getNodeForCharacterOffset(node) {
  while (node && node.firstChild) {
    node = node.firstChild;
  }
  return node;
}
function getSiblingNode$$module$react$lib$getNodeForCharacterOffset(node) {
  while (node) {
    if (node.nextSibling) {
      return node.nextSibling;
    }
    node = node.parentNode;
  }
}
function getNodeForCharacterOffset$$module$react$lib$getNodeForCharacterOffset(root, offset) {
  var node = getLeafNode$$module$react$lib$getNodeForCharacterOffset(root);
  var nodeStart = 0;
  var nodeEnd = 0;
  while (node) {
    if (node.nodeType === 3) {
      nodeEnd = nodeStart + node.textContent.length;
      if (nodeStart <= offset && nodeEnd >= offset) {
        return {node:node, offset:offset - nodeStart};
      }
      nodeStart = nodeEnd;
    }
    node = getLeafNode$$module$react$lib$getNodeForCharacterOffset(getSiblingNode$$module$react$lib$getNodeForCharacterOffset(node));
  }
}
module$react$lib$getNodeForCharacterOffset = getNodeForCharacterOffset$$module$react$lib$getNodeForCharacterOffset;
