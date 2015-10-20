goog.provide("module$react$lib$dangerousStyleValue");
goog.require("module$react$lib$CSSProperty");
var CSSProperty$$module$react$lib$dangerousStyleValue = module$react$lib$CSSProperty;
var isUnitlessNumber$$module$react$lib$dangerousStyleValue = CSSProperty$$module$react$lib$dangerousStyleValue.isUnitlessNumber;
function dangerousStyleValue$$module$react$lib$dangerousStyleValue(name, value) {
  var isEmpty = value == null || typeof value === "boolean" || value === "";
  if (isEmpty) {
    return "";
  }
  var isNonNumeric = isNaN(value);
  if (isNonNumeric || value === 0 || isUnitlessNumber$$module$react$lib$dangerousStyleValue.hasOwnProperty(name) && isUnitlessNumber$$module$react$lib$dangerousStyleValue[name]) {
    return "" + value;
  }
  if (typeof value === "string") {
    value = value.trim();
  }
  return value + "px";
}
module$react$lib$dangerousStyleValue = dangerousStyleValue$$module$react$lib$dangerousStyleValue;
