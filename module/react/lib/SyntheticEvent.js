goog.provide("module$react$lib$SyntheticEvent");
goog.require("module$react$lib$getEventTarget");
goog.require("module$react$lib$emptyFunction");
goog.require("module$react$lib$Object_assign");
goog.require("module$react$lib$PooledClass");
var PooledClass$$module$react$lib$SyntheticEvent = module$react$lib$PooledClass;
var assign$$module$react$lib$SyntheticEvent = module$react$lib$Object_assign;
var emptyFunction$$module$react$lib$SyntheticEvent = module$react$lib$emptyFunction;
var getEventTarget$$module$react$lib$SyntheticEvent = module$react$lib$getEventTarget;
var EventInterface$$module$react$lib$SyntheticEvent = {type:null, target:getEventTarget$$module$react$lib$SyntheticEvent, currentTarget:emptyFunction$$module$react$lib$SyntheticEvent.thatReturnsNull, eventPhase:null, bubbles:null, cancelable:null, timeStamp:function(event) {
  return event.timeStamp || Date.now();
}, defaultPrevented:null, isTrusted:null};
function SyntheticEvent$$module$react$lib$SyntheticEvent(dispatchConfig, dispatchMarker, nativeEvent) {
  this.dispatchConfig = dispatchConfig;
  this.dispatchMarker = dispatchMarker;
  this.nativeEvent = nativeEvent;
  var Interface = this.constructor.Interface;
  for (var propName in Interface) {
    if (!Interface.hasOwnProperty(propName)) {
      continue;
    }
    var normalize = Interface[propName];
    if (normalize) {
      this[propName] = normalize(nativeEvent);
    } else {
      this[propName] = nativeEvent[propName];
    }
  }
  var defaultPrevented = nativeEvent.defaultPrevented != null ? nativeEvent.defaultPrevented : nativeEvent.returnValue === false;
  if (defaultPrevented) {
    this.isDefaultPrevented = emptyFunction$$module$react$lib$SyntheticEvent.thatReturnsTrue;
  } else {
    this.isDefaultPrevented = emptyFunction$$module$react$lib$SyntheticEvent.thatReturnsFalse;
  }
  this.isPropagationStopped = emptyFunction$$module$react$lib$SyntheticEvent.thatReturnsFalse;
}
assign$$module$react$lib$SyntheticEvent(SyntheticEvent$$module$react$lib$SyntheticEvent.prototype, {preventDefault:function() {
  this.defaultPrevented = true;
  var event = this.nativeEvent;
  if (event.preventDefault) {
    event.preventDefault();
  } else {
    event.returnValue = false;
  }
  this.isDefaultPrevented = emptyFunction$$module$react$lib$SyntheticEvent.thatReturnsTrue;
}, stopPropagation:function() {
  var event = this.nativeEvent;
  if (event.stopPropagation) {
    event.stopPropagation();
  } else {
    event.cancelBubble = true;
  }
  this.isPropagationStopped = emptyFunction$$module$react$lib$SyntheticEvent.thatReturnsTrue;
}, persist:function() {
  this.isPersistent = emptyFunction$$module$react$lib$SyntheticEvent.thatReturnsTrue;
}, isPersistent:emptyFunction$$module$react$lib$SyntheticEvent.thatReturnsFalse, destructor:function() {
  var Interface = this.constructor.Interface;
  for (var propName in Interface) {
    this[propName] = null;
  }
  this.dispatchConfig = null;
  this.dispatchMarker = null;
  this.nativeEvent = null;
}});
SyntheticEvent$$module$react$lib$SyntheticEvent.Interface = EventInterface$$module$react$lib$SyntheticEvent;
SyntheticEvent$$module$react$lib$SyntheticEvent.augmentClass = function(Class, Interface) {
  var Super = this;
  var prototype = Object.create(Super.prototype);
  assign$$module$react$lib$SyntheticEvent(prototype, Class.prototype);
  Class.prototype = prototype;
  Class.prototype.constructor = Class;
  Class.Interface = assign$$module$react$lib$SyntheticEvent({}, Super.Interface, Interface);
  Class.augmentClass = Super.augmentClass;
  PooledClass$$module$react$lib$SyntheticEvent.addPoolingTo(Class, PooledClass$$module$react$lib$SyntheticEvent.threeArgumentPooler);
};
PooledClass$$module$react$lib$SyntheticEvent.addPoolingTo(SyntheticEvent$$module$react$lib$SyntheticEvent, PooledClass$$module$react$lib$SyntheticEvent.threeArgumentPooler);
module$react$lib$SyntheticEvent = SyntheticEvent$$module$react$lib$SyntheticEvent;
