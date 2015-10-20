goog.provide("module$react$lib$traverseAllChildren");
goog.require("module$react$lib$warning");
goog.require("module$react$lib$invariant");
goog.require("module$react$lib$getIteratorFn");
goog.require("module$react$lib$ReactInstanceHandles");
goog.require("module$react$lib$ReactFragment");
goog.require("module$react$lib$ReactElement");
var ReactElement$$module$react$lib$traverseAllChildren = module$react$lib$ReactElement;
var ReactFragment$$module$react$lib$traverseAllChildren = module$react$lib$ReactFragment;
var ReactInstanceHandles$$module$react$lib$traverseAllChildren = module$react$lib$ReactInstanceHandles;
var getIteratorFn$$module$react$lib$traverseAllChildren = module$react$lib$getIteratorFn;
var invariant$$module$react$lib$traverseAllChildren = module$react$lib$invariant;
var warning$$module$react$lib$traverseAllChildren = module$react$lib$warning;
var SEPARATOR$$module$react$lib$traverseAllChildren = ReactInstanceHandles$$module$react$lib$traverseAllChildren.SEPARATOR;
var SUBSEPARATOR$$module$react$lib$traverseAllChildren = ":";
var userProvidedKeyEscaperLookup$$module$react$lib$traverseAllChildren = {"\x3d":"\x3d0", ".":"\x3d1", ":":"\x3d2"};
var userProvidedKeyEscapeRegex$$module$react$lib$traverseAllChildren = /[=.:]/g;
var didWarnAboutMaps$$module$react$lib$traverseAllChildren = false;
function userProvidedKeyEscaper$$module$react$lib$traverseAllChildren(match) {
  return userProvidedKeyEscaperLookup$$module$react$lib$traverseAllChildren[match];
}
function getComponentKey$$module$react$lib$traverseAllChildren(component, index) {
  if (component && component.key != null) {
    return wrapUserProvidedKey$$module$react$lib$traverseAllChildren(component.key);
  }
  return index.toString(36);
}
function escapeUserProvidedKey$$module$react$lib$traverseAllChildren(text) {
  return ("" + text).replace(userProvidedKeyEscapeRegex$$module$react$lib$traverseAllChildren, userProvidedKeyEscaper$$module$react$lib$traverseAllChildren);
}
function wrapUserProvidedKey$$module$react$lib$traverseAllChildren(key) {
  return "$" + escapeUserProvidedKey$$module$react$lib$traverseAllChildren(key);
}
function traverseAllChildrenImpl$$module$react$lib$traverseAllChildren(children, nameSoFar, indexSoFar, callback, traverseContext) {
  var type = typeof children;
  if (type === "undefined" || type === "boolean") {
    children = null;
  }
  if (children === null || type === "string" || type === "number" || ReactElement$$module$react$lib$traverseAllChildren.isValidElement(children)) {
    callback(traverseContext, children, nameSoFar === "" ? SEPARATOR$$module$react$lib$traverseAllChildren + getComponentKey$$module$react$lib$traverseAllChildren(children, 0) : nameSoFar, indexSoFar);
    return 1;
  }
  var child, nextName, nextIndex;
  var subtreeCount = 0;
  if (Array.isArray(children)) {
    for (var i = 0;i < children.length;i++) {
      child = children[i];
      nextName = (nameSoFar !== "" ? nameSoFar + SUBSEPARATOR$$module$react$lib$traverseAllChildren : SEPARATOR$$module$react$lib$traverseAllChildren) + getComponentKey$$module$react$lib$traverseAllChildren(child, i);
      nextIndex = indexSoFar + subtreeCount;
      subtreeCount += traverseAllChildrenImpl$$module$react$lib$traverseAllChildren(child, nextName, nextIndex, callback, traverseContext);
    }
  } else {
    var iteratorFn = getIteratorFn$$module$react$lib$traverseAllChildren(children);
    if (iteratorFn) {
      var iterator = iteratorFn.call(children);
      var step;
      if (iteratorFn !== children.entries) {
        var ii = 0;
        while (!(step = iterator.next()).done) {
          child = step.value;
          nextName = (nameSoFar !== "" ? nameSoFar + SUBSEPARATOR$$module$react$lib$traverseAllChildren : SEPARATOR$$module$react$lib$traverseAllChildren) + getComponentKey$$module$react$lib$traverseAllChildren(child, ii++);
          nextIndex = indexSoFar + subtreeCount;
          subtreeCount += traverseAllChildrenImpl$$module$react$lib$traverseAllChildren(child, nextName, nextIndex, callback, traverseContext);
        }
      } else {
        if ("production" !== process.env.NODE_ENV) {
          "production" !== process.env.NODE_ENV ? warning$$module$react$lib$traverseAllChildren(didWarnAboutMaps$$module$react$lib$traverseAllChildren, "Using Maps as children is not yet fully supported. It is an " + "experimental feature that might be removed. Convert it to a " + "sequence / iterable of keyed ReactElements instead.") : null;
          didWarnAboutMaps$$module$react$lib$traverseAllChildren = true;
        }
        while (!(step = iterator.next()).done) {
          var entry = step.value;
          if (entry) {
            child = entry[1];
            nextName = (nameSoFar !== "" ? nameSoFar + SUBSEPARATOR$$module$react$lib$traverseAllChildren : SEPARATOR$$module$react$lib$traverseAllChildren) + wrapUserProvidedKey$$module$react$lib$traverseAllChildren(entry[0]) + SUBSEPARATOR$$module$react$lib$traverseAllChildren + getComponentKey$$module$react$lib$traverseAllChildren(child, 0);
            nextIndex = indexSoFar + subtreeCount;
            subtreeCount += traverseAllChildrenImpl$$module$react$lib$traverseAllChildren(child, nextName, nextIndex, callback, traverseContext);
          }
        }
      }
    } else {
      if (type === "object") {
        "production" !== process.env.NODE_ENV ? invariant$$module$react$lib$traverseAllChildren(children.nodeType !== 1, "traverseAllChildren(...): Encountered an invalid child; DOM " + "elements are not valid children of React components.") : invariant$$module$react$lib$traverseAllChildren(children.nodeType !== 1);
        var fragment = ReactFragment$$module$react$lib$traverseAllChildren.extract(children);
        for (var key in fragment) {
          if (fragment.hasOwnProperty(key)) {
            child = fragment[key];
            nextName = (nameSoFar !== "" ? nameSoFar + SUBSEPARATOR$$module$react$lib$traverseAllChildren : SEPARATOR$$module$react$lib$traverseAllChildren) + wrapUserProvidedKey$$module$react$lib$traverseAllChildren(key) + SUBSEPARATOR$$module$react$lib$traverseAllChildren + getComponentKey$$module$react$lib$traverseAllChildren(child, 0);
            nextIndex = indexSoFar + subtreeCount;
            subtreeCount += traverseAllChildrenImpl$$module$react$lib$traverseAllChildren(child, nextName, nextIndex, callback, traverseContext);
          }
        }
      }
    }
  }
  return subtreeCount;
}
function traverseAllChildren$$module$react$lib$traverseAllChildren(children, callback, traverseContext) {
  if (children == null) {
    return 0;
  }
  return traverseAllChildrenImpl$$module$react$lib$traverseAllChildren(children, "", 0, callback, traverseContext);
}
module$react$lib$traverseAllChildren = traverseAllChildren$$module$react$lib$traverseAllChildren;
