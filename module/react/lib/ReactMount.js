goog.provide("module$react$lib$ReactMount");
goog.require("module$react$lib$warning");
goog.require("module$react$lib$shouldUpdateReactComponent");
goog.require("module$react$lib$setInnerHTML");
goog.require("module$react$lib$invariant");
goog.require("module$react$lib$instantiateReactComponent");
goog.require("module$react$lib$getReactRootElementInContainer");
goog.require("module$react$lib$containsNode");
goog.require("module$react$lib$emptyObject");
goog.require("module$react$lib$ReactUpdates");
goog.require("module$react$lib$ReactUpdateQueue");
goog.require("module$react$lib$ReactReconciler");
goog.require("module$react$lib$ReactPerf");
goog.require("module$react$lib$ReactMarkupChecksum");
goog.require("module$react$lib$ReactInstanceMap");
goog.require("module$react$lib$ReactInstanceHandles");
goog.require("module$react$lib$ReactEmptyComponent");
goog.require("module$react$lib$ReactElementValidator");
goog.require("module$react$lib$ReactElement");
goog.require("module$react$lib$ReactCurrentOwner");
goog.require("module$react$lib$ReactBrowserEventEmitter");
goog.require("module$react$lib$DOMProperty");
var DOMProperty$$module$react$lib$ReactMount = module$react$lib$DOMProperty;
var ReactBrowserEventEmitter$$module$react$lib$ReactMount = module$react$lib$ReactBrowserEventEmitter;
var ReactCurrentOwner$$module$react$lib$ReactMount = module$react$lib$ReactCurrentOwner;
var ReactElement$$module$react$lib$ReactMount = module$react$lib$ReactElement;
var ReactElementValidator$$module$react$lib$ReactMount = module$react$lib$ReactElementValidator;
var ReactEmptyComponent$$module$react$lib$ReactMount = module$react$lib$ReactEmptyComponent;
var ReactInstanceHandles$$module$react$lib$ReactMount = module$react$lib$ReactInstanceHandles;
var ReactInstanceMap$$module$react$lib$ReactMount = module$react$lib$ReactInstanceMap;
var ReactMarkupChecksum$$module$react$lib$ReactMount = module$react$lib$ReactMarkupChecksum;
var ReactPerf$$module$react$lib$ReactMount = module$react$lib$ReactPerf;
var ReactReconciler$$module$react$lib$ReactMount = module$react$lib$ReactReconciler;
var ReactUpdateQueue$$module$react$lib$ReactMount = module$react$lib$ReactUpdateQueue;
var ReactUpdates$$module$react$lib$ReactMount = module$react$lib$ReactUpdates;
var emptyObject$$module$react$lib$ReactMount = module$react$lib$emptyObject;
var containsNode$$module$react$lib$ReactMount = module$react$lib$containsNode;
var getReactRootElementInContainer$$module$react$lib$ReactMount = module$react$lib$getReactRootElementInContainer;
var instantiateReactComponent$$module$react$lib$ReactMount = module$react$lib$instantiateReactComponent;
var invariant$$module$react$lib$ReactMount = module$react$lib$invariant;
var setInnerHTML$$module$react$lib$ReactMount = module$react$lib$setInnerHTML;
var shouldUpdateReactComponent$$module$react$lib$ReactMount = module$react$lib$shouldUpdateReactComponent;
var warning$$module$react$lib$ReactMount = module$react$lib$warning;
var SEPARATOR$$module$react$lib$ReactMount = ReactInstanceHandles$$module$react$lib$ReactMount.SEPARATOR;
var ATTR_NAME$$module$react$lib$ReactMount = DOMProperty$$module$react$lib$ReactMount.ID_ATTRIBUTE_NAME;
var nodeCache$$module$react$lib$ReactMount = {};
var ELEMENT_NODE_TYPE$$module$react$lib$ReactMount = 1;
var DOC_NODE_TYPE$$module$react$lib$ReactMount = 9;
var instancesByReactRootID$$module$react$lib$ReactMount = {};
var containersByReactRootID$$module$react$lib$ReactMount = {};
if ("production" !== process.env.NODE_ENV) {
  var rootElementsByReactRootID$$module$react$lib$ReactMount = {}
}
var findComponentRootReusableArray$$module$react$lib$ReactMount = [];
function firstDifferenceIndex$$module$react$lib$ReactMount(string1, string2) {
  var minLen = Math.min(string1.length, string2.length);
  for (var i = 0;i < minLen;i++) {
    if (string1.charAt(i) !== string2.charAt(i)) {
      return i;
    }
  }
  return string1.length === string2.length ? -1 : minLen;
}
function getReactRootID$$module$react$lib$ReactMount(container) {
  var rootElement = getReactRootElementInContainer$$module$react$lib$ReactMount(container);
  return rootElement && ReactMount$$module$react$lib$ReactMount.getID(rootElement);
}
function getID$$module$react$lib$ReactMount(node) {
  var id = internalGetID$$module$react$lib$ReactMount(node);
  if (id) {
    if (nodeCache$$module$react$lib$ReactMount.hasOwnProperty(id)) {
      var cached = nodeCache$$module$react$lib$ReactMount[id];
      if (cached !== node) {
        "production" !== process.env.NODE_ENV ? invariant$$module$react$lib$ReactMount(!isValid$$module$react$lib$ReactMount(cached, id), "ReactMount: Two valid but unequal nodes with the same `%s`: %s", ATTR_NAME$$module$react$lib$ReactMount, id) : invariant$$module$react$lib$ReactMount(!isValid$$module$react$lib$ReactMount(cached, id));
        nodeCache$$module$react$lib$ReactMount[id] = node;
      }
    } else {
      nodeCache$$module$react$lib$ReactMount[id] = node;
    }
  }
  return id;
}
function internalGetID$$module$react$lib$ReactMount(node) {
  return node && node.getAttribute && node.getAttribute(ATTR_NAME$$module$react$lib$ReactMount) || "";
}
function setID$$module$react$lib$ReactMount(node, id) {
  var oldID = internalGetID$$module$react$lib$ReactMount(node);
  if (oldID !== id) {
    delete nodeCache$$module$react$lib$ReactMount[oldID];
  }
  node.setAttribute(ATTR_NAME$$module$react$lib$ReactMount, id);
  nodeCache$$module$react$lib$ReactMount[id] = node;
}
function getNode$$module$react$lib$ReactMount(id) {
  if (!nodeCache$$module$react$lib$ReactMount.hasOwnProperty(id) || !isValid$$module$react$lib$ReactMount(nodeCache$$module$react$lib$ReactMount[id], id)) {
    nodeCache$$module$react$lib$ReactMount[id] = ReactMount$$module$react$lib$ReactMount.findReactNodeByID(id);
  }
  return nodeCache$$module$react$lib$ReactMount[id];
}
function getNodeFromInstance$$module$react$lib$ReactMount(instance) {
  var id = ReactInstanceMap$$module$react$lib$ReactMount.get(instance)._rootNodeID;
  if (ReactEmptyComponent$$module$react$lib$ReactMount.isNullComponentID(id)) {
    return null;
  }
  if (!nodeCache$$module$react$lib$ReactMount.hasOwnProperty(id) || !isValid$$module$react$lib$ReactMount(nodeCache$$module$react$lib$ReactMount[id], id)) {
    nodeCache$$module$react$lib$ReactMount[id] = ReactMount$$module$react$lib$ReactMount.findReactNodeByID(id);
  }
  return nodeCache$$module$react$lib$ReactMount[id];
}
function isValid$$module$react$lib$ReactMount(node, id) {
  if (node) {
    "production" !== process.env.NODE_ENV ? invariant$$module$react$lib$ReactMount(internalGetID$$module$react$lib$ReactMount(node) === id, "ReactMount: Unexpected modification of `%s`", ATTR_NAME$$module$react$lib$ReactMount) : invariant$$module$react$lib$ReactMount(internalGetID$$module$react$lib$ReactMount(node) === id);
    var container = ReactMount$$module$react$lib$ReactMount.findReactContainerForID(id);
    if (container && containsNode$$module$react$lib$ReactMount(container, node)) {
      return true;
    }
  }
  return false;
}
function purgeID$$module$react$lib$ReactMount(id) {
  delete nodeCache$$module$react$lib$ReactMount[id];
}
var deepestNodeSoFar$$module$react$lib$ReactMount = null;
function findDeepestCachedAncestorImpl$$module$react$lib$ReactMount(ancestorID) {
  var ancestor = nodeCache$$module$react$lib$ReactMount[ancestorID];
  if (ancestor && isValid$$module$react$lib$ReactMount(ancestor, ancestorID)) {
    deepestNodeSoFar$$module$react$lib$ReactMount = ancestor;
  } else {
    return false;
  }
}
function findDeepestCachedAncestor$$module$react$lib$ReactMount(targetID) {
  deepestNodeSoFar$$module$react$lib$ReactMount = null;
  ReactInstanceHandles$$module$react$lib$ReactMount.traverseAncestors(targetID, findDeepestCachedAncestorImpl$$module$react$lib$ReactMount);
  var foundNode = deepestNodeSoFar$$module$react$lib$ReactMount;
  deepestNodeSoFar$$module$react$lib$ReactMount = null;
  return foundNode;
}
function mountComponentIntoNode$$module$react$lib$ReactMount(componentInstance, rootID, container, transaction, shouldReuseMarkup) {
  var markup = ReactReconciler$$module$react$lib$ReactMount.mountComponent(componentInstance, rootID, transaction, emptyObject$$module$react$lib$ReactMount);
  componentInstance._isTopLevel = true;
  ReactMount$$module$react$lib$ReactMount._mountImageIntoNode(markup, container, shouldReuseMarkup);
}
function batchedMountComponentIntoNode$$module$react$lib$ReactMount(componentInstance, rootID, container, shouldReuseMarkup) {
  var transaction = ReactUpdates$$module$react$lib$ReactMount.ReactReconcileTransaction.getPooled();
  transaction.perform(mountComponentIntoNode$$module$react$lib$ReactMount, null, componentInstance, rootID, container, transaction, shouldReuseMarkup);
  ReactUpdates$$module$react$lib$ReactMount.ReactReconcileTransaction.release(transaction);
}
var ReactMount$$module$react$lib$ReactMount = {_instancesByReactRootID:instancesByReactRootID$$module$react$lib$ReactMount, scrollMonitor:function(container, renderCallback) {
  renderCallback();
}, _updateRootComponent:function(prevComponent, nextElement, container, callback) {
  if ("production" !== process.env.NODE_ENV) {
    ReactElementValidator$$module$react$lib$ReactMount.checkAndWarnForMutatedProps(nextElement);
  }
  ReactMount$$module$react$lib$ReactMount.scrollMonitor(container, function() {
    ReactUpdateQueue$$module$react$lib$ReactMount.enqueueElementInternal(prevComponent, nextElement);
    if (callback) {
      ReactUpdateQueue$$module$react$lib$ReactMount.enqueueCallbackInternal(prevComponent, callback);
    }
  });
  if ("production" !== process.env.NODE_ENV) {
    rootElementsByReactRootID$$module$react$lib$ReactMount[getReactRootID$$module$react$lib$ReactMount(container)] = getReactRootElementInContainer$$module$react$lib$ReactMount(container);
  }
  return prevComponent;
}, _registerComponent:function(nextComponent, container) {
  "production" !== process.env.NODE_ENV ? invariant$$module$react$lib$ReactMount(container && (container.nodeType === ELEMENT_NODE_TYPE$$module$react$lib$ReactMount || container.nodeType === DOC_NODE_TYPE$$module$react$lib$ReactMount), "_registerComponent(...): Target container is not a DOM element.") : invariant$$module$react$lib$ReactMount(container && (container.nodeType === ELEMENT_NODE_TYPE$$module$react$lib$ReactMount || container.nodeType === DOC_NODE_TYPE$$module$react$lib$ReactMount));
  ReactBrowserEventEmitter$$module$react$lib$ReactMount.ensureScrollValueMonitoring();
  var reactRootID = ReactMount$$module$react$lib$ReactMount.registerContainer(container);
  instancesByReactRootID$$module$react$lib$ReactMount[reactRootID] = nextComponent;
  return reactRootID;
}, _renderNewRootComponent:function(nextElement, container, shouldReuseMarkup) {
  "production" !== process.env.NODE_ENV ? warning$$module$react$lib$ReactMount(ReactCurrentOwner$$module$react$lib$ReactMount.current == null, "_renderNewRootComponent(): Render methods should be a pure function " + "of props and state; triggering nested component updates from " + "render is not allowed. If necessary, trigger nested updates in " + "componentDidUpdate.") : null;
  var componentInstance = instantiateReactComponent$$module$react$lib$ReactMount(nextElement, null);
  var reactRootID = ReactMount$$module$react$lib$ReactMount._registerComponent(componentInstance, container);
  ReactUpdates$$module$react$lib$ReactMount.batchedUpdates(batchedMountComponentIntoNode$$module$react$lib$ReactMount, componentInstance, reactRootID, container, shouldReuseMarkup);
  if ("production" !== process.env.NODE_ENV) {
    rootElementsByReactRootID$$module$react$lib$ReactMount[reactRootID] = getReactRootElementInContainer$$module$react$lib$ReactMount(container);
  }
  return componentInstance;
}, render:function(nextElement, container, callback) {
  "production" !== process.env.NODE_ENV ? invariant$$module$react$lib$ReactMount(ReactElement$$module$react$lib$ReactMount.isValidElement(nextElement), "React.render(): Invalid component element.%s", typeof nextElement === "string" ? " Instead of passing an element string, make sure to instantiate " + "it by passing it to React.createElement." : typeof nextElement === "function" ? " Instead of passing a component class, make sure to instantiate " + "it by passing it to React.createElement." : nextElement != 
  null && nextElement.props !== undefined ? " This may be caused by unintentionally loading two independent " + "copies of React." : "") : invariant$$module$react$lib$ReactMount(ReactElement$$module$react$lib$ReactMount.isValidElement(nextElement));
  var prevComponent = instancesByReactRootID$$module$react$lib$ReactMount[getReactRootID$$module$react$lib$ReactMount(container)];
  if (prevComponent) {
    var prevElement = prevComponent._currentElement;
    if (shouldUpdateReactComponent$$module$react$lib$ReactMount(prevElement, nextElement)) {
      return ReactMount$$module$react$lib$ReactMount._updateRootComponent(prevComponent, nextElement, container, callback).getPublicInstance();
    } else {
      ReactMount$$module$react$lib$ReactMount.unmountComponentAtNode(container);
    }
  }
  var reactRootElement = getReactRootElementInContainer$$module$react$lib$ReactMount(container);
  var containerHasReactMarkup = reactRootElement && ReactMount$$module$react$lib$ReactMount.isRenderedByReact(reactRootElement);
  if ("production" !== process.env.NODE_ENV) {
    if (!containerHasReactMarkup || reactRootElement.nextSibling) {
      var rootElementSibling = reactRootElement;
      while (rootElementSibling) {
        if (ReactMount$$module$react$lib$ReactMount.isRenderedByReact(rootElementSibling)) {
          "production" !== process.env.NODE_ENV ? warning$$module$react$lib$ReactMount(false, "render(): Target node has markup rendered by React, but there " + "are unrelated nodes as well. This is most commonly caused by " + "white-space inserted around server-rendered markup.") : null;
          break;
        }
        rootElementSibling = rootElementSibling.nextSibling;
      }
    }
  }
  var shouldReuseMarkup = containerHasReactMarkup && !prevComponent;
  var component = ReactMount$$module$react$lib$ReactMount._renderNewRootComponent(nextElement, container, shouldReuseMarkup).getPublicInstance();
  if (callback) {
    callback.call(component);
  }
  return component;
}, constructAndRenderComponent:function(constructor, props, container) {
  var element = ReactElement$$module$react$lib$ReactMount.createElement(constructor, props);
  return ReactMount$$module$react$lib$ReactMount.render(element, container);
}, constructAndRenderComponentByID:function(constructor, props, id) {
  var domNode = document.getElementById(id);
  "production" !== process.env.NODE_ENV ? invariant$$module$react$lib$ReactMount(domNode, 'Tried to get element with id of "%s" but it is not present on the page.', id) : invariant$$module$react$lib$ReactMount(domNode);
  return ReactMount$$module$react$lib$ReactMount.constructAndRenderComponent(constructor, props, domNode);
}, registerContainer:function(container) {
  var reactRootID = getReactRootID$$module$react$lib$ReactMount(container);
  if (reactRootID) {
    reactRootID = ReactInstanceHandles$$module$react$lib$ReactMount.getReactRootIDFromNodeID(reactRootID);
  }
  if (!reactRootID) {
    reactRootID = ReactInstanceHandles$$module$react$lib$ReactMount.createReactRootID();
  }
  containersByReactRootID$$module$react$lib$ReactMount[reactRootID] = container;
  return reactRootID;
}, unmountComponentAtNode:function(container) {
  "production" !== process.env.NODE_ENV ? warning$$module$react$lib$ReactMount(ReactCurrentOwner$$module$react$lib$ReactMount.current == null, "unmountComponentAtNode(): Render methods should be a pure function of " + "props and state; triggering nested component updates from render is " + "not allowed. If necessary, trigger nested updates in " + "componentDidUpdate.") : null;
  "production" !== process.env.NODE_ENV ? invariant$$module$react$lib$ReactMount(container && (container.nodeType === ELEMENT_NODE_TYPE$$module$react$lib$ReactMount || container.nodeType === DOC_NODE_TYPE$$module$react$lib$ReactMount), "unmountComponentAtNode(...): Target container is not a DOM element.") : invariant$$module$react$lib$ReactMount(container && (container.nodeType === ELEMENT_NODE_TYPE$$module$react$lib$ReactMount || container.nodeType === DOC_NODE_TYPE$$module$react$lib$ReactMount));
  var reactRootID = getReactRootID$$module$react$lib$ReactMount(container);
  var component = instancesByReactRootID$$module$react$lib$ReactMount[reactRootID];
  if (!component) {
    return false;
  }
  ReactMount$$module$react$lib$ReactMount.unmountComponentFromNode(component, container);
  delete instancesByReactRootID$$module$react$lib$ReactMount[reactRootID];
  delete containersByReactRootID$$module$react$lib$ReactMount[reactRootID];
  if ("production" !== process.env.NODE_ENV) {
    delete rootElementsByReactRootID$$module$react$lib$ReactMount[reactRootID];
  }
  return true;
}, unmountComponentFromNode:function(instance, container) {
  ReactReconciler$$module$react$lib$ReactMount.unmountComponent(instance);
  if (container.nodeType === DOC_NODE_TYPE$$module$react$lib$ReactMount) {
    container = container.documentElement;
  }
  while (container.lastChild) {
    container.removeChild(container.lastChild);
  }
}, findReactContainerForID:function(id) {
  var reactRootID = ReactInstanceHandles$$module$react$lib$ReactMount.getReactRootIDFromNodeID(id);
  var container = containersByReactRootID$$module$react$lib$ReactMount[reactRootID];
  if ("production" !== process.env.NODE_ENV) {
    var rootElement = rootElementsByReactRootID$$module$react$lib$ReactMount[reactRootID];
    if (rootElement && rootElement.parentNode !== container) {
      "production" !== process.env.NODE_ENV ? invariant$$module$react$lib$ReactMount(internalGetID$$module$react$lib$ReactMount(rootElement) === reactRootID, "ReactMount: Root element ID differed from reactRootID.") : invariant$$module$react$lib$ReactMount(internalGetID$$module$react$lib$ReactMount(rootElement) === reactRootID);
      var containerChild = container.firstChild;
      if (containerChild && reactRootID === internalGetID$$module$react$lib$ReactMount(containerChild)) {
        rootElementsByReactRootID$$module$react$lib$ReactMount[reactRootID] = containerChild;
      } else {
        "production" !== process.env.NODE_ENV ? warning$$module$react$lib$ReactMount(false, "ReactMount: Root element has been removed from its original " + "container. New container:", rootElement.parentNode) : null;
      }
    }
  }
  return container;
}, findReactNodeByID:function(id) {
  var reactRoot = ReactMount$$module$react$lib$ReactMount.findReactContainerForID(id);
  return ReactMount$$module$react$lib$ReactMount.findComponentRoot(reactRoot, id);
}, isRenderedByReact:function(node) {
  if (node.nodeType !== 1) {
    return false;
  }
  var id = ReactMount$$module$react$lib$ReactMount.getID(node);
  return id ? id.charAt(0) === SEPARATOR$$module$react$lib$ReactMount : false;
}, getFirstReactDOM:function(node) {
  var current = node;
  while (current && current.parentNode !== current) {
    if (ReactMount$$module$react$lib$ReactMount.isRenderedByReact(current)) {
      return current;
    }
    current = current.parentNode;
  }
  return null;
}, findComponentRoot:function(ancestorNode, targetID) {
  var firstChildren = findComponentRootReusableArray$$module$react$lib$ReactMount;
  var childIndex = 0;
  var deepestAncestor = findDeepestCachedAncestor$$module$react$lib$ReactMount(targetID) || ancestorNode;
  firstChildren[0] = deepestAncestor.firstChild;
  firstChildren.length = 1;
  while (childIndex < firstChildren.length) {
    var child = firstChildren[childIndex++];
    var targetChild;
    while (child) {
      var childID = ReactMount$$module$react$lib$ReactMount.getID(child);
      if (childID) {
        if (targetID === childID) {
          targetChild = child;
        } else {
          if (ReactInstanceHandles$$module$react$lib$ReactMount.isAncestorIDOf(childID, targetID)) {
            firstChildren.length = childIndex = 0;
            firstChildren.push(child.firstChild);
          }
        }
      } else {
        firstChildren.push(child.firstChild);
      }
      child = child.nextSibling;
    }
    if (targetChild) {
      firstChildren.length = 0;
      return targetChild;
    }
  }
  firstChildren.length = 0;
  "production" !== process.env.NODE_ENV ? invariant$$module$react$lib$ReactMount(false, "findComponentRoot(..., %s): Unable to find element. This probably " + "means the DOM was unexpectedly mutated (e.g., by the browser), " + "usually due to forgetting a \x3ctbody\x3e when using tables, nesting tags " + "like \x3cform\x3e, \x3cp\x3e, or \x3ca\x3e, or using non-SVG elements in an \x3csvg\x3e " + "parent. " + "Try inspecting the child nodes of the element with React ID `%s`.", targetID, ReactMount$$module$react$lib$ReactMount.getID(ancestorNode)) : 
  invariant$$module$react$lib$ReactMount(false);
}, _mountImageIntoNode:function(markup, container, shouldReuseMarkup) {
  "production" !== process.env.NODE_ENV ? invariant$$module$react$lib$ReactMount(container && (container.nodeType === ELEMENT_NODE_TYPE$$module$react$lib$ReactMount || container.nodeType === DOC_NODE_TYPE$$module$react$lib$ReactMount), "mountComponentIntoNode(...): Target container is not valid.") : invariant$$module$react$lib$ReactMount(container && (container.nodeType === ELEMENT_NODE_TYPE$$module$react$lib$ReactMount || container.nodeType === DOC_NODE_TYPE$$module$react$lib$ReactMount));
  if (shouldReuseMarkup) {
    var rootElement = getReactRootElementInContainer$$module$react$lib$ReactMount(container);
    if (ReactMarkupChecksum$$module$react$lib$ReactMount.canReuseMarkup(markup, rootElement)) {
      return;
    } else {
      var checksum = rootElement.getAttribute(ReactMarkupChecksum$$module$react$lib$ReactMount.CHECKSUM_ATTR_NAME);
      rootElement.removeAttribute(ReactMarkupChecksum$$module$react$lib$ReactMount.CHECKSUM_ATTR_NAME);
      var rootMarkup = rootElement.outerHTML;
      rootElement.setAttribute(ReactMarkupChecksum$$module$react$lib$ReactMount.CHECKSUM_ATTR_NAME, checksum);
      var diffIndex = firstDifferenceIndex$$module$react$lib$ReactMount(markup, rootMarkup);
      var difference = " (client) " + markup.substring(diffIndex - 20, diffIndex + 20) + "\n (server) " + rootMarkup.substring(diffIndex - 20, diffIndex + 20);
      "production" !== process.env.NODE_ENV ? invariant$$module$react$lib$ReactMount(container.nodeType !== DOC_NODE_TYPE$$module$react$lib$ReactMount, "You're trying to render a component to the document using " + "server rendering but the checksum was invalid. This usually " + "means you rendered a different component type or props on " + "the client from the one on the server, or your render() " + "methods are impure. React cannot handle this case due to " + "cross-browser quirks by rendering at the document root. You " + 
      "should look for environment dependent code in your components " + "and ensure the props are the same client and server side:\n%s", difference) : invariant$$module$react$lib$ReactMount(container.nodeType !== DOC_NODE_TYPE$$module$react$lib$ReactMount);
      if ("production" !== process.env.NODE_ENV) {
        "production" !== process.env.NODE_ENV ? warning$$module$react$lib$ReactMount(false, "React attempted to reuse markup in a container but the " + "checksum was invalid. This generally means that you are " + "using server rendering and the markup generated on the " + "server was not what the client was expecting. React injected " + "new markup to compensate which works but you have lost many " + "of the benefits of server rendering. Instead, figure out " + "why the markup being generated is different on the client " + 
        "or server:\n%s", difference) : null;
      }
    }
  }
  "production" !== process.env.NODE_ENV ? invariant$$module$react$lib$ReactMount(container.nodeType !== DOC_NODE_TYPE$$module$react$lib$ReactMount, "You're trying to render a component to the document but " + "you didn't use server rendering. We can't do this " + "without using server rendering due to cross-browser quirks. " + "See React.renderToString() for server rendering.") : invariant$$module$react$lib$ReactMount(container.nodeType !== DOC_NODE_TYPE$$module$react$lib$ReactMount);
  setInnerHTML$$module$react$lib$ReactMount(container, markup);
}, getReactRootID:getReactRootID$$module$react$lib$ReactMount, getID:getID$$module$react$lib$ReactMount, setID:setID$$module$react$lib$ReactMount, getNode:getNode$$module$react$lib$ReactMount, getNodeFromInstance:getNodeFromInstance$$module$react$lib$ReactMount, purgeID:purgeID$$module$react$lib$ReactMount};
ReactPerf$$module$react$lib$ReactMount.measureMethods(ReactMount$$module$react$lib$ReactMount, "ReactMount", {_renderNewRootComponent:"_renderNewRootComponent", _mountImageIntoNode:"_mountImageIntoNode"});
module$react$lib$ReactMount = ReactMount$$module$react$lib$ReactMount;
