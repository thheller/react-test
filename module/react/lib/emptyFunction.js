goog.provide("module$react$lib$emptyFunction");
function makeEmptyFunction$$module$react$lib$emptyFunction(arg) {
  return function() {
    return arg;
  };
}
function emptyFunction$$module$react$lib$emptyFunction() {
}
emptyFunction$$module$react$lib$emptyFunction.thatReturns = makeEmptyFunction$$module$react$lib$emptyFunction;
emptyFunction$$module$react$lib$emptyFunction.thatReturnsFalse = makeEmptyFunction$$module$react$lib$emptyFunction(false);
emptyFunction$$module$react$lib$emptyFunction.thatReturnsTrue = makeEmptyFunction$$module$react$lib$emptyFunction(true);
emptyFunction$$module$react$lib$emptyFunction.thatReturnsNull = makeEmptyFunction$$module$react$lib$emptyFunction(null);
emptyFunction$$module$react$lib$emptyFunction.thatReturnsThis = function() {
  return this;
};
emptyFunction$$module$react$lib$emptyFunction.thatReturnsArgument = function(arg) {
  return arg;
};
module$react$lib$emptyFunction = emptyFunction$$module$react$lib$emptyFunction;
