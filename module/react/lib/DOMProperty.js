goog.provide("module$react$lib$DOMProperty");
goog.require("module$react$lib$invariant");
var invariant$$module$react$lib$DOMProperty = module$react$lib$invariant;
function checkMask$$module$react$lib$DOMProperty(value, bitmask) {
  return (value & bitmask) === bitmask;
}
var DOMPropertyInjection$$module$react$lib$DOMProperty = {MUST_USE_ATTRIBUTE:1, MUST_USE_PROPERTY:2, HAS_SIDE_EFFECTS:4, HAS_BOOLEAN_VALUE:8, HAS_NUMERIC_VALUE:16, HAS_POSITIVE_NUMERIC_VALUE:32 | 16, HAS_OVERLOADED_BOOLEAN_VALUE:64, injectDOMPropertyConfig:function(domPropertyConfig) {
  var Properties = domPropertyConfig.Properties || {};
  var DOMAttributeNames = domPropertyConfig.DOMAttributeNames || {};
  var DOMPropertyNames = domPropertyConfig.DOMPropertyNames || {};
  var DOMMutationMethods = domPropertyConfig.DOMMutationMethods || {};
  if (domPropertyConfig.isCustomAttribute) {
    DOMProperty$$module$react$lib$DOMProperty._isCustomAttributeFunctions.push(domPropertyConfig.isCustomAttribute);
  }
  for (var propName in Properties) {
    "production" !== process.env.NODE_ENV ? invariant$$module$react$lib$DOMProperty(!DOMProperty$$module$react$lib$DOMProperty.isStandardName.hasOwnProperty(propName), "injectDOMPropertyConfig(...): You're trying to inject DOM property " + "'%s' which has already been injected. You may be accidentally " + "injecting the same DOM property config twice, or you may be " + "injecting two configs that have conflicting property names.", propName) : invariant$$module$react$lib$DOMProperty(!DOMProperty$$module$react$lib$DOMProperty.isStandardName.hasOwnProperty(propName));
    DOMProperty$$module$react$lib$DOMProperty.isStandardName[propName] = true;
    var lowerCased = propName.toLowerCase();
    DOMProperty$$module$react$lib$DOMProperty.getPossibleStandardName[lowerCased] = propName;
    if (DOMAttributeNames.hasOwnProperty(propName)) {
      var attributeName = DOMAttributeNames[propName];
      DOMProperty$$module$react$lib$DOMProperty.getPossibleStandardName[attributeName] = propName;
      DOMProperty$$module$react$lib$DOMProperty.getAttributeName[propName] = attributeName;
    } else {
      DOMProperty$$module$react$lib$DOMProperty.getAttributeName[propName] = lowerCased;
    }
    DOMProperty$$module$react$lib$DOMProperty.getPropertyName[propName] = DOMPropertyNames.hasOwnProperty(propName) ? DOMPropertyNames[propName] : propName;
    if (DOMMutationMethods.hasOwnProperty(propName)) {
      DOMProperty$$module$react$lib$DOMProperty.getMutationMethod[propName] = DOMMutationMethods[propName];
    } else {
      DOMProperty$$module$react$lib$DOMProperty.getMutationMethod[propName] = null;
    }
    var propConfig = Properties[propName];
    DOMProperty$$module$react$lib$DOMProperty.mustUseAttribute[propName] = checkMask$$module$react$lib$DOMProperty(propConfig, DOMPropertyInjection$$module$react$lib$DOMProperty.MUST_USE_ATTRIBUTE);
    DOMProperty$$module$react$lib$DOMProperty.mustUseProperty[propName] = checkMask$$module$react$lib$DOMProperty(propConfig, DOMPropertyInjection$$module$react$lib$DOMProperty.MUST_USE_PROPERTY);
    DOMProperty$$module$react$lib$DOMProperty.hasSideEffects[propName] = checkMask$$module$react$lib$DOMProperty(propConfig, DOMPropertyInjection$$module$react$lib$DOMProperty.HAS_SIDE_EFFECTS);
    DOMProperty$$module$react$lib$DOMProperty.hasBooleanValue[propName] = checkMask$$module$react$lib$DOMProperty(propConfig, DOMPropertyInjection$$module$react$lib$DOMProperty.HAS_BOOLEAN_VALUE);
    DOMProperty$$module$react$lib$DOMProperty.hasNumericValue[propName] = checkMask$$module$react$lib$DOMProperty(propConfig, DOMPropertyInjection$$module$react$lib$DOMProperty.HAS_NUMERIC_VALUE);
    DOMProperty$$module$react$lib$DOMProperty.hasPositiveNumericValue[propName] = checkMask$$module$react$lib$DOMProperty(propConfig, DOMPropertyInjection$$module$react$lib$DOMProperty.HAS_POSITIVE_NUMERIC_VALUE);
    DOMProperty$$module$react$lib$DOMProperty.hasOverloadedBooleanValue[propName] = checkMask$$module$react$lib$DOMProperty(propConfig, DOMPropertyInjection$$module$react$lib$DOMProperty.HAS_OVERLOADED_BOOLEAN_VALUE);
    "production" !== process.env.NODE_ENV ? invariant$$module$react$lib$DOMProperty(!DOMProperty$$module$react$lib$DOMProperty.mustUseAttribute[propName] || !DOMProperty$$module$react$lib$DOMProperty.mustUseProperty[propName], "DOMProperty: Cannot require using both attribute and property: %s", propName) : invariant$$module$react$lib$DOMProperty(!DOMProperty$$module$react$lib$DOMProperty.mustUseAttribute[propName] || !DOMProperty$$module$react$lib$DOMProperty.mustUseProperty[propName]);
    "production" !== process.env.NODE_ENV ? invariant$$module$react$lib$DOMProperty(DOMProperty$$module$react$lib$DOMProperty.mustUseProperty[propName] || !DOMProperty$$module$react$lib$DOMProperty.hasSideEffects[propName], "DOMProperty: Properties that have side effects must use property: %s", propName) : invariant$$module$react$lib$DOMProperty(DOMProperty$$module$react$lib$DOMProperty.mustUseProperty[propName] || !DOMProperty$$module$react$lib$DOMProperty.hasSideEffects[propName]);
    "production" !== process.env.NODE_ENV ? invariant$$module$react$lib$DOMProperty(!!DOMProperty$$module$react$lib$DOMProperty.hasBooleanValue[propName] + !!DOMProperty$$module$react$lib$DOMProperty.hasNumericValue[propName] + !!DOMProperty$$module$react$lib$DOMProperty.hasOverloadedBooleanValue[propName] <= 1, "DOMProperty: Value can be one of boolean, overloaded boolean, or " + "numeric value, but not a combination: %s", propName) : invariant$$module$react$lib$DOMProperty(!!DOMProperty$$module$react$lib$DOMProperty.hasBooleanValue[propName] + 
    !!DOMProperty$$module$react$lib$DOMProperty.hasNumericValue[propName] + !!DOMProperty$$module$react$lib$DOMProperty.hasOverloadedBooleanValue[propName] <= 1);
  }
}};
var defaultValueCache$$module$react$lib$DOMProperty = {};
var DOMProperty$$module$react$lib$DOMProperty = {ID_ATTRIBUTE_NAME:"data-reactid", isStandardName:{}, getPossibleStandardName:{}, getAttributeName:{}, getPropertyName:{}, getMutationMethod:{}, mustUseAttribute:{}, mustUseProperty:{}, hasSideEffects:{}, hasBooleanValue:{}, hasNumericValue:{}, hasPositiveNumericValue:{}, hasOverloadedBooleanValue:{}, _isCustomAttributeFunctions:[], isCustomAttribute:function(attributeName) {
  for (var i = 0;i < DOMProperty$$module$react$lib$DOMProperty._isCustomAttributeFunctions.length;i++) {
    var isCustomAttributeFn = DOMProperty$$module$react$lib$DOMProperty._isCustomAttributeFunctions[i];
    if (isCustomAttributeFn(attributeName)) {
      return true;
    }
  }
  return false;
}, getDefaultValueForProperty:function(nodeName, prop) {
  var nodeDefaults = defaultValueCache$$module$react$lib$DOMProperty[nodeName];
  var testElement;
  if (!nodeDefaults) {
    defaultValueCache$$module$react$lib$DOMProperty[nodeName] = nodeDefaults = {};
  }
  if (!(prop in nodeDefaults)) {
    testElement = document.createElement(nodeName);
    nodeDefaults[prop] = testElement[prop];
  }
  return nodeDefaults[prop];
}, injection:DOMPropertyInjection$$module$react$lib$DOMProperty};
module$react$lib$DOMProperty = DOMProperty$$module$react$lib$DOMProperty;
