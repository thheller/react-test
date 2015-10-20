goog.provide("module$react$lib$ReactDOMTextComponent");
goog.require("module$react$lib$escapeTextContentForBrowser");
goog.require("module$react$lib$Object_assign");
goog.require("module$react$lib$ReactDOMComponent");
goog.require("module$react$lib$ReactComponentBrowserEnvironment");
goog.require("module$react$lib$DOMPropertyOperations");
var DOMPropertyOperations$$module$react$lib$ReactDOMTextComponent = module$react$lib$DOMPropertyOperations;
var ReactComponentBrowserEnvironment$$module$react$lib$ReactDOMTextComponent = module$react$lib$ReactComponentBrowserEnvironment;
var ReactDOMComponent$$module$react$lib$ReactDOMTextComponent = module$react$lib$ReactDOMComponent;
var assign$$module$react$lib$ReactDOMTextComponent = module$react$lib$Object_assign;
var escapeTextContentForBrowser$$module$react$lib$ReactDOMTextComponent = module$react$lib$escapeTextContentForBrowser;
var ReactDOMTextComponent$$module$react$lib$ReactDOMTextComponent = function(props) {
};
assign$$module$react$lib$ReactDOMTextComponent(ReactDOMTextComponent$$module$react$lib$ReactDOMTextComponent.prototype, {construct:function(text) {
  this._currentElement = text;
  this._stringText = "" + text;
  this._rootNodeID = null;
  this._mountIndex = 0;
}, mountComponent:function(rootID, transaction, context) {
  this._rootNodeID = rootID;
  var escapedText = escapeTextContentForBrowser$$module$react$lib$ReactDOMTextComponent(this._stringText);
  if (transaction.renderToStaticMarkup) {
    return escapedText;
  }
  return "\x3cspan " + DOMPropertyOperations$$module$react$lib$ReactDOMTextComponent.createMarkupForID(rootID) + "\x3e" + escapedText + "\x3c/span\x3e";
}, receiveComponent:function(nextText, transaction) {
  if (nextText !== this._currentElement) {
    this._currentElement = nextText;
    var nextStringText = "" + nextText;
    if (nextStringText !== this._stringText) {
      this._stringText = nextStringText;
      ReactDOMComponent$$module$react$lib$ReactDOMTextComponent.BackendIDOperations.updateTextContentByID(this._rootNodeID, nextStringText);
    }
  }
}, unmountComponent:function() {
  ReactComponentBrowserEnvironment$$module$react$lib$ReactDOMTextComponent.unmountIDFromEnvironment(this._rootNodeID);
}});
module$react$lib$ReactDOMTextComponent = ReactDOMTextComponent$$module$react$lib$ReactDOMTextComponent;
