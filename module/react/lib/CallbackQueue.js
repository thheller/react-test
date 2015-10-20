goog.provide("module$react$lib$CallbackQueue");
goog.require("module$react$lib$invariant");
goog.require("module$react$lib$Object_assign");
goog.require("module$react$lib$PooledClass");
var PooledClass$$module$react$lib$CallbackQueue = module$react$lib$PooledClass;
var assign$$module$react$lib$CallbackQueue = module$react$lib$Object_assign;
var invariant$$module$react$lib$CallbackQueue = module$react$lib$invariant;
function CallbackQueue$$module$react$lib$CallbackQueue() {
  this._callbacks = null;
  this._contexts = null;
}
assign$$module$react$lib$CallbackQueue(CallbackQueue$$module$react$lib$CallbackQueue.prototype, {enqueue:function(callback, context) {
  this._callbacks = this._callbacks || [];
  this._contexts = this._contexts || [];
  this._callbacks.push(callback);
  this._contexts.push(context);
}, notifyAll:function() {
  var callbacks = this._callbacks;
  var contexts = this._contexts;
  if (callbacks) {
    "production" !== process.env.NODE_ENV ? invariant$$module$react$lib$CallbackQueue(callbacks.length === contexts.length, "Mismatched list of contexts in callback queue") : invariant$$module$react$lib$CallbackQueue(callbacks.length === contexts.length);
    this._callbacks = null;
    this._contexts = null;
    for (var i = 0, l = callbacks.length;i < l;i++) {
      callbacks[i].call(contexts[i]);
    }
    callbacks.length = 0;
    contexts.length = 0;
  }
}, reset:function() {
  this._callbacks = null;
  this._contexts = null;
}, destructor:function() {
  this.reset();
}});
PooledClass$$module$react$lib$CallbackQueue.addPoolingTo(CallbackQueue$$module$react$lib$CallbackQueue);
module$react$lib$CallbackQueue = CallbackQueue$$module$react$lib$CallbackQueue;
