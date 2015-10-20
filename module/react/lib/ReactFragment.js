goog.provide("module$react$lib$ReactFragment");
goog.require("module$react$lib$warning");
goog.require("module$react$lib$ReactElement");
var ReactElement$$module$react$lib$ReactFragment = module$react$lib$ReactElement;
var warning$$module$react$lib$ReactFragment = module$react$lib$warning;
if ("production" !== process.env.NODE_ENV) {
  var fragmentKey$$module$react$lib$ReactFragment = "_reactFragment";
  var didWarnKey$$module$react$lib$ReactFragment = "_reactDidWarn";
  var canWarnForReactFragment$$module$react$lib$ReactFragment = false;
  try {
    var dummy$$module$react$lib$ReactFragment = function() {
      return 1;
    };
    Object.defineProperty({}, fragmentKey$$module$react$lib$ReactFragment, {enumerable:false, value:true});
    Object.defineProperty({}, "key", {enumerable:true, get:dummy$$module$react$lib$ReactFragment});
    canWarnForReactFragment$$module$react$lib$ReactFragment = true;
  } catch (x) {
  }
  var proxyPropertyAccessWithWarning$$module$react$lib$ReactFragment = function(obj, key) {
    Object.defineProperty(obj, key, {enumerable:true, get:function() {
      "production" !== process.env.NODE_ENV ? warning$$module$react$lib$ReactFragment(this[didWarnKey$$module$react$lib$ReactFragment], "A ReactFragment is an opaque type. Accessing any of its " + "properties is deprecated. Pass it to one of the React.Children " + "helpers.") : null;
      this[didWarnKey$$module$react$lib$ReactFragment] = true;
      return this[fragmentKey$$module$react$lib$ReactFragment][key];
    }, set:function(value) {
      "production" !== process.env.NODE_ENV ? warning$$module$react$lib$ReactFragment(this[didWarnKey$$module$react$lib$ReactFragment], "A ReactFragment is an immutable opaque type. Mutating its " + "properties is deprecated.") : null;
      this[didWarnKey$$module$react$lib$ReactFragment] = true;
      this[fragmentKey$$module$react$lib$ReactFragment][key] = value;
    }});
  };
  var issuedWarnings$$module$react$lib$ReactFragment = {};
  var didWarnForFragment$$module$react$lib$ReactFragment = function(fragment) {
    var fragmentCacheKey = "";
    for (var key in fragment) {
      fragmentCacheKey += key + ":" + typeof fragment[key] + ",";
    }
    var alreadyWarnedOnce = !!issuedWarnings$$module$react$lib$ReactFragment[fragmentCacheKey];
    issuedWarnings$$module$react$lib$ReactFragment[fragmentCacheKey] = true;
    return alreadyWarnedOnce;
  };
}
var ReactFragment$$module$react$lib$ReactFragment = {create:function(object) {
  if ("production" !== process.env.NODE_ENV) {
    if (typeof object !== "object" || !object || Array.isArray(object)) {
      "production" !== process.env.NODE_ENV ? warning$$module$react$lib$ReactFragment(false, "React.addons.createFragment only accepts a single object.", object) : null;
      return object;
    }
    if (ReactElement$$module$react$lib$ReactFragment.isValidElement(object)) {
      "production" !== process.env.NODE_ENV ? warning$$module$react$lib$ReactFragment(false, "React.addons.createFragment does not accept a ReactElement " + "without a wrapper object.") : null;
      return object;
    }
    if (canWarnForReactFragment$$module$react$lib$ReactFragment) {
      var proxy = {};
      Object.defineProperty(proxy, fragmentKey$$module$react$lib$ReactFragment, {enumerable:false, value:object});
      Object.defineProperty(proxy, didWarnKey$$module$react$lib$ReactFragment, {writable:true, enumerable:false, value:false});
      for (var key in object) {
        proxyPropertyAccessWithWarning$$module$react$lib$ReactFragment(proxy, key);
      }
      Object.preventExtensions(proxy);
      return proxy;
    }
  }
  return object;
}, extract:function(fragment) {
  if ("production" !== process.env.NODE_ENV) {
    if (canWarnForReactFragment$$module$react$lib$ReactFragment) {
      if (!fragment[fragmentKey$$module$react$lib$ReactFragment]) {
        "production" !== process.env.NODE_ENV ? warning$$module$react$lib$ReactFragment(didWarnForFragment$$module$react$lib$ReactFragment(fragment), "Any use of a keyed object should be wrapped in " + "React.addons.createFragment(object) before being passed as a " + "child.") : null;
        return fragment;
      }
      return fragment[fragmentKey$$module$react$lib$ReactFragment];
    }
  }
  return fragment;
}, extractIfFragment:function(fragment) {
  if ("production" !== process.env.NODE_ENV) {
    if (canWarnForReactFragment$$module$react$lib$ReactFragment) {
      if (fragment[fragmentKey$$module$react$lib$ReactFragment]) {
        return fragment[fragmentKey$$module$react$lib$ReactFragment];
      }
      for (var key in fragment) {
        if (fragment.hasOwnProperty(key) && ReactElement$$module$react$lib$ReactFragment.isValidElement(fragment[key])) {
          return ReactFragment$$module$react$lib$ReactFragment.extract(fragment);
        }
      }
    }
  }
  return fragment;
}};
module$react$lib$ReactFragment = ReactFragment$$module$react$lib$ReactFragment;
