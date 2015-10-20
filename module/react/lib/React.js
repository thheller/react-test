goog.provide("module$react$lib$React");
goog.require("module$react$lib$ExecutionEnvironment");
goog.require("module$react$lib$onlyChild");
goog.require("module$react$lib$findDOMNode");
goog.require("module$react$lib$Object_assign");
goog.require("module$react$lib$ReactServerRendering");
goog.require("module$react$lib$ReactReconciler");
goog.require("module$react$lib$ReactPropTypes");
goog.require("module$react$lib$ReactPerf");
goog.require("module$react$lib$ReactMount");
goog.require("module$react$lib$ReactInstanceHandles");
goog.require("module$react$lib$ReactDefaultInjection");
goog.require("module$react$lib$ReactDOMTextComponent");
goog.require("module$react$lib$ReactDOM");
goog.require("module$react$lib$ReactElementValidator");
goog.require("module$react$lib$ReactElement");
goog.require("module$react$lib$ReactCurrentOwner");
goog.require("module$react$lib$ReactContext");
goog.require("module$react$lib$ReactClass");
goog.require("module$react$lib$ReactComponent");
goog.require("module$react$lib$ReactChildren");
goog.require("module$react$lib$EventPluginUtils");
var EventPluginUtils$$module$react$lib$React = module$react$lib$EventPluginUtils;
var ReactChildren$$module$react$lib$React = module$react$lib$ReactChildren;
var ReactComponent$$module$react$lib$React = module$react$lib$ReactComponent;
var ReactClass$$module$react$lib$React = module$react$lib$ReactClass;
var ReactContext$$module$react$lib$React = module$react$lib$ReactContext;
var ReactCurrentOwner$$module$react$lib$React = module$react$lib$ReactCurrentOwner;
var ReactElement$$module$react$lib$React = module$react$lib$ReactElement;
var ReactElementValidator$$module$react$lib$React = module$react$lib$ReactElementValidator;
var ReactDOM$$module$react$lib$React = module$react$lib$ReactDOM;
var ReactDOMTextComponent$$module$react$lib$React = module$react$lib$ReactDOMTextComponent;
var ReactDefaultInjection$$module$react$lib$React = module$react$lib$ReactDefaultInjection;
var ReactInstanceHandles$$module$react$lib$React = module$react$lib$ReactInstanceHandles;
var ReactMount$$module$react$lib$React = module$react$lib$ReactMount;
var ReactPerf$$module$react$lib$React = module$react$lib$ReactPerf;
var ReactPropTypes$$module$react$lib$React = module$react$lib$ReactPropTypes;
var ReactReconciler$$module$react$lib$React = module$react$lib$ReactReconciler;
var ReactServerRendering$$module$react$lib$React = module$react$lib$ReactServerRendering;
var assign$$module$react$lib$React = module$react$lib$Object_assign;
var findDOMNode$$module$react$lib$React = module$react$lib$findDOMNode;
var onlyChild$$module$react$lib$React = module$react$lib$onlyChild;
ReactDefaultInjection$$module$react$lib$React.inject();
var createElement$$module$react$lib$React = ReactElement$$module$react$lib$React.createElement;
var createFactory$$module$react$lib$React = ReactElement$$module$react$lib$React.createFactory;
var cloneElement$$module$react$lib$React = ReactElement$$module$react$lib$React.cloneElement;
if ("production" !== process.env.NODE_ENV) {
  createElement$$module$react$lib$React = ReactElementValidator$$module$react$lib$React.createElement;
  createFactory$$module$react$lib$React = ReactElementValidator$$module$react$lib$React.createFactory;
  cloneElement$$module$react$lib$React = ReactElementValidator$$module$react$lib$React.cloneElement;
}
var render$$module$react$lib$React = ReactPerf$$module$react$lib$React.measure("React", "render", ReactMount$$module$react$lib$React.render);
var React$$module$react$lib$React = {Children:{map:ReactChildren$$module$react$lib$React.map, forEach:ReactChildren$$module$react$lib$React.forEach, count:ReactChildren$$module$react$lib$React.count, only:onlyChild$$module$react$lib$React}, Component:ReactComponent$$module$react$lib$React, DOM:ReactDOM$$module$react$lib$React, PropTypes:ReactPropTypes$$module$react$lib$React, initializeTouchEvents:function(shouldUseTouch) {
  EventPluginUtils$$module$react$lib$React.useTouchEvents = shouldUseTouch;
}, createClass:ReactClass$$module$react$lib$React.createClass, createElement:createElement$$module$react$lib$React, cloneElement:cloneElement$$module$react$lib$React, createFactory:createFactory$$module$react$lib$React, createMixin:function(mixin) {
  return mixin;
}, constructAndRenderComponent:ReactMount$$module$react$lib$React.constructAndRenderComponent, constructAndRenderComponentByID:ReactMount$$module$react$lib$React.constructAndRenderComponentByID, findDOMNode:findDOMNode$$module$react$lib$React, render:render$$module$react$lib$React, renderToString:ReactServerRendering$$module$react$lib$React.renderToString, renderToStaticMarkup:ReactServerRendering$$module$react$lib$React.renderToStaticMarkup, unmountComponentAtNode:ReactMount$$module$react$lib$React.unmountComponentAtNode, 
isValidElement:ReactElement$$module$react$lib$React.isValidElement, withContext:ReactContext$$module$react$lib$React.withContext, __spread:assign$$module$react$lib$React};
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ !== "undefined" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.inject === "function") {
  __REACT_DEVTOOLS_GLOBAL_HOOK__.inject({CurrentOwner:ReactCurrentOwner$$module$react$lib$React, InstanceHandles:ReactInstanceHandles$$module$react$lib$React, Mount:ReactMount$$module$react$lib$React, Reconciler:ReactReconciler$$module$react$lib$React, TextComponent:ReactDOMTextComponent$$module$react$lib$React});
}
if ("production" !== process.env.NODE_ENV) {
  var ExecutionEnvironment$$module$react$lib$React = module$react$lib$ExecutionEnvironment;
  if (ExecutionEnvironment$$module$react$lib$React.canUseDOM && window.top === window.self) {
    if (navigator.userAgent.indexOf("Chrome") > -1) {
      if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ === "undefined") {
        console.debug("Download the React DevTools for a better development experience: " + "https://fb.me/react-devtools");
      }
    }
    var expectedFeatures$$module$react$lib$React = [Array.isArray, Array.prototype.every, Array.prototype.forEach, Array.prototype.indexOf, Array.prototype.map, Date.now, Function.prototype.bind, Object.keys, String.prototype.split, String.prototype.trim, Object.create, Object.freeze];
    for (var i$$module$react$lib$React = 0;i$$module$react$lib$React < expectedFeatures$$module$react$lib$React.length;i$$module$react$lib$React++) {
      if (!expectedFeatures$$module$react$lib$React[i$$module$react$lib$React]) {
        console.error("One or more ES5 shim/shams expected by React are not available: " + "https://fb.me/react-warning-polyfills");
        break;
      }
    }
  }
}
React$$module$react$lib$React.version = "0.13.3";
module$react$lib$React = React$$module$react$lib$React;
