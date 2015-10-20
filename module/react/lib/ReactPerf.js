goog.provide("module$react$lib$ReactPerf");
var ReactPerf$$module$react$lib$ReactPerf = {enableMeasure:false, storedMeasure:_noMeasure$$module$react$lib$ReactPerf, measureMethods:function(object, objectName, methodNames) {
  if ("production" !== process.env.NODE_ENV) {
    for (var key in methodNames) {
      if (!methodNames.hasOwnProperty(key)) {
        continue;
      }
      object[key] = ReactPerf$$module$react$lib$ReactPerf.measure(objectName, methodNames[key], object[key]);
    }
  }
}, measure:function(objName, fnName, func) {
  if ("production" !== process.env.NODE_ENV) {
    var measuredFunc = null;
    var wrapper = function() {
      if (ReactPerf$$module$react$lib$ReactPerf.enableMeasure) {
        if (!measuredFunc) {
          measuredFunc = ReactPerf$$module$react$lib$ReactPerf.storedMeasure(objName, fnName, func);
        }
        return measuredFunc.apply(this, arguments);
      }
      return func.apply(this, arguments);
    };
    wrapper.displayName = objName + "_" + fnName;
    return wrapper;
  }
  return func;
}, injection:{injectMeasure:function(measure) {
  ReactPerf$$module$react$lib$ReactPerf.storedMeasure = measure;
}}};
function _noMeasure$$module$react$lib$ReactPerf(objName, fnName, func) {
  return func;
}
module$react$lib$ReactPerf = ReactPerf$$module$react$lib$ReactPerf;
