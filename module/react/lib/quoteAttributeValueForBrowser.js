goog.provide("module$react$lib$quoteAttributeValueForBrowser");
goog.require("module$react$lib$escapeTextContentForBrowser");
var escapeTextContentForBrowser$$module$react$lib$quoteAttributeValueForBrowser = module$react$lib$escapeTextContentForBrowser;
function quoteAttributeValueForBrowser$$module$react$lib$quoteAttributeValueForBrowser(value) {
  return '"' + escapeTextContentForBrowser$$module$react$lib$quoteAttributeValueForBrowser(value) + '"';
}
module$react$lib$quoteAttributeValueForBrowser = quoteAttributeValueForBrowser$$module$react$lib$quoteAttributeValueForBrowser;
