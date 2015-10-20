goog.provide("module$react$lib$getTextContentAccessor");
goog.require("module$react$lib$ExecutionEnvironment");
var ExecutionEnvironment$$module$react$lib$getTextContentAccessor = module$react$lib$ExecutionEnvironment;
var contentKey$$module$react$lib$getTextContentAccessor = null;
function getTextContentAccessor$$module$react$lib$getTextContentAccessor() {
  if (!contentKey$$module$react$lib$getTextContentAccessor && ExecutionEnvironment$$module$react$lib$getTextContentAccessor.canUseDOM) {
    contentKey$$module$react$lib$getTextContentAccessor = "textContent" in document.documentElement ? "textContent" : "innerText";
  }
  return contentKey$$module$react$lib$getTextContentAccessor;
}
module$react$lib$getTextContentAccessor = getTextContentAccessor$$module$react$lib$getTextContentAccessor;
