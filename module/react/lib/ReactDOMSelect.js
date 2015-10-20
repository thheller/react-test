goog.provide("module$react$lib$ReactDOMSelect");
goog.require("module$react$lib$Object_assign");
goog.require("module$react$lib$ReactUpdates");
goog.require("module$react$lib$ReactElement");
goog.require("module$react$lib$ReactClass");
goog.require("module$react$lib$ReactBrowserComponentMixin");
goog.require("module$react$lib$LinkedValueUtils");
goog.require("module$react$lib$AutoFocusMixin");
var AutoFocusMixin$$module$react$lib$ReactDOMSelect = module$react$lib$AutoFocusMixin;
var LinkedValueUtils$$module$react$lib$ReactDOMSelect = module$react$lib$LinkedValueUtils;
var ReactBrowserComponentMixin$$module$react$lib$ReactDOMSelect = module$react$lib$ReactBrowserComponentMixin;
var ReactClass$$module$react$lib$ReactDOMSelect = module$react$lib$ReactClass;
var ReactElement$$module$react$lib$ReactDOMSelect = module$react$lib$ReactElement;
var ReactUpdates$$module$react$lib$ReactDOMSelect = module$react$lib$ReactUpdates;
var assign$$module$react$lib$ReactDOMSelect = module$react$lib$Object_assign;
var select$$module$react$lib$ReactDOMSelect = ReactElement$$module$react$lib$ReactDOMSelect.createFactory("select");
function updateOptionsIfPendingUpdateAndMounted$$module$react$lib$ReactDOMSelect() {
  if (this._pendingUpdate) {
    this._pendingUpdate = false;
    var value = LinkedValueUtils$$module$react$lib$ReactDOMSelect.getValue(this);
    if (value != null && this.isMounted()) {
      updateOptions$$module$react$lib$ReactDOMSelect(this, value);
    }
  }
}
function selectValueType$$module$react$lib$ReactDOMSelect(props, propName, componentName) {
  if (props[propName] == null) {
    return null;
  }
  if (props.multiple) {
    if (!Array.isArray(props[propName])) {
      return new Error("The `" + propName + "` prop supplied to \x3cselect\x3e must be an array if " + "`multiple` is true.");
    }
  } else {
    if (Array.isArray(props[propName])) {
      return new Error("The `" + propName + "` prop supplied to \x3cselect\x3e must be a scalar " + "value if `multiple` is false.");
    }
  }
}
function updateOptions$$module$react$lib$ReactDOMSelect(component, propValue) {
  var selectedValue, i, l;
  var options = component.getDOMNode().options;
  if (component.props.multiple) {
    selectedValue = {};
    for (i = 0, l = propValue.length;i < l;i++) {
      selectedValue["" + propValue[i]] = true;
    }
    for (i = 0, l = options.length;i < l;i++) {
      var selected = selectedValue.hasOwnProperty(options[i].value);
      if (options[i].selected !== selected) {
        options[i].selected = selected;
      }
    }
  } else {
    selectedValue = "" + propValue;
    for (i = 0, l = options.length;i < l;i++) {
      if (options[i].value === selectedValue) {
        options[i].selected = true;
        return;
      }
    }
    if (options.length) {
      options[0].selected = true;
    }
  }
}
var ReactDOMSelect$$module$react$lib$ReactDOMSelect = ReactClass$$module$react$lib$ReactDOMSelect.createClass({displayName:"ReactDOMSelect", tagName:"SELECT", mixins:[AutoFocusMixin$$module$react$lib$ReactDOMSelect, LinkedValueUtils$$module$react$lib$ReactDOMSelect.Mixin, ReactBrowserComponentMixin$$module$react$lib$ReactDOMSelect], propTypes:{defaultValue:selectValueType$$module$react$lib$ReactDOMSelect, value:selectValueType$$module$react$lib$ReactDOMSelect}, render:function() {
  var props = assign$$module$react$lib$ReactDOMSelect({}, this.props);
  props.onChange = this._handleChange;
  props.value = null;
  return select$$module$react$lib$ReactDOMSelect(props, this.props.children);
}, componentWillMount:function() {
  this._pendingUpdate = false;
}, componentDidMount:function() {
  var value = LinkedValueUtils$$module$react$lib$ReactDOMSelect.getValue(this);
  if (value != null) {
    updateOptions$$module$react$lib$ReactDOMSelect(this, value);
  } else {
    if (this.props.defaultValue != null) {
      updateOptions$$module$react$lib$ReactDOMSelect(this, this.props.defaultValue);
    }
  }
}, componentDidUpdate:function(prevProps) {
  var value = LinkedValueUtils$$module$react$lib$ReactDOMSelect.getValue(this);
  if (value != null) {
    this._pendingUpdate = false;
    updateOptions$$module$react$lib$ReactDOMSelect(this, value);
  } else {
    if (!prevProps.multiple !== !this.props.multiple) {
      if (this.props.defaultValue != null) {
        updateOptions$$module$react$lib$ReactDOMSelect(this, this.props.defaultValue);
      } else {
        updateOptions$$module$react$lib$ReactDOMSelect(this, this.props.multiple ? [] : "");
      }
    }
  }
}, _handleChange:function(event) {
  var returnValue;
  var onChange = LinkedValueUtils$$module$react$lib$ReactDOMSelect.getOnChange(this);
  if (onChange) {
    returnValue = onChange.call(this, event);
  }
  this._pendingUpdate = true;
  ReactUpdates$$module$react$lib$ReactDOMSelect.asap(updateOptionsIfPendingUpdateAndMounted$$module$react$lib$ReactDOMSelect, this);
  return returnValue;
}});
module$react$lib$ReactDOMSelect = ReactDOMSelect$$module$react$lib$ReactDOMSelect;
