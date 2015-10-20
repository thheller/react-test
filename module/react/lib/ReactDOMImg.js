goog.provide("module$react$lib$ReactDOMImg");
goog.require("module$react$lib$ReactElement");
goog.require("module$react$lib$ReactClass");
goog.require("module$react$lib$ReactBrowserComponentMixin");
goog.require("module$react$lib$LocalEventTrapMixin");
goog.require("module$react$lib$EventConstants");
var EventConstants$$module$react$lib$ReactDOMImg = module$react$lib$EventConstants;
var LocalEventTrapMixin$$module$react$lib$ReactDOMImg = module$react$lib$LocalEventTrapMixin;
var ReactBrowserComponentMixin$$module$react$lib$ReactDOMImg = module$react$lib$ReactBrowserComponentMixin;
var ReactClass$$module$react$lib$ReactDOMImg = module$react$lib$ReactClass;
var ReactElement$$module$react$lib$ReactDOMImg = module$react$lib$ReactElement;
var img$$module$react$lib$ReactDOMImg = ReactElement$$module$react$lib$ReactDOMImg.createFactory("img");
var ReactDOMImg$$module$react$lib$ReactDOMImg = ReactClass$$module$react$lib$ReactDOMImg.createClass({displayName:"ReactDOMImg", tagName:"IMG", mixins:[ReactBrowserComponentMixin$$module$react$lib$ReactDOMImg, LocalEventTrapMixin$$module$react$lib$ReactDOMImg], render:function() {
  return img$$module$react$lib$ReactDOMImg(this.props);
}, componentDidMount:function() {
  this.trapBubbledEvent(EventConstants$$module$react$lib$ReactDOMImg.topLevelTypes.topLoad, "load");
  this.trapBubbledEvent(EventConstants$$module$react$lib$ReactDOMImg.topLevelTypes.topError, "error");
}});
module$react$lib$ReactDOMImg = ReactDOMImg$$module$react$lib$ReactDOMImg;
