goog.provide("module$react$lib$performanceNow");
goog.require("module$react$lib$performance");
var performance$$module$react$lib$performanceNow = module$react$lib$performance;
if (!performance$$module$react$lib$performanceNow || !performance$$module$react$lib$performanceNow.now) {
  performance$$module$react$lib$performanceNow = Date;
}
var performanceNow$$module$react$lib$performanceNow = performance$$module$react$lib$performanceNow.now.bind(performance$$module$react$lib$performanceNow);
module$react$lib$performanceNow = performanceNow$$module$react$lib$performanceNow;
