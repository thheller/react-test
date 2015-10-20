goog.provide("module$react$lib$FallbackCompositionState");
goog.require("module$react$lib$getTextContentAccessor");
goog.require("module$react$lib$Object_assign");
goog.require("module$react$lib$PooledClass");
var PooledClass$$module$react$lib$FallbackCompositionState = module$react$lib$PooledClass;
var assign$$module$react$lib$FallbackCompositionState = module$react$lib$Object_assign;
var getTextContentAccessor$$module$react$lib$FallbackCompositionState = module$react$lib$getTextContentAccessor;
function FallbackCompositionState$$module$react$lib$FallbackCompositionState(root) {
  this._root = root;
  this._startText = this.getText();
  this._fallbackText = null;
}
assign$$module$react$lib$FallbackCompositionState(FallbackCompositionState$$module$react$lib$FallbackCompositionState.prototype, {getText:function() {
  if ("value" in this._root) {
    return this._root.value;
  }
  return this._root[getTextContentAccessor$$module$react$lib$FallbackCompositionState()];
}, getData:function() {
  if (this._fallbackText) {
    return this._fallbackText;
  }
  var start;
  var startValue = this._startText;
  var startLength = startValue.length;
  var end;
  var endValue = this.getText();
  var endLength = endValue.length;
  for (start = 0;start < startLength;start++) {
    if (startValue[start] !== endValue[start]) {
      break;
    }
  }
  var minEnd = startLength - start;
  for (end = 1;end <= minEnd;end++) {
    if (startValue[startLength - end] !== endValue[endLength - end]) {
      break;
    }
  }
  var sliceTail = end > 1 ? 1 - end : undefined;
  this._fallbackText = endValue.slice(start, sliceTail);
  return this._fallbackText;
}});
PooledClass$$module$react$lib$FallbackCompositionState.addPoolingTo(FallbackCompositionState$$module$react$lib$FallbackCompositionState);
module$react$lib$FallbackCompositionState = FallbackCompositionState$$module$react$lib$FallbackCompositionState;
