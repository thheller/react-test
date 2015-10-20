goog.provide("module$react$lib$ReactChildReconciler");
goog.require("module$react$lib$shouldUpdateReactComponent");
goog.require("module$react$lib$instantiateReactComponent");
goog.require("module$react$lib$flattenChildren");
goog.require("module$react$lib$ReactReconciler");
var ReactReconciler$$module$react$lib$ReactChildReconciler = module$react$lib$ReactReconciler;
var flattenChildren$$module$react$lib$ReactChildReconciler = module$react$lib$flattenChildren;
var instantiateReactComponent$$module$react$lib$ReactChildReconciler = module$react$lib$instantiateReactComponent;
var shouldUpdateReactComponent$$module$react$lib$ReactChildReconciler = module$react$lib$shouldUpdateReactComponent;
var ReactChildReconciler$$module$react$lib$ReactChildReconciler = {instantiateChildren:function(nestedChildNodes, transaction, context) {
  var children = flattenChildren$$module$react$lib$ReactChildReconciler(nestedChildNodes);
  for (var name in children) {
    if (children.hasOwnProperty(name)) {
      var child = children[name];
      var childInstance = instantiateReactComponent$$module$react$lib$ReactChildReconciler(child, null);
      children[name] = childInstance;
    }
  }
  return children;
}, updateChildren:function(prevChildren, nextNestedChildNodes, transaction, context) {
  var nextChildren = flattenChildren$$module$react$lib$ReactChildReconciler(nextNestedChildNodes);
  if (!nextChildren && !prevChildren) {
    return null;
  }
  var name;
  for (name in nextChildren) {
    if (!nextChildren.hasOwnProperty(name)) {
      continue;
    }
    var prevChild = prevChildren && prevChildren[name];
    var prevElement = prevChild && prevChild._currentElement;
    var nextElement = nextChildren[name];
    if (shouldUpdateReactComponent$$module$react$lib$ReactChildReconciler(prevElement, nextElement)) {
      ReactReconciler$$module$react$lib$ReactChildReconciler.receiveComponent(prevChild, nextElement, transaction, context);
      nextChildren[name] = prevChild;
    } else {
      if (prevChild) {
        ReactReconciler$$module$react$lib$ReactChildReconciler.unmountComponent(prevChild, name);
      }
      var nextChildInstance = instantiateReactComponent$$module$react$lib$ReactChildReconciler(nextElement, null);
      nextChildren[name] = nextChildInstance;
    }
  }
  for (name in prevChildren) {
    if (prevChildren.hasOwnProperty(name) && !(nextChildren && nextChildren.hasOwnProperty(name))) {
      ReactReconciler$$module$react$lib$ReactChildReconciler.unmountComponent(prevChildren[name]);
    }
  }
  return nextChildren;
}, unmountChildren:function(renderedChildren) {
  for (var name in renderedChildren) {
    var renderedChild = renderedChildren[name];
    ReactReconciler$$module$react$lib$ReactChildReconciler.unmountComponent(renderedChild);
  }
}};
module$react$lib$ReactChildReconciler = ReactChildReconciler$$module$react$lib$ReactChildReconciler;
