goog.provide("module$react$lib$ReactChildren");
goog.require("module$react$lib$warning");
goog.require("module$react$lib$traverseAllChildren");
goog.require("module$react$lib$ReactFragment");
goog.require("module$react$lib$PooledClass");
var PooledClass$$module$react$lib$ReactChildren = module$react$lib$PooledClass;
var ReactFragment$$module$react$lib$ReactChildren = module$react$lib$ReactFragment;
var traverseAllChildren$$module$react$lib$ReactChildren = module$react$lib$traverseAllChildren;
var warning$$module$react$lib$ReactChildren = module$react$lib$warning;
var twoArgumentPooler$$module$react$lib$ReactChildren = PooledClass$$module$react$lib$ReactChildren.twoArgumentPooler;
var threeArgumentPooler$$module$react$lib$ReactChildren = PooledClass$$module$react$lib$ReactChildren.threeArgumentPooler;
function ForEachBookKeeping$$module$react$lib$ReactChildren(forEachFunction, forEachContext) {
  this.forEachFunction = forEachFunction;
  this.forEachContext = forEachContext;
}
PooledClass$$module$react$lib$ReactChildren.addPoolingTo(ForEachBookKeeping$$module$react$lib$ReactChildren, twoArgumentPooler$$module$react$lib$ReactChildren);
function forEachSingleChild$$module$react$lib$ReactChildren(traverseContext, child, name, i) {
  var forEachBookKeeping = traverseContext;
  forEachBookKeeping.forEachFunction.call(forEachBookKeeping.forEachContext, child, i);
}
function forEachChildren$$module$react$lib$ReactChildren(children, forEachFunc, forEachContext) {
  if (children == null) {
    return children;
  }
  var traverseContext = ForEachBookKeeping$$module$react$lib$ReactChildren.getPooled(forEachFunc, forEachContext);
  traverseAllChildren$$module$react$lib$ReactChildren(children, forEachSingleChild$$module$react$lib$ReactChildren, traverseContext);
  ForEachBookKeeping$$module$react$lib$ReactChildren.release(traverseContext);
}
function MapBookKeeping$$module$react$lib$ReactChildren(mapResult, mapFunction, mapContext) {
  this.mapResult = mapResult;
  this.mapFunction = mapFunction;
  this.mapContext = mapContext;
}
PooledClass$$module$react$lib$ReactChildren.addPoolingTo(MapBookKeeping$$module$react$lib$ReactChildren, threeArgumentPooler$$module$react$lib$ReactChildren);
function mapSingleChildIntoContext$$module$react$lib$ReactChildren(traverseContext, child, name, i) {
  var mapBookKeeping = traverseContext;
  var mapResult = mapBookKeeping.mapResult;
  var keyUnique = !mapResult.hasOwnProperty(name);
  if ("production" !== process.env.NODE_ENV) {
    "production" !== process.env.NODE_ENV ? warning$$module$react$lib$ReactChildren(keyUnique, "ReactChildren.map(...): Encountered two children with the same key, " + "`%s`. Child keys must be unique; when two children share a key, only " + "the first child will be used.", name) : null;
  }
  if (keyUnique) {
    var mappedChild = mapBookKeeping.mapFunction.call(mapBookKeeping.mapContext, child, i);
    mapResult[name] = mappedChild;
  }
}
function mapChildren$$module$react$lib$ReactChildren(children, func, context) {
  if (children == null) {
    return children;
  }
  var mapResult = {};
  var traverseContext = MapBookKeeping$$module$react$lib$ReactChildren.getPooled(mapResult, func, context);
  traverseAllChildren$$module$react$lib$ReactChildren(children, mapSingleChildIntoContext$$module$react$lib$ReactChildren, traverseContext);
  MapBookKeeping$$module$react$lib$ReactChildren.release(traverseContext);
  return ReactFragment$$module$react$lib$ReactChildren.create(mapResult);
}
function forEachSingleChildDummy$$module$react$lib$ReactChildren(traverseContext, child, name, i) {
  return null;
}
function countChildren$$module$react$lib$ReactChildren(children, context) {
  return traverseAllChildren$$module$react$lib$ReactChildren(children, forEachSingleChildDummy$$module$react$lib$ReactChildren, null);
}
var ReactChildren$$module$react$lib$ReactChildren = {forEach:forEachChildren$$module$react$lib$ReactChildren, map:mapChildren$$module$react$lib$ReactChildren, count:countChildren$$module$react$lib$ReactChildren};
module$react$lib$ReactChildren = ReactChildren$$module$react$lib$ReactChildren;
