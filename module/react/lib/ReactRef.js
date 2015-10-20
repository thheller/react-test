goog.provide("module$react$lib$ReactRef");
goog.require("module$react$lib$ReactOwner");
var ReactOwner$$module$react$lib$ReactRef = module$react$lib$ReactOwner;
var ReactRef$$module$react$lib$ReactRef = {};
function attachRef$$module$react$lib$ReactRef(ref, component, owner) {
  if (typeof ref === "function") {
    ref(component.getPublicInstance());
  } else {
    ReactOwner$$module$react$lib$ReactRef.addComponentAsRefTo(component, ref, owner);
  }
}
function detachRef$$module$react$lib$ReactRef(ref, component, owner) {
  if (typeof ref === "function") {
    ref(null);
  } else {
    ReactOwner$$module$react$lib$ReactRef.removeComponentAsRefFrom(component, ref, owner);
  }
}
ReactRef$$module$react$lib$ReactRef.attachRefs = function(instance, element) {
  var ref = element.ref;
  if (ref != null) {
    attachRef$$module$react$lib$ReactRef(ref, instance, element._owner);
  }
};
ReactRef$$module$react$lib$ReactRef.shouldUpdateRefs = function(prevElement, nextElement) {
  return nextElement._owner !== prevElement._owner || nextElement.ref !== prevElement.ref;
};
ReactRef$$module$react$lib$ReactRef.detachRefs = function(instance, element) {
  var ref = element.ref;
  if (ref != null) {
    detachRef$$module$react$lib$ReactRef(ref, instance, element._owner);
  }
};
module$react$lib$ReactRef = ReactRef$$module$react$lib$ReactRef;
