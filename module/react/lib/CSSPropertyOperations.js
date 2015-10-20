goog.provide("module$react$lib$CSSPropertyOperations");
goog.require("module$react$lib$warning");
goog.require("module$react$lib$memoizeStringOnly");
goog.require("module$react$lib$hyphenateStyleName");
goog.require("module$react$lib$dangerousStyleValue");
goog.require("module$react$lib$camelizeStyleName");
goog.require("module$react$lib$ExecutionEnvironment");
goog.require("module$react$lib$CSSProperty");
var CSSProperty$$module$react$lib$CSSPropertyOperations = module$react$lib$CSSProperty;
var ExecutionEnvironment$$module$react$lib$CSSPropertyOperations = module$react$lib$ExecutionEnvironment;
var camelizeStyleName$$module$react$lib$CSSPropertyOperations = module$react$lib$camelizeStyleName;
var dangerousStyleValue$$module$react$lib$CSSPropertyOperations = module$react$lib$dangerousStyleValue;
var hyphenateStyleName$$module$react$lib$CSSPropertyOperations = module$react$lib$hyphenateStyleName;
var memoizeStringOnly$$module$react$lib$CSSPropertyOperations = module$react$lib$memoizeStringOnly;
var warning$$module$react$lib$CSSPropertyOperations = module$react$lib$warning;
var processStyleName$$module$react$lib$CSSPropertyOperations = memoizeStringOnly$$module$react$lib$CSSPropertyOperations(function(styleName) {
  return hyphenateStyleName$$module$react$lib$CSSPropertyOperations(styleName);
});
var styleFloatAccessor$$module$react$lib$CSSPropertyOperations = "cssFloat";
if (ExecutionEnvironment$$module$react$lib$CSSPropertyOperations.canUseDOM) {
  if (document.documentElement.style.cssFloat === undefined) {
    styleFloatAccessor$$module$react$lib$CSSPropertyOperations = "styleFloat";
  }
}
if ("production" !== process.env.NODE_ENV) {
  var badVendoredStyleNamePattern$$module$react$lib$CSSPropertyOperations = /^(?:webkit|moz|o)[A-Z]/;
  var badStyleValueWithSemicolonPattern$$module$react$lib$CSSPropertyOperations = /;\s*$/;
  var warnedStyleNames$$module$react$lib$CSSPropertyOperations = {};
  var warnedStyleValues$$module$react$lib$CSSPropertyOperations = {};
  var warnHyphenatedStyleName$$module$react$lib$CSSPropertyOperations = function(name) {
    if (warnedStyleNames$$module$react$lib$CSSPropertyOperations.hasOwnProperty(name) && warnedStyleNames$$module$react$lib$CSSPropertyOperations[name]) {
      return;
    }
    warnedStyleNames$$module$react$lib$CSSPropertyOperations[name] = true;
    "production" !== process.env.NODE_ENV ? warning$$module$react$lib$CSSPropertyOperations(false, "Unsupported style property %s. Did you mean %s?", name, camelizeStyleName$$module$react$lib$CSSPropertyOperations(name)) : null;
  };
  var warnBadVendoredStyleName$$module$react$lib$CSSPropertyOperations = function(name) {
    if (warnedStyleNames$$module$react$lib$CSSPropertyOperations.hasOwnProperty(name) && warnedStyleNames$$module$react$lib$CSSPropertyOperations[name]) {
      return;
    }
    warnedStyleNames$$module$react$lib$CSSPropertyOperations[name] = true;
    "production" !== process.env.NODE_ENV ? warning$$module$react$lib$CSSPropertyOperations(false, "Unsupported vendor-prefixed style property %s. Did you mean %s?", name, name.charAt(0).toUpperCase() + name.slice(1)) : null;
  };
  var warnStyleValueWithSemicolon$$module$react$lib$CSSPropertyOperations = function(name, value) {
    if (warnedStyleValues$$module$react$lib$CSSPropertyOperations.hasOwnProperty(value) && warnedStyleValues$$module$react$lib$CSSPropertyOperations[value]) {
      return;
    }
    warnedStyleValues$$module$react$lib$CSSPropertyOperations[value] = true;
    "production" !== process.env.NODE_ENV ? warning$$module$react$lib$CSSPropertyOperations(false, "Style property values shouldn't contain a semicolon. " + 'Try "%s: %s" instead.', name, value.replace(badStyleValueWithSemicolonPattern$$module$react$lib$CSSPropertyOperations, "")) : null;
  };
  var warnValidStyle$$module$react$lib$CSSPropertyOperations = function(name, value) {
    if (name.indexOf("-") > -1) {
      warnHyphenatedStyleName$$module$react$lib$CSSPropertyOperations(name);
    } else {
      if (badVendoredStyleNamePattern$$module$react$lib$CSSPropertyOperations.test(name)) {
        warnBadVendoredStyleName$$module$react$lib$CSSPropertyOperations(name);
      } else {
        if (badStyleValueWithSemicolonPattern$$module$react$lib$CSSPropertyOperations.test(value)) {
          warnStyleValueWithSemicolon$$module$react$lib$CSSPropertyOperations(name, value);
        }
      }
    }
  };
}
var CSSPropertyOperations$$module$react$lib$CSSPropertyOperations = {createMarkupForStyles:function(styles) {
  var serialized = "";
  for (var styleName in styles) {
    if (!styles.hasOwnProperty(styleName)) {
      continue;
    }
    var styleValue = styles[styleName];
    if ("production" !== process.env.NODE_ENV) {
      warnValidStyle$$module$react$lib$CSSPropertyOperations(styleName, styleValue);
    }
    if (styleValue != null) {
      serialized += processStyleName$$module$react$lib$CSSPropertyOperations(styleName) + ":";
      serialized += dangerousStyleValue$$module$react$lib$CSSPropertyOperations(styleName, styleValue) + ";";
    }
  }
  return serialized || null;
}, setValueForStyles:function(node, styles) {
  var style = node.style;
  for (var styleName in styles) {
    if (!styles.hasOwnProperty(styleName)) {
      continue;
    }
    if ("production" !== process.env.NODE_ENV) {
      warnValidStyle$$module$react$lib$CSSPropertyOperations(styleName, styles[styleName]);
    }
    var styleValue = dangerousStyleValue$$module$react$lib$CSSPropertyOperations(styleName, styles[styleName]);
    if (styleName === "float") {
      styleName = styleFloatAccessor$$module$react$lib$CSSPropertyOperations;
    }
    if (styleValue) {
      style[styleName] = styleValue;
    } else {
      var expansion = CSSProperty$$module$react$lib$CSSPropertyOperations.shorthandPropertyExpansions[styleName];
      if (expansion) {
        for (var individualStyleName in expansion) {
          style[individualStyleName] = "";
        }
      } else {
        style[styleName] = "";
      }
    }
  }
}};
module$react$lib$CSSPropertyOperations = CSSPropertyOperations$$module$react$lib$CSSPropertyOperations;
