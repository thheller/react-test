goog.provide("module$react$lib$ReactDefaultBatchingStrategy");
goog.require("module$react$lib$emptyFunction");
goog.require("module$react$lib$Object_assign");
goog.require("module$react$lib$Transaction");
goog.require("module$react$lib$ReactUpdates");
var ReactUpdates$$module$react$lib$ReactDefaultBatchingStrategy = module$react$lib$ReactUpdates;
var Transaction$$module$react$lib$ReactDefaultBatchingStrategy = module$react$lib$Transaction;
var assign$$module$react$lib$ReactDefaultBatchingStrategy = module$react$lib$Object_assign;
var emptyFunction$$module$react$lib$ReactDefaultBatchingStrategy = module$react$lib$emptyFunction;
var RESET_BATCHED_UPDATES$$module$react$lib$ReactDefaultBatchingStrategy = {initialize:emptyFunction$$module$react$lib$ReactDefaultBatchingStrategy, close:function() {
  ReactDefaultBatchingStrategy$$module$react$lib$ReactDefaultBatchingStrategy.isBatchingUpdates = false;
}};
var FLUSH_BATCHED_UPDATES$$module$react$lib$ReactDefaultBatchingStrategy = {initialize:emptyFunction$$module$react$lib$ReactDefaultBatchingStrategy, close:ReactUpdates$$module$react$lib$ReactDefaultBatchingStrategy.flushBatchedUpdates.bind(ReactUpdates$$module$react$lib$ReactDefaultBatchingStrategy)};
var TRANSACTION_WRAPPERS$$module$react$lib$ReactDefaultBatchingStrategy = [FLUSH_BATCHED_UPDATES$$module$react$lib$ReactDefaultBatchingStrategy, RESET_BATCHED_UPDATES$$module$react$lib$ReactDefaultBatchingStrategy];
function ReactDefaultBatchingStrategyTransaction$$module$react$lib$ReactDefaultBatchingStrategy() {
  this.reinitializeTransaction();
}
assign$$module$react$lib$ReactDefaultBatchingStrategy(ReactDefaultBatchingStrategyTransaction$$module$react$lib$ReactDefaultBatchingStrategy.prototype, Transaction$$module$react$lib$ReactDefaultBatchingStrategy.Mixin, {getTransactionWrappers:function() {
  return TRANSACTION_WRAPPERS$$module$react$lib$ReactDefaultBatchingStrategy;
}});
var transaction$$module$react$lib$ReactDefaultBatchingStrategy = new ReactDefaultBatchingStrategyTransaction$$module$react$lib$ReactDefaultBatchingStrategy;
var ReactDefaultBatchingStrategy$$module$react$lib$ReactDefaultBatchingStrategy = {isBatchingUpdates:false, batchedUpdates:function(callback, a, b, c, d) {
  var alreadyBatchingUpdates = ReactDefaultBatchingStrategy$$module$react$lib$ReactDefaultBatchingStrategy.isBatchingUpdates;
  ReactDefaultBatchingStrategy$$module$react$lib$ReactDefaultBatchingStrategy.isBatchingUpdates = true;
  if (alreadyBatchingUpdates) {
    callback(a, b, c, d);
  } else {
    transaction$$module$react$lib$ReactDefaultBatchingStrategy.perform(callback, null, a, b, c, d);
  }
}};
module$react$lib$ReactDefaultBatchingStrategy = ReactDefaultBatchingStrategy$$module$react$lib$ReactDefaultBatchingStrategy;
