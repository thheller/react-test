goog.provide("module$react$lib$PooledClass");
goog.require("module$react$lib$invariant");
var invariant$$module$react$lib$PooledClass = module$react$lib$invariant;
var oneArgumentPooler$$module$react$lib$PooledClass = function(copyFieldsFrom) {
  var Klass = this;
  if (Klass.instancePool.length) {
    var instance = Klass.instancePool.pop();
    Klass.call(instance, copyFieldsFrom);
    return instance;
  } else {
    return new Klass(copyFieldsFrom);
  }
};
var twoArgumentPooler$$module$react$lib$PooledClass = function(a1, a2) {
  var Klass = this;
  if (Klass.instancePool.length) {
    var instance = Klass.instancePool.pop();
    Klass.call(instance, a1, a2);
    return instance;
  } else {
    return new Klass(a1, a2);
  }
};
var threeArgumentPooler$$module$react$lib$PooledClass = function(a1, a2, a3) {
  var Klass = this;
  if (Klass.instancePool.length) {
    var instance = Klass.instancePool.pop();
    Klass.call(instance, a1, a2, a3);
    return instance;
  } else {
    return new Klass(a1, a2, a3);
  }
};
var fiveArgumentPooler$$module$react$lib$PooledClass = function(a1, a2, a3, a4, a5) {
  var Klass = this;
  if (Klass.instancePool.length) {
    var instance = Klass.instancePool.pop();
    Klass.call(instance, a1, a2, a3, a4, a5);
    return instance;
  } else {
    return new Klass(a1, a2, a3, a4, a5);
  }
};
var standardReleaser$$module$react$lib$PooledClass = function(instance) {
  var Klass = this;
  "production" !== process.env.NODE_ENV ? invariant$$module$react$lib$PooledClass(instance instanceof Klass, "Trying to release an instance into a pool of a different type.") : invariant$$module$react$lib$PooledClass(instance instanceof Klass);
  if (instance.destructor) {
    instance.destructor();
  }
  if (Klass.instancePool.length < Klass.poolSize) {
    Klass.instancePool.push(instance);
  }
};
var DEFAULT_POOL_SIZE$$module$react$lib$PooledClass = 10;
var DEFAULT_POOLER$$module$react$lib$PooledClass = oneArgumentPooler$$module$react$lib$PooledClass;
var addPoolingTo$$module$react$lib$PooledClass = function(CopyConstructor, pooler) {
  var NewKlass = CopyConstructor;
  NewKlass.instancePool = [];
  NewKlass.getPooled = pooler || DEFAULT_POOLER$$module$react$lib$PooledClass;
  if (!NewKlass.poolSize) {
    NewKlass.poolSize = DEFAULT_POOL_SIZE$$module$react$lib$PooledClass;
  }
  NewKlass.release = standardReleaser$$module$react$lib$PooledClass;
  return NewKlass;
};
var PooledClass$$module$react$lib$PooledClass = {addPoolingTo:addPoolingTo$$module$react$lib$PooledClass, oneArgumentPooler:oneArgumentPooler$$module$react$lib$PooledClass, twoArgumentPooler:twoArgumentPooler$$module$react$lib$PooledClass, threeArgumentPooler:threeArgumentPooler$$module$react$lib$PooledClass, fiveArgumentPooler:fiveArgumentPooler$$module$react$lib$PooledClass};
module$react$lib$PooledClass = PooledClass$$module$react$lib$PooledClass;
