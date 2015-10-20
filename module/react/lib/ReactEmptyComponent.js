goog.provide("module$react$lib$ReactEmptyComponent");
goog.require("module$react$lib$invariant");
goog.require("module$react$lib$ReactInstanceMap");
goog.require("module$react$lib$ReactElement");
var ReactElement$$module$react$lib$ReactEmptyComponent = module$react$lib$ReactElement;
var ReactInstanceMap$$module$react$lib$ReactEmptyComponent = module$react$lib$ReactInstanceMap;
var invariant$$module$react$lib$ReactEmptyComponent = module$react$lib$invariant;
var component$$module$react$lib$ReactEmptyComponent;
var nullComponentIDsRegistry$$module$react$lib$ReactEmptyComponent = {};
var ReactEmptyComponentInjection$$module$react$lib$ReactEmptyComponent = {injectEmptyComponent:function(emptyComponent) {
  component$$module$react$lib$ReactEmptyComponent = ReactElement$$module$react$lib$ReactEmptyComponent.createFactory(emptyComponent);
}};
var ReactEmptyComponentType$$module$react$lib$ReactEmptyComponent = function() {
};
ReactEmptyComponentType$$module$react$lib$ReactEmptyComponent.prototype.componentDidMount = function() {
  var internalInstance = ReactInstanceMap$$module$react$lib$ReactEmptyComponent.get(this);
  if (!internalInstance) {
    return;
  }
  registerNullComponentID$$module$react$lib$ReactEmptyComponent(internalInstance._rootNodeID);
};
ReactEmptyComponentType$$module$react$lib$ReactEmptyComponent.prototype.componentWillUnmount = function() {
  var internalInstance = ReactInstanceMap$$module$react$lib$ReactEmptyComponent.get(this);
  if (!internalInstance) {
    return;
  }
  deregisterNullComponentID$$module$react$lib$ReactEmptyComponent(internalInstance._rootNodeID);
};
ReactEmptyComponentType$$module$react$lib$ReactEmptyComponent.prototype.render = function() {
  "production" !== process.env.NODE_ENV ? invariant$$module$react$lib$ReactEmptyComponent(component$$module$react$lib$ReactEmptyComponent, "Trying to return null from a render, but no null placeholder component " + "was injected.") : invariant$$module$react$lib$ReactEmptyComponent(component$$module$react$lib$ReactEmptyComponent);
  return component$$module$react$lib$ReactEmptyComponent();
};
var emptyElement$$module$react$lib$ReactEmptyComponent = ReactElement$$module$react$lib$ReactEmptyComponent.createElement(ReactEmptyComponentType$$module$react$lib$ReactEmptyComponent);
function registerNullComponentID$$module$react$lib$ReactEmptyComponent(id) {
  nullComponentIDsRegistry$$module$react$lib$ReactEmptyComponent[id] = true;
}
function deregisterNullComponentID$$module$react$lib$ReactEmptyComponent(id) {
  delete nullComponentIDsRegistry$$module$react$lib$ReactEmptyComponent[id];
}
function isNullComponentID$$module$react$lib$ReactEmptyComponent(id) {
  return !!nullComponentIDsRegistry$$module$react$lib$ReactEmptyComponent[id];
}
var ReactEmptyComponent$$module$react$lib$ReactEmptyComponent = {emptyElement:emptyElement$$module$react$lib$ReactEmptyComponent, injection:ReactEmptyComponentInjection$$module$react$lib$ReactEmptyComponent, isNullComponentID:isNullComponentID$$module$react$lib$ReactEmptyComponent};
module$react$lib$ReactEmptyComponent = ReactEmptyComponent$$module$react$lib$ReactEmptyComponent;
