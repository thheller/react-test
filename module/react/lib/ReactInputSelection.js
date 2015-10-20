goog.provide("module$react$lib$ReactInputSelection");
goog.require("module$react$lib$getActiveElement");
goog.require("module$react$lib$focusNode");
goog.require("module$react$lib$containsNode");
goog.require("module$react$lib$ReactDOMSelection");
var ReactDOMSelection$$module$react$lib$ReactInputSelection = module$react$lib$ReactDOMSelection;
var containsNode$$module$react$lib$ReactInputSelection = module$react$lib$containsNode;
var focusNode$$module$react$lib$ReactInputSelection = module$react$lib$focusNode;
var getActiveElement$$module$react$lib$ReactInputSelection = module$react$lib$getActiveElement;
function isInDocument$$module$react$lib$ReactInputSelection(node) {
  return containsNode$$module$react$lib$ReactInputSelection(document.documentElement, node);
}
var ReactInputSelection$$module$react$lib$ReactInputSelection = {hasSelectionCapabilities:function(elem) {
  return elem && (elem.nodeName === "INPUT" && elem.type === "text" || elem.nodeName === "TEXTAREA" || elem.contentEditable === "true");
}, getSelectionInformation:function() {
  var focusedElem = getActiveElement$$module$react$lib$ReactInputSelection();
  return {focusedElem:focusedElem, selectionRange:ReactInputSelection$$module$react$lib$ReactInputSelection.hasSelectionCapabilities(focusedElem) ? ReactInputSelection$$module$react$lib$ReactInputSelection.getSelection(focusedElem) : null};
}, restoreSelection:function(priorSelectionInformation) {
  var curFocusedElem = getActiveElement$$module$react$lib$ReactInputSelection();
  var priorFocusedElem = priorSelectionInformation.focusedElem;
  var priorSelectionRange = priorSelectionInformation.selectionRange;
  if (curFocusedElem !== priorFocusedElem && isInDocument$$module$react$lib$ReactInputSelection(priorFocusedElem)) {
    if (ReactInputSelection$$module$react$lib$ReactInputSelection.hasSelectionCapabilities(priorFocusedElem)) {
      ReactInputSelection$$module$react$lib$ReactInputSelection.setSelection(priorFocusedElem, priorSelectionRange);
    }
    focusNode$$module$react$lib$ReactInputSelection(priorFocusedElem);
  }
}, getSelection:function(input) {
  var selection;
  if ("selectionStart" in input) {
    selection = {start:input.selectionStart, end:input.selectionEnd};
  } else {
    if (document.selection && input.nodeName === "INPUT") {
      var range = document.selection.createRange();
      if (range.parentElement() === input) {
        selection = {start:-range.moveStart("character", -input.value.length), end:-range.moveEnd("character", -input.value.length)};
      }
    } else {
      selection = ReactDOMSelection$$module$react$lib$ReactInputSelection.getOffsets(input);
    }
  }
  return selection || {start:0, end:0};
}, setSelection:function(input, offsets) {
  var start = offsets.start;
  var end = offsets.end;
  if (typeof end === "undefined") {
    end = start;
  }
  if ("selectionStart" in input) {
    input.selectionStart = start;
    input.selectionEnd = Math.min(end, input.value.length);
  } else {
    if (document.selection && input.nodeName === "INPUT") {
      var range = input.createTextRange();
      range.collapse(true);
      range.moveStart("character", start);
      range.moveEnd("character", end - start);
      range.select();
    } else {
      ReactDOMSelection$$module$react$lib$ReactInputSelection.setOffsets(input, offsets);
    }
  }
}};
module$react$lib$ReactInputSelection = ReactInputSelection$$module$react$lib$ReactInputSelection;
