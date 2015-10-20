goog.provide("module$react$lib$ReactUpdates");
goog.require("module$react$lib$warning");
goog.require("module$react$lib$invariant");
goog.require("module$react$lib$Object_assign");
goog.require("module$react$lib$Transaction");
goog.require("module$react$lib$ReactReconciler");
goog.require("module$react$lib$ReactPerf");
goog.require("module$react$lib$ReactCurrentOwner");
goog.require("module$react$lib$PooledClass");
goog.require("module$react$lib$CallbackQueue");
var CallbackQueue$$module$react$lib$ReactUpdates = module$react$lib$CallbackQueue;
var PooledClass$$module$react$lib$ReactUpdates = module$react$lib$PooledClass;
var ReactCurrentOwner$$module$react$lib$ReactUpdates = module$react$lib$ReactCurrentOwner;
var ReactPerf$$module$react$lib$ReactUpdates = module$react$lib$ReactPerf;
var ReactReconciler$$module$react$lib$ReactUpdates = module$react$lib$ReactReconciler;
var Transaction$$module$react$lib$ReactUpdates = module$react$lib$Transaction;
var assign$$module$react$lib$ReactUpdates = module$react$lib$Object_assign;
var invariant$$module$react$lib$ReactUpdates = module$react$lib$invariant;
var warning$$module$react$lib$ReactUpdates = module$react$lib$warning;
var dirtyComponents$$module$react$lib$ReactUpdates = [];
var asapCallbackQueue$$module$react$lib$ReactUpdates = CallbackQueue$$module$react$lib$ReactUpdates.getPooled();
var asapEnqueued$$module$react$lib$ReactUpdates = false;
var batchingStrategy$$module$react$lib$ReactUpdates = null;
function ensureInjected$$module$react$lib$ReactUpdates() {
  "production" !== process.env.NODE_ENV ? invariant$$module$react$lib$ReactUpdates(ReactUpdates$$module$react$lib$ReactUpdates.ReactReconcileTransaction && batchingStrategy$$module$react$lib$ReactUpdates, "ReactUpdates: must inject a reconcile transaction class and batching " + "strategy") : invariant$$module$react$lib$ReactUpdates(ReactUpdates$$module$react$lib$ReactUpdates.ReactReconcileTransaction && batchingStrategy$$module$react$lib$ReactUpdates);
}
var NESTED_UPDATES$$module$react$lib$ReactUpdates = {initialize:function() {
  this.dirtyComponentsLength = dirtyComponents$$module$react$lib$ReactUpdates.length;
}, close:function() {
  if (this.dirtyComponentsLength !== dirtyComponents$$module$react$lib$ReactUpdates.length) {
    dirtyComponents$$module$react$lib$ReactUpdates.splice(0, this.dirtyComponentsLength);
    flushBatchedUpdates$$module$react$lib$ReactUpdates();
  } else {
    dirtyComponents$$module$react$lib$ReactUpdates.length = 0;
  }
}};
var UPDATE_QUEUEING$$module$react$lib$ReactUpdates = {initialize:function() {
  this.callbackQueue.reset();
}, close:function() {
  this.callbackQueue.notifyAll();
}};
var TRANSACTION_WRAPPERS$$module$react$lib$ReactUpdates = [NESTED_UPDATES$$module$react$lib$ReactUpdates, UPDATE_QUEUEING$$module$react$lib$ReactUpdates];
function ReactUpdatesFlushTransaction$$module$react$lib$ReactUpdates() {
  this.reinitializeTransaction();
  this.dirtyComponentsLength = null;
  this.callbackQueue = CallbackQueue$$module$react$lib$ReactUpdates.getPooled();
  this.reconcileTransaction = ReactUpdates$$module$react$lib$ReactUpdates.ReactReconcileTransaction.getPooled();
}
assign$$module$react$lib$ReactUpdates(ReactUpdatesFlushTransaction$$module$react$lib$ReactUpdates.prototype, Transaction$$module$react$lib$ReactUpdates.Mixin, {getTransactionWrappers:function() {
  return TRANSACTION_WRAPPERS$$module$react$lib$ReactUpdates;
}, destructor:function() {
  this.dirtyComponentsLength = null;
  CallbackQueue$$module$react$lib$ReactUpdates.release(this.callbackQueue);
  this.callbackQueue = null;
  ReactUpdates$$module$react$lib$ReactUpdates.ReactReconcileTransaction.release(this.reconcileTransaction);
  this.reconcileTransaction = null;
}, perform:function(method, scope, a) {
  return Transaction$$module$react$lib$ReactUpdates.Mixin.perform.call(this, this.reconcileTransaction.perform, this.reconcileTransaction, method, scope, a);
}});
PooledClass$$module$react$lib$ReactUpdates.addPoolingTo(ReactUpdatesFlushTransaction$$module$react$lib$ReactUpdates);
function batchedUpdates$$module$react$lib$ReactUpdates(callback, a, b, c, d) {
  ensureInjected$$module$react$lib$ReactUpdates();
  batchingStrategy$$module$react$lib$ReactUpdates.batchedUpdates(callback, a, b, c, d);
}
function mountOrderComparator$$module$react$lib$ReactUpdates(c1, c2) {
  return c1._mountOrder - c2._mountOrder;
}
function runBatchedUpdates$$module$react$lib$ReactUpdates(transaction) {
  var len = transaction.dirtyComponentsLength;
  "production" !== process.env.NODE_ENV ? invariant$$module$react$lib$ReactUpdates(len === dirtyComponents$$module$react$lib$ReactUpdates.length, "Expected flush transaction's stored dirty-components length (%s) to " + "match dirty-components array length (%s).", len, dirtyComponents$$module$react$lib$ReactUpdates.length) : invariant$$module$react$lib$ReactUpdates(len === dirtyComponents$$module$react$lib$ReactUpdates.length);
  dirtyComponents$$module$react$lib$ReactUpdates.sort(mountOrderComparator$$module$react$lib$ReactUpdates);
  for (var i = 0;i < len;i++) {
    var component = dirtyComponents$$module$react$lib$ReactUpdates[i];
    var callbacks = component._pendingCallbacks;
    component._pendingCallbacks = null;
    ReactReconciler$$module$react$lib$ReactUpdates.performUpdateIfNecessary(component, transaction.reconcileTransaction);
    if (callbacks) {
      for (var j = 0;j < callbacks.length;j++) {
        transaction.callbackQueue.enqueue(callbacks[j], component.getPublicInstance());
      }
    }
  }
}
var flushBatchedUpdates$$module$react$lib$ReactUpdates = function() {
  while (dirtyComponents$$module$react$lib$ReactUpdates.length || asapEnqueued$$module$react$lib$ReactUpdates) {
    if (dirtyComponents$$module$react$lib$ReactUpdates.length) {
      var transaction = ReactUpdatesFlushTransaction$$module$react$lib$ReactUpdates.getPooled();
      transaction.perform(runBatchedUpdates$$module$react$lib$ReactUpdates, null, transaction);
      ReactUpdatesFlushTransaction$$module$react$lib$ReactUpdates.release(transaction);
    }
    if (asapEnqueued$$module$react$lib$ReactUpdates) {
      asapEnqueued$$module$react$lib$ReactUpdates = false;
      var queue = asapCallbackQueue$$module$react$lib$ReactUpdates;
      asapCallbackQueue$$module$react$lib$ReactUpdates = CallbackQueue$$module$react$lib$ReactUpdates.getPooled();
      queue.notifyAll();
      CallbackQueue$$module$react$lib$ReactUpdates.release(queue);
    }
  }
};
flushBatchedUpdates$$module$react$lib$ReactUpdates = ReactPerf$$module$react$lib$ReactUpdates.measure("ReactUpdates", "flushBatchedUpdates", flushBatchedUpdates$$module$react$lib$ReactUpdates);
function enqueueUpdate$$module$react$lib$ReactUpdates(component) {
  ensureInjected$$module$react$lib$ReactUpdates();
  "production" !== process.env.NODE_ENV ? warning$$module$react$lib$ReactUpdates(ReactCurrentOwner$$module$react$lib$ReactUpdates.current == null, "enqueueUpdate(): Render methods should be a pure function of props " + "and state; triggering nested component updates from render is not " + "allowed. If necessary, trigger nested updates in " + "componentDidUpdate.") : null;
  if (!batchingStrategy$$module$react$lib$ReactUpdates.isBatchingUpdates) {
    batchingStrategy$$module$react$lib$ReactUpdates.batchedUpdates(enqueueUpdate$$module$react$lib$ReactUpdates, component);
    return;
  }
  dirtyComponents$$module$react$lib$ReactUpdates.push(component);
}
function asap$$module$react$lib$ReactUpdates(callback, context) {
  "production" !== process.env.NODE_ENV ? invariant$$module$react$lib$ReactUpdates(batchingStrategy$$module$react$lib$ReactUpdates.isBatchingUpdates, "ReactUpdates.asap: Can't enqueue an asap callback in a context where" + "updates are not being batched.") : invariant$$module$react$lib$ReactUpdates(batchingStrategy$$module$react$lib$ReactUpdates.isBatchingUpdates);
  asapCallbackQueue$$module$react$lib$ReactUpdates.enqueue(callback, context);
  asapEnqueued$$module$react$lib$ReactUpdates = true;
}
var ReactUpdatesInjection$$module$react$lib$ReactUpdates = {injectReconcileTransaction:function(ReconcileTransaction) {
  "production" !== process.env.NODE_ENV ? invariant$$module$react$lib$ReactUpdates(ReconcileTransaction, "ReactUpdates: must provide a reconcile transaction class") : invariant$$module$react$lib$ReactUpdates(ReconcileTransaction);
  ReactUpdates$$module$react$lib$ReactUpdates.ReactReconcileTransaction = ReconcileTransaction;
}, injectBatchingStrategy:function(_batchingStrategy) {
  "production" !== process.env.NODE_ENV ? invariant$$module$react$lib$ReactUpdates(_batchingStrategy, "ReactUpdates: must provide a batching strategy") : invariant$$module$react$lib$ReactUpdates(_batchingStrategy);
  "production" !== process.env.NODE_ENV ? invariant$$module$react$lib$ReactUpdates(typeof _batchingStrategy.batchedUpdates === "function", "ReactUpdates: must provide a batchedUpdates() function") : invariant$$module$react$lib$ReactUpdates(typeof _batchingStrategy.batchedUpdates === "function");
  "production" !== process.env.NODE_ENV ? invariant$$module$react$lib$ReactUpdates(typeof _batchingStrategy.isBatchingUpdates === "boolean", "ReactUpdates: must provide an isBatchingUpdates boolean attribute") : invariant$$module$react$lib$ReactUpdates(typeof _batchingStrategy.isBatchingUpdates === "boolean");
  batchingStrategy$$module$react$lib$ReactUpdates = _batchingStrategy;
}};
var ReactUpdates$$module$react$lib$ReactUpdates = {ReactReconcileTransaction:null, batchedUpdates:batchedUpdates$$module$react$lib$ReactUpdates, enqueueUpdate:enqueueUpdate$$module$react$lib$ReactUpdates, flushBatchedUpdates:flushBatchedUpdates$$module$react$lib$ReactUpdates, injection:ReactUpdatesInjection$$module$react$lib$ReactUpdates, asap:asap$$module$react$lib$ReactUpdates};
module$react$lib$ReactUpdates = ReactUpdates$$module$react$lib$ReactUpdates;
