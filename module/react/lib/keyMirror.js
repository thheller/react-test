goog.provide("module$react$lib$keyMirror");
goog.require("module$react$lib$invariant");
var invariant$$module$react$lib$keyMirror = module$react$lib$invariant;
var keyMirror$$module$react$lib$keyMirror = function(obj) {
  var ret = {};
  var key;
  "production" !== process.env.NODE_ENV ? invariant$$module$react$lib$keyMirror(obj instanceof Object && !Array.isArray(obj), "keyMirror(...): Argument must be an object.") : invariant$$module$react$lib$keyMirror(obj instanceof Object && !Array.isArray(obj));
  for (key in obj) {
    if (!obj.hasOwnProperty(key)) {
      continue;
    }
    ret[key] = key;
  }
  return ret;
};
module$react$lib$keyMirror = keyMirror$$module$react$lib$keyMirror;
