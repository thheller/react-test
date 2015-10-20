goog.provide("module$react$lib$hyphenate");
var _uppercasePattern$$module$react$lib$hyphenate = /([A-Z])/g;
function hyphenate$$module$react$lib$hyphenate(string) {
  return string.replace(_uppercasePattern$$module$react$lib$hyphenate, "-$1").toLowerCase();
}
module$react$lib$hyphenate = hyphenate$$module$react$lib$hyphenate;
