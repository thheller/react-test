goog.provide("module$react$lib$ReactInstanceMap");
var ReactInstanceMap$$module$react$lib$ReactInstanceMap = {remove:function(key) {
  key._reactInternalInstance = undefined;
}, get:function(key) {
  return key._reactInternalInstance;
}, has:function(key) {
  return key._reactInternalInstance !== undefined;
}, set:function(key, value) {
  key._reactInternalInstance = value;
}};
module$react$lib$ReactInstanceMap = ReactInstanceMap$$module$react$lib$ReactInstanceMap;
