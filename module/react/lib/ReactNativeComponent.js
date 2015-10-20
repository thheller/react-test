goog.provide("module$react$lib$ReactNativeComponent");
goog.require("module$react$lib$invariant");
goog.require("module$react$lib$Object_assign");
var assign$$module$react$lib$ReactNativeComponent = module$react$lib$Object_assign;
var invariant$$module$react$lib$ReactNativeComponent = module$react$lib$invariant;
var autoGenerateWrapperClass$$module$react$lib$ReactNativeComponent = null;
var genericComponentClass$$module$react$lib$ReactNativeComponent = null;
var tagToComponentClass$$module$react$lib$ReactNativeComponent = {};
var textComponentClass$$module$react$lib$ReactNativeComponent = null;
var ReactNativeComponentInjection$$module$react$lib$ReactNativeComponent = {injectGenericComponentClass:function(componentClass) {
  genericComponentClass$$module$react$lib$ReactNativeComponent = componentClass;
}, injectTextComponentClass:function(componentClass) {
  textComponentClass$$module$react$lib$ReactNativeComponent = componentClass;
}, injectComponentClasses:function(componentClasses) {
  assign$$module$react$lib$ReactNativeComponent(tagToComponentClass$$module$react$lib$ReactNativeComponent, componentClasses);
}, injectAutoWrapper:function(wrapperFactory) {
  autoGenerateWrapperClass$$module$react$lib$ReactNativeComponent = wrapperFactory;
}};
function getComponentClassForElement$$module$react$lib$ReactNativeComponent(element) {
  if (typeof element.type === "function") {
    return element.type;
  }
  var tag = element.type;
  var componentClass = tagToComponentClass$$module$react$lib$ReactNativeComponent[tag];
  if (componentClass == null) {
    tagToComponentClass$$module$react$lib$ReactNativeComponent[tag] = componentClass = autoGenerateWrapperClass$$module$react$lib$ReactNativeComponent(tag);
  }
  return componentClass;
}
function createInternalComponent$$module$react$lib$ReactNativeComponent(element) {
  "production" !== process.env.NODE_ENV ? invariant$$module$react$lib$ReactNativeComponent(genericComponentClass$$module$react$lib$ReactNativeComponent, "There is no registered component for the tag %s", element.type) : invariant$$module$react$lib$ReactNativeComponent(genericComponentClass$$module$react$lib$ReactNativeComponent);
  return new genericComponentClass$$module$react$lib$ReactNativeComponent(element.type, element.props);
}
function createInstanceForText$$module$react$lib$ReactNativeComponent(text) {
  return new textComponentClass$$module$react$lib$ReactNativeComponent(text);
}
function isTextComponent$$module$react$lib$ReactNativeComponent(component) {
  return component instanceof textComponentClass$$module$react$lib$ReactNativeComponent;
}
var ReactNativeComponent$$module$react$lib$ReactNativeComponent = {getComponentClassForElement:getComponentClassForElement$$module$react$lib$ReactNativeComponent, createInternalComponent:createInternalComponent$$module$react$lib$ReactNativeComponent, createInstanceForText:createInstanceForText$$module$react$lib$ReactNativeComponent, isTextComponent:isTextComponent$$module$react$lib$ReactNativeComponent, injection:ReactNativeComponentInjection$$module$react$lib$ReactNativeComponent};
module$react$lib$ReactNativeComponent = ReactNativeComponent$$module$react$lib$ReactNativeComponent;
