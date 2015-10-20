goog.provide("module$react$lib$ReactServerRendering");
goog.require("module$react$lib$invariant");
goog.require("module$react$lib$instantiateReactComponent");
goog.require("module$react$lib$emptyObject");
goog.require("module$react$lib$ReactServerRenderingTransaction");
goog.require("module$react$lib$ReactMarkupChecksum");
goog.require("module$react$lib$ReactInstanceHandles");
goog.require("module$react$lib$ReactElement");
var ReactElement$$module$react$lib$ReactServerRendering = module$react$lib$ReactElement;
var ReactInstanceHandles$$module$react$lib$ReactServerRendering = module$react$lib$ReactInstanceHandles;
var ReactMarkupChecksum$$module$react$lib$ReactServerRendering = module$react$lib$ReactMarkupChecksum;
var ReactServerRenderingTransaction$$module$react$lib$ReactServerRendering = module$react$lib$ReactServerRenderingTransaction;
var emptyObject$$module$react$lib$ReactServerRendering = module$react$lib$emptyObject;
var instantiateReactComponent$$module$react$lib$ReactServerRendering = module$react$lib$instantiateReactComponent;
var invariant$$module$react$lib$ReactServerRendering = module$react$lib$invariant;
function renderToString$$module$react$lib$ReactServerRendering(element) {
  "production" !== process.env.NODE_ENV ? invariant$$module$react$lib$ReactServerRendering(ReactElement$$module$react$lib$ReactServerRendering.isValidElement(element), "renderToString(): You must pass a valid ReactElement.") : invariant$$module$react$lib$ReactServerRendering(ReactElement$$module$react$lib$ReactServerRendering.isValidElement(element));
  var transaction;
  try {
    var id = ReactInstanceHandles$$module$react$lib$ReactServerRendering.createReactRootID();
    transaction = ReactServerRenderingTransaction$$module$react$lib$ReactServerRendering.getPooled(false);
    return transaction.perform(function() {
      var componentInstance = instantiateReactComponent$$module$react$lib$ReactServerRendering(element, null);
      var markup = componentInstance.mountComponent(id, transaction, emptyObject$$module$react$lib$ReactServerRendering);
      return ReactMarkupChecksum$$module$react$lib$ReactServerRendering.addChecksumToMarkup(markup);
    }, null);
  } finally {
    ReactServerRenderingTransaction$$module$react$lib$ReactServerRendering.release(transaction);
  }
}
function renderToStaticMarkup$$module$react$lib$ReactServerRendering(element) {
  "production" !== process.env.NODE_ENV ? invariant$$module$react$lib$ReactServerRendering(ReactElement$$module$react$lib$ReactServerRendering.isValidElement(element), "renderToStaticMarkup(): You must pass a valid ReactElement.") : invariant$$module$react$lib$ReactServerRendering(ReactElement$$module$react$lib$ReactServerRendering.isValidElement(element));
  var transaction;
  try {
    var id = ReactInstanceHandles$$module$react$lib$ReactServerRendering.createReactRootID();
    transaction = ReactServerRenderingTransaction$$module$react$lib$ReactServerRendering.getPooled(true);
    return transaction.perform(function() {
      var componentInstance = instantiateReactComponent$$module$react$lib$ReactServerRendering(element, null);
      return componentInstance.mountComponent(id, transaction, emptyObject$$module$react$lib$ReactServerRendering);
    }, null);
  } finally {
    ReactServerRenderingTransaction$$module$react$lib$ReactServerRendering.release(transaction);
  }
}
module$react$lib$ReactServerRendering = {renderToString:renderToString$$module$react$lib$ReactServerRendering, renderToStaticMarkup:renderToStaticMarkup$$module$react$lib$ReactServerRendering};
