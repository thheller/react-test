goog.provide("module$react$lib$isEventSupported");
goog.require("module$react$lib$ExecutionEnvironment");
var ExecutionEnvironment$$module$react$lib$isEventSupported = module$react$lib$ExecutionEnvironment;
var useHasFeature$$module$react$lib$isEventSupported;
if (ExecutionEnvironment$$module$react$lib$isEventSupported.canUseDOM) {
  useHasFeature$$module$react$lib$isEventSupported = document.implementation && document.implementation.hasFeature && document.implementation.hasFeature("", "") !== true;
}
function isEventSupported$$module$react$lib$isEventSupported(eventNameSuffix, capture) {
  if (!ExecutionEnvironment$$module$react$lib$isEventSupported.canUseDOM || capture && !("addEventListener" in document)) {
    return false;
  }
  var eventName = "on" + eventNameSuffix;
  var isSupported = eventName in document;
  if (!isSupported) {
    var element = document.createElement("div");
    element.setAttribute(eventName, "return;");
    isSupported = typeof element[eventName] === "function";
  }
  if (!isSupported && useHasFeature$$module$react$lib$isEventSupported && eventNameSuffix === "wheel") {
    isSupported = document.implementation.hasFeature("Events.wheel", "3.0");
  }
  return isSupported;
}
module$react$lib$isEventSupported = isEventSupported$$module$react$lib$isEventSupported;
