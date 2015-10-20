goog.provide("module$react$lib$createArrayFromMixed");
goog.require("module$react$lib$toArray");
var toArray$$module$react$lib$createArrayFromMixed = module$react$lib$toArray;
function hasArrayNature$$module$react$lib$createArrayFromMixed(obj) {
  return !!obj && (typeof obj == "object" || typeof obj == "function") && "length" in obj && !("setInterval" in obj) && typeof obj.nodeType != "number" && (Array.isArray(obj) || "callee" in obj || "item" in obj);
}
function createArrayFromMixed$$module$react$lib$createArrayFromMixed(obj) {
  if (!hasArrayNature$$module$react$lib$createArrayFromMixed(obj)) {
    return [obj];
  } else {
    if (Array.isArray(obj)) {
      return obj.slice();
    } else {
      return toArray$$module$react$lib$createArrayFromMixed(obj);
    }
  }
}
module$react$lib$createArrayFromMixed = createArrayFromMixed$$module$react$lib$createArrayFromMixed;
