goog.provide("module$react$lib$camelize");
var _hyphenPattern$$module$react$lib$camelize = /-(.)/g;
function camelize$$module$react$lib$camelize(string) {
  return string.replace(_hyphenPattern$$module$react$lib$camelize, function(_, character) {
    return character.toUpperCase();
  });
}
module$react$lib$camelize = camelize$$module$react$lib$camelize;
