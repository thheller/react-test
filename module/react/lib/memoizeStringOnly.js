goog.provide("module$react$lib$memoizeStringOnly");
function memoizeStringOnly$$module$react$lib$memoizeStringOnly(callback) {
  var cache = {};
  return function(string) {
    if (!cache.hasOwnProperty(string)) {
      cache[string] = callback.call(this, string);
    }
    return cache[string];
  };
}
module$react$lib$memoizeStringOnly = memoizeStringOnly$$module$react$lib$memoizeStringOnly;
