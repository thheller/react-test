goog.provide("module$react$lib$SimpleEventPlugin");
goog.require("module$react$lib$warning");
goog.require("module$react$lib$keyOf");
goog.require("module$react$lib$invariant");
goog.require("module$react$lib$getEventCharCode");
goog.require("module$react$lib$SyntheticWheelEvent");
goog.require("module$react$lib$SyntheticUIEvent");
goog.require("module$react$lib$SyntheticTouchEvent");
goog.require("module$react$lib$SyntheticDragEvent");
goog.require("module$react$lib$SyntheticMouseEvent");
goog.require("module$react$lib$SyntheticKeyboardEvent");
goog.require("module$react$lib$SyntheticFocusEvent");
goog.require("module$react$lib$SyntheticEvent");
goog.require("module$react$lib$SyntheticClipboardEvent");
goog.require("module$react$lib$EventPropagators");
goog.require("module$react$lib$EventPluginUtils");
goog.require("module$react$lib$EventConstants");
var EventConstants$$module$react$lib$SimpleEventPlugin = module$react$lib$EventConstants;
var EventPluginUtils$$module$react$lib$SimpleEventPlugin = module$react$lib$EventPluginUtils;
var EventPropagators$$module$react$lib$SimpleEventPlugin = module$react$lib$EventPropagators;
var SyntheticClipboardEvent$$module$react$lib$SimpleEventPlugin = module$react$lib$SyntheticClipboardEvent;
var SyntheticEvent$$module$react$lib$SimpleEventPlugin = module$react$lib$SyntheticEvent;
var SyntheticFocusEvent$$module$react$lib$SimpleEventPlugin = module$react$lib$SyntheticFocusEvent;
var SyntheticKeyboardEvent$$module$react$lib$SimpleEventPlugin = module$react$lib$SyntheticKeyboardEvent;
var SyntheticMouseEvent$$module$react$lib$SimpleEventPlugin = module$react$lib$SyntheticMouseEvent;
var SyntheticDragEvent$$module$react$lib$SimpleEventPlugin = module$react$lib$SyntheticDragEvent;
var SyntheticTouchEvent$$module$react$lib$SimpleEventPlugin = module$react$lib$SyntheticTouchEvent;
var SyntheticUIEvent$$module$react$lib$SimpleEventPlugin = module$react$lib$SyntheticUIEvent;
var SyntheticWheelEvent$$module$react$lib$SimpleEventPlugin = module$react$lib$SyntheticWheelEvent;
var getEventCharCode$$module$react$lib$SimpleEventPlugin = module$react$lib$getEventCharCode;
var invariant$$module$react$lib$SimpleEventPlugin = module$react$lib$invariant;
var keyOf$$module$react$lib$SimpleEventPlugin = module$react$lib$keyOf;
var warning$$module$react$lib$SimpleEventPlugin = module$react$lib$warning;
var topLevelTypes$$module$react$lib$SimpleEventPlugin = EventConstants$$module$react$lib$SimpleEventPlugin.topLevelTypes;
var eventTypes$$module$react$lib$SimpleEventPlugin = {blur:{phasedRegistrationNames:{bubbled:keyOf$$module$react$lib$SimpleEventPlugin({onBlur:true}), captured:keyOf$$module$react$lib$SimpleEventPlugin({onBlurCapture:true})}}, click:{phasedRegistrationNames:{bubbled:keyOf$$module$react$lib$SimpleEventPlugin({onClick:true}), captured:keyOf$$module$react$lib$SimpleEventPlugin({onClickCapture:true})}}, contextMenu:{phasedRegistrationNames:{bubbled:keyOf$$module$react$lib$SimpleEventPlugin({onContextMenu:true}), 
captured:keyOf$$module$react$lib$SimpleEventPlugin({onContextMenuCapture:true})}}, copy:{phasedRegistrationNames:{bubbled:keyOf$$module$react$lib$SimpleEventPlugin({onCopy:true}), captured:keyOf$$module$react$lib$SimpleEventPlugin({onCopyCapture:true})}}, cut:{phasedRegistrationNames:{bubbled:keyOf$$module$react$lib$SimpleEventPlugin({onCut:true}), captured:keyOf$$module$react$lib$SimpleEventPlugin({onCutCapture:true})}}, doubleClick:{phasedRegistrationNames:{bubbled:keyOf$$module$react$lib$SimpleEventPlugin({onDoubleClick:true}), 
captured:keyOf$$module$react$lib$SimpleEventPlugin({onDoubleClickCapture:true})}}, drag:{phasedRegistrationNames:{bubbled:keyOf$$module$react$lib$SimpleEventPlugin({onDrag:true}), captured:keyOf$$module$react$lib$SimpleEventPlugin({onDragCapture:true})}}, dragEnd:{phasedRegistrationNames:{bubbled:keyOf$$module$react$lib$SimpleEventPlugin({onDragEnd:true}), captured:keyOf$$module$react$lib$SimpleEventPlugin({onDragEndCapture:true})}}, dragEnter:{phasedRegistrationNames:{bubbled:keyOf$$module$react$lib$SimpleEventPlugin({onDragEnter:true}), 
captured:keyOf$$module$react$lib$SimpleEventPlugin({onDragEnterCapture:true})}}, dragExit:{phasedRegistrationNames:{bubbled:keyOf$$module$react$lib$SimpleEventPlugin({onDragExit:true}), captured:keyOf$$module$react$lib$SimpleEventPlugin({onDragExitCapture:true})}}, dragLeave:{phasedRegistrationNames:{bubbled:keyOf$$module$react$lib$SimpleEventPlugin({onDragLeave:true}), captured:keyOf$$module$react$lib$SimpleEventPlugin({onDragLeaveCapture:true})}}, dragOver:{phasedRegistrationNames:{bubbled:keyOf$$module$react$lib$SimpleEventPlugin({onDragOver:true}), 
captured:keyOf$$module$react$lib$SimpleEventPlugin({onDragOverCapture:true})}}, dragStart:{phasedRegistrationNames:{bubbled:keyOf$$module$react$lib$SimpleEventPlugin({onDragStart:true}), captured:keyOf$$module$react$lib$SimpleEventPlugin({onDragStartCapture:true})}}, drop:{phasedRegistrationNames:{bubbled:keyOf$$module$react$lib$SimpleEventPlugin({onDrop:true}), captured:keyOf$$module$react$lib$SimpleEventPlugin({onDropCapture:true})}}, focus:{phasedRegistrationNames:{bubbled:keyOf$$module$react$lib$SimpleEventPlugin({onFocus:true}), 
captured:keyOf$$module$react$lib$SimpleEventPlugin({onFocusCapture:true})}}, input:{phasedRegistrationNames:{bubbled:keyOf$$module$react$lib$SimpleEventPlugin({onInput:true}), captured:keyOf$$module$react$lib$SimpleEventPlugin({onInputCapture:true})}}, keyDown:{phasedRegistrationNames:{bubbled:keyOf$$module$react$lib$SimpleEventPlugin({onKeyDown:true}), captured:keyOf$$module$react$lib$SimpleEventPlugin({onKeyDownCapture:true})}}, keyPress:{phasedRegistrationNames:{bubbled:keyOf$$module$react$lib$SimpleEventPlugin({onKeyPress:true}), 
captured:keyOf$$module$react$lib$SimpleEventPlugin({onKeyPressCapture:true})}}, keyUp:{phasedRegistrationNames:{bubbled:keyOf$$module$react$lib$SimpleEventPlugin({onKeyUp:true}), captured:keyOf$$module$react$lib$SimpleEventPlugin({onKeyUpCapture:true})}}, load:{phasedRegistrationNames:{bubbled:keyOf$$module$react$lib$SimpleEventPlugin({onLoad:true}), captured:keyOf$$module$react$lib$SimpleEventPlugin({onLoadCapture:true})}}, error:{phasedRegistrationNames:{bubbled:keyOf$$module$react$lib$SimpleEventPlugin({onError:true}), 
captured:keyOf$$module$react$lib$SimpleEventPlugin({onErrorCapture:true})}}, mouseDown:{phasedRegistrationNames:{bubbled:keyOf$$module$react$lib$SimpleEventPlugin({onMouseDown:true}), captured:keyOf$$module$react$lib$SimpleEventPlugin({onMouseDownCapture:true})}}, mouseMove:{phasedRegistrationNames:{bubbled:keyOf$$module$react$lib$SimpleEventPlugin({onMouseMove:true}), captured:keyOf$$module$react$lib$SimpleEventPlugin({onMouseMoveCapture:true})}}, mouseOut:{phasedRegistrationNames:{bubbled:keyOf$$module$react$lib$SimpleEventPlugin({onMouseOut:true}), 
captured:keyOf$$module$react$lib$SimpleEventPlugin({onMouseOutCapture:true})}}, mouseOver:{phasedRegistrationNames:{bubbled:keyOf$$module$react$lib$SimpleEventPlugin({onMouseOver:true}), captured:keyOf$$module$react$lib$SimpleEventPlugin({onMouseOverCapture:true})}}, mouseUp:{phasedRegistrationNames:{bubbled:keyOf$$module$react$lib$SimpleEventPlugin({onMouseUp:true}), captured:keyOf$$module$react$lib$SimpleEventPlugin({onMouseUpCapture:true})}}, paste:{phasedRegistrationNames:{bubbled:keyOf$$module$react$lib$SimpleEventPlugin({onPaste:true}), 
captured:keyOf$$module$react$lib$SimpleEventPlugin({onPasteCapture:true})}}, reset:{phasedRegistrationNames:{bubbled:keyOf$$module$react$lib$SimpleEventPlugin({onReset:true}), captured:keyOf$$module$react$lib$SimpleEventPlugin({onResetCapture:true})}}, scroll:{phasedRegistrationNames:{bubbled:keyOf$$module$react$lib$SimpleEventPlugin({onScroll:true}), captured:keyOf$$module$react$lib$SimpleEventPlugin({onScrollCapture:true})}}, submit:{phasedRegistrationNames:{bubbled:keyOf$$module$react$lib$SimpleEventPlugin({onSubmit:true}), 
captured:keyOf$$module$react$lib$SimpleEventPlugin({onSubmitCapture:true})}}, touchCancel:{phasedRegistrationNames:{bubbled:keyOf$$module$react$lib$SimpleEventPlugin({onTouchCancel:true}), captured:keyOf$$module$react$lib$SimpleEventPlugin({onTouchCancelCapture:true})}}, touchEnd:{phasedRegistrationNames:{bubbled:keyOf$$module$react$lib$SimpleEventPlugin({onTouchEnd:true}), captured:keyOf$$module$react$lib$SimpleEventPlugin({onTouchEndCapture:true})}}, touchMove:{phasedRegistrationNames:{bubbled:keyOf$$module$react$lib$SimpleEventPlugin({onTouchMove:true}), 
captured:keyOf$$module$react$lib$SimpleEventPlugin({onTouchMoveCapture:true})}}, touchStart:{phasedRegistrationNames:{bubbled:keyOf$$module$react$lib$SimpleEventPlugin({onTouchStart:true}), captured:keyOf$$module$react$lib$SimpleEventPlugin({onTouchStartCapture:true})}}, wheel:{phasedRegistrationNames:{bubbled:keyOf$$module$react$lib$SimpleEventPlugin({onWheel:true}), captured:keyOf$$module$react$lib$SimpleEventPlugin({onWheelCapture:true})}}};
var topLevelEventsToDispatchConfig$$module$react$lib$SimpleEventPlugin = {topBlur:eventTypes$$module$react$lib$SimpleEventPlugin.blur, topClick:eventTypes$$module$react$lib$SimpleEventPlugin.click, topContextMenu:eventTypes$$module$react$lib$SimpleEventPlugin.contextMenu, topCopy:eventTypes$$module$react$lib$SimpleEventPlugin.copy, topCut:eventTypes$$module$react$lib$SimpleEventPlugin.cut, topDoubleClick:eventTypes$$module$react$lib$SimpleEventPlugin.doubleClick, topDrag:eventTypes$$module$react$lib$SimpleEventPlugin.drag, 
topDragEnd:eventTypes$$module$react$lib$SimpleEventPlugin.dragEnd, topDragEnter:eventTypes$$module$react$lib$SimpleEventPlugin.dragEnter, topDragExit:eventTypes$$module$react$lib$SimpleEventPlugin.dragExit, topDragLeave:eventTypes$$module$react$lib$SimpleEventPlugin.dragLeave, topDragOver:eventTypes$$module$react$lib$SimpleEventPlugin.dragOver, topDragStart:eventTypes$$module$react$lib$SimpleEventPlugin.dragStart, topDrop:eventTypes$$module$react$lib$SimpleEventPlugin.drop, topError:eventTypes$$module$react$lib$SimpleEventPlugin.error, 
topFocus:eventTypes$$module$react$lib$SimpleEventPlugin.focus, topInput:eventTypes$$module$react$lib$SimpleEventPlugin.input, topKeyDown:eventTypes$$module$react$lib$SimpleEventPlugin.keyDown, topKeyPress:eventTypes$$module$react$lib$SimpleEventPlugin.keyPress, topKeyUp:eventTypes$$module$react$lib$SimpleEventPlugin.keyUp, topLoad:eventTypes$$module$react$lib$SimpleEventPlugin.load, topMouseDown:eventTypes$$module$react$lib$SimpleEventPlugin.mouseDown, topMouseMove:eventTypes$$module$react$lib$SimpleEventPlugin.mouseMove, 
topMouseOut:eventTypes$$module$react$lib$SimpleEventPlugin.mouseOut, topMouseOver:eventTypes$$module$react$lib$SimpleEventPlugin.mouseOver, topMouseUp:eventTypes$$module$react$lib$SimpleEventPlugin.mouseUp, topPaste:eventTypes$$module$react$lib$SimpleEventPlugin.paste, topReset:eventTypes$$module$react$lib$SimpleEventPlugin.reset, topScroll:eventTypes$$module$react$lib$SimpleEventPlugin.scroll, topSubmit:eventTypes$$module$react$lib$SimpleEventPlugin.submit, topTouchCancel:eventTypes$$module$react$lib$SimpleEventPlugin.touchCancel, 
topTouchEnd:eventTypes$$module$react$lib$SimpleEventPlugin.touchEnd, topTouchMove:eventTypes$$module$react$lib$SimpleEventPlugin.touchMove, topTouchStart:eventTypes$$module$react$lib$SimpleEventPlugin.touchStart, topWheel:eventTypes$$module$react$lib$SimpleEventPlugin.wheel};
for (var type$$module$react$lib$SimpleEventPlugin in topLevelEventsToDispatchConfig$$module$react$lib$SimpleEventPlugin) {
  topLevelEventsToDispatchConfig$$module$react$lib$SimpleEventPlugin[type$$module$react$lib$SimpleEventPlugin].dependencies = [type$$module$react$lib$SimpleEventPlugin];
}
var SimpleEventPlugin$$module$react$lib$SimpleEventPlugin = {eventTypes:eventTypes$$module$react$lib$SimpleEventPlugin, executeDispatch:function(event, listener, domID) {
  var returnValue = EventPluginUtils$$module$react$lib$SimpleEventPlugin.executeDispatch(event, listener, domID);
  "production" !== process.env.NODE_ENV ? warning$$module$react$lib$SimpleEventPlugin(typeof returnValue !== "boolean", "Returning `false` from an event handler is deprecated and will be " + "ignored in a future release. Instead, manually call " + "e.stopPropagation() or e.preventDefault(), as appropriate.") : null;
  if (returnValue === false) {
    event.stopPropagation();
    event.preventDefault();
  }
}, extractEvents:function(topLevelType, topLevelTarget, topLevelTargetID, nativeEvent) {
  var dispatchConfig = topLevelEventsToDispatchConfig$$module$react$lib$SimpleEventPlugin[topLevelType];
  if (!dispatchConfig) {
    return null;
  }
  var EventConstructor;
  switch(topLevelType) {
    case topLevelTypes$$module$react$lib$SimpleEventPlugin.topInput:
    ;
    case topLevelTypes$$module$react$lib$SimpleEventPlugin.topLoad:
    ;
    case topLevelTypes$$module$react$lib$SimpleEventPlugin.topError:
    ;
    case topLevelTypes$$module$react$lib$SimpleEventPlugin.topReset:
    ;
    case topLevelTypes$$module$react$lib$SimpleEventPlugin.topSubmit:
      EventConstructor = SyntheticEvent$$module$react$lib$SimpleEventPlugin;
      break;
    case topLevelTypes$$module$react$lib$SimpleEventPlugin.topKeyPress:
      if (getEventCharCode$$module$react$lib$SimpleEventPlugin(nativeEvent) === 0) {
        return null;
      }
    ;
    case topLevelTypes$$module$react$lib$SimpleEventPlugin.topKeyDown:
    ;
    case topLevelTypes$$module$react$lib$SimpleEventPlugin.topKeyUp:
      EventConstructor = SyntheticKeyboardEvent$$module$react$lib$SimpleEventPlugin;
      break;
    case topLevelTypes$$module$react$lib$SimpleEventPlugin.topBlur:
    ;
    case topLevelTypes$$module$react$lib$SimpleEventPlugin.topFocus:
      EventConstructor = SyntheticFocusEvent$$module$react$lib$SimpleEventPlugin;
      break;
    case topLevelTypes$$module$react$lib$SimpleEventPlugin.topClick:
      if (nativeEvent.button === 2) {
        return null;
      }
    ;
    case topLevelTypes$$module$react$lib$SimpleEventPlugin.topContextMenu:
    ;
    case topLevelTypes$$module$react$lib$SimpleEventPlugin.topDoubleClick:
    ;
    case topLevelTypes$$module$react$lib$SimpleEventPlugin.topMouseDown:
    ;
    case topLevelTypes$$module$react$lib$SimpleEventPlugin.topMouseMove:
    ;
    case topLevelTypes$$module$react$lib$SimpleEventPlugin.topMouseOut:
    ;
    case topLevelTypes$$module$react$lib$SimpleEventPlugin.topMouseOver:
    ;
    case topLevelTypes$$module$react$lib$SimpleEventPlugin.topMouseUp:
      EventConstructor = SyntheticMouseEvent$$module$react$lib$SimpleEventPlugin;
      break;
    case topLevelTypes$$module$react$lib$SimpleEventPlugin.topDrag:
    ;
    case topLevelTypes$$module$react$lib$SimpleEventPlugin.topDragEnd:
    ;
    case topLevelTypes$$module$react$lib$SimpleEventPlugin.topDragEnter:
    ;
    case topLevelTypes$$module$react$lib$SimpleEventPlugin.topDragExit:
    ;
    case topLevelTypes$$module$react$lib$SimpleEventPlugin.topDragLeave:
    ;
    case topLevelTypes$$module$react$lib$SimpleEventPlugin.topDragOver:
    ;
    case topLevelTypes$$module$react$lib$SimpleEventPlugin.topDragStart:
    ;
    case topLevelTypes$$module$react$lib$SimpleEventPlugin.topDrop:
      EventConstructor = SyntheticDragEvent$$module$react$lib$SimpleEventPlugin;
      break;
    case topLevelTypes$$module$react$lib$SimpleEventPlugin.topTouchCancel:
    ;
    case topLevelTypes$$module$react$lib$SimpleEventPlugin.topTouchEnd:
    ;
    case topLevelTypes$$module$react$lib$SimpleEventPlugin.topTouchMove:
    ;
    case topLevelTypes$$module$react$lib$SimpleEventPlugin.topTouchStart:
      EventConstructor = SyntheticTouchEvent$$module$react$lib$SimpleEventPlugin;
      break;
    case topLevelTypes$$module$react$lib$SimpleEventPlugin.topScroll:
      EventConstructor = SyntheticUIEvent$$module$react$lib$SimpleEventPlugin;
      break;
    case topLevelTypes$$module$react$lib$SimpleEventPlugin.topWheel:
      EventConstructor = SyntheticWheelEvent$$module$react$lib$SimpleEventPlugin;
      break;
    case topLevelTypes$$module$react$lib$SimpleEventPlugin.topCopy:
    ;
    case topLevelTypes$$module$react$lib$SimpleEventPlugin.topCut:
    ;
    case topLevelTypes$$module$react$lib$SimpleEventPlugin.topPaste:
      EventConstructor = SyntheticClipboardEvent$$module$react$lib$SimpleEventPlugin;
      break;
  }
  "production" !== process.env.NODE_ENV ? invariant$$module$react$lib$SimpleEventPlugin(EventConstructor, "SimpleEventPlugin: Unhandled event type, `%s`.", topLevelType) : invariant$$module$react$lib$SimpleEventPlugin(EventConstructor);
  var event = EventConstructor.getPooled(dispatchConfig, topLevelTargetID, nativeEvent);
  EventPropagators$$module$react$lib$SimpleEventPlugin.accumulateTwoPhaseDispatches(event);
  return event;
}};
module$react$lib$SimpleEventPlugin = SimpleEventPlugin$$module$react$lib$SimpleEventPlugin;
