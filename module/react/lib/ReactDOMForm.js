goog.provide("module$react$lib$ReactDOMForm");
goog.require("module$react$lib$ReactElement");
goog.require("module$react$lib$ReactClass");
goog.require("module$react$lib$ReactBrowserComponentMixin");
goog.require("module$react$lib$LocalEventTrapMixin");
goog.require("module$react$lib$EventConstants");
var EventConstants$$module$react$lib$ReactDOMForm = module$react$lib$EventConstants;
var LocalEventTrapMixin$$module$react$lib$ReactDOMForm = module$react$lib$LocalEventTrapMixin;
var ReactBrowserComponentMixin$$module$react$lib$ReactDOMForm = module$react$lib$ReactBrowserComponentMixin;
var ReactClass$$module$react$lib$ReactDOMForm = module$react$lib$ReactClass;
var ReactElement$$module$react$lib$ReactDOMForm = module$react$lib$ReactElement;
var form$$module$react$lib$ReactDOMForm = ReactElement$$module$react$lib$ReactDOMForm.createFactory("form");
var ReactDOMForm$$module$react$lib$ReactDOMForm = ReactClass$$module$react$lib$ReactDOMForm.createClass({displayName:"ReactDOMForm", tagName:"FORM", mixins:[ReactBrowserComponentMixin$$module$react$lib$ReactDOMForm, LocalEventTrapMixin$$module$react$lib$ReactDOMForm], render:function() {
  return form$$module$react$lib$ReactDOMForm(this.props);
}, componentDidMount:function() {
  this.trapBubbledEvent(EventConstants$$module$react$lib$ReactDOMForm.topLevelTypes.topReset, "reset");
  this.trapBubbledEvent(EventConstants$$module$react$lib$ReactDOMForm.topLevelTypes.topSubmit, "submit");
}});
module$react$lib$ReactDOMForm = ReactDOMForm$$module$react$lib$ReactDOMForm;
