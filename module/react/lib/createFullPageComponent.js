goog.provide("module$react$lib$createFullPageComponent");goog.require("module$react$lib$invariant");goog.require("module$react$lib$ReactElement");goog.require("module$react$lib$ReactClass");var ReactClass$$module$react$lib$createFullPageComponent=module$react$lib$ReactClass;var ReactElement$$module$react$lib$createFullPageComponent=module$react$lib$ReactElement;var invariant$$module$react$lib$createFullPageComponent=module$react$lib$invariant;
function createFullPageComponent$$module$react$lib$createFullPageComponent(tag){var elementFactory=ReactElement$$module$react$lib$createFullPageComponent.createFactory(tag);var FullPageComponent=ReactClass$$module$react$lib$createFullPageComponent.createClass({tagName:tag.toUpperCase(),displayName:"ReactFullPageComponent"+tag,componentWillUnmount:function(){"production"!==process.env.NODE_ENV?invariant$$module$react$lib$createFullPageComponent(false,"%s tried to unmount. Because of cross-browser quirks it is "+
"impossible to unmount some top-level components (eg \x3chtml\x3e, \x3chead\x3e, "+"and \x3cbody\x3e) reliably and efficiently. To fix this, have a single "+"top-level component that never unmounts render these elements.",this.constructor.displayName):invariant$$module$react$lib$createFullPageComponent(false)},render:function(){return elementFactory(this.props)}});return FullPageComponent}module$react$lib$createFullPageComponent=createFullPageComponent$$module$react$lib$createFullPageComponent