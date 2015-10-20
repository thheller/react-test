goog.provide("module$react$lib$flattenChildren");
goog.require("module$react$lib$warning");
goog.require("module$react$lib$traverseAllChildren");
var traverseAllChildren$$module$react$lib$flattenChildren = module$react$lib$traverseAllChildren;
var warning$$module$react$lib$flattenChildren = module$react$lib$warning;
function flattenSingleChildIntoContext$$module$react$lib$flattenChildren(traverseContext, child, name) {
  var result = traverseContext;
  var keyUnique = !result.hasOwnProperty(name);
  if ("production" !== process.env.NODE_ENV) {
    "production" !== process.env.NODE_ENV ? warning$$module$react$lib$flattenChildren(keyUnique, "flattenChildren(...): Encountered two children with the same key, " + "`%s`. Child keys must be unique; when two children share a key, only " + "the first child will be used.", name) : null;
  }
  if (keyUnique && child != null) {
    result[name] = child;
  }
}
function flattenChildren$$module$react$lib$flattenChildren(children) {
  if (children == null) {
    return children;
  }
  var result = {};
  traverseAllChildren$$module$react$lib$flattenChildren(children, flattenSingleChildIntoContext$$module$react$lib$flattenChildren, result);
  return result;
}
module$react$lib$flattenChildren = flattenChildren$$module$react$lib$flattenChildren;
