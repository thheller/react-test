goog.provide("module$react$lib$performance");
goog.require("module$react$lib$ExecutionEnvironment");
var ExecutionEnvironment$$module$react$lib$performance = module$react$lib$ExecutionEnvironment;
var performance$$module$react$lib$performance;
if (ExecutionEnvironment$$module$react$lib$performance.canUseDOM) {
  performance$$module$react$lib$performance = window.performance || window.msPerformance || window.webkitPerformance;
}
module$react$lib$performance = performance$$module$react$lib$performance || {};
