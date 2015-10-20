goog.provide("module$react$lib$ReactElementValidator");
goog.require("module$react$lib$warning");
goog.require("module$react$lib$invariant");
goog.require("module$react$lib$getIteratorFn");
goog.require("module$react$lib$ReactNativeComponent");
goog.require("module$react$lib$ReactCurrentOwner");
goog.require("module$react$lib$ReactPropTypeLocationNames");
goog.require("module$react$lib$ReactPropTypeLocations");
goog.require("module$react$lib$ReactFragment");
goog.require("module$react$lib$ReactElement");
var ReactElement$$module$react$lib$ReactElementValidator = module$react$lib$ReactElement;
var ReactFragment$$module$react$lib$ReactElementValidator = module$react$lib$ReactFragment;
var ReactPropTypeLocations$$module$react$lib$ReactElementValidator = module$react$lib$ReactPropTypeLocations;
var ReactPropTypeLocationNames$$module$react$lib$ReactElementValidator = module$react$lib$ReactPropTypeLocationNames;
var ReactCurrentOwner$$module$react$lib$ReactElementValidator = module$react$lib$ReactCurrentOwner;
var ReactNativeComponent$$module$react$lib$ReactElementValidator = module$react$lib$ReactNativeComponent;
var getIteratorFn$$module$react$lib$ReactElementValidator = module$react$lib$getIteratorFn;
var invariant$$module$react$lib$ReactElementValidator = module$react$lib$invariant;
var warning$$module$react$lib$ReactElementValidator = module$react$lib$warning;
function getDeclarationErrorAddendum$$module$react$lib$ReactElementValidator() {
  if (ReactCurrentOwner$$module$react$lib$ReactElementValidator.current) {
    var name = ReactCurrentOwner$$module$react$lib$ReactElementValidator.current.getName();
    if (name) {
      return " Check the render method of `" + name + "`.";
    }
  }
  return "";
}
var ownerHasKeyUseWarning$$module$react$lib$ReactElementValidator = {};
var loggedTypeFailures$$module$react$lib$ReactElementValidator = {};
var NUMERIC_PROPERTY_REGEX$$module$react$lib$ReactElementValidator = /^\d+$/;
function getName$$module$react$lib$ReactElementValidator(instance) {
  var publicInstance = instance && instance.getPublicInstance();
  if (!publicInstance) {
    return undefined;
  }
  var constructor = publicInstance.constructor;
  if (!constructor) {
    return undefined;
  }
  return constructor.displayName || constructor.name || undefined;
}
function getCurrentOwnerDisplayName$$module$react$lib$ReactElementValidator() {
  var current = ReactCurrentOwner$$module$react$lib$ReactElementValidator.current;
  return current && getName$$module$react$lib$ReactElementValidator(current) || undefined;
}
function validateExplicitKey$$module$react$lib$ReactElementValidator(element, parentType) {
  if (element._store.validated || element.key != null) {
    return;
  }
  element._store.validated = true;
  warnAndMonitorForKeyUse$$module$react$lib$ReactElementValidator('Each child in an array or iterator should have a unique "key" prop.', element, parentType);
}
function validatePropertyKey$$module$react$lib$ReactElementValidator(name, element, parentType) {
  if (!NUMERIC_PROPERTY_REGEX$$module$react$lib$ReactElementValidator.test(name)) {
    return;
  }
  warnAndMonitorForKeyUse$$module$react$lib$ReactElementValidator("Child objects should have non-numeric keys so ordering is preserved.", element, parentType);
}
function warnAndMonitorForKeyUse$$module$react$lib$ReactElementValidator(message, element, parentType) {
  var ownerName = getCurrentOwnerDisplayName$$module$react$lib$ReactElementValidator();
  var parentName = typeof parentType === "string" ? parentType : parentType.displayName || parentType.name;
  var useName = ownerName || parentName;
  var memoizer = ownerHasKeyUseWarning$$module$react$lib$ReactElementValidator[message] || (ownerHasKeyUseWarning$$module$react$lib$ReactElementValidator[message] = {});
  if (memoizer.hasOwnProperty(useName)) {
    return;
  }
  memoizer[useName] = true;
  var parentOrOwnerAddendum = ownerName ? " Check the render method of " + ownerName + "." : parentName ? " Check the React.render call using \x3c" + parentName + "\x3e." : "";
  var childOwnerAddendum = "";
  if (element && element._owner && element._owner !== ReactCurrentOwner$$module$react$lib$ReactElementValidator.current) {
    var childOwnerName = getName$$module$react$lib$ReactElementValidator(element._owner);
    childOwnerAddendum = " It was passed a child from " + childOwnerName + ".";
  }
  "production" !== process.env.NODE_ENV ? warning$$module$react$lib$ReactElementValidator(false, message + "%s%s See https://fb.me/react-warning-keys for more information.", parentOrOwnerAddendum, childOwnerAddendum) : null;
}
function validateChildKeys$$module$react$lib$ReactElementValidator(node, parentType) {
  if (Array.isArray(node)) {
    for (var i = 0;i < node.length;i++) {
      var child = node[i];
      if (ReactElement$$module$react$lib$ReactElementValidator.isValidElement(child)) {
        validateExplicitKey$$module$react$lib$ReactElementValidator(child, parentType);
      }
    }
  } else {
    if (ReactElement$$module$react$lib$ReactElementValidator.isValidElement(node)) {
      node._store.validated = true;
    } else {
      if (node) {
        var iteratorFn = getIteratorFn$$module$react$lib$ReactElementValidator(node);
        if (iteratorFn) {
          if (iteratorFn !== node.entries) {
            var iterator = iteratorFn.call(node);
            var step;
            while (!(step = iterator.next()).done) {
              if (ReactElement$$module$react$lib$ReactElementValidator.isValidElement(step.value)) {
                validateExplicitKey$$module$react$lib$ReactElementValidator(step.value, parentType);
              }
            }
          }
        } else {
          if (typeof node === "object") {
            var fragment = ReactFragment$$module$react$lib$ReactElementValidator.extractIfFragment(node);
            for (var key in fragment) {
              if (fragment.hasOwnProperty(key)) {
                validatePropertyKey$$module$react$lib$ReactElementValidator(key, fragment[key], parentType);
              }
            }
          }
        }
      }
    }
  }
}
function checkPropTypes$$module$react$lib$ReactElementValidator(componentName, propTypes, props, location) {
  for (var propName in propTypes) {
    if (propTypes.hasOwnProperty(propName)) {
      var error;
      try {
        "production" !== process.env.NODE_ENV ? invariant$$module$react$lib$ReactElementValidator(typeof propTypes[propName] === "function", "%s: %s type `%s` is invalid; it must be a function, usually from " + "React.PropTypes.", componentName || "React class", ReactPropTypeLocationNames$$module$react$lib$ReactElementValidator[location], propName) : invariant$$module$react$lib$ReactElementValidator(typeof propTypes[propName] === "function");
        error = propTypes[propName](props, propName, componentName, location);
      } catch (ex) {
        error = ex;
      }
      if (error instanceof Error && !(error.message in loggedTypeFailures$$module$react$lib$ReactElementValidator)) {
        loggedTypeFailures$$module$react$lib$ReactElementValidator[error.message] = true;
        var addendum = getDeclarationErrorAddendum$$module$react$lib$ReactElementValidator(this);
        "production" !== process.env.NODE_ENV ? warning$$module$react$lib$ReactElementValidator(false, "Failed propType: %s%s", error.message, addendum) : null;
      }
    }
  }
}
var warnedPropsMutations$$module$react$lib$ReactElementValidator = {};
function warnForPropsMutation$$module$react$lib$ReactElementValidator(propName, element) {
  var type = element.type;
  var elementName = typeof type === "string" ? type : type.displayName;
  var ownerName = element._owner ? element._owner.getPublicInstance().constructor.displayName : null;
  var warningKey = propName + "|" + elementName + "|" + ownerName;
  if (warnedPropsMutations$$module$react$lib$ReactElementValidator.hasOwnProperty(warningKey)) {
    return;
  }
  warnedPropsMutations$$module$react$lib$ReactElementValidator[warningKey] = true;
  var elementInfo = "";
  if (elementName) {
    elementInfo = " \x3c" + elementName + " /\x3e";
  }
  var ownerInfo = "";
  if (ownerName) {
    ownerInfo = " The element was created by " + ownerName + ".";
  }
  "production" !== process.env.NODE_ENV ? warning$$module$react$lib$ReactElementValidator(false, "Don't set .props.%s of the React component%s. Instead, specify the " + "correct value when initially creating the element or use " + "React.cloneElement to make a new element with updated props.%s", propName, elementInfo, ownerInfo) : null;
}
function is$$module$react$lib$ReactElementValidator(a, b) {
  if (a !== a) {
    return b !== b;
  }
  if (a === 0 && b === 0) {
    return 1 / a === 1 / b;
  }
  return a === b;
}
function checkAndWarnForMutatedProps$$module$react$lib$ReactElementValidator(element) {
  if (!element._store) {
    return;
  }
  var originalProps = element._store.originalProps;
  var props = element.props;
  for (var propName in props) {
    if (props.hasOwnProperty(propName)) {
      if (!originalProps.hasOwnProperty(propName) || !is$$module$react$lib$ReactElementValidator(originalProps[propName], props[propName])) {
        warnForPropsMutation$$module$react$lib$ReactElementValidator(propName, element);
        originalProps[propName] = props[propName];
      }
    }
  }
}
function validatePropTypes$$module$react$lib$ReactElementValidator(element) {
  if (element.type == null) {
    return;
  }
  var componentClass = ReactNativeComponent$$module$react$lib$ReactElementValidator.getComponentClassForElement(element);
  var name = componentClass.displayName || componentClass.name;
  if (componentClass.propTypes) {
    checkPropTypes$$module$react$lib$ReactElementValidator(name, componentClass.propTypes, element.props, ReactPropTypeLocations$$module$react$lib$ReactElementValidator.prop);
  }
  if (typeof componentClass.getDefaultProps === "function") {
    "production" !== process.env.NODE_ENV ? warning$$module$react$lib$ReactElementValidator(componentClass.getDefaultProps.isReactClassApproved, "getDefaultProps is only used on classic React.createClass " + "definitions. Use a static property named `defaultProps` instead.") : null;
  }
}
var ReactElementValidator$$module$react$lib$ReactElementValidator = {checkAndWarnForMutatedProps:checkAndWarnForMutatedProps$$module$react$lib$ReactElementValidator, createElement:function(type, props, children) {
  "production" !== process.env.NODE_ENV ? warning$$module$react$lib$ReactElementValidator(type != null, "React.createElement: type should not be null or undefined. It should " + "be a string (for DOM elements) or a ReactClass (for composite " + "components).") : null;
  var element = ReactElement$$module$react$lib$ReactElementValidator.createElement.apply(this, arguments);
  if (element == null) {
    return element;
  }
  for (var i = 2;i < arguments.length;i++) {
    validateChildKeys$$module$react$lib$ReactElementValidator(arguments[i], type);
  }
  validatePropTypes$$module$react$lib$ReactElementValidator(element);
  return element;
}, createFactory:function(type) {
  var validatedFactory = ReactElementValidator$$module$react$lib$ReactElementValidator.createElement.bind(null, type);
  validatedFactory.type = type;
  if ("production" !== process.env.NODE_ENV) {
    try {
      Object.defineProperty(validatedFactory, "type", {enumerable:false, get:function() {
        "production" !== process.env.NODE_ENV ? warning$$module$react$lib$ReactElementValidator(false, "Factory.type is deprecated. Access the class directly " + "before passing it to createFactory.") : null;
        Object.defineProperty(this, "type", {value:type});
        return type;
      }});
    } catch (x) {
    }
  }
  return validatedFactory;
}, cloneElement:function(element, props, children) {
  var newElement = ReactElement$$module$react$lib$ReactElementValidator.cloneElement.apply(this, arguments);
  for (var i = 2;i < arguments.length;i++) {
    validateChildKeys$$module$react$lib$ReactElementValidator(arguments[i], newElement.type);
  }
  validatePropTypes$$module$react$lib$ReactElementValidator(newElement);
  return newElement;
}};
module$react$lib$ReactElementValidator = ReactElementValidator$$module$react$lib$ReactElementValidator;
