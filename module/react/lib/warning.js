goog.provide("module$react$lib$warning");
goog.require("module$react$lib$emptyFunction");
var emptyFunction$$module$react$lib$warning = module$react$lib$emptyFunction;
var warning$$module$react$lib$warning = emptyFunction$$module$react$lib$warning;
if ("production" !== process.env.NODE_ENV) {
  warning$$module$react$lib$warning = function(condition, format) {
    for (var args = [], $__0 = 2, $__1 = arguments.length;$__0 < $__1;$__0++) {
      args.push(arguments[$__0]);
    }
    if (format === undefined) {
      throw new Error("`warning(condition, format, ...args)` requires a warning " + "message argument");
    }
    if (format.length < 10 || /^[s\W]*$/.test(format)) {
      throw new Error("The warning format should be able to uniquely identify this " + "warning. Please, use a more descriptive format than: " + format);
    }
    if (format.indexOf("Failed Composite propType: ") === 0) {
      return;
    }
    if (!condition) {
      var argIndex = 0;
      var message = "Warning: " + format.replace(/%s/g, function() {
        return args[argIndex++];
      });
      console.warn(message);
      try {
        throw new Error(message);
      } catch (x) {
      }
    }
  };
}
module$react$lib$warning = warning$$module$react$lib$warning;
