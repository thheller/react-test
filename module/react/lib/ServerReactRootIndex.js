goog.provide("module$react$lib$ServerReactRootIndex");
var GLOBAL_MOUNT_POINT_MAX$$module$react$lib$ServerReactRootIndex = Math.pow(2, 53);
var ServerReactRootIndex$$module$react$lib$ServerReactRootIndex = {createReactRootIndex:function() {
  return Math.ceil(Math.random() * GLOBAL_MOUNT_POINT_MAX$$module$react$lib$ServerReactRootIndex);
}};
module$react$lib$ServerReactRootIndex = ServerReactRootIndex$$module$react$lib$ServerReactRootIndex;
