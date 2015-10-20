goog.provide("module$react$lib$ReactPutListenerQueue");
goog.require("module$react$lib$Object_assign");
goog.require("module$react$lib$ReactBrowserEventEmitter");
goog.require("module$react$lib$PooledClass");
var PooledClass$$module$react$lib$ReactPutListenerQueue = module$react$lib$PooledClass;
var ReactBrowserEventEmitter$$module$react$lib$ReactPutListenerQueue = module$react$lib$ReactBrowserEventEmitter;
var assign$$module$react$lib$ReactPutListenerQueue = module$react$lib$Object_assign;
function ReactPutListenerQueue$$module$react$lib$ReactPutListenerQueue() {
  this.listenersToPut = [];
}
assign$$module$react$lib$ReactPutListenerQueue(ReactPutListenerQueue$$module$react$lib$ReactPutListenerQueue.prototype, {enqueuePutListener:function(rootNodeID, propKey, propValue) {
  this.listenersToPut.push({rootNodeID:rootNodeID, propKey:propKey, propValue:propValue});
}, putListeners:function() {
  for (var i = 0;i < this.listenersToPut.length;i++) {
    var listenerToPut = this.listenersToPut[i];
    ReactBrowserEventEmitter$$module$react$lib$ReactPutListenerQueue.putListener(listenerToPut.rootNodeID, listenerToPut.propKey, listenerToPut.propValue);
  }
}, reset:function() {
  this.listenersToPut.length = 0;
}, destructor:function() {
  this.reset();
}});
PooledClass$$module$react$lib$ReactPutListenerQueue.addPoolingTo(ReactPutListenerQueue$$module$react$lib$ReactPutListenerQueue);
module$react$lib$ReactPutListenerQueue = ReactPutListenerQueue$$module$react$lib$ReactPutListenerQueue;
