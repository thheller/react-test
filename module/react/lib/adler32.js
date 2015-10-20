goog.provide("module$react$lib$adler32");
var MOD$$module$react$lib$adler32 = 65521;
function adler32$$module$react$lib$adler32(data) {
  var a = 1;
  var b = 0;
  for (var i = 0;i < data.length;i++) {
    a = (a + data.charCodeAt(i)) % MOD$$module$react$lib$adler32;
    b = (b + a) % MOD$$module$react$lib$adler32;
  }
  return a | b << 16;
}
module$react$lib$adler32 = adler32$$module$react$lib$adler32;
