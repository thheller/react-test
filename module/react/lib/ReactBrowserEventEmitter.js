goog.provide("module$react$lib$ReactBrowserEventEmitter");
goog.require("module$react$lib$isEventSupported");
goog.require("module$react$lib$Object_assign");
goog.require("module$react$lib$ViewportMetrics");
goog.require("module$react$lib$ReactEventEmitterMixin");
goog.require("module$react$lib$EventPluginRegistry");
goog.require("module$react$lib$EventPluginHub");
goog.require("module$react$lib$EventConstants");
var EventConstants$$module$react$lib$ReactBrowserEventEmitter = module$react$lib$EventConstants;
var EventPluginHub$$module$react$lib$ReactBrowserEventEmitter = module$react$lib$EventPluginHub;
var EventPluginRegistry$$module$react$lib$ReactBrowserEventEmitter = module$react$lib$EventPluginRegistry;
var ReactEventEmitterMixin$$module$react$lib$ReactBrowserEventEmitter = module$react$lib$ReactEventEmitterMixin;
var ViewportMetrics$$module$react$lib$ReactBrowserEventEmitter = module$react$lib$ViewportMetrics;
var assign$$module$react$lib$ReactBrowserEventEmitter = module$react$lib$Object_assign;
var isEventSupported$$module$react$lib$ReactBrowserEventEmitter = module$react$lib$isEventSupported;
var alreadyListeningTo$$module$react$lib$ReactBrowserEventEmitter = {};
var isMonitoringScrollValue$$module$react$lib$ReactBrowserEventEmitter = false;
var reactTopListenersCounter$$module$react$lib$ReactBrowserEventEmitter = 0;
var topEventMapping$$module$react$lib$ReactBrowserEventEmitter = {topBlur:"blur", topChange:"change", topClick:"click", topCompositionEnd:"compositionend", topCompositionStart:"compositionstart", topCompositionUpdate:"compositionupdate", topContextMenu:"contextmenu", topCopy:"copy", topCut:"cut", topDoubleClick:"dblclick", topDrag:"drag", topDragEnd:"dragend", topDragEnter:"dragenter", topDragExit:"dragexit", topDragLeave:"dragleave", topDragOver:"dragover", topDragStart:"dragstart", topDrop:"drop", 
topFocus:"focus", topInput:"input", topKeyDown:"keydown", topKeyPress:"keypress", topKeyUp:"keyup", topMouseDown:"mousedown", topMouseMove:"mousemove", topMouseOut:"mouseout", topMouseOver:"mouseover", topMouseUp:"mouseup", topPaste:"paste", topScroll:"scroll", topSelectionChange:"selectionchange", topTextInput:"textInput", topTouchCancel:"touchcancel", topTouchEnd:"touchend", topTouchMove:"touchmove", topTouchStart:"touchstart", topWheel:"wheel"};
var topListenersIDKey$$module$react$lib$ReactBrowserEventEmitter = "_reactListenersID" + String(Math.random()).slice(2);
function getListeningForDocument$$module$react$lib$ReactBrowserEventEmitter(mountAt) {
  if (!Object.prototype.hasOwnProperty.call(mountAt, topListenersIDKey$$module$react$lib$ReactBrowserEventEmitter)) {
    mountAt[topListenersIDKey$$module$react$lib$ReactBrowserEventEmitter] = reactTopListenersCounter$$module$react$lib$ReactBrowserEventEmitter++;
    alreadyListeningTo$$module$react$lib$ReactBrowserEventEmitter[mountAt[topListenersIDKey$$module$react$lib$ReactBrowserEventEmitter]] = {};
  }
  return alreadyListeningTo$$module$react$lib$ReactBrowserEventEmitter[mountAt[topListenersIDKey$$module$react$lib$ReactBrowserEventEmitter]];
}
var ReactBrowserEventEmitter$$module$react$lib$ReactBrowserEventEmitter = assign$$module$react$lib$ReactBrowserEventEmitter({}, ReactEventEmitterMixin$$module$react$lib$ReactBrowserEventEmitter, {ReactEventListener:null, injection:{injectReactEventListener:function(ReactEventListener) {
  ReactEventListener.setHandleTopLevel(ReactBrowserEventEmitter$$module$react$lib$ReactBrowserEventEmitter.handleTopLevel);
  ReactBrowserEventEmitter$$module$react$lib$ReactBrowserEventEmitter.ReactEventListener = ReactEventListener;
}}, setEnabled:function(enabled) {
  if (ReactBrowserEventEmitter$$module$react$lib$ReactBrowserEventEmitter.ReactEventListener) {
    ReactBrowserEventEmitter$$module$react$lib$ReactBrowserEventEmitter.ReactEventListener.setEnabled(enabled);
  }
}, isEnabled:function() {
  return !!(ReactBrowserEventEmitter$$module$react$lib$ReactBrowserEventEmitter.ReactEventListener && ReactBrowserEventEmitter$$module$react$lib$ReactBrowserEventEmitter.ReactEventListener.isEnabled());
}, listenTo:function(registrationName, contentDocumentHandle) {
  var mountAt = contentDocumentHandle;
  var isListening = getListeningForDocument$$module$react$lib$ReactBrowserEventEmitter(mountAt);
  var dependencies = EventPluginRegistry$$module$react$lib$ReactBrowserEventEmitter.registrationNameDependencies[registrationName];
  var topLevelTypes = EventConstants$$module$react$lib$ReactBrowserEventEmitter.topLevelTypes;
  for (var i = 0, l = dependencies.length;i < l;i++) {
    var dependency = dependencies[i];
    if (!(isListening.hasOwnProperty(dependency) && isListening[dependency])) {
      if (dependency === topLevelTypes.topWheel) {
        if (isEventSupported$$module$react$lib$ReactBrowserEventEmitter("wheel")) {
          ReactBrowserEventEmitter$$module$react$lib$ReactBrowserEventEmitter.ReactEventListener.trapBubbledEvent(topLevelTypes.topWheel, "wheel", mountAt);
        } else {
          if (isEventSupported$$module$react$lib$ReactBrowserEventEmitter("mousewheel")) {
            ReactBrowserEventEmitter$$module$react$lib$ReactBrowserEventEmitter.ReactEventListener.trapBubbledEvent(topLevelTypes.topWheel, "mousewheel", mountAt);
          } else {
            ReactBrowserEventEmitter$$module$react$lib$ReactBrowserEventEmitter.ReactEventListener.trapBubbledEvent(topLevelTypes.topWheel, "DOMMouseScroll", mountAt);
          }
        }
      } else {
        if (dependency === topLevelTypes.topScroll) {
          if (isEventSupported$$module$react$lib$ReactBrowserEventEmitter("scroll", true)) {
            ReactBrowserEventEmitter$$module$react$lib$ReactBrowserEventEmitter.ReactEventListener.trapCapturedEvent(topLevelTypes.topScroll, "scroll", mountAt);
          } else {
            ReactBrowserEventEmitter$$module$react$lib$ReactBrowserEventEmitter.ReactEventListener.trapBubbledEvent(topLevelTypes.topScroll, "scroll", ReactBrowserEventEmitter$$module$react$lib$ReactBrowserEventEmitter.ReactEventListener.WINDOW_HANDLE);
          }
        } else {
          if (dependency === topLevelTypes.topFocus || dependency === topLevelTypes.topBlur) {
            if (isEventSupported$$module$react$lib$ReactBrowserEventEmitter("focus", true)) {
              ReactBrowserEventEmitter$$module$react$lib$ReactBrowserEventEmitter.ReactEventListener.trapCapturedEvent(topLevelTypes.topFocus, "focus", mountAt);
              ReactBrowserEventEmitter$$module$react$lib$ReactBrowserEventEmitter.ReactEventListener.trapCapturedEvent(topLevelTypes.topBlur, "blur", mountAt);
            } else {
              if (isEventSupported$$module$react$lib$ReactBrowserEventEmitter("focusin")) {
                ReactBrowserEventEmitter$$module$react$lib$ReactBrowserEventEmitter.ReactEventListener.trapBubbledEvent(topLevelTypes.topFocus, "focusin", mountAt);
                ReactBrowserEventEmitter$$module$react$lib$ReactBrowserEventEmitter.ReactEventListener.trapBubbledEvent(topLevelTypes.topBlur, "focusout", mountAt);
              }
            }
            isListening[topLevelTypes.topBlur] = true;
            isListening[topLevelTypes.topFocus] = true;
          } else {
            if (topEventMapping$$module$react$lib$ReactBrowserEventEmitter.hasOwnProperty(dependency)) {
              ReactBrowserEventEmitter$$module$react$lib$ReactBrowserEventEmitter.ReactEventListener.trapBubbledEvent(dependency, topEventMapping$$module$react$lib$ReactBrowserEventEmitter[dependency], mountAt);
            }
          }
        }
      }
      isListening[dependency] = true;
    }
  }
}, trapBubbledEvent:function(topLevelType, handlerBaseName, handle) {
  return ReactBrowserEventEmitter$$module$react$lib$ReactBrowserEventEmitter.ReactEventListener.trapBubbledEvent(topLevelType, handlerBaseName, handle);
}, trapCapturedEvent:function(topLevelType, handlerBaseName, handle) {
  return ReactBrowserEventEmitter$$module$react$lib$ReactBrowserEventEmitter.ReactEventListener.trapCapturedEvent(topLevelType, handlerBaseName, handle);
}, ensureScrollValueMonitoring:function() {
  if (!isMonitoringScrollValue$$module$react$lib$ReactBrowserEventEmitter) {
    var refresh = ViewportMetrics$$module$react$lib$ReactBrowserEventEmitter.refreshScrollValues;
    ReactBrowserEventEmitter$$module$react$lib$ReactBrowserEventEmitter.ReactEventListener.monitorScrollValue(refresh);
    isMonitoringScrollValue$$module$react$lib$ReactBrowserEventEmitter = true;
  }
}, eventNameDispatchConfigs:EventPluginHub$$module$react$lib$ReactBrowserEventEmitter.eventNameDispatchConfigs, registrationNameModules:EventPluginHub$$module$react$lib$ReactBrowserEventEmitter.registrationNameModules, putListener:EventPluginHub$$module$react$lib$ReactBrowserEventEmitter.putListener, getListener:EventPluginHub$$module$react$lib$ReactBrowserEventEmitter.getListener, deleteListener:EventPluginHub$$module$react$lib$ReactBrowserEventEmitter.deleteListener, deleteAllListeners:EventPluginHub$$module$react$lib$ReactBrowserEventEmitter.deleteAllListeners});
module$react$lib$ReactBrowserEventEmitter = ReactBrowserEventEmitter$$module$react$lib$ReactBrowserEventEmitter;
