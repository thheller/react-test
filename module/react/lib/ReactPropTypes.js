goog.provide("module$react$lib$ReactPropTypes");
goog.require("module$react$lib$emptyFunction");
goog.require("module$react$lib$ReactPropTypeLocationNames");
goog.require("module$react$lib$ReactFragment");
goog.require("module$react$lib$ReactElement");
var ReactElement$$module$react$lib$ReactPropTypes = module$react$lib$ReactElement;
var ReactFragment$$module$react$lib$ReactPropTypes = module$react$lib$ReactFragment;
var ReactPropTypeLocationNames$$module$react$lib$ReactPropTypes = module$react$lib$ReactPropTypeLocationNames;
var emptyFunction$$module$react$lib$ReactPropTypes = module$react$lib$emptyFunction;
var ANONYMOUS$$module$react$lib$ReactPropTypes = "\x3c\x3canonymous\x3e\x3e";
var elementTypeChecker$$module$react$lib$ReactPropTypes = createElementTypeChecker$$module$react$lib$ReactPropTypes();
var nodeTypeChecker$$module$react$lib$ReactPropTypes = createNodeChecker$$module$react$lib$ReactPropTypes();
var ReactPropTypes$$module$react$lib$ReactPropTypes = {array:createPrimitiveTypeChecker$$module$react$lib$ReactPropTypes("array"), bool:createPrimitiveTypeChecker$$module$react$lib$ReactPropTypes("boolean"), func:createPrimitiveTypeChecker$$module$react$lib$ReactPropTypes("function"), number:createPrimitiveTypeChecker$$module$react$lib$ReactPropTypes("number"), object:createPrimitiveTypeChecker$$module$react$lib$ReactPropTypes("object"), string:createPrimitiveTypeChecker$$module$react$lib$ReactPropTypes("string"), 
any:createAnyTypeChecker$$module$react$lib$ReactPropTypes(), arrayOf:createArrayOfTypeChecker$$module$react$lib$ReactPropTypes, element:elementTypeChecker$$module$react$lib$ReactPropTypes, instanceOf:createInstanceTypeChecker$$module$react$lib$ReactPropTypes, node:nodeTypeChecker$$module$react$lib$ReactPropTypes, objectOf:createObjectOfTypeChecker$$module$react$lib$ReactPropTypes, oneOf:createEnumTypeChecker$$module$react$lib$ReactPropTypes, oneOfType:createUnionTypeChecker$$module$react$lib$ReactPropTypes, 
shape:createShapeTypeChecker$$module$react$lib$ReactPropTypes};
function createChainableTypeChecker$$module$react$lib$ReactPropTypes(validate) {
  function checkType(isRequired, props, propName, componentName, location) {
    componentName = componentName || ANONYMOUS$$module$react$lib$ReactPropTypes;
    if (props[propName] == null) {
      var locationName = ReactPropTypeLocationNames$$module$react$lib$ReactPropTypes[location];
      if (isRequired) {
        return new Error("Required " + locationName + " `" + propName + "` was not specified in " + ("`" + componentName + "`."));
      }
      return null;
    } else {
      return validate(props, propName, componentName, location);
    }
  }
  var chainedCheckType = checkType.bind(null, false);
  chainedCheckType.isRequired = checkType.bind(null, true);
  return chainedCheckType;
}
function createPrimitiveTypeChecker$$module$react$lib$ReactPropTypes(expectedType) {
  function validate(props, propName, componentName, location) {
    var propValue = props[propName];
    var propType = getPropType$$module$react$lib$ReactPropTypes(propValue);
    if (propType !== expectedType) {
      var locationName = ReactPropTypeLocationNames$$module$react$lib$ReactPropTypes[location];
      var preciseType = getPreciseType$$module$react$lib$ReactPropTypes(propValue);
      return new Error("Invalid " + locationName + " `" + propName + "` of type `" + preciseType + "` " + ("supplied to `" + componentName + "`, expected `" + expectedType + "`."));
    }
    return null;
  }
  return createChainableTypeChecker$$module$react$lib$ReactPropTypes(validate);
}
function createAnyTypeChecker$$module$react$lib$ReactPropTypes() {
  return createChainableTypeChecker$$module$react$lib$ReactPropTypes(emptyFunction$$module$react$lib$ReactPropTypes.thatReturns(null));
}
function createArrayOfTypeChecker$$module$react$lib$ReactPropTypes(typeChecker) {
  function validate(props, propName, componentName, location) {
    var propValue = props[propName];
    if (!Array.isArray(propValue)) {
      var locationName = ReactPropTypeLocationNames$$module$react$lib$ReactPropTypes[location];
      var propType = getPropType$$module$react$lib$ReactPropTypes(propValue);
      return new Error("Invalid " + locationName + " `" + propName + "` of type " + ("`" + propType + "` supplied to `" + componentName + "`, expected an array."));
    }
    for (var i = 0;i < propValue.length;i++) {
      var error = typeChecker(propValue, i, componentName, location);
      if (error instanceof Error) {
        return error;
      }
    }
    return null;
  }
  return createChainableTypeChecker$$module$react$lib$ReactPropTypes(validate);
}
function createElementTypeChecker$$module$react$lib$ReactPropTypes() {
  function validate(props, propName, componentName, location) {
    if (!ReactElement$$module$react$lib$ReactPropTypes.isValidElement(props[propName])) {
      var locationName = ReactPropTypeLocationNames$$module$react$lib$ReactPropTypes[location];
      return new Error("Invalid " + locationName + " `" + propName + "` supplied to " + ("`" + componentName + "`, expected a ReactElement."));
    }
    return null;
  }
  return createChainableTypeChecker$$module$react$lib$ReactPropTypes(validate);
}
function createInstanceTypeChecker$$module$react$lib$ReactPropTypes(expectedClass) {
  function validate(props, propName, componentName, location) {
    if (!(props[propName] instanceof expectedClass)) {
      var locationName = ReactPropTypeLocationNames$$module$react$lib$ReactPropTypes[location];
      var expectedClassName = expectedClass.name || ANONYMOUS$$module$react$lib$ReactPropTypes;
      return new Error("Invalid " + locationName + " `" + propName + "` supplied to " + ("`" + componentName + "`, expected instance of `" + expectedClassName + "`."));
    }
    return null;
  }
  return createChainableTypeChecker$$module$react$lib$ReactPropTypes(validate);
}
function createEnumTypeChecker$$module$react$lib$ReactPropTypes(expectedValues) {
  function validate(props, propName, componentName, location) {
    var propValue = props[propName];
    for (var i = 0;i < expectedValues.length;i++) {
      if (propValue === expectedValues[i]) {
        return null;
      }
    }
    var locationName = ReactPropTypeLocationNames$$module$react$lib$ReactPropTypes[location];
    var valuesString = JSON.stringify(expectedValues);
    return new Error("Invalid " + locationName + " `" + propName + "` of value `" + propValue + "` " + ("supplied to `" + componentName + "`, expected one of " + valuesString + "."));
  }
  return createChainableTypeChecker$$module$react$lib$ReactPropTypes(validate);
}
function createObjectOfTypeChecker$$module$react$lib$ReactPropTypes(typeChecker) {
  function validate(props, propName, componentName, location) {
    var propValue = props[propName];
    var propType = getPropType$$module$react$lib$ReactPropTypes(propValue);
    if (propType !== "object") {
      var locationName = ReactPropTypeLocationNames$$module$react$lib$ReactPropTypes[location];
      return new Error("Invalid " + locationName + " `" + propName + "` of type " + ("`" + propType + "` supplied to `" + componentName + "`, expected an object."));
    }
    for (var key in propValue) {
      if (propValue.hasOwnProperty(key)) {
        var error = typeChecker(propValue, key, componentName, location);
        if (error instanceof Error) {
          return error;
        }
      }
    }
    return null;
  }
  return createChainableTypeChecker$$module$react$lib$ReactPropTypes(validate);
}
function createUnionTypeChecker$$module$react$lib$ReactPropTypes(arrayOfTypeCheckers) {
  function validate(props, propName, componentName, location) {
    for (var i = 0;i < arrayOfTypeCheckers.length;i++) {
      var checker = arrayOfTypeCheckers[i];
      if (checker(props, propName, componentName, location) == null) {
        return null;
      }
    }
    var locationName = ReactPropTypeLocationNames$$module$react$lib$ReactPropTypes[location];
    return new Error("Invalid " + locationName + " `" + propName + "` supplied to " + ("`" + componentName + "`."));
  }
  return createChainableTypeChecker$$module$react$lib$ReactPropTypes(validate);
}
function createNodeChecker$$module$react$lib$ReactPropTypes() {
  function validate(props, propName, componentName, location) {
    if (!isNode$$module$react$lib$ReactPropTypes(props[propName])) {
      var locationName = ReactPropTypeLocationNames$$module$react$lib$ReactPropTypes[location];
      return new Error("Invalid " + locationName + " `" + propName + "` supplied to " + ("`" + componentName + "`, expected a ReactNode."));
    }
    return null;
  }
  return createChainableTypeChecker$$module$react$lib$ReactPropTypes(validate);
}
function createShapeTypeChecker$$module$react$lib$ReactPropTypes(shapeTypes) {
  function validate(props, propName, componentName, location) {
    var propValue = props[propName];
    var propType = getPropType$$module$react$lib$ReactPropTypes(propValue);
    if (propType !== "object") {
      var locationName = ReactPropTypeLocationNames$$module$react$lib$ReactPropTypes[location];
      return new Error("Invalid " + locationName + " `" + propName + "` of type `" + propType + "` " + ("supplied to `" + componentName + "`, expected `object`."));
    }
    for (var key in shapeTypes) {
      var checker = shapeTypes[key];
      if (!checker) {
        continue;
      }
      var error = checker(propValue, key, componentName, location);
      if (error) {
        return error;
      }
    }
    return null;
  }
  return createChainableTypeChecker$$module$react$lib$ReactPropTypes(validate);
}
function isNode$$module$react$lib$ReactPropTypes(propValue) {
  switch(typeof propValue) {
    case "number":
    ;
    case "string":
    ;
    case "undefined":
      return true;
    case "boolean":
      return !propValue;
    case "object":
      if (Array.isArray(propValue)) {
        return propValue.every(isNode$$module$react$lib$ReactPropTypes);
      }
      if (propValue === null || ReactElement$$module$react$lib$ReactPropTypes.isValidElement(propValue)) {
        return true;
      }
      propValue = ReactFragment$$module$react$lib$ReactPropTypes.extractIfFragment(propValue);
      for (var k in propValue) {
        if (!isNode$$module$react$lib$ReactPropTypes(propValue[k])) {
          return false;
        }
      }
      return true;
    default:
      return false;
  }
}
function getPropType$$module$react$lib$ReactPropTypes(propValue) {
  var propType = typeof propValue;
  if (Array.isArray(propValue)) {
    return "array";
  }
  if (propValue instanceof RegExp) {
    return "object";
  }
  return propType;
}
function getPreciseType$$module$react$lib$ReactPropTypes(propValue) {
  var propType = getPropType$$module$react$lib$ReactPropTypes(propValue);
  if (propType === "object") {
    if (propValue instanceof Date) {
      return "date";
    } else {
      if (propValue instanceof RegExp) {
        return "regexp";
      }
    }
  }
  return propType;
}
module$react$lib$ReactPropTypes = ReactPropTypes$$module$react$lib$ReactPropTypes;
