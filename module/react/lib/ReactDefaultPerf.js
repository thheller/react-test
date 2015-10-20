goog.provide("module$react$lib$ReactDefaultPerf");
goog.require("module$react$lib$performanceNow");
goog.require("module$react$lib$ReactPerf");
goog.require("module$react$lib$ReactMount");
goog.require("module$react$lib$ReactDefaultPerfAnalysis");
goog.require("module$react$lib$DOMProperty");
var DOMProperty$$module$react$lib$ReactDefaultPerf = module$react$lib$DOMProperty;
var ReactDefaultPerfAnalysis$$module$react$lib$ReactDefaultPerf = module$react$lib$ReactDefaultPerfAnalysis;
var ReactMount$$module$react$lib$ReactDefaultPerf = module$react$lib$ReactMount;
var ReactPerf$$module$react$lib$ReactDefaultPerf = module$react$lib$ReactPerf;
var performanceNow$$module$react$lib$ReactDefaultPerf = module$react$lib$performanceNow;
function roundFloat$$module$react$lib$ReactDefaultPerf(val) {
  return Math.floor(val * 100) / 100;
}
function addValue$$module$react$lib$ReactDefaultPerf(obj, key, val) {
  obj[key] = (obj[key] || 0) + val;
}
var ReactDefaultPerf$$module$react$lib$ReactDefaultPerf = {_allMeasurements:[], _mountStack:[0], _injected:false, start:function() {
  if (!ReactDefaultPerf$$module$react$lib$ReactDefaultPerf._injected) {
    ReactPerf$$module$react$lib$ReactDefaultPerf.injection.injectMeasure(ReactDefaultPerf$$module$react$lib$ReactDefaultPerf.measure);
  }
  ReactDefaultPerf$$module$react$lib$ReactDefaultPerf._allMeasurements.length = 0;
  ReactPerf$$module$react$lib$ReactDefaultPerf.enableMeasure = true;
}, stop:function() {
  ReactPerf$$module$react$lib$ReactDefaultPerf.enableMeasure = false;
}, getLastMeasurements:function() {
  return ReactDefaultPerf$$module$react$lib$ReactDefaultPerf._allMeasurements;
}, printExclusive:function(measurements) {
  measurements = measurements || ReactDefaultPerf$$module$react$lib$ReactDefaultPerf._allMeasurements;
  var summary = ReactDefaultPerfAnalysis$$module$react$lib$ReactDefaultPerf.getExclusiveSummary(measurements);
  console.table(summary.map(function(item) {
    return {"Component class name":item.componentName, "Total inclusive time (ms)":roundFloat$$module$react$lib$ReactDefaultPerf(item.inclusive), "Exclusive mount time (ms)":roundFloat$$module$react$lib$ReactDefaultPerf(item.exclusive), "Exclusive render time (ms)":roundFloat$$module$react$lib$ReactDefaultPerf(item.render), "Mount time per instance (ms)":roundFloat$$module$react$lib$ReactDefaultPerf(item.exclusive / item.count), "Render time per instance (ms)":roundFloat$$module$react$lib$ReactDefaultPerf(item.render / 
    item.count), "Instances":item.count};
  }));
}, printInclusive:function(measurements) {
  measurements = measurements || ReactDefaultPerf$$module$react$lib$ReactDefaultPerf._allMeasurements;
  var summary = ReactDefaultPerfAnalysis$$module$react$lib$ReactDefaultPerf.getInclusiveSummary(measurements);
  console.table(summary.map(function(item) {
    return {"Owner \x3e component":item.componentName, "Inclusive time (ms)":roundFloat$$module$react$lib$ReactDefaultPerf(item.time), "Instances":item.count};
  }));
  console.log("Total time:", ReactDefaultPerfAnalysis$$module$react$lib$ReactDefaultPerf.getTotalTime(measurements).toFixed(2) + " ms");
}, getMeasurementsSummaryMap:function(measurements) {
  var summary = ReactDefaultPerfAnalysis$$module$react$lib$ReactDefaultPerf.getInclusiveSummary(measurements, true);
  return summary.map(function(item) {
    return {"Owner \x3e component":item.componentName, "Wasted time (ms)":item.time, "Instances":item.count};
  });
}, printWasted:function(measurements) {
  measurements = measurements || ReactDefaultPerf$$module$react$lib$ReactDefaultPerf._allMeasurements;
  console.table(ReactDefaultPerf$$module$react$lib$ReactDefaultPerf.getMeasurementsSummaryMap(measurements));
  console.log("Total time:", ReactDefaultPerfAnalysis$$module$react$lib$ReactDefaultPerf.getTotalTime(measurements).toFixed(2) + " ms");
}, printDOM:function(measurements) {
  measurements = measurements || ReactDefaultPerf$$module$react$lib$ReactDefaultPerf._allMeasurements;
  var summary = ReactDefaultPerfAnalysis$$module$react$lib$ReactDefaultPerf.getDOMSummary(measurements);
  console.table(summary.map(function(item) {
    var result = {};
    result[DOMProperty$$module$react$lib$ReactDefaultPerf.ID_ATTRIBUTE_NAME] = item.id;
    result["type"] = item.type;
    result["args"] = JSON.stringify(item.args);
    return result;
  }));
  console.log("Total time:", ReactDefaultPerfAnalysis$$module$react$lib$ReactDefaultPerf.getTotalTime(measurements).toFixed(2) + " ms");
}, _recordWrite:function(id, fnName, totalTime, args) {
  var writes = ReactDefaultPerf$$module$react$lib$ReactDefaultPerf._allMeasurements[ReactDefaultPerf$$module$react$lib$ReactDefaultPerf._allMeasurements.length - 1].writes;
  writes[id] = writes[id] || [];
  writes[id].push({type:fnName, time:totalTime, args:args});
}, measure:function(moduleName, fnName, func) {
  return function() {
    for (var args = [], $__0 = 0, $__1 = arguments.length;$__0 < $__1;$__0++) {
      args.push(arguments[$__0]);
    }
    var totalTime;
    var rv;
    var start;
    if (fnName === "_renderNewRootComponent" || fnName === "flushBatchedUpdates") {
      ReactDefaultPerf$$module$react$lib$ReactDefaultPerf._allMeasurements.push({exclusive:{}, inclusive:{}, render:{}, counts:{}, writes:{}, displayNames:{}, totalTime:0});
      start = performanceNow$$module$react$lib$ReactDefaultPerf();
      rv = func.apply(this, args);
      ReactDefaultPerf$$module$react$lib$ReactDefaultPerf._allMeasurements[ReactDefaultPerf$$module$react$lib$ReactDefaultPerf._allMeasurements.length - 1].totalTime = performanceNow$$module$react$lib$ReactDefaultPerf() - start;
      return rv;
    } else {
      if (fnName === "_mountImageIntoNode" || moduleName === "ReactDOMIDOperations") {
        start = performanceNow$$module$react$lib$ReactDefaultPerf();
        rv = func.apply(this, args);
        totalTime = performanceNow$$module$react$lib$ReactDefaultPerf() - start;
        if (fnName === "_mountImageIntoNode") {
          var mountID = ReactMount$$module$react$lib$ReactDefaultPerf.getID(args[1]);
          ReactDefaultPerf$$module$react$lib$ReactDefaultPerf._recordWrite(mountID, fnName, totalTime, args[0]);
        } else {
          if (fnName === "dangerouslyProcessChildrenUpdates") {
            args[0].forEach(function(update) {
              var writeArgs = {};
              if (update.fromIndex !== null) {
                writeArgs.fromIndex = update.fromIndex;
              }
              if (update.toIndex !== null) {
                writeArgs.toIndex = update.toIndex;
              }
              if (update.textContent !== null) {
                writeArgs.textContent = update.textContent;
              }
              if (update.markupIndex !== null) {
                writeArgs.markup = args[1][update.markupIndex];
              }
              ReactDefaultPerf$$module$react$lib$ReactDefaultPerf._recordWrite(update.parentID, update.type, totalTime, writeArgs);
            });
          } else {
            ReactDefaultPerf$$module$react$lib$ReactDefaultPerf._recordWrite(args[0], fnName, totalTime, Array.prototype.slice.call(args, 1));
          }
        }
        return rv;
      } else {
        if (moduleName === "ReactCompositeComponent" && (fnName === "mountComponent" || fnName === "updateComponent" || fnName === "_renderValidatedComponent")) {
          if (typeof this._currentElement.type === "string") {
            return func.apply(this, args);
          }
          var rootNodeID = fnName === "mountComponent" ? args[0] : this._rootNodeID;
          var isRender = fnName === "_renderValidatedComponent";
          var isMount = fnName === "mountComponent";
          var mountStack = ReactDefaultPerf$$module$react$lib$ReactDefaultPerf._mountStack;
          var entry = ReactDefaultPerf$$module$react$lib$ReactDefaultPerf._allMeasurements[ReactDefaultPerf$$module$react$lib$ReactDefaultPerf._allMeasurements.length - 1];
          if (isRender) {
            addValue$$module$react$lib$ReactDefaultPerf(entry.counts, rootNodeID, 1);
          } else {
            if (isMount) {
              mountStack.push(0);
            }
          }
          start = performanceNow$$module$react$lib$ReactDefaultPerf();
          rv = func.apply(this, args);
          totalTime = performanceNow$$module$react$lib$ReactDefaultPerf() - start;
          if (isRender) {
            addValue$$module$react$lib$ReactDefaultPerf(entry.render, rootNodeID, totalTime);
          } else {
            if (isMount) {
              var subMountTime = mountStack.pop();
              mountStack[mountStack.length - 1] += totalTime;
              addValue$$module$react$lib$ReactDefaultPerf(entry.exclusive, rootNodeID, totalTime - subMountTime);
              addValue$$module$react$lib$ReactDefaultPerf(entry.inclusive, rootNodeID, totalTime);
            } else {
              addValue$$module$react$lib$ReactDefaultPerf(entry.inclusive, rootNodeID, totalTime);
            }
          }
          entry.displayNames[rootNodeID] = {current:this.getName(), owner:this._currentElement._owner ? this._currentElement._owner.getName() : "\x3croot\x3e"};
          return rv;
        } else {
          return func.apply(this, args);
        }
      }
    }
  };
}};
module$react$lib$ReactDefaultPerf = ReactDefaultPerf$$module$react$lib$ReactDefaultPerf;
