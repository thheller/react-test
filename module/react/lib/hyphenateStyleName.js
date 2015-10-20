goog.provide("module$react$lib$hyphenateStyleName");
goog.require("module$react$lib$hyphenate");
var hyphenate$$module$react$lib$hyphenateStyleName = module$react$lib$hyphenate;
var msPattern$$module$react$lib$hyphenateStyleName = /^ms-/;
function hyphenateStyleName$$module$react$lib$hyphenateStyleName(string) {
  return hyphenate$$module$react$lib$hyphenateStyleName(string).replace(msPattern$$module$react$lib$hyphenateStyleName, "-ms-");
}
module$react$lib$hyphenateStyleName = hyphenateStyleName$$module$react$lib$hyphenateStyleName;
