goog.provide("module$react$lib$ReactContext");
goog.require("module$react$lib$warning");
goog.require("module$react$lib$emptyObject");
goog.require("module$react$lib$Object_assign");
var assign$$module$react$lib$ReactContext = module$react$lib$Object_assign;
var emptyObject$$module$react$lib$ReactContext = module$react$lib$emptyObject;
var warning$$module$react$lib$ReactContext = module$react$lib$warning;
var didWarn$$module$react$lib$ReactContext = false;
var ReactContext$$module$react$lib$ReactContext = {current:emptyObject$$module$react$lib$ReactContext, withContext:function(newContext, scopedCallback) {
  if ("production" !== process.env.NODE_ENV) {
    "production" !== process.env.NODE_ENV ? warning$$module$react$lib$ReactContext(didWarn$$module$react$lib$ReactContext, "withContext is deprecated and will be removed in a future version. " + "Use a wrapper component with getChildContext instead.") : null;
    didWarn$$module$react$lib$ReactContext = true;
  }
  var result;
  var previousContext = ReactContext$$module$react$lib$ReactContext.current;
  ReactContext$$module$react$lib$ReactContext.current = assign$$module$react$lib$ReactContext({}, previousContext, newContext);
  try {
    result = scopedCallback();
  } finally {
    ReactContext$$module$react$lib$ReactContext.current = previousContext;
  }
  return result;
}};
module$react$lib$ReactContext = ReactContext$$module$react$lib$ReactContext;
