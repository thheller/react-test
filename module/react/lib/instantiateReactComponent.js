goog.provide("module$react$lib$instantiateReactComponent");
goog.require("module$react$lib$warning");
goog.require("module$react$lib$invariant");
goog.require("module$react$lib$Object_assign");
goog.require("module$react$lib$ReactNativeComponent");
goog.require("module$react$lib$ReactEmptyComponent");
goog.require("module$react$lib$ReactCompositeComponent");
var ReactCompositeComponent$$module$react$lib$instantiateReactComponent = module$react$lib$ReactCompositeComponent;
var ReactEmptyComponent$$module$react$lib$instantiateReactComponent = module$react$lib$ReactEmptyComponent;
var ReactNativeComponent$$module$react$lib$instantiateReactComponent = module$react$lib$ReactNativeComponent;
var assign$$module$react$lib$instantiateReactComponent = module$react$lib$Object_assign;
var invariant$$module$react$lib$instantiateReactComponent = module$react$lib$invariant;
var warning$$module$react$lib$instantiateReactComponent = module$react$lib$warning;
var ReactCompositeComponentWrapper$$module$react$lib$instantiateReactComponent = function() {
};
assign$$module$react$lib$instantiateReactComponent(ReactCompositeComponentWrapper$$module$react$lib$instantiateReactComponent.prototype, ReactCompositeComponent$$module$react$lib$instantiateReactComponent.Mixin, {_instantiateReactComponent:instantiateReactComponent$$module$react$lib$instantiateReactComponent});
function isInternalComponentType$$module$react$lib$instantiateReactComponent(type) {
  return typeof type === "function" && typeof type.prototype !== "undefined" && typeof type.prototype.mountComponent === "function" && typeof type.prototype.receiveComponent === "function";
}
function instantiateReactComponent$$module$react$lib$instantiateReactComponent(node, parentCompositeType) {
  var instance;
  if (node === null || node === false) {
    node = ReactEmptyComponent$$module$react$lib$instantiateReactComponent.emptyElement;
  }
  if (typeof node === "object") {
    var element = node;
    if ("production" !== process.env.NODE_ENV) {
      "production" !== process.env.NODE_ENV ? warning$$module$react$lib$instantiateReactComponent(element && (typeof element.type === "function" || typeof element.type === "string"), "Only functions or strings can be mounted as React components.") : null;
    }
    if (parentCompositeType === element.type && typeof element.type === "string") {
      instance = ReactNativeComponent$$module$react$lib$instantiateReactComponent.createInternalComponent(element);
    } else {
      if (isInternalComponentType$$module$react$lib$instantiateReactComponent(element.type)) {
        instance = new element.type(element);
      } else {
        instance = new ReactCompositeComponentWrapper$$module$react$lib$instantiateReactComponent;
      }
    }
  } else {
    if (typeof node === "string" || typeof node === "number") {
      instance = ReactNativeComponent$$module$react$lib$instantiateReactComponent.createInstanceForText(node);
    } else {
      "production" !== process.env.NODE_ENV ? invariant$$module$react$lib$instantiateReactComponent(false, "Encountered invalid React node of type %s", typeof node) : invariant$$module$react$lib$instantiateReactComponent(false);
    }
  }
  if ("production" !== process.env.NODE_ENV) {
    "production" !== process.env.NODE_ENV ? warning$$module$react$lib$instantiateReactComponent(typeof instance.construct === "function" && typeof instance.mountComponent === "function" && typeof instance.receiveComponent === "function" && typeof instance.unmountComponent === "function", "Only React Components can be mounted.") : null;
  }
  instance.construct(node);
  instance._mountIndex = 0;
  instance._mountImage = null;
  if ("production" !== process.env.NODE_ENV) {
    instance._isOwnerNecessary = false;
    instance._warnedAboutRefsInRender = false;
  }
  if ("production" !== process.env.NODE_ENV) {
    if (Object.preventExtensions) {
      Object.preventExtensions(instance);
    }
  }
  return instance;
}
module$react$lib$instantiateReactComponent = instantiateReactComponent$$module$react$lib$instantiateReactComponent;
