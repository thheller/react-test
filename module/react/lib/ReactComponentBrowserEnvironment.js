goog.provide("module$react$lib$ReactComponentBrowserEnvironment");
goog.require("module$react$lib$ReactMount");
goog.require("module$react$lib$ReactDOMIDOperations");
var ReactDOMIDOperations$$module$react$lib$ReactComponentBrowserEnvironment = module$react$lib$ReactDOMIDOperations;
var ReactMount$$module$react$lib$ReactComponentBrowserEnvironment = module$react$lib$ReactMount;
var ReactComponentBrowserEnvironment$$module$react$lib$ReactComponentBrowserEnvironment = {processChildrenUpdates:ReactDOMIDOperations$$module$react$lib$ReactComponentBrowserEnvironment.dangerouslyProcessChildrenUpdates, replaceNodeWithMarkupByID:ReactDOMIDOperations$$module$react$lib$ReactComponentBrowserEnvironment.dangerouslyReplaceNodeWithMarkupByID, unmountIDFromEnvironment:function(rootNodeID) {
  ReactMount$$module$react$lib$ReactComponentBrowserEnvironment.purgeID(rootNodeID);
}};
module$react$lib$ReactComponentBrowserEnvironment = ReactComponentBrowserEnvironment$$module$react$lib$ReactComponentBrowserEnvironment;
