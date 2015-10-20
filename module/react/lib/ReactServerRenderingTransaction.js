goog.provide("module$react$lib$ReactServerRenderingTransaction");
goog.require("module$react$lib$emptyFunction");
goog.require("module$react$lib$Object_assign");
goog.require("module$react$lib$Transaction");
goog.require("module$react$lib$ReactPutListenerQueue");
goog.require("module$react$lib$CallbackQueue");
goog.require("module$react$lib$PooledClass");
var PooledClass$$module$react$lib$ReactServerRenderingTransaction = module$react$lib$PooledClass;
var CallbackQueue$$module$react$lib$ReactServerRenderingTransaction = module$react$lib$CallbackQueue;
var ReactPutListenerQueue$$module$react$lib$ReactServerRenderingTransaction = module$react$lib$ReactPutListenerQueue;
var Transaction$$module$react$lib$ReactServerRenderingTransaction = module$react$lib$Transaction;
var assign$$module$react$lib$ReactServerRenderingTransaction = module$react$lib$Object_assign;
var emptyFunction$$module$react$lib$ReactServerRenderingTransaction = module$react$lib$emptyFunction;
var ON_DOM_READY_QUEUEING$$module$react$lib$ReactServerRenderingTransaction = {initialize:function() {
  this.reactMountReady.reset();
}, close:emptyFunction$$module$react$lib$ReactServerRenderingTransaction};
var PUT_LISTENER_QUEUEING$$module$react$lib$ReactServerRenderingTransaction = {initialize:function() {
  this.putListenerQueue.reset();
}, close:emptyFunction$$module$react$lib$ReactServerRenderingTransaction};
var TRANSACTION_WRAPPERS$$module$react$lib$ReactServerRenderingTransaction = [PUT_LISTENER_QUEUEING$$module$react$lib$ReactServerRenderingTransaction, ON_DOM_READY_QUEUEING$$module$react$lib$ReactServerRenderingTransaction];
function ReactServerRenderingTransaction$$module$react$lib$ReactServerRenderingTransaction(renderToStaticMarkup) {
  this.reinitializeTransaction();
  this.renderToStaticMarkup = renderToStaticMarkup;
  this.reactMountReady = CallbackQueue$$module$react$lib$ReactServerRenderingTransaction.getPooled(null);
  this.putListenerQueue = ReactPutListenerQueue$$module$react$lib$ReactServerRenderingTransaction.getPooled();
}
var Mixin$$module$react$lib$ReactServerRenderingTransaction = {getTransactionWrappers:function() {
  return TRANSACTION_WRAPPERS$$module$react$lib$ReactServerRenderingTransaction;
}, getReactMountReady:function() {
  return this.reactMountReady;
}, getPutListenerQueue:function() {
  return this.putListenerQueue;
}, destructor:function() {
  CallbackQueue$$module$react$lib$ReactServerRenderingTransaction.release(this.reactMountReady);
  this.reactMountReady = null;
  ReactPutListenerQueue$$module$react$lib$ReactServerRenderingTransaction.release(this.putListenerQueue);
  this.putListenerQueue = null;
}};
assign$$module$react$lib$ReactServerRenderingTransaction(ReactServerRenderingTransaction$$module$react$lib$ReactServerRenderingTransaction.prototype, Transaction$$module$react$lib$ReactServerRenderingTransaction.Mixin, Mixin$$module$react$lib$ReactServerRenderingTransaction);
PooledClass$$module$react$lib$ReactServerRenderingTransaction.addPoolingTo(ReactServerRenderingTransaction$$module$react$lib$ReactServerRenderingTransaction);
module$react$lib$ReactServerRenderingTransaction = ReactServerRenderingTransaction$$module$react$lib$ReactServerRenderingTransaction;
