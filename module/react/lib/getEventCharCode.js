goog.provide("module$react$lib$getEventCharCode");
function getEventCharCode$$module$react$lib$getEventCharCode(nativeEvent) {
  var charCode;
  var keyCode = nativeEvent.keyCode;
  if ("charCode" in nativeEvent) {
    charCode = nativeEvent.charCode;
    if (charCode === 0 && keyCode === 13) {
      charCode = 13;
    }
  } else {
    charCode = keyCode;
  }
  if (charCode >= 32 || charCode === 13) {
    return charCode;
  }
  return 0;
}
module$react$lib$getEventCharCode = getEventCharCode$$module$react$lib$getEventCharCode;
