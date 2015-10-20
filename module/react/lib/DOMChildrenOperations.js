goog.provide("module$react$lib$DOMChildrenOperations");
goog.require("module$react$lib$invariant");
goog.require("module$react$lib$setTextContent");
goog.require("module$react$lib$ReactMultiChildUpdateTypes");
goog.require("module$react$lib$Danger");
var Danger$$module$react$lib$DOMChildrenOperations = module$react$lib$Danger;
var ReactMultiChildUpdateTypes$$module$react$lib$DOMChildrenOperations = module$react$lib$ReactMultiChildUpdateTypes;
var setTextContent$$module$react$lib$DOMChildrenOperations = module$react$lib$setTextContent;
var invariant$$module$react$lib$DOMChildrenOperations = module$react$lib$invariant;
function insertChildAt$$module$react$lib$DOMChildrenOperations(parentNode, childNode, index) {
  parentNode.insertBefore(childNode, parentNode.childNodes[index] || null);
}
var DOMChildrenOperations$$module$react$lib$DOMChildrenOperations = {dangerouslyReplaceNodeWithMarkup:Danger$$module$react$lib$DOMChildrenOperations.dangerouslyReplaceNodeWithMarkup, updateTextContent:setTextContent$$module$react$lib$DOMChildrenOperations, processUpdates:function(updates, markupList) {
  var update;
  var initialChildren = null;
  var updatedChildren = null;
  for (var i = 0;i < updates.length;i++) {
    update = updates[i];
    if (update.type === ReactMultiChildUpdateTypes$$module$react$lib$DOMChildrenOperations.MOVE_EXISTING || update.type === ReactMultiChildUpdateTypes$$module$react$lib$DOMChildrenOperations.REMOVE_NODE) {
      var updatedIndex = update.fromIndex;
      var updatedChild = update.parentNode.childNodes[updatedIndex];
      var parentID = update.parentID;
      "production" !== process.env.NODE_ENV ? invariant$$module$react$lib$DOMChildrenOperations(updatedChild, "processUpdates(): Unable to find child %s of element. This " + "probably means the DOM was unexpectedly mutated (e.g., by the " + "browser), usually due to forgetting a \x3ctbody\x3e when using tables, " + "nesting tags like \x3cform\x3e, \x3cp\x3e, or \x3ca\x3e, or using non-SVG elements " + "in an \x3csvg\x3e parent. Try inspecting the child nodes of the element " + "with React ID `%s`.", 
      updatedIndex, parentID) : invariant$$module$react$lib$DOMChildrenOperations(updatedChild);
      initialChildren = initialChildren || {};
      initialChildren[parentID] = initialChildren[parentID] || [];
      initialChildren[parentID][updatedIndex] = updatedChild;
      updatedChildren = updatedChildren || [];
      updatedChildren.push(updatedChild);
    }
  }
  var renderedMarkup = Danger$$module$react$lib$DOMChildrenOperations.dangerouslyRenderMarkup(markupList);
  if (updatedChildren) {
    for (var j = 0;j < updatedChildren.length;j++) {
      updatedChildren[j].parentNode.removeChild(updatedChildren[j]);
    }
  }
  for (var k = 0;k < updates.length;k++) {
    update = updates[k];
    switch(update.type) {
      case ReactMultiChildUpdateTypes$$module$react$lib$DOMChildrenOperations.INSERT_MARKUP:
        insertChildAt$$module$react$lib$DOMChildrenOperations(update.parentNode, renderedMarkup[update.markupIndex], update.toIndex);
        break;
      case ReactMultiChildUpdateTypes$$module$react$lib$DOMChildrenOperations.MOVE_EXISTING:
        insertChildAt$$module$react$lib$DOMChildrenOperations(update.parentNode, initialChildren[update.parentID][update.fromIndex], update.toIndex);
        break;
      case ReactMultiChildUpdateTypes$$module$react$lib$DOMChildrenOperations.TEXT_CONTENT:
        setTextContent$$module$react$lib$DOMChildrenOperations(update.parentNode, update.textContent);
        break;
      case ReactMultiChildUpdateTypes$$module$react$lib$DOMChildrenOperations.REMOVE_NODE:
        break;
    }
  }
}};
module$react$lib$DOMChildrenOperations = DOMChildrenOperations$$module$react$lib$DOMChildrenOperations;
