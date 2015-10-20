goog.provide("module$react$lib$ReactClass");
goog.require("module$react$lib$warning");
goog.require("module$react$lib$keyOf");
goog.require("module$react$lib$keyMirror");
goog.require("module$react$lib$invariant");
goog.require("module$react$lib$Object_assign");
goog.require("module$react$lib$ReactUpdateQueue");
goog.require("module$react$lib$ReactPropTypeLocationNames");
goog.require("module$react$lib$ReactPropTypeLocations");
goog.require("module$react$lib$ReactLifeCycle");
goog.require("module$react$lib$ReactInstanceMap");
goog.require("module$react$lib$ReactErrorUtils");
goog.require("module$react$lib$ReactElement");
goog.require("module$react$lib$ReactCurrentOwner");
goog.require("module$react$lib$ReactComponent");
var ReactComponent$$module$react$lib$ReactClass = module$react$lib$ReactComponent;
var ReactCurrentOwner$$module$react$lib$ReactClass = module$react$lib$ReactCurrentOwner;
var ReactElement$$module$react$lib$ReactClass = module$react$lib$ReactElement;
var ReactErrorUtils$$module$react$lib$ReactClass = module$react$lib$ReactErrorUtils;
var ReactInstanceMap$$module$react$lib$ReactClass = module$react$lib$ReactInstanceMap;
var ReactLifeCycle$$module$react$lib$ReactClass = module$react$lib$ReactLifeCycle;
var ReactPropTypeLocations$$module$react$lib$ReactClass = module$react$lib$ReactPropTypeLocations;
var ReactPropTypeLocationNames$$module$react$lib$ReactClass = module$react$lib$ReactPropTypeLocationNames;
var ReactUpdateQueue$$module$react$lib$ReactClass = module$react$lib$ReactUpdateQueue;
var assign$$module$react$lib$ReactClass = module$react$lib$Object_assign;
var invariant$$module$react$lib$ReactClass = module$react$lib$invariant;
var keyMirror$$module$react$lib$ReactClass = module$react$lib$keyMirror;
var keyOf$$module$react$lib$ReactClass = module$react$lib$keyOf;
var warning$$module$react$lib$ReactClass = module$react$lib$warning;
var MIXINS_KEY$$module$react$lib$ReactClass = keyOf$$module$react$lib$ReactClass({mixins:null});
var SpecPolicy$$module$react$lib$ReactClass = keyMirror$$module$react$lib$ReactClass({DEFINE_ONCE:null, DEFINE_MANY:null, OVERRIDE_BASE:null, DEFINE_MANY_MERGED:null});
var injectedMixins$$module$react$lib$ReactClass = [];
var ReactClassInterface$$module$react$lib$ReactClass = {mixins:SpecPolicy$$module$react$lib$ReactClass.DEFINE_MANY, statics:SpecPolicy$$module$react$lib$ReactClass.DEFINE_MANY, propTypes:SpecPolicy$$module$react$lib$ReactClass.DEFINE_MANY, contextTypes:SpecPolicy$$module$react$lib$ReactClass.DEFINE_MANY, childContextTypes:SpecPolicy$$module$react$lib$ReactClass.DEFINE_MANY, getDefaultProps:SpecPolicy$$module$react$lib$ReactClass.DEFINE_MANY_MERGED, getInitialState:SpecPolicy$$module$react$lib$ReactClass.DEFINE_MANY_MERGED, 
getChildContext:SpecPolicy$$module$react$lib$ReactClass.DEFINE_MANY_MERGED, render:SpecPolicy$$module$react$lib$ReactClass.DEFINE_ONCE, componentWillMount:SpecPolicy$$module$react$lib$ReactClass.DEFINE_MANY, componentDidMount:SpecPolicy$$module$react$lib$ReactClass.DEFINE_MANY, componentWillReceiveProps:SpecPolicy$$module$react$lib$ReactClass.DEFINE_MANY, shouldComponentUpdate:SpecPolicy$$module$react$lib$ReactClass.DEFINE_ONCE, componentWillUpdate:SpecPolicy$$module$react$lib$ReactClass.DEFINE_MANY, 
componentDidUpdate:SpecPolicy$$module$react$lib$ReactClass.DEFINE_MANY, componentWillUnmount:SpecPolicy$$module$react$lib$ReactClass.DEFINE_MANY, updateComponent:SpecPolicy$$module$react$lib$ReactClass.OVERRIDE_BASE};
var RESERVED_SPEC_KEYS$$module$react$lib$ReactClass = {displayName:function(Constructor, displayName) {
  Constructor.displayName = displayName;
}, mixins:function(Constructor, mixins) {
  if (mixins) {
    for (var i = 0;i < mixins.length;i++) {
      mixSpecIntoComponent$$module$react$lib$ReactClass(Constructor, mixins[i]);
    }
  }
}, childContextTypes:function(Constructor, childContextTypes) {
  if ("production" !== process.env.NODE_ENV) {
    validateTypeDef$$module$react$lib$ReactClass(Constructor, childContextTypes, ReactPropTypeLocations$$module$react$lib$ReactClass.childContext);
  }
  Constructor.childContextTypes = assign$$module$react$lib$ReactClass({}, Constructor.childContextTypes, childContextTypes);
}, contextTypes:function(Constructor, contextTypes) {
  if ("production" !== process.env.NODE_ENV) {
    validateTypeDef$$module$react$lib$ReactClass(Constructor, contextTypes, ReactPropTypeLocations$$module$react$lib$ReactClass.context);
  }
  Constructor.contextTypes = assign$$module$react$lib$ReactClass({}, Constructor.contextTypes, contextTypes);
}, getDefaultProps:function(Constructor, getDefaultProps) {
  if (Constructor.getDefaultProps) {
    Constructor.getDefaultProps = createMergedResultFunction$$module$react$lib$ReactClass(Constructor.getDefaultProps, getDefaultProps);
  } else {
    Constructor.getDefaultProps = getDefaultProps;
  }
}, propTypes:function(Constructor, propTypes) {
  if ("production" !== process.env.NODE_ENV) {
    validateTypeDef$$module$react$lib$ReactClass(Constructor, propTypes, ReactPropTypeLocations$$module$react$lib$ReactClass.prop);
  }
  Constructor.propTypes = assign$$module$react$lib$ReactClass({}, Constructor.propTypes, propTypes);
}, statics:function(Constructor, statics) {
  mixStaticSpecIntoComponent$$module$react$lib$ReactClass(Constructor, statics);
}};
function validateTypeDef$$module$react$lib$ReactClass(Constructor, typeDef, location) {
  for (var propName in typeDef) {
    if (typeDef.hasOwnProperty(propName)) {
      "production" !== process.env.NODE_ENV ? warning$$module$react$lib$ReactClass(typeof typeDef[propName] === "function", "%s: %s type `%s` is invalid; it must be a function, usually from " + "React.PropTypes.", Constructor.displayName || "ReactClass", ReactPropTypeLocationNames$$module$react$lib$ReactClass[location], propName) : null;
    }
  }
}
function validateMethodOverride$$module$react$lib$ReactClass(proto, name) {
  var specPolicy = ReactClassInterface$$module$react$lib$ReactClass.hasOwnProperty(name) ? ReactClassInterface$$module$react$lib$ReactClass[name] : null;
  if (ReactClassMixin$$module$react$lib$ReactClass.hasOwnProperty(name)) {
    "production" !== process.env.NODE_ENV ? invariant$$module$react$lib$ReactClass(specPolicy === SpecPolicy$$module$react$lib$ReactClass.OVERRIDE_BASE, "ReactClassInterface: You are attempting to override " + "`%s` from your class specification. Ensure that your method names " + "do not overlap with React methods.", name) : invariant$$module$react$lib$ReactClass(specPolicy === SpecPolicy$$module$react$lib$ReactClass.OVERRIDE_BASE);
  }
  if (proto.hasOwnProperty(name)) {
    "production" !== process.env.NODE_ENV ? invariant$$module$react$lib$ReactClass(specPolicy === SpecPolicy$$module$react$lib$ReactClass.DEFINE_MANY || specPolicy === SpecPolicy$$module$react$lib$ReactClass.DEFINE_MANY_MERGED, "ReactClassInterface: You are attempting to define " + "`%s` on your component more than once. This conflict may be due " + "to a mixin.", name) : invariant$$module$react$lib$ReactClass(specPolicy === SpecPolicy$$module$react$lib$ReactClass.DEFINE_MANY || specPolicy === SpecPolicy$$module$react$lib$ReactClass.DEFINE_MANY_MERGED)
    ;
  }
}
function mixSpecIntoComponent$$module$react$lib$ReactClass(Constructor, spec) {
  if (!spec) {
    return;
  }
  "production" !== process.env.NODE_ENV ? invariant$$module$react$lib$ReactClass(typeof spec !== "function", "ReactClass: You're attempting to " + "use a component class as a mixin. Instead, just use a regular object.") : invariant$$module$react$lib$ReactClass(typeof spec !== "function");
  "production" !== process.env.NODE_ENV ? invariant$$module$react$lib$ReactClass(!ReactElement$$module$react$lib$ReactClass.isValidElement(spec), "ReactClass: You're attempting to " + "use a component as a mixin. Instead, just use a regular object.") : invariant$$module$react$lib$ReactClass(!ReactElement$$module$react$lib$ReactClass.isValidElement(spec));
  var proto = Constructor.prototype;
  if (spec.hasOwnProperty(MIXINS_KEY$$module$react$lib$ReactClass)) {
    RESERVED_SPEC_KEYS$$module$react$lib$ReactClass.mixins(Constructor, spec.mixins);
  }
  for (var name in spec) {
    if (!spec.hasOwnProperty(name)) {
      continue;
    }
    if (name === MIXINS_KEY$$module$react$lib$ReactClass) {
      continue;
    }
    var property = spec[name];
    validateMethodOverride$$module$react$lib$ReactClass(proto, name);
    if (RESERVED_SPEC_KEYS$$module$react$lib$ReactClass.hasOwnProperty(name)) {
      RESERVED_SPEC_KEYS$$module$react$lib$ReactClass[name](Constructor, property);
    } else {
      var isReactClassMethod = ReactClassInterface$$module$react$lib$ReactClass.hasOwnProperty(name);
      var isAlreadyDefined = proto.hasOwnProperty(name);
      var markedDontBind = property && property.__reactDontBind;
      var isFunction = typeof property === "function";
      var shouldAutoBind = isFunction && !isReactClassMethod && !isAlreadyDefined && !markedDontBind;
      if (shouldAutoBind) {
        if (!proto.__reactAutoBindMap) {
          proto.__reactAutoBindMap = {};
        }
        proto.__reactAutoBindMap[name] = property;
        proto[name] = property;
      } else {
        if (isAlreadyDefined) {
          var specPolicy = ReactClassInterface$$module$react$lib$ReactClass[name];
          "production" !== process.env.NODE_ENV ? invariant$$module$react$lib$ReactClass(isReactClassMethod && (specPolicy === SpecPolicy$$module$react$lib$ReactClass.DEFINE_MANY_MERGED || specPolicy === SpecPolicy$$module$react$lib$ReactClass.DEFINE_MANY), "ReactClass: Unexpected spec policy %s for key %s " + "when mixing in component specs.", specPolicy, name) : invariant$$module$react$lib$ReactClass(isReactClassMethod && (specPolicy === SpecPolicy$$module$react$lib$ReactClass.DEFINE_MANY_MERGED || 
          specPolicy === SpecPolicy$$module$react$lib$ReactClass.DEFINE_MANY));
          if (specPolicy === SpecPolicy$$module$react$lib$ReactClass.DEFINE_MANY_MERGED) {
            proto[name] = createMergedResultFunction$$module$react$lib$ReactClass(proto[name], property);
          } else {
            if (specPolicy === SpecPolicy$$module$react$lib$ReactClass.DEFINE_MANY) {
              proto[name] = createChainedFunction$$module$react$lib$ReactClass(proto[name], property);
            }
          }
        } else {
          proto[name] = property;
          if ("production" !== process.env.NODE_ENV) {
            if (typeof property === "function" && spec.displayName) {
              proto[name].displayName = spec.displayName + "_" + name;
            }
          }
        }
      }
    }
  }
}
function mixStaticSpecIntoComponent$$module$react$lib$ReactClass(Constructor, statics) {
  if (!statics) {
    return;
  }
  for (var name in statics) {
    var property = statics[name];
    if (!statics.hasOwnProperty(name)) {
      continue;
    }
    var isReserved = name in RESERVED_SPEC_KEYS$$module$react$lib$ReactClass;
    "production" !== process.env.NODE_ENV ? invariant$$module$react$lib$ReactClass(!isReserved, "ReactClass: You are attempting to define a reserved " + 'property, `%s`, that shouldn\'t be on the "statics" key. Define it ' + "as an instance property instead; it will still be accessible on the " + "constructor.", name) : invariant$$module$react$lib$ReactClass(!isReserved);
    var isInherited = name in Constructor;
    "production" !== process.env.NODE_ENV ? invariant$$module$react$lib$ReactClass(!isInherited, "ReactClass: You are attempting to define " + "`%s` on your component more than once. This conflict may be " + "due to a mixin.", name) : invariant$$module$react$lib$ReactClass(!isInherited);
    Constructor[name] = property;
  }
}
function mergeIntoWithNoDuplicateKeys$$module$react$lib$ReactClass(one, two) {
  "production" !== process.env.NODE_ENV ? invariant$$module$react$lib$ReactClass(one && two && typeof one === "object" && typeof two === "object", "mergeIntoWithNoDuplicateKeys(): Cannot merge non-objects.") : invariant$$module$react$lib$ReactClass(one && two && typeof one === "object" && typeof two === "object");
  for (var key in two) {
    if (two.hasOwnProperty(key)) {
      "production" !== process.env.NODE_ENV ? invariant$$module$react$lib$ReactClass(one[key] === undefined, "mergeIntoWithNoDuplicateKeys(): " + "Tried to merge two objects with the same key: `%s`. This conflict " + "may be due to a mixin; in particular, this may be caused by two " + "getInitialState() or getDefaultProps() methods returning objects " + "with clashing keys.", key) : invariant$$module$react$lib$ReactClass(one[key] === undefined);
      one[key] = two[key];
    }
  }
  return one;
}
function createMergedResultFunction$$module$react$lib$ReactClass(one, two) {
  return function mergedResult() {
    var a = one.apply(this, arguments);
    var b = two.apply(this, arguments);
    if (a == null) {
      return b;
    } else {
      if (b == null) {
        return a;
      }
    }
    var c = {};
    mergeIntoWithNoDuplicateKeys$$module$react$lib$ReactClass(c, a);
    mergeIntoWithNoDuplicateKeys$$module$react$lib$ReactClass(c, b);
    return c;
  };
}
function createChainedFunction$$module$react$lib$ReactClass(one, two) {
  return function chainedFunction() {
    one.apply(this, arguments);
    two.apply(this, arguments);
  };
}
function bindAutoBindMethod$$module$react$lib$ReactClass(component, method) {
  var boundMethod = method.bind(component);
  if ("production" !== process.env.NODE_ENV) {
    boundMethod.__reactBoundContext = component;
    boundMethod.__reactBoundMethod = method;
    boundMethod.__reactBoundArguments = null;
    var componentName = component.constructor.displayName;
    var _bind = boundMethod.bind;
    boundMethod.bind = function(newThis) {
      for (var args = [], $__0 = 1, $__1 = arguments.length;$__0 < $__1;$__0++) {
        args.push(arguments[$__0]);
      }
      if (newThis !== component && newThis !== null) {
        "production" !== process.env.NODE_ENV ? warning$$module$react$lib$ReactClass(false, "bind(): React component methods may only be bound to the " + "component instance. See %s", componentName) : null;
      } else {
        if (!args.length) {
          "production" !== process.env.NODE_ENV ? warning$$module$react$lib$ReactClass(false, "bind(): You are binding a component method to the component. " + "React does this for you automatically in a high-performance " + "way, so you can safely remove this call. See %s", componentName) : null;
          return boundMethod;
        }
      }
      var reboundMethod = _bind.apply(boundMethod, arguments);
      reboundMethod.__reactBoundContext = component;
      reboundMethod.__reactBoundMethod = method;
      reboundMethod.__reactBoundArguments = args;
      return reboundMethod;
    };
  }
  return boundMethod;
}
function bindAutoBindMethods$$module$react$lib$ReactClass(component) {
  for (var autoBindKey in component.__reactAutoBindMap) {
    if (component.__reactAutoBindMap.hasOwnProperty(autoBindKey)) {
      var method = component.__reactAutoBindMap[autoBindKey];
      component[autoBindKey] = bindAutoBindMethod$$module$react$lib$ReactClass(component, ReactErrorUtils$$module$react$lib$ReactClass.guard(method, component.constructor.displayName + "." + autoBindKey));
    }
  }
}
var typeDeprecationDescriptor$$module$react$lib$ReactClass = {enumerable:false, get:function() {
  var displayName = this.displayName || this.name || "Component";
  "production" !== process.env.NODE_ENV ? warning$$module$react$lib$ReactClass(false, "%s.type is deprecated. Use %s directly to access the class.", displayName, displayName) : null;
  Object.defineProperty(this, "type", {value:this});
  return this;
}};
var ReactClassMixin$$module$react$lib$ReactClass = {replaceState:function(newState, callback) {
  ReactUpdateQueue$$module$react$lib$ReactClass.enqueueReplaceState(this, newState);
  if (callback) {
    ReactUpdateQueue$$module$react$lib$ReactClass.enqueueCallback(this, callback);
  }
}, isMounted:function() {
  if ("production" !== process.env.NODE_ENV) {
    var owner = ReactCurrentOwner$$module$react$lib$ReactClass.current;
    if (owner !== null) {
      "production" !== process.env.NODE_ENV ? warning$$module$react$lib$ReactClass(owner._warnedAboutRefsInRender, "%s is accessing isMounted inside its render() function. " + "render() should be a pure function of props and state. It should " + "never access something that requires stale data from the previous " + "render, such as refs. Move this logic to componentDidMount and " + "componentDidUpdate instead.", owner.getName() || "A component") : null;
      owner._warnedAboutRefsInRender = true;
    }
  }
  var internalInstance = ReactInstanceMap$$module$react$lib$ReactClass.get(this);
  return internalInstance && internalInstance !== ReactLifeCycle$$module$react$lib$ReactClass.currentlyMountingInstance;
}, setProps:function(partialProps, callback) {
  ReactUpdateQueue$$module$react$lib$ReactClass.enqueueSetProps(this, partialProps);
  if (callback) {
    ReactUpdateQueue$$module$react$lib$ReactClass.enqueueCallback(this, callback);
  }
}, replaceProps:function(newProps, callback) {
  ReactUpdateQueue$$module$react$lib$ReactClass.enqueueReplaceProps(this, newProps);
  if (callback) {
    ReactUpdateQueue$$module$react$lib$ReactClass.enqueueCallback(this, callback);
  }
}};
var ReactClassComponent$$module$react$lib$ReactClass = function() {
};
assign$$module$react$lib$ReactClass(ReactClassComponent$$module$react$lib$ReactClass.prototype, ReactComponent$$module$react$lib$ReactClass.prototype, ReactClassMixin$$module$react$lib$ReactClass);
var ReactClass$$module$react$lib$ReactClass = {createClass:function(spec) {
  var Constructor = function(props, context) {
    if ("production" !== process.env.NODE_ENV) {
      "production" !== process.env.NODE_ENV ? warning$$module$react$lib$ReactClass(this instanceof Constructor, "Something is calling a React component directly. Use a factory or " + "JSX instead. See: https://fb.me/react-legacyfactory") : null;
    }
    if (this.__reactAutoBindMap) {
      bindAutoBindMethods$$module$react$lib$ReactClass(this);
    }
    this.props = props;
    this.context = context;
    this.state = null;
    var initialState = this.getInitialState ? this.getInitialState() : null;
    if ("production" !== process.env.NODE_ENV) {
      if (typeof initialState === "undefined" && this.getInitialState._isMockFunction) {
        initialState = null;
      }
    }
    "production" !== process.env.NODE_ENV ? invariant$$module$react$lib$ReactClass(typeof initialState === "object" && !Array.isArray(initialState), "%s.getInitialState(): must return an object or null", Constructor.displayName || "ReactCompositeComponent") : invariant$$module$react$lib$ReactClass(typeof initialState === "object" && !Array.isArray(initialState));
    this.state = initialState;
  };
  Constructor.prototype = new ReactClassComponent$$module$react$lib$ReactClass;
  Constructor.prototype.constructor = Constructor;
  injectedMixins$$module$react$lib$ReactClass.forEach(mixSpecIntoComponent$$module$react$lib$ReactClass.bind(null, Constructor));
  mixSpecIntoComponent$$module$react$lib$ReactClass(Constructor, spec);
  if (Constructor.getDefaultProps) {
    Constructor.defaultProps = Constructor.getDefaultProps();
  }
  if ("production" !== process.env.NODE_ENV) {
    if (Constructor.getDefaultProps) {
      Constructor.getDefaultProps.isReactClassApproved = {};
    }
    if (Constructor.prototype.getInitialState) {
      Constructor.prototype.getInitialState.isReactClassApproved = {};
    }
  }
  "production" !== process.env.NODE_ENV ? invariant$$module$react$lib$ReactClass(Constructor.prototype.render, "createClass(...): Class specification must implement a `render` method.") : invariant$$module$react$lib$ReactClass(Constructor.prototype.render);
  if ("production" !== process.env.NODE_ENV) {
    "production" !== process.env.NODE_ENV ? warning$$module$react$lib$ReactClass(!Constructor.prototype.componentShouldUpdate, "%s has a method called " + "componentShouldUpdate(). Did you mean shouldComponentUpdate()? " + "The name is phrased as a question because the function is " + "expected to return a value.", spec.displayName || "A component") : null;
  }
  for (var methodName in ReactClassInterface$$module$react$lib$ReactClass) {
    if (!Constructor.prototype[methodName]) {
      Constructor.prototype[methodName] = null;
    }
  }
  Constructor.type = Constructor;
  if ("production" !== process.env.NODE_ENV) {
    try {
      Object.defineProperty(Constructor, "type", typeDeprecationDescriptor$$module$react$lib$ReactClass);
    } catch (x) {
    }
  }
  return Constructor;
}, injection:{injectMixin:function(mixin) {
  injectedMixins$$module$react$lib$ReactClass.push(mixin);
}}};
module$react$lib$ReactClass = ReactClass$$module$react$lib$ReactClass;
