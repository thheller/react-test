goog.provide("module$react$lib$ReactDOMIframe");goog.require("module$react$lib$ReactElement");goog.require("module$react$lib$ReactClass");goog.require("module$react$lib$ReactBrowserComponentMixin");goog.require("module$react$lib$LocalEventTrapMixin");goog.require("module$react$lib$EventConstants");var EventConstants$$module$react$lib$ReactDOMIframe=module$react$lib$EventConstants;var LocalEventTrapMixin$$module$react$lib$ReactDOMIframe=module$react$lib$LocalEventTrapMixin;
var ReactBrowserComponentMixin$$module$react$lib$ReactDOMIframe=module$react$lib$ReactBrowserComponentMixin;var ReactClass$$module$react$lib$ReactDOMIframe=module$react$lib$ReactClass;var ReactElement$$module$react$lib$ReactDOMIframe=module$react$lib$ReactElement;var iframe$$module$react$lib$ReactDOMIframe=ReactElement$$module$react$lib$ReactDOMIframe.createFactory("iframe");
var ReactDOMIframe$$module$react$lib$ReactDOMIframe=ReactClass$$module$react$lib$ReactDOMIframe.createClass({displayName:"ReactDOMIframe",tagName:"IFRAME",mixins:[ReactBrowserComponentMixin$$module$react$lib$ReactDOMIframe,LocalEventTrapMixin$$module$react$lib$ReactDOMIframe],render:function(){return iframe$$module$react$lib$ReactDOMIframe(this.props)},componentDidMount:function(){this.trapBubbledEvent(EventConstants$$module$react$lib$ReactDOMIframe.topLevelTypes.topLoad,"load")}});
module$react$lib$ReactDOMIframe=ReactDOMIframe$$module$react$lib$ReactDOMIframe