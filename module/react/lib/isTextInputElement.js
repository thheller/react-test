goog.provide("module$react$lib$isTextInputElement");
var supportedInputTypes$$module$react$lib$isTextInputElement = {"color":true, "date":true, "datetime":true, "datetime-local":true, "email":true, "month":true, "number":true, "password":true, "range":true, "search":true, "tel":true, "text":true, "time":true, "url":true, "week":true};
function isTextInputElement$$module$react$lib$isTextInputElement(elem) {
  return elem && (elem.nodeName === "INPUT" && supportedInputTypes$$module$react$lib$isTextInputElement[elem.type] || elem.nodeName === "TEXTAREA");
}
module$react$lib$isTextInputElement = isTextInputElement$$module$react$lib$isTextInputElement;
