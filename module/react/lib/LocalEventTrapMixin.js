goog.provide("module$react$lib$LocalEventTrapMixin");
goog.require("module$react$lib$invariant");
goog.require("module$react$lib$forEachAccumulated");
goog.require("module$react$lib$accumulateInto");
goog.require("module$react$lib$ReactBrowserEventEmitter");
var ReactBrowserEventEmitter$$module$react$lib$LocalEventTrapMixin = module$react$lib$ReactBrowserEventEmitter;
var accumulateInto$$module$react$lib$LocalEventTrapMixin = module$react$lib$accumulateInto;
var forEachAccumulated$$module$react$lib$LocalEventTrapMixin = module$react$lib$forEachAccumulated;
var invariant$$module$react$lib$LocalEventTrapMixin = module$react$lib$invariant;
function remove$$module$react$lib$LocalEventTrapMixin(event) {
  event.remove();
}
var LocalEventTrapMixin$$module$react$lib$LocalEventTrapMixin = {trapBubbledEvent:function(topLevelType, handlerBaseName) {
  "production" !== process.env.NODE_ENV ? invariant$$module$react$lib$LocalEventTrapMixin(this.isMounted(), "Must be mounted to trap events") : invariant$$module$react$lib$LocalEventTrapMixin(this.isMounted());
  var node = this.getDOMNode();
  "production" !== process.env.NODE_ENV ? invariant$$module$react$lib$LocalEventTrapMixin(node, "LocalEventTrapMixin.trapBubbledEvent(...): Requires node to be rendered.") : invariant$$module$react$lib$LocalEventTrapMixin(node);
  var listener = ReactBrowserEventEmitter$$module$react$lib$LocalEventTrapMixin.trapBubbledEvent(topLevelType, handlerBaseName, node);
  this._localEventListeners = accumulateInto$$module$react$lib$LocalEventTrapMixin(this._localEventListeners, listener);
}, componentWillUnmount:function() {
  if (this._localEventListeners) {
    forEachAccumulated$$module$react$lib$LocalEventTrapMixin(this._localEventListeners, remove$$module$react$lib$LocalEventTrapMixin);
  }
}};
module$react$lib$LocalEventTrapMixin = LocalEventTrapMixin$$module$react$lib$LocalEventTrapMixin;
