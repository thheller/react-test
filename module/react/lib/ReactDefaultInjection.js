goog.provide("module$react$lib$ReactDefaultInjection");
goog.require("module$react$lib$ReactDefaultPerf");
goog.require("module$react$lib$createFullPageComponent");
goog.require("module$react$lib$SVGDOMPropertyConfig");
goog.require("module$react$lib$SimpleEventPlugin");
goog.require("module$react$lib$ServerReactRootIndex");
goog.require("module$react$lib$SelectEventPlugin");
goog.require("module$react$lib$ReactReconcileTransaction");
goog.require("module$react$lib$ReactMount");
goog.require("module$react$lib$ReactInstanceHandles");
goog.require("module$react$lib$ReactInjection");
goog.require("module$react$lib$ReactEventListener");
goog.require("module$react$lib$ReactElement");
goog.require("module$react$lib$ReactDOMTextComponent");
goog.require("module$react$lib$ReactDOMTextarea");
goog.require("module$react$lib$ReactDOMSelect");
goog.require("module$react$lib$ReactDOMOption");
goog.require("module$react$lib$ReactDOMInput");
goog.require("module$react$lib$ReactDOMIframe");
goog.require("module$react$lib$ReactDOMIDOperations");
goog.require("module$react$lib$ReactDOMImg");
goog.require("module$react$lib$ReactDOMForm");
goog.require("module$react$lib$ReactDOMButton");
goog.require("module$react$lib$ReactDOMComponent");
goog.require("module$react$lib$ReactDefaultBatchingStrategy");
goog.require("module$react$lib$ReactComponentBrowserEnvironment");
goog.require("module$react$lib$ReactClass");
goog.require("module$react$lib$ReactBrowserComponentMixin");
goog.require("module$react$lib$MobileSafariClickEventPlugin");
goog.require("module$react$lib$HTMLDOMPropertyConfig");
goog.require("module$react$lib$ExecutionEnvironment");
goog.require("module$react$lib$EnterLeaveEventPlugin");
goog.require("module$react$lib$DefaultEventPluginOrder");
goog.require("module$react$lib$ClientReactRootIndex");
goog.require("module$react$lib$ChangeEventPlugin");
goog.require("module$react$lib$BeforeInputEventPlugin");
var BeforeInputEventPlugin$$module$react$lib$ReactDefaultInjection = module$react$lib$BeforeInputEventPlugin;
var ChangeEventPlugin$$module$react$lib$ReactDefaultInjection = module$react$lib$ChangeEventPlugin;
var ClientReactRootIndex$$module$react$lib$ReactDefaultInjection = module$react$lib$ClientReactRootIndex;
var DefaultEventPluginOrder$$module$react$lib$ReactDefaultInjection = module$react$lib$DefaultEventPluginOrder;
var EnterLeaveEventPlugin$$module$react$lib$ReactDefaultInjection = module$react$lib$EnterLeaveEventPlugin;
var ExecutionEnvironment$$module$react$lib$ReactDefaultInjection = module$react$lib$ExecutionEnvironment;
var HTMLDOMPropertyConfig$$module$react$lib$ReactDefaultInjection = module$react$lib$HTMLDOMPropertyConfig;
var MobileSafariClickEventPlugin$$module$react$lib$ReactDefaultInjection = module$react$lib$MobileSafariClickEventPlugin;
var ReactBrowserComponentMixin$$module$react$lib$ReactDefaultInjection = module$react$lib$ReactBrowserComponentMixin;
var ReactClass$$module$react$lib$ReactDefaultInjection = module$react$lib$ReactClass;
var ReactComponentBrowserEnvironment$$module$react$lib$ReactDefaultInjection = module$react$lib$ReactComponentBrowserEnvironment;
var ReactDefaultBatchingStrategy$$module$react$lib$ReactDefaultInjection = module$react$lib$ReactDefaultBatchingStrategy;
var ReactDOMComponent$$module$react$lib$ReactDefaultInjection = module$react$lib$ReactDOMComponent;
var ReactDOMButton$$module$react$lib$ReactDefaultInjection = module$react$lib$ReactDOMButton;
var ReactDOMForm$$module$react$lib$ReactDefaultInjection = module$react$lib$ReactDOMForm;
var ReactDOMImg$$module$react$lib$ReactDefaultInjection = module$react$lib$ReactDOMImg;
var ReactDOMIDOperations$$module$react$lib$ReactDefaultInjection = module$react$lib$ReactDOMIDOperations;
var ReactDOMIframe$$module$react$lib$ReactDefaultInjection = module$react$lib$ReactDOMIframe;
var ReactDOMInput$$module$react$lib$ReactDefaultInjection = module$react$lib$ReactDOMInput;
var ReactDOMOption$$module$react$lib$ReactDefaultInjection = module$react$lib$ReactDOMOption;
var ReactDOMSelect$$module$react$lib$ReactDefaultInjection = module$react$lib$ReactDOMSelect;
var ReactDOMTextarea$$module$react$lib$ReactDefaultInjection = module$react$lib$ReactDOMTextarea;
var ReactDOMTextComponent$$module$react$lib$ReactDefaultInjection = module$react$lib$ReactDOMTextComponent;
var ReactElement$$module$react$lib$ReactDefaultInjection = module$react$lib$ReactElement;
var ReactEventListener$$module$react$lib$ReactDefaultInjection = module$react$lib$ReactEventListener;
var ReactInjection$$module$react$lib$ReactDefaultInjection = module$react$lib$ReactInjection;
var ReactInstanceHandles$$module$react$lib$ReactDefaultInjection = module$react$lib$ReactInstanceHandles;
var ReactMount$$module$react$lib$ReactDefaultInjection = module$react$lib$ReactMount;
var ReactReconcileTransaction$$module$react$lib$ReactDefaultInjection = module$react$lib$ReactReconcileTransaction;
var SelectEventPlugin$$module$react$lib$ReactDefaultInjection = module$react$lib$SelectEventPlugin;
var ServerReactRootIndex$$module$react$lib$ReactDefaultInjection = module$react$lib$ServerReactRootIndex;
var SimpleEventPlugin$$module$react$lib$ReactDefaultInjection = module$react$lib$SimpleEventPlugin;
var SVGDOMPropertyConfig$$module$react$lib$ReactDefaultInjection = module$react$lib$SVGDOMPropertyConfig;
var createFullPageComponent$$module$react$lib$ReactDefaultInjection = module$react$lib$createFullPageComponent;
function autoGenerateWrapperClass$$module$react$lib$ReactDefaultInjection(type) {
  return ReactClass$$module$react$lib$ReactDefaultInjection.createClass({tagName:type.toUpperCase(), render:function() {
    return new ReactElement$$module$react$lib$ReactDefaultInjection(type, null, null, null, null, this.props);
  }});
}
function inject$$module$react$lib$ReactDefaultInjection() {
  ReactInjection$$module$react$lib$ReactDefaultInjection.EventEmitter.injectReactEventListener(ReactEventListener$$module$react$lib$ReactDefaultInjection);
  ReactInjection$$module$react$lib$ReactDefaultInjection.EventPluginHub.injectEventPluginOrder(DefaultEventPluginOrder$$module$react$lib$ReactDefaultInjection);
  ReactInjection$$module$react$lib$ReactDefaultInjection.EventPluginHub.injectInstanceHandle(ReactInstanceHandles$$module$react$lib$ReactDefaultInjection);
  ReactInjection$$module$react$lib$ReactDefaultInjection.EventPluginHub.injectMount(ReactMount$$module$react$lib$ReactDefaultInjection);
  ReactInjection$$module$react$lib$ReactDefaultInjection.EventPluginHub.injectEventPluginsByName({SimpleEventPlugin:SimpleEventPlugin$$module$react$lib$ReactDefaultInjection, EnterLeaveEventPlugin:EnterLeaveEventPlugin$$module$react$lib$ReactDefaultInjection, ChangeEventPlugin:ChangeEventPlugin$$module$react$lib$ReactDefaultInjection, MobileSafariClickEventPlugin:MobileSafariClickEventPlugin$$module$react$lib$ReactDefaultInjection, SelectEventPlugin:SelectEventPlugin$$module$react$lib$ReactDefaultInjection, 
  BeforeInputEventPlugin:BeforeInputEventPlugin$$module$react$lib$ReactDefaultInjection});
  ReactInjection$$module$react$lib$ReactDefaultInjection.NativeComponent.injectGenericComponentClass(ReactDOMComponent$$module$react$lib$ReactDefaultInjection);
  ReactInjection$$module$react$lib$ReactDefaultInjection.NativeComponent.injectTextComponentClass(ReactDOMTextComponent$$module$react$lib$ReactDefaultInjection);
  ReactInjection$$module$react$lib$ReactDefaultInjection.NativeComponent.injectAutoWrapper(autoGenerateWrapperClass$$module$react$lib$ReactDefaultInjection);
  ReactInjection$$module$react$lib$ReactDefaultInjection.Class.injectMixin(ReactBrowserComponentMixin$$module$react$lib$ReactDefaultInjection);
  ReactInjection$$module$react$lib$ReactDefaultInjection.NativeComponent.injectComponentClasses({"button":ReactDOMButton$$module$react$lib$ReactDefaultInjection, "form":ReactDOMForm$$module$react$lib$ReactDefaultInjection, "iframe":ReactDOMIframe$$module$react$lib$ReactDefaultInjection, "img":ReactDOMImg$$module$react$lib$ReactDefaultInjection, "input":ReactDOMInput$$module$react$lib$ReactDefaultInjection, "option":ReactDOMOption$$module$react$lib$ReactDefaultInjection, "select":ReactDOMSelect$$module$react$lib$ReactDefaultInjection, 
  "textarea":ReactDOMTextarea$$module$react$lib$ReactDefaultInjection, "html":createFullPageComponent$$module$react$lib$ReactDefaultInjection("html"), "head":createFullPageComponent$$module$react$lib$ReactDefaultInjection("head"), "body":createFullPageComponent$$module$react$lib$ReactDefaultInjection("body")});
  ReactInjection$$module$react$lib$ReactDefaultInjection.DOMProperty.injectDOMPropertyConfig(HTMLDOMPropertyConfig$$module$react$lib$ReactDefaultInjection);
  ReactInjection$$module$react$lib$ReactDefaultInjection.DOMProperty.injectDOMPropertyConfig(SVGDOMPropertyConfig$$module$react$lib$ReactDefaultInjection);
  ReactInjection$$module$react$lib$ReactDefaultInjection.EmptyComponent.injectEmptyComponent("noscript");
  ReactInjection$$module$react$lib$ReactDefaultInjection.Updates.injectReconcileTransaction(ReactReconcileTransaction$$module$react$lib$ReactDefaultInjection);
  ReactInjection$$module$react$lib$ReactDefaultInjection.Updates.injectBatchingStrategy(ReactDefaultBatchingStrategy$$module$react$lib$ReactDefaultInjection);
  ReactInjection$$module$react$lib$ReactDefaultInjection.RootIndex.injectCreateReactRootIndex(ExecutionEnvironment$$module$react$lib$ReactDefaultInjection.canUseDOM ? ClientReactRootIndex$$module$react$lib$ReactDefaultInjection.createReactRootIndex : ServerReactRootIndex$$module$react$lib$ReactDefaultInjection.createReactRootIndex);
  ReactInjection$$module$react$lib$ReactDefaultInjection.Component.injectEnvironment(ReactComponentBrowserEnvironment$$module$react$lib$ReactDefaultInjection);
  ReactInjection$$module$react$lib$ReactDefaultInjection.DOMComponent.injectIDOperations(ReactDOMIDOperations$$module$react$lib$ReactDefaultInjection);
  if ("production" !== process.env.NODE_ENV) {
    var url = ExecutionEnvironment$$module$react$lib$ReactDefaultInjection.canUseDOM && window.location.href || "";
    if (/[?&]react_perf\b/.test(url)) {
      var ReactDefaultPerf = module$react$lib$ReactDefaultPerf;
      ReactDefaultPerf.start();
    }
  }
}
module$react$lib$ReactDefaultInjection = {inject:inject$$module$react$lib$ReactDefaultInjection};
