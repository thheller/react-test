goog.provide("module$react$lib$mapObject");
var hasOwnProperty$$module$react$lib$mapObject = Object.prototype.hasOwnProperty;
function mapObject$$module$react$lib$mapObject(object, callback, context) {
  if (!object) {
    return null;
  }
  var result = {};
  for (var name in object) {
    if (hasOwnProperty$$module$react$lib$mapObject.call(object, name)) {
      result[name] = callback.call(context, object[name], name, object);
    }
  }
  return result;
}
module$react$lib$mapObject = mapObject$$module$react$lib$mapObject;
