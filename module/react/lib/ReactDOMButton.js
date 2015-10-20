goog.provide("module$react$lib$ReactDOMButton");
goog.require("module$react$lib$keyMirror");
goog.require("module$react$lib$ReactElement");
goog.require("module$react$lib$ReactClass");
goog.require("module$react$lib$ReactBrowserComponentMixin");
goog.require("module$react$lib$AutoFocusMixin");
var AutoFocusMixin$$module$react$lib$ReactDOMButton = module$react$lib$AutoFocusMixin;
var ReactBrowserComponentMixin$$module$react$lib$ReactDOMButton = module$react$lib$ReactBrowserComponentMixin;
var ReactClass$$module$react$lib$ReactDOMButton = module$react$lib$ReactClass;
var ReactElement$$module$react$lib$ReactDOMButton = module$react$lib$ReactElement;
var keyMirror$$module$react$lib$ReactDOMButton = module$react$lib$keyMirror;
var button$$module$react$lib$ReactDOMButton = ReactElement$$module$react$lib$ReactDOMButton.createFactory("button");
var mouseListenerNames$$module$react$lib$ReactDOMButton = keyMirror$$module$react$lib$ReactDOMButton({onClick:true, onDoubleClick:true, onMouseDown:true, onMouseMove:true, onMouseUp:true, onClickCapture:true, onDoubleClickCapture:true, onMouseDownCapture:true, onMouseMoveCapture:true, onMouseUpCapture:true});
var ReactDOMButton$$module$react$lib$ReactDOMButton = ReactClass$$module$react$lib$ReactDOMButton.createClass({displayName:"ReactDOMButton", tagName:"BUTTON", mixins:[AutoFocusMixin$$module$react$lib$ReactDOMButton, ReactBrowserComponentMixin$$module$react$lib$ReactDOMButton], render:function() {
  var props = {};
  for (var key in this.props) {
    if (this.props.hasOwnProperty(key) && (!this.props.disabled || !mouseListenerNames$$module$react$lib$ReactDOMButton[key])) {
      props[key] = this.props[key];
    }
  }
  return button$$module$react$lib$ReactDOMButton(props, this.props.children);
}});
module$react$lib$ReactDOMButton = ReactDOMButton$$module$react$lib$ReactDOMButton;
