goog.provide("module$react$lib$ReactDOMOption");
goog.require("module$react$lib$warning");
goog.require("module$react$lib$ReactElement");
goog.require("module$react$lib$ReactClass");
goog.require("module$react$lib$ReactBrowserComponentMixin");
var ReactBrowserComponentMixin$$module$react$lib$ReactDOMOption = module$react$lib$ReactBrowserComponentMixin;
var ReactClass$$module$react$lib$ReactDOMOption = module$react$lib$ReactClass;
var ReactElement$$module$react$lib$ReactDOMOption = module$react$lib$ReactElement;
var warning$$module$react$lib$ReactDOMOption = module$react$lib$warning;
var option$$module$react$lib$ReactDOMOption = ReactElement$$module$react$lib$ReactDOMOption.createFactory("option");
var ReactDOMOption$$module$react$lib$ReactDOMOption = ReactClass$$module$react$lib$ReactDOMOption.createClass({displayName:"ReactDOMOption", tagName:"OPTION", mixins:[ReactBrowserComponentMixin$$module$react$lib$ReactDOMOption], componentWillMount:function() {
  if ("production" !== process.env.NODE_ENV) {
    "production" !== process.env.NODE_ENV ? warning$$module$react$lib$ReactDOMOption(this.props.selected == null, "Use the `defaultValue` or `value` props on \x3cselect\x3e instead of " + "setting `selected` on \x3coption\x3e.") : null;
  }
}, render:function() {
  return option$$module$react$lib$ReactDOMOption(this.props, this.props.children);
}});
module$react$lib$ReactDOMOption = ReactDOMOption$$module$react$lib$ReactDOMOption;
