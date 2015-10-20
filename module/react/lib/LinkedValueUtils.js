goog.provide("module$react$lib$LinkedValueUtils");
goog.require("module$react$lib$invariant");
goog.require("module$react$lib$ReactPropTypes");
var ReactPropTypes$$module$react$lib$LinkedValueUtils = module$react$lib$ReactPropTypes;
var invariant$$module$react$lib$LinkedValueUtils = module$react$lib$invariant;
var hasReadOnlyValue$$module$react$lib$LinkedValueUtils = {"button":true, "checkbox":true, "image":true, "hidden":true, "radio":true, "reset":true, "submit":true};
function _assertSingleLink$$module$react$lib$LinkedValueUtils(input) {
  "production" !== process.env.NODE_ENV ? invariant$$module$react$lib$LinkedValueUtils(input.props.checkedLink == null || input.props.valueLink == null, "Cannot provide a checkedLink and a valueLink. If you want to use " + "checkedLink, you probably don't want to use valueLink and vice versa.") : invariant$$module$react$lib$LinkedValueUtils(input.props.checkedLink == null || input.props.valueLink == null);
}
function _assertValueLink$$module$react$lib$LinkedValueUtils(input) {
  _assertSingleLink$$module$react$lib$LinkedValueUtils(input);
  "production" !== process.env.NODE_ENV ? invariant$$module$react$lib$LinkedValueUtils(input.props.value == null && input.props.onChange == null, "Cannot provide a valueLink and a value or onChange event. If you want " + "to use value or onChange, you probably don't want to use valueLink.") : invariant$$module$react$lib$LinkedValueUtils(input.props.value == null && input.props.onChange == null);
}
function _assertCheckedLink$$module$react$lib$LinkedValueUtils(input) {
  _assertSingleLink$$module$react$lib$LinkedValueUtils(input);
  "production" !== process.env.NODE_ENV ? invariant$$module$react$lib$LinkedValueUtils(input.props.checked == null && input.props.onChange == null, "Cannot provide a checkedLink and a checked property or onChange event. " + "If you want to use checked or onChange, you probably don't want to " + "use checkedLink") : invariant$$module$react$lib$LinkedValueUtils(input.props.checked == null && input.props.onChange == null);
}
function _handleLinkedValueChange$$module$react$lib$LinkedValueUtils(e) {
  this.props.valueLink.requestChange(e.target.value);
}
function _handleLinkedCheckChange$$module$react$lib$LinkedValueUtils(e) {
  this.props.checkedLink.requestChange(e.target.checked);
}
var LinkedValueUtils$$module$react$lib$LinkedValueUtils = {Mixin:{propTypes:{value:function(props, propName, componentName) {
  if (!props[propName] || hasReadOnlyValue$$module$react$lib$LinkedValueUtils[props.type] || props.onChange || props.readOnly || props.disabled) {
    return null;
  }
  return new Error("You provided a `value` prop to a form field without an " + "`onChange` handler. This will render a read-only field. If " + "the field should be mutable use `defaultValue`. Otherwise, " + "set either `onChange` or `readOnly`.");
}, checked:function(props, propName, componentName) {
  if (!props[propName] || props.onChange || props.readOnly || props.disabled) {
    return null;
  }
  return new Error("You provided a `checked` prop to a form field without an " + "`onChange` handler. This will render a read-only field. If " + "the field should be mutable use `defaultChecked`. Otherwise, " + "set either `onChange` or `readOnly`.");
}, onChange:ReactPropTypes$$module$react$lib$LinkedValueUtils.func}}, getValue:function(input) {
  if (input.props.valueLink) {
    _assertValueLink$$module$react$lib$LinkedValueUtils(input);
    return input.props.valueLink.value;
  }
  return input.props.value;
}, getChecked:function(input) {
  if (input.props.checkedLink) {
    _assertCheckedLink$$module$react$lib$LinkedValueUtils(input);
    return input.props.checkedLink.value;
  }
  return input.props.checked;
}, getOnChange:function(input) {
  if (input.props.valueLink) {
    _assertValueLink$$module$react$lib$LinkedValueUtils(input);
    return _handleLinkedValueChange$$module$react$lib$LinkedValueUtils;
  } else {
    if (input.props.checkedLink) {
      _assertCheckedLink$$module$react$lib$LinkedValueUtils(input);
      return _handleLinkedCheckChange$$module$react$lib$LinkedValueUtils;
    }
  }
  return input.props.onChange;
}};
module$react$lib$LinkedValueUtils = LinkedValueUtils$$module$react$lib$LinkedValueUtils;
