goog.provide("module$react$lib$DOMPropertyOperations");
goog.require("module$react$lib$warning");
goog.require("module$react$lib$quoteAttributeValueForBrowser");
goog.require("module$react$lib$DOMProperty");
var DOMProperty$$module$react$lib$DOMPropertyOperations = module$react$lib$DOMProperty;
var quoteAttributeValueForBrowser$$module$react$lib$DOMPropertyOperations = module$react$lib$quoteAttributeValueForBrowser;
var warning$$module$react$lib$DOMPropertyOperations = module$react$lib$warning;
function shouldIgnoreValue$$module$react$lib$DOMPropertyOperations(name, value) {
  return value == null || DOMProperty$$module$react$lib$DOMPropertyOperations.hasBooleanValue[name] && !value || DOMProperty$$module$react$lib$DOMPropertyOperations.hasNumericValue[name] && isNaN(value) || DOMProperty$$module$react$lib$DOMPropertyOperations.hasPositiveNumericValue[name] && value < 1 || DOMProperty$$module$react$lib$DOMPropertyOperations.hasOverloadedBooleanValue[name] && value === false;
}
if ("production" !== process.env.NODE_ENV) {
  var reactProps$$module$react$lib$DOMPropertyOperations = {children:true, dangerouslySetInnerHTML:true, key:true, ref:true};
  var warnedProperties$$module$react$lib$DOMPropertyOperations = {};
  var warnUnknownProperty$$module$react$lib$DOMPropertyOperations = function(name) {
    if (reactProps$$module$react$lib$DOMPropertyOperations.hasOwnProperty(name) && reactProps$$module$react$lib$DOMPropertyOperations[name] || warnedProperties$$module$react$lib$DOMPropertyOperations.hasOwnProperty(name) && warnedProperties$$module$react$lib$DOMPropertyOperations[name]) {
      return;
    }
    warnedProperties$$module$react$lib$DOMPropertyOperations[name] = true;
    var lowerCasedName = name.toLowerCase();
    var standardName = DOMProperty$$module$react$lib$DOMPropertyOperations.isCustomAttribute(lowerCasedName) ? lowerCasedName : DOMProperty$$module$react$lib$DOMPropertyOperations.getPossibleStandardName.hasOwnProperty(lowerCasedName) ? DOMProperty$$module$react$lib$DOMPropertyOperations.getPossibleStandardName[lowerCasedName] : null;
    "production" !== process.env.NODE_ENV ? warning$$module$react$lib$DOMPropertyOperations(standardName == null, "Unknown DOM property %s. Did you mean %s?", name, standardName) : null;
  };
}
var DOMPropertyOperations$$module$react$lib$DOMPropertyOperations = {createMarkupForID:function(id) {
  return DOMProperty$$module$react$lib$DOMPropertyOperations.ID_ATTRIBUTE_NAME + "\x3d" + quoteAttributeValueForBrowser$$module$react$lib$DOMPropertyOperations(id);
}, createMarkupForProperty:function(name, value) {
  if (DOMProperty$$module$react$lib$DOMPropertyOperations.isStandardName.hasOwnProperty(name) && DOMProperty$$module$react$lib$DOMPropertyOperations.isStandardName[name]) {
    if (shouldIgnoreValue$$module$react$lib$DOMPropertyOperations(name, value)) {
      return "";
    }
    var attributeName = DOMProperty$$module$react$lib$DOMPropertyOperations.getAttributeName[name];
    if (DOMProperty$$module$react$lib$DOMPropertyOperations.hasBooleanValue[name] || DOMProperty$$module$react$lib$DOMPropertyOperations.hasOverloadedBooleanValue[name] && value === true) {
      return attributeName;
    }
    return attributeName + "\x3d" + quoteAttributeValueForBrowser$$module$react$lib$DOMPropertyOperations(value);
  } else {
    if (DOMProperty$$module$react$lib$DOMPropertyOperations.isCustomAttribute(name)) {
      if (value == null) {
        return "";
      }
      return name + "\x3d" + quoteAttributeValueForBrowser$$module$react$lib$DOMPropertyOperations(value);
    } else {
      if ("production" !== process.env.NODE_ENV) {
        warnUnknownProperty$$module$react$lib$DOMPropertyOperations(name);
      }
    }
  }
  return null;
}, setValueForProperty:function(node, name, value) {
  if (DOMProperty$$module$react$lib$DOMPropertyOperations.isStandardName.hasOwnProperty(name) && DOMProperty$$module$react$lib$DOMPropertyOperations.isStandardName[name]) {
    var mutationMethod = DOMProperty$$module$react$lib$DOMPropertyOperations.getMutationMethod[name];
    if (mutationMethod) {
      mutationMethod(node, value);
    } else {
      if (shouldIgnoreValue$$module$react$lib$DOMPropertyOperations(name, value)) {
        this.deleteValueForProperty(node, name);
      } else {
        if (DOMProperty$$module$react$lib$DOMPropertyOperations.mustUseAttribute[name]) {
          node.setAttribute(DOMProperty$$module$react$lib$DOMPropertyOperations.getAttributeName[name], "" + value);
        } else {
          var propName = DOMProperty$$module$react$lib$DOMPropertyOperations.getPropertyName[name];
          if (!DOMProperty$$module$react$lib$DOMPropertyOperations.hasSideEffects[name] || "" + node[propName] !== "" + value) {
            node[propName] = value;
          }
        }
      }
    }
  } else {
    if (DOMProperty$$module$react$lib$DOMPropertyOperations.isCustomAttribute(name)) {
      if (value == null) {
        node.removeAttribute(name);
      } else {
        node.setAttribute(name, "" + value);
      }
    } else {
      if ("production" !== process.env.NODE_ENV) {
        warnUnknownProperty$$module$react$lib$DOMPropertyOperations(name);
      }
    }
  }
}, deleteValueForProperty:function(node, name) {
  if (DOMProperty$$module$react$lib$DOMPropertyOperations.isStandardName.hasOwnProperty(name) && DOMProperty$$module$react$lib$DOMPropertyOperations.isStandardName[name]) {
    var mutationMethod = DOMProperty$$module$react$lib$DOMPropertyOperations.getMutationMethod[name];
    if (mutationMethod) {
      mutationMethod(node, undefined);
    } else {
      if (DOMProperty$$module$react$lib$DOMPropertyOperations.mustUseAttribute[name]) {
        node.removeAttribute(DOMProperty$$module$react$lib$DOMPropertyOperations.getAttributeName[name]);
      } else {
        var propName = DOMProperty$$module$react$lib$DOMPropertyOperations.getPropertyName[name];
        var defaultValue = DOMProperty$$module$react$lib$DOMPropertyOperations.getDefaultValueForProperty(node.nodeName, propName);
        if (!DOMProperty$$module$react$lib$DOMPropertyOperations.hasSideEffects[name] || "" + node[propName] !== defaultValue) {
          node[propName] = defaultValue;
        }
      }
    }
  } else {
    if (DOMProperty$$module$react$lib$DOMPropertyOperations.isCustomAttribute(name)) {
      node.removeAttribute(name);
    } else {
      if ("production" !== process.env.NODE_ENV) {
        warnUnknownProperty$$module$react$lib$DOMPropertyOperations(name);
      }
    }
  }
}};
module$react$lib$DOMPropertyOperations = DOMPropertyOperations$$module$react$lib$DOMPropertyOperations;
