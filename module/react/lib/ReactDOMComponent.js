goog.provide("module$react$lib$ReactDOMComponent");
goog.require("module$react$lib$warning");
goog.require("module$react$lib$keyOf");
goog.require("module$react$lib$isEventSupported");
goog.require("module$react$lib$invariant");
goog.require("module$react$lib$escapeTextContentForBrowser");
goog.require("module$react$lib$Object_assign");
goog.require("module$react$lib$ReactPerf");
goog.require("module$react$lib$ReactMultiChild");
goog.require("module$react$lib$ReactMount");
goog.require("module$react$lib$ReactComponentBrowserEnvironment");
goog.require("module$react$lib$ReactBrowserEventEmitter");
goog.require("module$react$lib$DOMPropertyOperations");
goog.require("module$react$lib$DOMProperty");
goog.require("module$react$lib$CSSPropertyOperations");
var CSSPropertyOperations$$module$react$lib$ReactDOMComponent = module$react$lib$CSSPropertyOperations;
var DOMProperty$$module$react$lib$ReactDOMComponent = module$react$lib$DOMProperty;
var DOMPropertyOperations$$module$react$lib$ReactDOMComponent = module$react$lib$DOMPropertyOperations;
var ReactBrowserEventEmitter$$module$react$lib$ReactDOMComponent = module$react$lib$ReactBrowserEventEmitter;
var ReactComponentBrowserEnvironment$$module$react$lib$ReactDOMComponent = module$react$lib$ReactComponentBrowserEnvironment;
var ReactMount$$module$react$lib$ReactDOMComponent = module$react$lib$ReactMount;
var ReactMultiChild$$module$react$lib$ReactDOMComponent = module$react$lib$ReactMultiChild;
var ReactPerf$$module$react$lib$ReactDOMComponent = module$react$lib$ReactPerf;
var assign$$module$react$lib$ReactDOMComponent = module$react$lib$Object_assign;
var escapeTextContentForBrowser$$module$react$lib$ReactDOMComponent = module$react$lib$escapeTextContentForBrowser;
var invariant$$module$react$lib$ReactDOMComponent = module$react$lib$invariant;
var isEventSupported$$module$react$lib$ReactDOMComponent = module$react$lib$isEventSupported;
var keyOf$$module$react$lib$ReactDOMComponent = module$react$lib$keyOf;
var warning$$module$react$lib$ReactDOMComponent = module$react$lib$warning;
var deleteListener$$module$react$lib$ReactDOMComponent = ReactBrowserEventEmitter$$module$react$lib$ReactDOMComponent.deleteListener;
var listenTo$$module$react$lib$ReactDOMComponent = ReactBrowserEventEmitter$$module$react$lib$ReactDOMComponent.listenTo;
var registrationNameModules$$module$react$lib$ReactDOMComponent = ReactBrowserEventEmitter$$module$react$lib$ReactDOMComponent.registrationNameModules;
var CONTENT_TYPES$$module$react$lib$ReactDOMComponent = {"string":true, "number":true};
var STYLE$$module$react$lib$ReactDOMComponent = keyOf$$module$react$lib$ReactDOMComponent({style:null});
var ELEMENT_NODE_TYPE$$module$react$lib$ReactDOMComponent = 1;
var BackendIDOperations$$module$react$lib$ReactDOMComponent = null;
function assertValidProps$$module$react$lib$ReactDOMComponent(props) {
  if (!props) {
    return;
  }
  if (props.dangerouslySetInnerHTML != null) {
    "production" !== process.env.NODE_ENV ? invariant$$module$react$lib$ReactDOMComponent(props.children == null, "Can only set one of `children` or `props.dangerouslySetInnerHTML`.") : invariant$$module$react$lib$ReactDOMComponent(props.children == null);
    "production" !== process.env.NODE_ENV ? invariant$$module$react$lib$ReactDOMComponent(typeof props.dangerouslySetInnerHTML === "object" && "__html" in props.dangerouslySetInnerHTML, "`props.dangerouslySetInnerHTML` must be in the form `{__html: ...}`. " + "Please visit https://fb.me/react-invariant-dangerously-set-inner-html " + "for more information.") : invariant$$module$react$lib$ReactDOMComponent(typeof props.dangerouslySetInnerHTML === "object" && "__html" in props.dangerouslySetInnerHTML);
  }
  if ("production" !== process.env.NODE_ENV) {
    "production" !== process.env.NODE_ENV ? warning$$module$react$lib$ReactDOMComponent(props.innerHTML == null, "Directly setting property `innerHTML` is not permitted. " + "For more information, lookup documentation on `dangerouslySetInnerHTML`.") : null;
    "production" !== process.env.NODE_ENV ? warning$$module$react$lib$ReactDOMComponent(!props.contentEditable || props.children == null, "A component is `contentEditable` and contains `children` managed by " + "React. It is now your responsibility to guarantee that none of " + "those nodes are unexpectedly modified or duplicated. This is " + "probably not intentional.") : null;
  }
  "production" !== process.env.NODE_ENV ? invariant$$module$react$lib$ReactDOMComponent(props.style == null || typeof props.style === "object", "The `style` prop expects a mapping from style properties to values, " + "not a string. For example, style\x3d{{marginRight: spacing + 'em'}} when " + "using JSX.") : invariant$$module$react$lib$ReactDOMComponent(props.style == null || typeof props.style === "object");
}
function putListener$$module$react$lib$ReactDOMComponent(id, registrationName, listener, transaction) {
  if ("production" !== process.env.NODE_ENV) {
    "production" !== process.env.NODE_ENV ? warning$$module$react$lib$ReactDOMComponent(registrationName !== "onScroll" || isEventSupported$$module$react$lib$ReactDOMComponent("scroll", true), "This browser doesn't support the `onScroll` event") : null;
  }
  var container = ReactMount$$module$react$lib$ReactDOMComponent.findReactContainerForID(id);
  if (container) {
    var doc = container.nodeType === ELEMENT_NODE_TYPE$$module$react$lib$ReactDOMComponent ? container.ownerDocument : container;
    listenTo$$module$react$lib$ReactDOMComponent(registrationName, doc);
  }
  transaction.getPutListenerQueue().enqueuePutListener(id, registrationName, listener);
}
var omittedCloseTags$$module$react$lib$ReactDOMComponent = {"area":true, "base":true, "br":true, "col":true, "embed":true, "hr":true, "img":true, "input":true, "keygen":true, "link":true, "meta":true, "param":true, "source":true, "track":true, "wbr":true};
var VALID_TAG_REGEX$$module$react$lib$ReactDOMComponent = /^[a-zA-Z][a-zA-Z:_\.\-\d]*$/;
var validatedTagCache$$module$react$lib$ReactDOMComponent = {};
var hasOwnProperty$$module$react$lib$ReactDOMComponent = {}.hasOwnProperty;
function validateDangerousTag$$module$react$lib$ReactDOMComponent(tag) {
  if (!hasOwnProperty$$module$react$lib$ReactDOMComponent.call(validatedTagCache$$module$react$lib$ReactDOMComponent, tag)) {
    "production" !== process.env.NODE_ENV ? invariant$$module$react$lib$ReactDOMComponent(VALID_TAG_REGEX$$module$react$lib$ReactDOMComponent.test(tag), "Invalid tag: %s", tag) : invariant$$module$react$lib$ReactDOMComponent(VALID_TAG_REGEX$$module$react$lib$ReactDOMComponent.test(tag));
    validatedTagCache$$module$react$lib$ReactDOMComponent[tag] = true;
  }
}
function ReactDOMComponent$$module$react$lib$ReactDOMComponent(tag) {
  validateDangerousTag$$module$react$lib$ReactDOMComponent(tag);
  this._tag = tag;
  this._renderedChildren = null;
  this._previousStyleCopy = null;
  this._rootNodeID = null;
}
ReactDOMComponent$$module$react$lib$ReactDOMComponent.displayName = "ReactDOMComponent";
ReactDOMComponent$$module$react$lib$ReactDOMComponent.Mixin = {construct:function(element) {
  this._currentElement = element;
}, mountComponent:function(rootID, transaction, context) {
  this._rootNodeID = rootID;
  assertValidProps$$module$react$lib$ReactDOMComponent(this._currentElement.props);
  var closeTag = omittedCloseTags$$module$react$lib$ReactDOMComponent[this._tag] ? "" : "\x3c/" + this._tag + "\x3e";
  return this._createOpenTagMarkupAndPutListeners(transaction) + this._createContentMarkup(transaction, context) + closeTag;
}, _createOpenTagMarkupAndPutListeners:function(transaction) {
  var props = this._currentElement.props;
  var ret = "\x3c" + this._tag;
  for (var propKey in props) {
    if (!props.hasOwnProperty(propKey)) {
      continue;
    }
    var propValue = props[propKey];
    if (propValue == null) {
      continue;
    }
    if (registrationNameModules$$module$react$lib$ReactDOMComponent.hasOwnProperty(propKey)) {
      putListener$$module$react$lib$ReactDOMComponent(this._rootNodeID, propKey, propValue, transaction);
    } else {
      if (propKey === STYLE$$module$react$lib$ReactDOMComponent) {
        if (propValue) {
          propValue = this._previousStyleCopy = assign$$module$react$lib$ReactDOMComponent({}, props.style);
        }
        propValue = CSSPropertyOperations$$module$react$lib$ReactDOMComponent.createMarkupForStyles(propValue);
      }
      var markup = DOMPropertyOperations$$module$react$lib$ReactDOMComponent.createMarkupForProperty(propKey, propValue);
      if (markup) {
        ret += " " + markup;
      }
    }
  }
  if (transaction.renderToStaticMarkup) {
    return ret + "\x3e";
  }
  var markupForID = DOMPropertyOperations$$module$react$lib$ReactDOMComponent.createMarkupForID(this._rootNodeID);
  return ret + " " + markupForID + "\x3e";
}, _createContentMarkup:function(transaction, context) {
  var prefix = "";
  if (this._tag === "listing" || this._tag === "pre" || this._tag === "textarea") {
    prefix = "\n";
  }
  var props = this._currentElement.props;
  var innerHTML = props.dangerouslySetInnerHTML;
  if (innerHTML != null) {
    if (innerHTML.__html != null) {
      return prefix + innerHTML.__html;
    }
  } else {
    var contentToUse = CONTENT_TYPES$$module$react$lib$ReactDOMComponent[typeof props.children] ? props.children : null;
    var childrenToUse = contentToUse != null ? null : props.children;
    if (contentToUse != null) {
      return prefix + escapeTextContentForBrowser$$module$react$lib$ReactDOMComponent(contentToUse);
    } else {
      if (childrenToUse != null) {
        var mountImages = this.mountChildren(childrenToUse, transaction, context);
        return prefix + mountImages.join("");
      }
    }
  }
  return prefix;
}, receiveComponent:function(nextElement, transaction, context) {
  var prevElement = this._currentElement;
  this._currentElement = nextElement;
  this.updateComponent(transaction, prevElement, nextElement, context);
}, updateComponent:function(transaction, prevElement, nextElement, context) {
  assertValidProps$$module$react$lib$ReactDOMComponent(this._currentElement.props);
  this._updateDOMProperties(prevElement.props, transaction);
  this._updateDOMChildren(prevElement.props, transaction, context);
}, _updateDOMProperties:function(lastProps, transaction) {
  var nextProps = this._currentElement.props;
  var propKey;
  var styleName;
  var styleUpdates;
  for (propKey in lastProps) {
    if (nextProps.hasOwnProperty(propKey) || !lastProps.hasOwnProperty(propKey)) {
      continue;
    }
    if (propKey === STYLE$$module$react$lib$ReactDOMComponent) {
      var lastStyle = this._previousStyleCopy;
      for (styleName in lastStyle) {
        if (lastStyle.hasOwnProperty(styleName)) {
          styleUpdates = styleUpdates || {};
          styleUpdates[styleName] = "";
        }
      }
      this._previousStyleCopy = null;
    } else {
      if (registrationNameModules$$module$react$lib$ReactDOMComponent.hasOwnProperty(propKey)) {
        deleteListener$$module$react$lib$ReactDOMComponent(this._rootNodeID, propKey);
      } else {
        if (DOMProperty$$module$react$lib$ReactDOMComponent.isStandardName[propKey] || DOMProperty$$module$react$lib$ReactDOMComponent.isCustomAttribute(propKey)) {
          BackendIDOperations$$module$react$lib$ReactDOMComponent.deletePropertyByID(this._rootNodeID, propKey);
        }
      }
    }
  }
  for (propKey in nextProps) {
    var nextProp = nextProps[propKey];
    var lastProp = propKey === STYLE$$module$react$lib$ReactDOMComponent ? this._previousStyleCopy : lastProps[propKey];
    if (!nextProps.hasOwnProperty(propKey) || nextProp === lastProp) {
      continue;
    }
    if (propKey === STYLE$$module$react$lib$ReactDOMComponent) {
      if (nextProp) {
        nextProp = this._previousStyleCopy = assign$$module$react$lib$ReactDOMComponent({}, nextProp);
      } else {
        this._previousStyleCopy = null;
      }
      if (lastProp) {
        for (styleName in lastProp) {
          if (lastProp.hasOwnProperty(styleName) && (!nextProp || !nextProp.hasOwnProperty(styleName))) {
            styleUpdates = styleUpdates || {};
            styleUpdates[styleName] = "";
          }
        }
        for (styleName in nextProp) {
          if (nextProp.hasOwnProperty(styleName) && lastProp[styleName] !== nextProp[styleName]) {
            styleUpdates = styleUpdates || {};
            styleUpdates[styleName] = nextProp[styleName];
          }
        }
      } else {
        styleUpdates = nextProp;
      }
    } else {
      if (registrationNameModules$$module$react$lib$ReactDOMComponent.hasOwnProperty(propKey)) {
        putListener$$module$react$lib$ReactDOMComponent(this._rootNodeID, propKey, nextProp, transaction);
      } else {
        if (DOMProperty$$module$react$lib$ReactDOMComponent.isStandardName[propKey] || DOMProperty$$module$react$lib$ReactDOMComponent.isCustomAttribute(propKey)) {
          BackendIDOperations$$module$react$lib$ReactDOMComponent.updatePropertyByID(this._rootNodeID, propKey, nextProp);
        }
      }
    }
  }
  if (styleUpdates) {
    BackendIDOperations$$module$react$lib$ReactDOMComponent.updateStylesByID(this._rootNodeID, styleUpdates);
  }
}, _updateDOMChildren:function(lastProps, transaction, context) {
  var nextProps = this._currentElement.props;
  var lastContent = CONTENT_TYPES$$module$react$lib$ReactDOMComponent[typeof lastProps.children] ? lastProps.children : null;
  var nextContent = CONTENT_TYPES$$module$react$lib$ReactDOMComponent[typeof nextProps.children] ? nextProps.children : null;
  var lastHtml = lastProps.dangerouslySetInnerHTML && lastProps.dangerouslySetInnerHTML.__html;
  var nextHtml = nextProps.dangerouslySetInnerHTML && nextProps.dangerouslySetInnerHTML.__html;
  var lastChildren = lastContent != null ? null : lastProps.children;
  var nextChildren = nextContent != null ? null : nextProps.children;
  var lastHasContentOrHtml = lastContent != null || lastHtml != null;
  var nextHasContentOrHtml = nextContent != null || nextHtml != null;
  if (lastChildren != null && nextChildren == null) {
    this.updateChildren(null, transaction, context);
  } else {
    if (lastHasContentOrHtml && !nextHasContentOrHtml) {
      this.updateTextContent("");
    }
  }
  if (nextContent != null) {
    if (lastContent !== nextContent) {
      this.updateTextContent("" + nextContent);
    }
  } else {
    if (nextHtml != null) {
      if (lastHtml !== nextHtml) {
        BackendIDOperations$$module$react$lib$ReactDOMComponent.updateInnerHTMLByID(this._rootNodeID, nextHtml);
      }
    } else {
      if (nextChildren != null) {
        this.updateChildren(nextChildren, transaction, context);
      }
    }
  }
}, unmountComponent:function() {
  this.unmountChildren();
  ReactBrowserEventEmitter$$module$react$lib$ReactDOMComponent.deleteAllListeners(this._rootNodeID);
  ReactComponentBrowserEnvironment$$module$react$lib$ReactDOMComponent.unmountIDFromEnvironment(this._rootNodeID);
  this._rootNodeID = null;
}};
ReactPerf$$module$react$lib$ReactDOMComponent.measureMethods(ReactDOMComponent$$module$react$lib$ReactDOMComponent, "ReactDOMComponent", {mountComponent:"mountComponent", updateComponent:"updateComponent"});
assign$$module$react$lib$ReactDOMComponent(ReactDOMComponent$$module$react$lib$ReactDOMComponent.prototype, ReactDOMComponent$$module$react$lib$ReactDOMComponent.Mixin, ReactMultiChild$$module$react$lib$ReactDOMComponent.Mixin);
ReactDOMComponent$$module$react$lib$ReactDOMComponent.injection = {injectIDOperations:function(IDOperations) {
  ReactDOMComponent$$module$react$lib$ReactDOMComponent.BackendIDOperations = BackendIDOperations$$module$react$lib$ReactDOMComponent = IDOperations;
}};
module$react$lib$ReactDOMComponent = ReactDOMComponent$$module$react$lib$ReactDOMComponent;
