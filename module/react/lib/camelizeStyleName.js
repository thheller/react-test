goog.provide("module$react$lib$camelizeStyleName");
goog.require("module$react$lib$camelize");
var camelize$$module$react$lib$camelizeStyleName = module$react$lib$camelize;
var msPattern$$module$react$lib$camelizeStyleName = /^-ms-/;
function camelizeStyleName$$module$react$lib$camelizeStyleName(string) {
  return camelize$$module$react$lib$camelizeStyleName(string.replace(msPattern$$module$react$lib$camelizeStyleName, "ms-"));
}
module$react$lib$camelizeStyleName = camelizeStyleName$$module$react$lib$camelizeStyleName;
