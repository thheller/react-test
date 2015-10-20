goog.provide("module$react$lib$ReactElement");
goog.require("module$react$lib$warning");
goog.require("module$react$lib$Object_assign");
goog.require("module$react$lib$ReactCurrentOwner");
goog.require("module$react$lib$ReactContext");
var ReactContext$$module$react$lib$ReactElement = module$react$lib$ReactContext;
var ReactCurrentOwner$$module$react$lib$ReactElement = module$react$lib$ReactCurrentOwner;
var assign$$module$react$lib$ReactElement = module$react$lib$Object_assign;
var warning$$module$react$lib$ReactElement = module$react$lib$warning;
var RESERVED_PROPS$$module$react$lib$ReactElement = {key:true, ref:true};
function defineWarningProperty$$module$react$lib$ReactElement(object, key) {
  Object.defineProperty(object, key, {configurable:false, enumerable:true, get:function() {
    if (!this._store) {
      return null;
    }
    return this._store[key];
  }, set:function(value) {
    "production" !== process.env.NODE_ENV ? warning$$module$react$lib$ReactElement(false, "Don't set the %s property of the React element. Instead, " + "specify the correct value when initially creating the element.", key) : null;
    this._store[key] = value;
  }});
}
var useMutationMembrane$$module$react$lib$ReactElement = false;
function defineMutationMembrane$$module$react$lib$ReactElement(prototype) {
  try {
    var pseudoFrozenProperties = {props:true};
    for (var key in pseudoFrozenProperties) {
      defineWarningProperty$$module$react$lib$ReactElement(prototype, key);
    }
    useMutationMembrane$$module$react$lib$ReactElement = true;
  } catch (x) {
  }
}
var ReactElement$$module$react$lib$ReactElement = function(type, key, ref, owner, context, props) {
  this.type = type;
  this.key = key;
  this.ref = ref;
  this._owner = owner;
  this._context = context;
  if ("production" !== process.env.NODE_ENV) {
    this._store = {props:props, originalProps:assign$$module$react$lib$ReactElement({}, props)};
    try {
      Object.defineProperty(this._store, "validated", {configurable:false, enumerable:false, writable:true});
    } catch (x) {
    }
    this._store.validated = false;
    if (useMutationMembrane$$module$react$lib$ReactElement) {
      Object.freeze(this);
      return;
    }
  }
  this.props = props;
};
ReactElement$$module$react$lib$ReactElement.prototype = {_isReactElement:true};
if ("production" !== process.env.NODE_ENV) {
  defineMutationMembrane$$module$react$lib$ReactElement(ReactElement$$module$react$lib$ReactElement.prototype);
}
ReactElement$$module$react$lib$ReactElement.createElement = function(type, config, children) {
  var propName;
  var props = {};
  var key = null;
  var ref = null;
  if (config != null) {
    ref = config.ref === undefined ? null : config.ref;
    key = config.key === undefined ? null : "" + config.key;
    for (propName in config) {
      if (config.hasOwnProperty(propName) && !RESERVED_PROPS$$module$react$lib$ReactElement.hasOwnProperty(propName)) {
        props[propName] = config[propName];
      }
    }
  }
  var childrenLength = arguments.length - 2;
  if (childrenLength === 1) {
    props.children = children;
  } else {
    if (childrenLength > 1) {
      var childArray = Array(childrenLength);
      for (var i = 0;i < childrenLength;i++) {
        childArray[i] = arguments[i + 2];
      }
      props.children = childArray;
    }
  }
  if (type && type.defaultProps) {
    var defaultProps = type.defaultProps;
    for (propName in defaultProps) {
      if (typeof props[propName] === "undefined") {
        props[propName] = defaultProps[propName];
      }
    }
  }
  return new ReactElement$$module$react$lib$ReactElement(type, key, ref, ReactCurrentOwner$$module$react$lib$ReactElement.current, ReactContext$$module$react$lib$ReactElement.current, props);
};
ReactElement$$module$react$lib$ReactElement.createFactory = function(type) {
  var factory = ReactElement$$module$react$lib$ReactElement.createElement.bind(null, type);
  factory.type = type;
  return factory;
};
ReactElement$$module$react$lib$ReactElement.cloneAndReplaceProps = function(oldElement, newProps) {
  var newElement = new ReactElement$$module$react$lib$ReactElement(oldElement.type, oldElement.key, oldElement.ref, oldElement._owner, oldElement._context, newProps);
  if ("production" !== process.env.NODE_ENV) {
    newElement._store.validated = oldElement._store.validated;
  }
  return newElement;
};
ReactElement$$module$react$lib$ReactElement.cloneElement = function(element, config, children) {
  var propName;
  var props = assign$$module$react$lib$ReactElement({}, element.props);
  var key = element.key;
  var ref = element.ref;
  var owner = element._owner;
  if (config != null) {
    if (config.ref !== undefined) {
      ref = config.ref;
      owner = ReactCurrentOwner$$module$react$lib$ReactElement.current;
    }
    if (config.key !== undefined) {
      key = "" + config.key;
    }
    for (propName in config) {
      if (config.hasOwnProperty(propName) && !RESERVED_PROPS$$module$react$lib$ReactElement.hasOwnProperty(propName)) {
        props[propName] = config[propName];
      }
    }
  }
  var childrenLength = arguments.length - 2;
  if (childrenLength === 1) {
    props.children = children;
  } else {
    if (childrenLength > 1) {
      var childArray = Array(childrenLength);
      for (var i = 0;i < childrenLength;i++) {
        childArray[i] = arguments[i + 2];
      }
      props.children = childArray;
    }
  }
  return new ReactElement$$module$react$lib$ReactElement(element.type, key, ref, owner, element._context, props);
};
ReactElement$$module$react$lib$ReactElement.isValidElement = function(object) {
  var isElement = !!(object && object._isReactElement);
  return isElement;
};
module$react$lib$ReactElement = ReactElement$$module$react$lib$ReactElement;
