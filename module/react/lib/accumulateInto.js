goog.provide("module$react$lib$accumulateInto");
goog.require("module$react$lib$invariant");
var invariant$$module$react$lib$accumulateInto = module$react$lib$invariant;
function accumulateInto$$module$react$lib$accumulateInto(current, next) {
  "production" !== process.env.NODE_ENV ? invariant$$module$react$lib$accumulateInto(next != null, "accumulateInto(...): Accumulated items must not be null or undefined.") : invariant$$module$react$lib$accumulateInto(next != null);
  if (current == null) {
    return next;
  }
  var currentIsArray = Array.isArray(current);
  var nextIsArray = Array.isArray(next);
  if (currentIsArray && nextIsArray) {
    current.push.apply(current, next);
    return current;
  }
  if (currentIsArray) {
    current.push(next);
    return current;
  }
  if (nextIsArray) {
    return [current].concat(next);
  }
  return [current, next];
}
module$react$lib$accumulateInto = accumulateInto$$module$react$lib$accumulateInto;
