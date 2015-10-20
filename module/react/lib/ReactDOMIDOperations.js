goog.provide("module$react$lib$ReactDOMIDOperations");
goog.require("module$react$lib$setInnerHTML");
goog.require("module$react$lib$invariant");
goog.require("module$react$lib$ReactPerf");
goog.require("module$react$lib$ReactMount");
goog.require("module$react$lib$DOMPropertyOperations");
goog.require("module$react$lib$DOMChildrenOperations");
goog.require("module$react$lib$CSSPropertyOperations");
var CSSPropertyOperations$$module$react$lib$ReactDOMIDOperations = module$react$lib$CSSPropertyOperations;
var DOMChildrenOperations$$module$react$lib$ReactDOMIDOperations = module$react$lib$DOMChildrenOperations;
var DOMPropertyOperations$$module$react$lib$ReactDOMIDOperations = module$react$lib$DOMPropertyOperations;
var ReactMount$$module$react$lib$ReactDOMIDOperations = module$react$lib$ReactMount;
var ReactPerf$$module$react$lib$ReactDOMIDOperations = module$react$lib$ReactPerf;
var invariant$$module$react$lib$ReactDOMIDOperations = module$react$lib$invariant;
var setInnerHTML$$module$react$lib$ReactDOMIDOperations = module$react$lib$setInnerHTML;
var INVALID_PROPERTY_ERRORS$$module$react$lib$ReactDOMIDOperations = {dangerouslySetInnerHTML:"`dangerouslySetInnerHTML` must be set using `updateInnerHTMLByID()`.", style:"`style` must be set using `updateStylesByID()`."};
var ReactDOMIDOperations$$module$react$lib$ReactDOMIDOperations = {updatePropertyByID:function(id, name, value) {
  var node = ReactMount$$module$react$lib$ReactDOMIDOperations.getNode(id);
  "production" !== process.env.NODE_ENV ? invariant$$module$react$lib$ReactDOMIDOperations(!INVALID_PROPERTY_ERRORS$$module$react$lib$ReactDOMIDOperations.hasOwnProperty(name), "updatePropertyByID(...): %s", INVALID_PROPERTY_ERRORS$$module$react$lib$ReactDOMIDOperations[name]) : invariant$$module$react$lib$ReactDOMIDOperations(!INVALID_PROPERTY_ERRORS$$module$react$lib$ReactDOMIDOperations.hasOwnProperty(name));
  if (value != null) {
    DOMPropertyOperations$$module$react$lib$ReactDOMIDOperations.setValueForProperty(node, name, value);
  } else {
    DOMPropertyOperations$$module$react$lib$ReactDOMIDOperations.deleteValueForProperty(node, name);
  }
}, deletePropertyByID:function(id, name, value) {
  var node = ReactMount$$module$react$lib$ReactDOMIDOperations.getNode(id);
  "production" !== process.env.NODE_ENV ? invariant$$module$react$lib$ReactDOMIDOperations(!INVALID_PROPERTY_ERRORS$$module$react$lib$ReactDOMIDOperations.hasOwnProperty(name), "updatePropertyByID(...): %s", INVALID_PROPERTY_ERRORS$$module$react$lib$ReactDOMIDOperations[name]) : invariant$$module$react$lib$ReactDOMIDOperations(!INVALID_PROPERTY_ERRORS$$module$react$lib$ReactDOMIDOperations.hasOwnProperty(name));
  DOMPropertyOperations$$module$react$lib$ReactDOMIDOperations.deleteValueForProperty(node, name, value);
}, updateStylesByID:function(id, styles) {
  var node = ReactMount$$module$react$lib$ReactDOMIDOperations.getNode(id);
  CSSPropertyOperations$$module$react$lib$ReactDOMIDOperations.setValueForStyles(node, styles);
}, updateInnerHTMLByID:function(id, html) {
  var node = ReactMount$$module$react$lib$ReactDOMIDOperations.getNode(id);
  setInnerHTML$$module$react$lib$ReactDOMIDOperations(node, html);
}, updateTextContentByID:function(id, content) {
  var node = ReactMount$$module$react$lib$ReactDOMIDOperations.getNode(id);
  DOMChildrenOperations$$module$react$lib$ReactDOMIDOperations.updateTextContent(node, content);
}, dangerouslyReplaceNodeWithMarkupByID:function(id, markup) {
  var node = ReactMount$$module$react$lib$ReactDOMIDOperations.getNode(id);
  DOMChildrenOperations$$module$react$lib$ReactDOMIDOperations.dangerouslyReplaceNodeWithMarkup(node, markup);
}, dangerouslyProcessChildrenUpdates:function(updates, markup) {
  for (var i = 0;i < updates.length;i++) {
    updates[i].parentNode = ReactMount$$module$react$lib$ReactDOMIDOperations.getNode(updates[i].parentID);
  }
  DOMChildrenOperations$$module$react$lib$ReactDOMIDOperations.processUpdates(updates, markup);
}};
ReactPerf$$module$react$lib$ReactDOMIDOperations.measureMethods(ReactDOMIDOperations$$module$react$lib$ReactDOMIDOperations, "ReactDOMIDOperations", {updatePropertyByID:"updatePropertyByID", deletePropertyByID:"deletePropertyByID", updateStylesByID:"updateStylesByID", updateInnerHTMLByID:"updateInnerHTMLByID", updateTextContentByID:"updateTextContentByID", dangerouslyReplaceNodeWithMarkupByID:"dangerouslyReplaceNodeWithMarkupByID", dangerouslyProcessChildrenUpdates:"dangerouslyProcessChildrenUpdates"});
module$react$lib$ReactDOMIDOperations = ReactDOMIDOperations$$module$react$lib$ReactDOMIDOperations;
