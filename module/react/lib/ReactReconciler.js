goog.provide("module$react$lib$ReactReconciler");
goog.require("module$react$lib$ReactElementValidator");
goog.require("module$react$lib$ReactRef");
var ReactRef$$module$react$lib$ReactReconciler = module$react$lib$ReactRef;
var ReactElementValidator$$module$react$lib$ReactReconciler = module$react$lib$ReactElementValidator;
function attachRefs$$module$react$lib$ReactReconciler() {
  ReactRef$$module$react$lib$ReactReconciler.attachRefs(this, this._currentElement);
}
var ReactReconciler$$module$react$lib$ReactReconciler = {mountComponent:function(internalInstance, rootID, transaction, context) {
  var markup = internalInstance.mountComponent(rootID, transaction, context);
  if ("production" !== process.env.NODE_ENV) {
    ReactElementValidator$$module$react$lib$ReactReconciler.checkAndWarnForMutatedProps(internalInstance._currentElement);
  }
  transaction.getReactMountReady().enqueue(attachRefs$$module$react$lib$ReactReconciler, internalInstance);
  return markup;
}, unmountComponent:function(internalInstance) {
  ReactRef$$module$react$lib$ReactReconciler.detachRefs(internalInstance, internalInstance._currentElement);
  internalInstance.unmountComponent();
}, receiveComponent:function(internalInstance, nextElement, transaction, context) {
  var prevElement = internalInstance._currentElement;
  if (nextElement === prevElement && nextElement._owner != null) {
    return;
  }
  if ("production" !== process.env.NODE_ENV) {
    ReactElementValidator$$module$react$lib$ReactReconciler.checkAndWarnForMutatedProps(nextElement);
  }
  var refsChanged = ReactRef$$module$react$lib$ReactReconciler.shouldUpdateRefs(prevElement, nextElement);
  if (refsChanged) {
    ReactRef$$module$react$lib$ReactReconciler.detachRefs(internalInstance, prevElement);
  }
  internalInstance.receiveComponent(nextElement, transaction, context);
  if (refsChanged) {
    transaction.getReactMountReady().enqueue(attachRefs$$module$react$lib$ReactReconciler, internalInstance);
  }
}, performUpdateIfNecessary:function(internalInstance, transaction) {
  internalInstance.performUpdateIfNecessary(transaction);
}};
module$react$lib$ReactReconciler = ReactReconciler$$module$react$lib$ReactReconciler;
