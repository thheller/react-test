goog.provide("module$react$lib$ReactDOMTextarea");
goog.require("module$react$lib$warning");
goog.require("module$react$lib$invariant");
goog.require("module$react$lib$Object_assign");
goog.require("module$react$lib$ReactUpdates");
goog.require("module$react$lib$ReactElement");
goog.require("module$react$lib$ReactClass");
goog.require("module$react$lib$ReactBrowserComponentMixin");
goog.require("module$react$lib$LinkedValueUtils");
goog.require("module$react$lib$DOMPropertyOperations");
goog.require("module$react$lib$AutoFocusMixin");
var AutoFocusMixin$$module$react$lib$ReactDOMTextarea = module$react$lib$AutoFocusMixin;
var DOMPropertyOperations$$module$react$lib$ReactDOMTextarea = module$react$lib$DOMPropertyOperations;
var LinkedValueUtils$$module$react$lib$ReactDOMTextarea = module$react$lib$LinkedValueUtils;
var ReactBrowserComponentMixin$$module$react$lib$ReactDOMTextarea = module$react$lib$ReactBrowserComponentMixin;
var ReactClass$$module$react$lib$ReactDOMTextarea = module$react$lib$ReactClass;
var ReactElement$$module$react$lib$ReactDOMTextarea = module$react$lib$ReactElement;
var ReactUpdates$$module$react$lib$ReactDOMTextarea = module$react$lib$ReactUpdates;
var assign$$module$react$lib$ReactDOMTextarea = module$react$lib$Object_assign;
var invariant$$module$react$lib$ReactDOMTextarea = module$react$lib$invariant;
var warning$$module$react$lib$ReactDOMTextarea = module$react$lib$warning;
var textarea$$module$react$lib$ReactDOMTextarea = ReactElement$$module$react$lib$ReactDOMTextarea.createFactory("textarea");
function forceUpdateIfMounted$$module$react$lib$ReactDOMTextarea() {
  if (this.isMounted()) {
    this.forceUpdate();
  }
}
var ReactDOMTextarea$$module$react$lib$ReactDOMTextarea = ReactClass$$module$react$lib$ReactDOMTextarea.createClass({displayName:"ReactDOMTextarea", tagName:"TEXTAREA", mixins:[AutoFocusMixin$$module$react$lib$ReactDOMTextarea, LinkedValueUtils$$module$react$lib$ReactDOMTextarea.Mixin, ReactBrowserComponentMixin$$module$react$lib$ReactDOMTextarea], getInitialState:function() {
  var defaultValue = this.props.defaultValue;
  var children = this.props.children;
  if (children != null) {
    if ("production" !== process.env.NODE_ENV) {
      "production" !== process.env.NODE_ENV ? warning$$module$react$lib$ReactDOMTextarea(false, "Use the `defaultValue` or `value` props instead of setting " + "children on \x3ctextarea\x3e.") : null;
    }
    "production" !== process.env.NODE_ENV ? invariant$$module$react$lib$ReactDOMTextarea(defaultValue == null, "If you supply `defaultValue` on a \x3ctextarea\x3e, do not pass children.") : invariant$$module$react$lib$ReactDOMTextarea(defaultValue == null);
    if (Array.isArray(children)) {
      "production" !== process.env.NODE_ENV ? invariant$$module$react$lib$ReactDOMTextarea(children.length <= 1, "\x3ctextarea\x3e can only have at most one child.") : invariant$$module$react$lib$ReactDOMTextarea(children.length <= 1);
      children = children[0];
    }
    defaultValue = "" + children;
  }
  if (defaultValue == null) {
    defaultValue = "";
  }
  var value = LinkedValueUtils$$module$react$lib$ReactDOMTextarea.getValue(this);
  return {initialValue:"" + (value != null ? value : defaultValue)};
}, render:function() {
  var props = assign$$module$react$lib$ReactDOMTextarea({}, this.props);
  "production" !== process.env.NODE_ENV ? invariant$$module$react$lib$ReactDOMTextarea(props.dangerouslySetInnerHTML == null, "`dangerouslySetInnerHTML` does not make sense on \x3ctextarea\x3e.") : invariant$$module$react$lib$ReactDOMTextarea(props.dangerouslySetInnerHTML == null);
  props.defaultValue = null;
  props.value = null;
  props.onChange = this._handleChange;
  return textarea$$module$react$lib$ReactDOMTextarea(props, this.state.initialValue);
}, componentDidUpdate:function(prevProps, prevState, prevContext) {
  var value = LinkedValueUtils$$module$react$lib$ReactDOMTextarea.getValue(this);
  if (value != null) {
    var rootNode = this.getDOMNode();
    DOMPropertyOperations$$module$react$lib$ReactDOMTextarea.setValueForProperty(rootNode, "value", "" + value);
  }
}, _handleChange:function(event) {
  var returnValue;
  var onChange = LinkedValueUtils$$module$react$lib$ReactDOMTextarea.getOnChange(this);
  if (onChange) {
    returnValue = onChange.call(this, event);
  }
  ReactUpdates$$module$react$lib$ReactDOMTextarea.asap(forceUpdateIfMounted$$module$react$lib$ReactDOMTextarea, this);
  return returnValue;
}});
module$react$lib$ReactDOMTextarea = ReactDOMTextarea$$module$react$lib$ReactDOMTextarea;
