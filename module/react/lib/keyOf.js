goog.provide("module$react$lib$keyOf");
var keyOf$$module$react$lib$keyOf = function(oneKeyObj) {
  var key;
  for (key in oneKeyObj) {
    if (!oneKeyObj.hasOwnProperty(key)) {
      continue;
    }
    return key;
  }
  return null;
};
module$react$lib$keyOf = keyOf$$module$react$lib$keyOf;
