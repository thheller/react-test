goog.provide("module$react$lib$getActiveElement");
function getActiveElement$$module$react$lib$getActiveElement() {
  try {
    return document.activeElement || document.body;
  } catch (e) {
    return document.body;
  }
}
module$react$lib$getActiveElement = getActiveElement$$module$react$lib$getActiveElement;
