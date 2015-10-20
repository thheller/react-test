goog.provide("module$react$lib$ReactMarkupChecksum");
goog.require("module$react$lib$adler32");
var adler32$$module$react$lib$ReactMarkupChecksum = module$react$lib$adler32;
var ReactMarkupChecksum$$module$react$lib$ReactMarkupChecksum = {CHECKSUM_ATTR_NAME:"data-react-checksum", addChecksumToMarkup:function(markup) {
  var checksum = adler32$$module$react$lib$ReactMarkupChecksum(markup);
  return markup.replace("\x3e", " " + ReactMarkupChecksum$$module$react$lib$ReactMarkupChecksum.CHECKSUM_ATTR_NAME + '\x3d"' + checksum + '"\x3e');
}, canReuseMarkup:function(markup, element) {
  var existingChecksum = element.getAttribute(ReactMarkupChecksum$$module$react$lib$ReactMarkupChecksum.CHECKSUM_ATTR_NAME);
  existingChecksum = existingChecksum && parseInt(existingChecksum, 10);
  var markupChecksum = adler32$$module$react$lib$ReactMarkupChecksum(markup);
  return markupChecksum === existingChecksum;
}};
module$react$lib$ReactMarkupChecksum = ReactMarkupChecksum$$module$react$lib$ReactMarkupChecksum;
