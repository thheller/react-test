goog.provide("module$react$lib$toArray");
goog.require("module$react$lib$invariant");
var invariant$$module$react$lib$toArray = module$react$lib$invariant;
function toArray$$module$react$lib$toArray(obj) {
  var length = obj.length;
  "production" !== process.env.NODE_ENV ? invariant$$module$react$lib$toArray(!Array.isArray(obj) && (typeof obj === "object" || typeof obj === "function"), "toArray: Array-like object expected") : invariant$$module$react$lib$toArray(!Array.isArray(obj) && (typeof obj === "object" || typeof obj === "function"));
  "production" !== process.env.NODE_ENV ? invariant$$module$react$lib$toArray(typeof length === "number", "toArray: Object needs a length property") : invariant$$module$react$lib$toArray(typeof length === "number");
  "production" !== process.env.NODE_ENV ? invariant$$module$react$lib$toArray(length === 0 || length - 1 in obj, "toArray: Object should have keys for indices") : invariant$$module$react$lib$toArray(length === 0 || length - 1 in obj);
  if (obj.hasOwnProperty) {
    try {
      return Array.prototype.slice.call(obj);
    } catch (e) {
    }
  }
  var ret = Array(length);
  for (var ii = 0;ii < length;ii++) {
    ret[ii] = obj[ii];
  }
  return ret;
}
module$react$lib$toArray = toArray$$module$react$lib$toArray;
