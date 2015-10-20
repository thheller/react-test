goog.provide("module$react$lib$shallowEqual");
function shallowEqual$$module$react$lib$shallowEqual(objA, objB) {
  if (objA === objB) {
    return true;
  }
  var key;
  for (key in objA) {
    if (objA.hasOwnProperty(key) && (!objB.hasOwnProperty(key) || objA[key] !== objB[key])) {
      return false;
    }
  }
  for (key in objB) {
    if (objB.hasOwnProperty(key) && !objA.hasOwnProperty(key)) {
      return false;
    }
  }
  return true;
}
module$react$lib$shallowEqual = shallowEqual$$module$react$lib$shallowEqual;
