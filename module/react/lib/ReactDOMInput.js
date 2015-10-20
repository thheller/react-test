goog.provide("module$react$lib$ReactDOMInput");
goog.require("module$react$lib$invariant");
goog.require("module$react$lib$Object_assign");
goog.require("module$react$lib$ReactUpdates");
goog.require("module$react$lib$ReactMount");
goog.require("module$react$lib$ReactElement");
goog.require("module$react$lib$ReactClass");
goog.require("module$react$lib$ReactBrowserComponentMixin");
goog.require("module$react$lib$LinkedValueUtils");
goog.require("module$react$lib$DOMPropertyOperations");
goog.require("module$react$lib$AutoFocusMixin");
var AutoFocusMixin$$module$react$lib$ReactDOMInput = module$react$lib$AutoFocusMixin;
var DOMPropertyOperations$$module$react$lib$ReactDOMInput = module$react$lib$DOMPropertyOperations;
var LinkedValueUtils$$module$react$lib$ReactDOMInput = module$react$lib$LinkedValueUtils;
var ReactBrowserComponentMixin$$module$react$lib$ReactDOMInput = module$react$lib$ReactBrowserComponentMixin;
var ReactClass$$module$react$lib$ReactDOMInput = module$react$lib$ReactClass;
var ReactElement$$module$react$lib$ReactDOMInput = module$react$lib$ReactElement;
var ReactMount$$module$react$lib$ReactDOMInput = module$react$lib$ReactMount;
var ReactUpdates$$module$react$lib$ReactDOMInput = module$react$lib$ReactUpdates;
var assign$$module$react$lib$ReactDOMInput = module$react$lib$Object_assign;
var invariant$$module$react$lib$ReactDOMInput = module$react$lib$invariant;
var input$$module$react$lib$ReactDOMInput = ReactElement$$module$react$lib$ReactDOMInput.createFactory("input");
var instancesByReactID$$module$react$lib$ReactDOMInput = {};
function forceUpdateIfMounted$$module$react$lib$ReactDOMInput() {
  if (this.isMounted()) {
    this.forceUpdate();
  }
}
var ReactDOMInput$$module$react$lib$ReactDOMInput = ReactClass$$module$react$lib$ReactDOMInput.createClass({displayName:"ReactDOMInput", tagName:"INPUT", mixins:[AutoFocusMixin$$module$react$lib$ReactDOMInput, LinkedValueUtils$$module$react$lib$ReactDOMInput.Mixin, ReactBrowserComponentMixin$$module$react$lib$ReactDOMInput], getInitialState:function() {
  var defaultValue = this.props.defaultValue;
  return {initialChecked:this.props.defaultChecked || false, initialValue:defaultValue != null ? defaultValue : null};
}, render:function() {
  var props = assign$$module$react$lib$ReactDOMInput({}, this.props);
  props.defaultChecked = null;
  props.defaultValue = null;
  var value = LinkedValueUtils$$module$react$lib$ReactDOMInput.getValue(this);
  props.value = value != null ? value : this.state.initialValue;
  var checked = LinkedValueUtils$$module$react$lib$ReactDOMInput.getChecked(this);
  props.checked = checked != null ? checked : this.state.initialChecked;
  props.onChange = this._handleChange;
  return input$$module$react$lib$ReactDOMInput(props, this.props.children);
}, componentDidMount:function() {
  var id = ReactMount$$module$react$lib$ReactDOMInput.getID(this.getDOMNode());
  instancesByReactID$$module$react$lib$ReactDOMInput[id] = this;
}, componentWillUnmount:function() {
  var rootNode = this.getDOMNode();
  var id = ReactMount$$module$react$lib$ReactDOMInput.getID(rootNode);
  delete instancesByReactID$$module$react$lib$ReactDOMInput[id];
}, componentDidUpdate:function(prevProps, prevState, prevContext) {
  var rootNode = this.getDOMNode();
  if (this.props.checked != null) {
    DOMPropertyOperations$$module$react$lib$ReactDOMInput.setValueForProperty(rootNode, "checked", this.props.checked || false);
  }
  var value = LinkedValueUtils$$module$react$lib$ReactDOMInput.getValue(this);
  if (value != null) {
    DOMPropertyOperations$$module$react$lib$ReactDOMInput.setValueForProperty(rootNode, "value", "" + value);
  }
}, _handleChange:function(event) {
  var returnValue;
  var onChange = LinkedValueUtils$$module$react$lib$ReactDOMInput.getOnChange(this);
  if (onChange) {
    returnValue = onChange.call(this, event);
  }
  ReactUpdates$$module$react$lib$ReactDOMInput.asap(forceUpdateIfMounted$$module$react$lib$ReactDOMInput, this);
  var name = this.props.name;
  if (this.props.type === "radio" && name != null) {
    var rootNode = this.getDOMNode();
    var queryRoot = rootNode;
    while (queryRoot.parentNode) {
      queryRoot = queryRoot.parentNode;
    }
    var group = queryRoot.querySelectorAll("input[name\x3d" + JSON.stringify("" + name) + '][type\x3d"radio"]');
    for (var i = 0, groupLen = group.length;i < groupLen;i++) {
      var otherNode = group[i];
      if (otherNode === rootNode || otherNode.form !== rootNode.form) {
        continue;
      }
      var otherID = ReactMount$$module$react$lib$ReactDOMInput.getID(otherNode);
      "production" !== process.env.NODE_ENV ? invariant$$module$react$lib$ReactDOMInput(otherID, "ReactDOMInput: Mixing React and non-React radio inputs with the " + "same `name` is not supported.") : invariant$$module$react$lib$ReactDOMInput(otherID);
      var otherInstance = instancesByReactID$$module$react$lib$ReactDOMInput[otherID];
      "production" !== process.env.NODE_ENV ? invariant$$module$react$lib$ReactDOMInput(otherInstance, "ReactDOMInput: Unknown radio button ID %s.", otherID) : invariant$$module$react$lib$ReactDOMInput(otherInstance);
      ReactUpdates$$module$react$lib$ReactDOMInput.asap(forceUpdateIfMounted$$module$react$lib$ReactDOMInput, otherInstance);
    }
  }
  return returnValue;
}});
module$react$lib$ReactDOMInput = ReactDOMInput$$module$react$lib$ReactDOMInput;
