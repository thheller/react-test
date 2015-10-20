goog.provide("module$react$lib$setTextContent");
goog.require("module$react$lib$setInnerHTML");
goog.require("module$react$lib$escapeTextContentForBrowser");
goog.require("module$react$lib$ExecutionEnvironment");
var ExecutionEnvironment$$module$react$lib$setTextContent = module$react$lib$ExecutionEnvironment;
var escapeTextContentForBrowser$$module$react$lib$setTextContent = module$react$lib$escapeTextContentForBrowser;
var setInnerHTML$$module$react$lib$setTextContent = module$react$lib$setInnerHTML;
var setTextContent$$module$react$lib$setTextContent = function(node, text) {
  node.textContent = text;
};
if (ExecutionEnvironment$$module$react$lib$setTextContent.canUseDOM) {
  if (!("textContent" in document.documentElement)) {
    setTextContent$$module$react$lib$setTextContent = function(node, text) {
      setInnerHTML$$module$react$lib$setTextContent(node, escapeTextContentForBrowser$$module$react$lib$setTextContent(text));
    };
  }
}
module$react$lib$setTextContent = setTextContent$$module$react$lib$setTextContent;
