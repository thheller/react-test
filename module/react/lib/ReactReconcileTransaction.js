goog.provide("module$react$lib$ReactReconcileTransaction");
goog.require("module$react$lib$Object_assign");
goog.require("module$react$lib$Transaction");
goog.require("module$react$lib$ReactPutListenerQueue");
goog.require("module$react$lib$ReactInputSelection");
goog.require("module$react$lib$ReactBrowserEventEmitter");
goog.require("module$react$lib$PooledClass");
goog.require("module$react$lib$CallbackQueue");
var CallbackQueue$$module$react$lib$ReactReconcileTransaction = module$react$lib$CallbackQueue;
var PooledClass$$module$react$lib$ReactReconcileTransaction = module$react$lib$PooledClass;
var ReactBrowserEventEmitter$$module$react$lib$ReactReconcileTransaction = module$react$lib$ReactBrowserEventEmitter;
var ReactInputSelection$$module$react$lib$ReactReconcileTransaction = module$react$lib$ReactInputSelection;
var ReactPutListenerQueue$$module$react$lib$ReactReconcileTransaction = module$react$lib$ReactPutListenerQueue;
var Transaction$$module$react$lib$ReactReconcileTransaction = module$react$lib$Transaction;
var assign$$module$react$lib$ReactReconcileTransaction = module$react$lib$Object_assign;
var SELECTION_RESTORATION$$module$react$lib$ReactReconcileTransaction = {initialize:ReactInputSelection$$module$react$lib$ReactReconcileTransaction.getSelectionInformation, close:ReactInputSelection$$module$react$lib$ReactReconcileTransaction.restoreSelection};
var EVENT_SUPPRESSION$$module$react$lib$ReactReconcileTransaction = {initialize:function() {
  var currentlyEnabled = ReactBrowserEventEmitter$$module$react$lib$ReactReconcileTransaction.isEnabled();
  ReactBrowserEventEmitter$$module$react$lib$ReactReconcileTransaction.setEnabled(false);
  return currentlyEnabled;
}, close:function(previouslyEnabled) {
  ReactBrowserEventEmitter$$module$react$lib$ReactReconcileTransaction.setEnabled(previouslyEnabled);
}};
var ON_DOM_READY_QUEUEING$$module$react$lib$ReactReconcileTransaction = {initialize:function() {
  this.reactMountReady.reset();
}, close:function() {
  this.reactMountReady.notifyAll();
}};
var PUT_LISTENER_QUEUEING$$module$react$lib$ReactReconcileTransaction = {initialize:function() {
  this.putListenerQueue.reset();
}, close:function() {
  this.putListenerQueue.putListeners();
}};
var TRANSACTION_WRAPPERS$$module$react$lib$ReactReconcileTransaction = [PUT_LISTENER_QUEUEING$$module$react$lib$ReactReconcileTransaction, SELECTION_RESTORATION$$module$react$lib$ReactReconcileTransaction, EVENT_SUPPRESSION$$module$react$lib$ReactReconcileTransaction, ON_DOM_READY_QUEUEING$$module$react$lib$ReactReconcileTransaction];
function ReactReconcileTransaction$$module$react$lib$ReactReconcileTransaction() {
  this.reinitializeTransaction();
  this.renderToStaticMarkup = false;
  this.reactMountReady = CallbackQueue$$module$react$lib$ReactReconcileTransaction.getPooled(null);
  this.putListenerQueue = ReactPutListenerQueue$$module$react$lib$ReactReconcileTransaction.getPooled();
}
var Mixin$$module$react$lib$ReactReconcileTransaction = {getTransactionWrappers:function() {
  return TRANSACTION_WRAPPERS$$module$react$lib$ReactReconcileTransaction;
}, getReactMountReady:function() {
  return this.reactMountReady;
}, getPutListenerQueue:function() {
  return this.putListenerQueue;
}, destructor:function() {
  CallbackQueue$$module$react$lib$ReactReconcileTransaction.release(this.reactMountReady);
  this.reactMountReady = null;
  ReactPutListenerQueue$$module$react$lib$ReactReconcileTransaction.release(this.putListenerQueue);
  this.putListenerQueue = null;
}};
assign$$module$react$lib$ReactReconcileTransaction(ReactReconcileTransaction$$module$react$lib$ReactReconcileTransaction.prototype, Transaction$$module$react$lib$ReactReconcileTransaction.Mixin, Mixin$$module$react$lib$ReactReconcileTransaction);
PooledClass$$module$react$lib$ReactReconcileTransaction.addPoolingTo(ReactReconcileTransaction$$module$react$lib$ReactReconcileTransaction);
module$react$lib$ReactReconcileTransaction = ReactReconcileTransaction$$module$react$lib$ReactReconcileTransaction;
