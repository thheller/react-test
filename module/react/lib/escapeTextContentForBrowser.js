goog.provide("module$react$lib$escapeTextContentForBrowser");
var ESCAPE_LOOKUP$$module$react$lib$escapeTextContentForBrowser = {"\x26":"\x26amp;", "\x3e":"\x26gt;", "\x3c":"\x26lt;", '"':"\x26quot;", "'":"\x26#x27;"};
var ESCAPE_REGEX$$module$react$lib$escapeTextContentForBrowser = /[&><"']/g;
function escaper$$module$react$lib$escapeTextContentForBrowser(match) {
  return ESCAPE_LOOKUP$$module$react$lib$escapeTextContentForBrowser[match];
}
function escapeTextContentForBrowser$$module$react$lib$escapeTextContentForBrowser(text) {
  return ("" + text).replace(ESCAPE_REGEX$$module$react$lib$escapeTextContentForBrowser, escaper$$module$react$lib$escapeTextContentForBrowser);
}
module$react$lib$escapeTextContentForBrowser = escapeTextContentForBrowser$$module$react$lib$escapeTextContentForBrowser;
