goog.provide("module$react$lib$ReactCompositeComponent");
goog.require("module$react$lib$warning");
goog.require("module$react$lib$shouldUpdateReactComponent");
goog.require("module$react$lib$invariant");
goog.require("module$react$lib$emptyObject");
goog.require("module$react$lib$Object_assign");
goog.require("module$react$lib$ReactUpdates");
goog.require("module$react$lib$ReactReconciler");
goog.require("module$react$lib$ReactPropTypeLocationNames");
goog.require("module$react$lib$ReactPropTypeLocations");
goog.require("module$react$lib$ReactPerf");
goog.require("module$react$lib$ReactNativeComponent");
goog.require("module$react$lib$ReactLifeCycle");
goog.require("module$react$lib$ReactInstanceMap");
goog.require("module$react$lib$ReactElementValidator");
goog.require("module$react$lib$ReactElement");
goog.require("module$react$lib$ReactCurrentOwner");
goog.require("module$react$lib$ReactContext");
goog.require("module$react$lib$ReactComponentEnvironment");
var ReactComponentEnvironment$$module$react$lib$ReactCompositeComponent = module$react$lib$ReactComponentEnvironment;
var ReactContext$$module$react$lib$ReactCompositeComponent = module$react$lib$ReactContext;
var ReactCurrentOwner$$module$react$lib$ReactCompositeComponent = module$react$lib$ReactCurrentOwner;
var ReactElement$$module$react$lib$ReactCompositeComponent = module$react$lib$ReactElement;
var ReactElementValidator$$module$react$lib$ReactCompositeComponent = module$react$lib$ReactElementValidator;
var ReactInstanceMap$$module$react$lib$ReactCompositeComponent = module$react$lib$ReactInstanceMap;
var ReactLifeCycle$$module$react$lib$ReactCompositeComponent = module$react$lib$ReactLifeCycle;
var ReactNativeComponent$$module$react$lib$ReactCompositeComponent = module$react$lib$ReactNativeComponent;
var ReactPerf$$module$react$lib$ReactCompositeComponent = module$react$lib$ReactPerf;
var ReactPropTypeLocations$$module$react$lib$ReactCompositeComponent = module$react$lib$ReactPropTypeLocations;
var ReactPropTypeLocationNames$$module$react$lib$ReactCompositeComponent = module$react$lib$ReactPropTypeLocationNames;
var ReactReconciler$$module$react$lib$ReactCompositeComponent = module$react$lib$ReactReconciler;
var ReactUpdates$$module$react$lib$ReactCompositeComponent = module$react$lib$ReactUpdates;
var assign$$module$react$lib$ReactCompositeComponent = module$react$lib$Object_assign;
var emptyObject$$module$react$lib$ReactCompositeComponent = module$react$lib$emptyObject;
var invariant$$module$react$lib$ReactCompositeComponent = module$react$lib$invariant;
var shouldUpdateReactComponent$$module$react$lib$ReactCompositeComponent = module$react$lib$shouldUpdateReactComponent;
var warning$$module$react$lib$ReactCompositeComponent = module$react$lib$warning;
function getDeclarationErrorAddendum$$module$react$lib$ReactCompositeComponent(component) {
  var owner = component._currentElement._owner || null;
  if (owner) {
    var name = owner.getName();
    if (name) {
      return " Check the render method of `" + name + "`.";
    }
  }
  return "";
}
var nextMountID$$module$react$lib$ReactCompositeComponent = 1;
var ReactCompositeComponentMixin$$module$react$lib$ReactCompositeComponent = {construct:function(element) {
  this._currentElement = element;
  this._rootNodeID = null;
  this._instance = null;
  this._pendingElement = null;
  this._pendingStateQueue = null;
  this._pendingReplaceState = false;
  this._pendingForceUpdate = false;
  this._renderedComponent = null;
  this._context = null;
  this._mountOrder = 0;
  this._isTopLevel = false;
  this._pendingCallbacks = null;
}, mountComponent:function(rootID, transaction, context) {
  this._context = context;
  this._mountOrder = nextMountID$$module$react$lib$ReactCompositeComponent++;
  this._rootNodeID = rootID;
  var publicProps = this._processProps(this._currentElement.props);
  var publicContext = this._processContext(this._currentElement._context);
  var Component = ReactNativeComponent$$module$react$lib$ReactCompositeComponent.getComponentClassForElement(this._currentElement);
  var inst = new Component(publicProps, publicContext);
  if ("production" !== process.env.NODE_ENV) {
    "production" !== process.env.NODE_ENV ? warning$$module$react$lib$ReactCompositeComponent(inst.render != null, "%s(...): No `render` method found on the returned component " + "instance: you may have forgotten to define `render` in your " + "component or you may have accidentally tried to render an element " + "whose type is a function that isn't a React component.", Component.displayName || Component.name || "Component") : null;
  }
  inst.props = publicProps;
  inst.context = publicContext;
  inst.refs = emptyObject$$module$react$lib$ReactCompositeComponent;
  this._instance = inst;
  ReactInstanceMap$$module$react$lib$ReactCompositeComponent.set(inst, this);
  if ("production" !== process.env.NODE_ENV) {
    this._warnIfContextsDiffer(this._currentElement._context, context);
  }
  if ("production" !== process.env.NODE_ENV) {
    "production" !== process.env.NODE_ENV ? warning$$module$react$lib$ReactCompositeComponent(!inst.getInitialState || inst.getInitialState.isReactClassApproved, "getInitialState was defined on %s, a plain JavaScript class. " + "This is only supported for classes created using React.createClass. " + "Did you mean to define a state property instead?", this.getName() || "a component") : null;
    "production" !== process.env.NODE_ENV ? warning$$module$react$lib$ReactCompositeComponent(!inst.getDefaultProps || inst.getDefaultProps.isReactClassApproved, "getDefaultProps was defined on %s, a plain JavaScript class. " + "This is only supported for classes created using React.createClass. " + "Use a static property to define defaultProps instead.", this.getName() || "a component") : null;
    "production" !== process.env.NODE_ENV ? warning$$module$react$lib$ReactCompositeComponent(!inst.propTypes, "propTypes was defined as an instance property on %s. Use a static " + "property to define propTypes instead.", this.getName() || "a component") : null;
    "production" !== process.env.NODE_ENV ? warning$$module$react$lib$ReactCompositeComponent(!inst.contextTypes, "contextTypes was defined as an instance property on %s. Use a " + "static property to define contextTypes instead.", this.getName() || "a component") : null;
    "production" !== process.env.NODE_ENV ? warning$$module$react$lib$ReactCompositeComponent(typeof inst.componentShouldUpdate !== "function", "%s has a method called " + "componentShouldUpdate(). Did you mean shouldComponentUpdate()? " + "The name is phrased as a question because the function is " + "expected to return a value.", this.getName() || "A component") : null;
  }
  var initialState = inst.state;
  if (initialState === undefined) {
    inst.state = initialState = null;
  }
  "production" !== process.env.NODE_ENV ? invariant$$module$react$lib$ReactCompositeComponent(typeof initialState === "object" && !Array.isArray(initialState), "%s.state: must be set to an object or null", this.getName() || "ReactCompositeComponent") : invariant$$module$react$lib$ReactCompositeComponent(typeof initialState === "object" && !Array.isArray(initialState));
  this._pendingStateQueue = null;
  this._pendingReplaceState = false;
  this._pendingForceUpdate = false;
  var childContext;
  var renderedElement;
  var previouslyMounting = ReactLifeCycle$$module$react$lib$ReactCompositeComponent.currentlyMountingInstance;
  ReactLifeCycle$$module$react$lib$ReactCompositeComponent.currentlyMountingInstance = this;
  try {
    if (inst.componentWillMount) {
      inst.componentWillMount();
      if (this._pendingStateQueue) {
        inst.state = this._processPendingState(inst.props, inst.context);
      }
    }
    childContext = this._getValidatedChildContext(context);
    renderedElement = this._renderValidatedComponent(childContext);
  } finally {
    ReactLifeCycle$$module$react$lib$ReactCompositeComponent.currentlyMountingInstance = previouslyMounting;
  }
  this._renderedComponent = this._instantiateReactComponent(renderedElement, this._currentElement.type);
  var markup = ReactReconciler$$module$react$lib$ReactCompositeComponent.mountComponent(this._renderedComponent, rootID, transaction, this._mergeChildContext(context, childContext));
  if (inst.componentDidMount) {
    transaction.getReactMountReady().enqueue(inst.componentDidMount, inst);
  }
  return markup;
}, unmountComponent:function() {
  var inst = this._instance;
  if (inst.componentWillUnmount) {
    var previouslyUnmounting = ReactLifeCycle$$module$react$lib$ReactCompositeComponent.currentlyUnmountingInstance;
    ReactLifeCycle$$module$react$lib$ReactCompositeComponent.currentlyUnmountingInstance = this;
    try {
      inst.componentWillUnmount();
    } finally {
      ReactLifeCycle$$module$react$lib$ReactCompositeComponent.currentlyUnmountingInstance = previouslyUnmounting;
    }
  }
  ReactReconciler$$module$react$lib$ReactCompositeComponent.unmountComponent(this._renderedComponent);
  this._renderedComponent = null;
  this._pendingStateQueue = null;
  this._pendingReplaceState = false;
  this._pendingForceUpdate = false;
  this._pendingCallbacks = null;
  this._pendingElement = null;
  this._context = null;
  this._rootNodeID = null;
  ReactInstanceMap$$module$react$lib$ReactCompositeComponent.remove(inst);
}, _setPropsInternal:function(partialProps, callback) {
  var element = this._pendingElement || this._currentElement;
  this._pendingElement = ReactElement$$module$react$lib$ReactCompositeComponent.cloneAndReplaceProps(element, assign$$module$react$lib$ReactCompositeComponent({}, element.props, partialProps));
  ReactUpdates$$module$react$lib$ReactCompositeComponent.enqueueUpdate(this, callback);
}, _maskContext:function(context) {
  var maskedContext = null;
  if (typeof this._currentElement.type === "string") {
    return emptyObject$$module$react$lib$ReactCompositeComponent;
  }
  var contextTypes = this._currentElement.type.contextTypes;
  if (!contextTypes) {
    return emptyObject$$module$react$lib$ReactCompositeComponent;
  }
  maskedContext = {};
  for (var contextName in contextTypes) {
    maskedContext[contextName] = context[contextName];
  }
  return maskedContext;
}, _processContext:function(context) {
  var maskedContext = this._maskContext(context);
  if ("production" !== process.env.NODE_ENV) {
    var Component = ReactNativeComponent$$module$react$lib$ReactCompositeComponent.getComponentClassForElement(this._currentElement);
    if (Component.contextTypes) {
      this._checkPropTypes(Component.contextTypes, maskedContext, ReactPropTypeLocations$$module$react$lib$ReactCompositeComponent.context);
    }
  }
  return maskedContext;
}, _getValidatedChildContext:function(currentContext) {
  var inst = this._instance;
  var childContext = inst.getChildContext && inst.getChildContext();
  if (childContext) {
    "production" !== process.env.NODE_ENV ? invariant$$module$react$lib$ReactCompositeComponent(typeof inst.constructor.childContextTypes === "object", "%s.getChildContext(): childContextTypes must be defined in order to " + "use getChildContext().", this.getName() || "ReactCompositeComponent") : invariant$$module$react$lib$ReactCompositeComponent(typeof inst.constructor.childContextTypes === "object");
    if ("production" !== process.env.NODE_ENV) {
      this._checkPropTypes(inst.constructor.childContextTypes, childContext, ReactPropTypeLocations$$module$react$lib$ReactCompositeComponent.childContext);
    }
    for (var name in childContext) {
      "production" !== process.env.NODE_ENV ? invariant$$module$react$lib$ReactCompositeComponent(name in inst.constructor.childContextTypes, '%s.getChildContext(): key "%s" is not defined in childContextTypes.', this.getName() || "ReactCompositeComponent", name) : invariant$$module$react$lib$ReactCompositeComponent(name in inst.constructor.childContextTypes);
    }
    return childContext;
  }
  return null;
}, _mergeChildContext:function(currentContext, childContext) {
  if (childContext) {
    return assign$$module$react$lib$ReactCompositeComponent({}, currentContext, childContext);
  }
  return currentContext;
}, _processProps:function(newProps) {
  if ("production" !== process.env.NODE_ENV) {
    var Component = ReactNativeComponent$$module$react$lib$ReactCompositeComponent.getComponentClassForElement(this._currentElement);
    if (Component.propTypes) {
      this._checkPropTypes(Component.propTypes, newProps, ReactPropTypeLocations$$module$react$lib$ReactCompositeComponent.prop);
    }
  }
  return newProps;
}, _checkPropTypes:function(propTypes, props, location) {
  var componentName = this.getName();
  for (var propName in propTypes) {
    if (propTypes.hasOwnProperty(propName)) {
      var error;
      try {
        "production" !== process.env.NODE_ENV ? invariant$$module$react$lib$ReactCompositeComponent(typeof propTypes[propName] === "function", "%s: %s type `%s` is invalid; it must be a function, usually " + "from React.PropTypes.", componentName || "React class", ReactPropTypeLocationNames$$module$react$lib$ReactCompositeComponent[location], propName) : invariant$$module$react$lib$ReactCompositeComponent(typeof propTypes[propName] === "function");
        error = propTypes[propName](props, propName, componentName, location);
      } catch (ex) {
        error = ex;
      }
      if (error instanceof Error) {
        var addendum = getDeclarationErrorAddendum$$module$react$lib$ReactCompositeComponent(this);
        if (location === ReactPropTypeLocations$$module$react$lib$ReactCompositeComponent.prop) {
          "production" !== process.env.NODE_ENV ? warning$$module$react$lib$ReactCompositeComponent(false, "Failed Composite propType: %s%s", error.message, addendum) : null;
        } else {
          "production" !== process.env.NODE_ENV ? warning$$module$react$lib$ReactCompositeComponent(false, "Failed Context Types: %s%s", error.message, addendum) : null;
        }
      }
    }
  }
}, receiveComponent:function(nextElement, transaction, nextContext) {
  var prevElement = this._currentElement;
  var prevContext = this._context;
  this._pendingElement = null;
  this.updateComponent(transaction, prevElement, nextElement, prevContext, nextContext);
}, performUpdateIfNecessary:function(transaction) {
  if (this._pendingElement != null) {
    ReactReconciler$$module$react$lib$ReactCompositeComponent.receiveComponent(this, this._pendingElement || this._currentElement, transaction, this._context);
  }
  if (this._pendingStateQueue !== null || this._pendingForceUpdate) {
    if ("production" !== process.env.NODE_ENV) {
      ReactElementValidator$$module$react$lib$ReactCompositeComponent.checkAndWarnForMutatedProps(this._currentElement);
    }
    this.updateComponent(transaction, this._currentElement, this._currentElement, this._context, this._context);
  }
}, _warnIfContextsDiffer:function(ownerBasedContext, parentBasedContext) {
  ownerBasedContext = this._maskContext(ownerBasedContext);
  parentBasedContext = this._maskContext(parentBasedContext);
  var parentKeys = Object.keys(parentBasedContext).sort();
  var displayName = this.getName() || "ReactCompositeComponent";
  for (var i = 0;i < parentKeys.length;i++) {
    var key = parentKeys[i];
    "production" !== process.env.NODE_ENV ? warning$$module$react$lib$ReactCompositeComponent(ownerBasedContext[key] === parentBasedContext[key], "owner-based and parent-based contexts differ " + "(values: `%s` vs `%s`) for key (%s) while mounting %s " + "(see: http://fb.me/react-context-by-parent)", ownerBasedContext[key], parentBasedContext[key], key, displayName) : null;
  }
}, updateComponent:function(transaction, prevParentElement, nextParentElement, prevUnmaskedContext, nextUnmaskedContext) {
  var inst = this._instance;
  var nextContext = inst.context;
  var nextProps = inst.props;
  if (prevParentElement !== nextParentElement) {
    nextContext = this._processContext(nextParentElement._context);
    nextProps = this._processProps(nextParentElement.props);
    if ("production" !== process.env.NODE_ENV) {
      if (nextUnmaskedContext != null) {
        this._warnIfContextsDiffer(nextParentElement._context, nextUnmaskedContext);
      }
    }
    if (inst.componentWillReceiveProps) {
      inst.componentWillReceiveProps(nextProps, nextContext);
    }
  }
  var nextState = this._processPendingState(nextProps, nextContext);
  var shouldUpdate = this._pendingForceUpdate || !inst.shouldComponentUpdate || inst.shouldComponentUpdate(nextProps, nextState, nextContext);
  if ("production" !== process.env.NODE_ENV) {
    "production" !== process.env.NODE_ENV ? warning$$module$react$lib$ReactCompositeComponent(typeof shouldUpdate !== "undefined", "%s.shouldComponentUpdate(): Returned undefined instead of a " + "boolean value. Make sure to return true or false.", this.getName() || "ReactCompositeComponent") : null;
  }
  if (shouldUpdate) {
    this._pendingForceUpdate = false;
    this._performComponentUpdate(nextParentElement, nextProps, nextState, nextContext, transaction, nextUnmaskedContext);
  } else {
    this._currentElement = nextParentElement;
    this._context = nextUnmaskedContext;
    inst.props = nextProps;
    inst.state = nextState;
    inst.context = nextContext;
  }
}, _processPendingState:function(props, context) {
  var inst = this._instance;
  var queue = this._pendingStateQueue;
  var replace = this._pendingReplaceState;
  this._pendingReplaceState = false;
  this._pendingStateQueue = null;
  if (!queue) {
    return inst.state;
  }
  if (replace && queue.length === 1) {
    return queue[0];
  }
  var nextState = assign$$module$react$lib$ReactCompositeComponent({}, replace ? queue[0] : inst.state);
  for (var i = replace ? 1 : 0;i < queue.length;i++) {
    var partial = queue[i];
    assign$$module$react$lib$ReactCompositeComponent(nextState, typeof partial === "function" ? partial.call(inst, nextState, props, context) : partial);
  }
  return nextState;
}, _performComponentUpdate:function(nextElement, nextProps, nextState, nextContext, transaction, unmaskedContext) {
  var inst = this._instance;
  var prevProps = inst.props;
  var prevState = inst.state;
  var prevContext = inst.context;
  if (inst.componentWillUpdate) {
    inst.componentWillUpdate(nextProps, nextState, nextContext);
  }
  this._currentElement = nextElement;
  this._context = unmaskedContext;
  inst.props = nextProps;
  inst.state = nextState;
  inst.context = nextContext;
  this._updateRenderedComponent(transaction, unmaskedContext);
  if (inst.componentDidUpdate) {
    transaction.getReactMountReady().enqueue(inst.componentDidUpdate.bind(inst, prevProps, prevState, prevContext), inst);
  }
}, _updateRenderedComponent:function(transaction, context) {
  var prevComponentInstance = this._renderedComponent;
  var prevRenderedElement = prevComponentInstance._currentElement;
  var childContext = this._getValidatedChildContext();
  var nextRenderedElement = this._renderValidatedComponent(childContext);
  if (shouldUpdateReactComponent$$module$react$lib$ReactCompositeComponent(prevRenderedElement, nextRenderedElement)) {
    ReactReconciler$$module$react$lib$ReactCompositeComponent.receiveComponent(prevComponentInstance, nextRenderedElement, transaction, this._mergeChildContext(context, childContext));
  } else {
    var thisID = this._rootNodeID;
    var prevComponentID = prevComponentInstance._rootNodeID;
    ReactReconciler$$module$react$lib$ReactCompositeComponent.unmountComponent(prevComponentInstance);
    this._renderedComponent = this._instantiateReactComponent(nextRenderedElement, this._currentElement.type);
    var nextMarkup = ReactReconciler$$module$react$lib$ReactCompositeComponent.mountComponent(this._renderedComponent, thisID, transaction, this._mergeChildContext(context, childContext));
    this._replaceNodeWithMarkupByID(prevComponentID, nextMarkup);
  }
}, _replaceNodeWithMarkupByID:function(prevComponentID, nextMarkup) {
  ReactComponentEnvironment$$module$react$lib$ReactCompositeComponent.replaceNodeWithMarkupByID(prevComponentID, nextMarkup);
}, _renderValidatedComponentWithoutOwnerOrContext:function() {
  var inst = this._instance;
  var renderedComponent = inst.render();
  if ("production" !== process.env.NODE_ENV) {
    if (typeof renderedComponent === "undefined" && inst.render._isMockFunction) {
      renderedComponent = null;
    }
  }
  return renderedComponent;
}, _renderValidatedComponent:function(childContext) {
  var renderedComponent;
  var previousContext = ReactContext$$module$react$lib$ReactCompositeComponent.current;
  ReactContext$$module$react$lib$ReactCompositeComponent.current = this._mergeChildContext(this._currentElement._context, childContext);
  ReactCurrentOwner$$module$react$lib$ReactCompositeComponent.current = this;
  try {
    renderedComponent = this._renderValidatedComponentWithoutOwnerOrContext();
  } finally {
    ReactContext$$module$react$lib$ReactCompositeComponent.current = previousContext;
    ReactCurrentOwner$$module$react$lib$ReactCompositeComponent.current = null;
  }
  "production" !== process.env.NODE_ENV ? invariant$$module$react$lib$ReactCompositeComponent(renderedComponent === null || renderedComponent === false || ReactElement$$module$react$lib$ReactCompositeComponent.isValidElement(renderedComponent), "%s.render(): A valid ReactComponent must be returned. You may have " + "returned undefined, an array or some other invalid object.", this.getName() || "ReactCompositeComponent") : invariant$$module$react$lib$ReactCompositeComponent(renderedComponent === null || 
  renderedComponent === false || ReactElement$$module$react$lib$ReactCompositeComponent.isValidElement(renderedComponent));
  return renderedComponent;
}, attachRef:function(ref, component) {
  var inst = this.getPublicInstance();
  var refs = inst.refs === emptyObject$$module$react$lib$ReactCompositeComponent ? inst.refs = {} : inst.refs;
  refs[ref] = component.getPublicInstance();
}, detachRef:function(ref) {
  var refs = this.getPublicInstance().refs;
  delete refs[ref];
}, getName:function() {
  var type = this._currentElement.type;
  var constructor = this._instance && this._instance.constructor;
  return type.displayName || constructor && constructor.displayName || type.name || constructor && constructor.name || null;
}, getPublicInstance:function() {
  return this._instance;
}, _instantiateReactComponent:null};
ReactPerf$$module$react$lib$ReactCompositeComponent.measureMethods(ReactCompositeComponentMixin$$module$react$lib$ReactCompositeComponent, "ReactCompositeComponent", {mountComponent:"mountComponent", updateComponent:"updateComponent", _renderValidatedComponent:"_renderValidatedComponent"});
var ReactCompositeComponent$$module$react$lib$ReactCompositeComponent = {Mixin:ReactCompositeComponentMixin$$module$react$lib$ReactCompositeComponent};
module$react$lib$ReactCompositeComponent = ReactCompositeComponent$$module$react$lib$ReactCompositeComponent;
