goog.provide("module$react$lib$ReactMultiChild");
goog.require("module$react$lib$ReactChildReconciler");
goog.require("module$react$lib$ReactReconciler");
goog.require("module$react$lib$ReactMultiChildUpdateTypes");
goog.require("module$react$lib$ReactComponentEnvironment");
var ReactComponentEnvironment$$module$react$lib$ReactMultiChild = module$react$lib$ReactComponentEnvironment;
var ReactMultiChildUpdateTypes$$module$react$lib$ReactMultiChild = module$react$lib$ReactMultiChildUpdateTypes;
var ReactReconciler$$module$react$lib$ReactMultiChild = module$react$lib$ReactReconciler;
var ReactChildReconciler$$module$react$lib$ReactMultiChild = module$react$lib$ReactChildReconciler;
var updateDepth$$module$react$lib$ReactMultiChild = 0;
var updateQueue$$module$react$lib$ReactMultiChild = [];
var markupQueue$$module$react$lib$ReactMultiChild = [];
function enqueueMarkup$$module$react$lib$ReactMultiChild(parentID, markup, toIndex) {
  updateQueue$$module$react$lib$ReactMultiChild.push({parentID:parentID, parentNode:null, type:ReactMultiChildUpdateTypes$$module$react$lib$ReactMultiChild.INSERT_MARKUP, markupIndex:markupQueue$$module$react$lib$ReactMultiChild.push(markup) - 1, textContent:null, fromIndex:null, toIndex:toIndex});
}
function enqueueMove$$module$react$lib$ReactMultiChild(parentID, fromIndex, toIndex) {
  updateQueue$$module$react$lib$ReactMultiChild.push({parentID:parentID, parentNode:null, type:ReactMultiChildUpdateTypes$$module$react$lib$ReactMultiChild.MOVE_EXISTING, markupIndex:null, textContent:null, fromIndex:fromIndex, toIndex:toIndex});
}
function enqueueRemove$$module$react$lib$ReactMultiChild(parentID, fromIndex) {
  updateQueue$$module$react$lib$ReactMultiChild.push({parentID:parentID, parentNode:null, type:ReactMultiChildUpdateTypes$$module$react$lib$ReactMultiChild.REMOVE_NODE, markupIndex:null, textContent:null, fromIndex:fromIndex, toIndex:null});
}
function enqueueTextContent$$module$react$lib$ReactMultiChild(parentID, textContent) {
  updateQueue$$module$react$lib$ReactMultiChild.push({parentID:parentID, parentNode:null, type:ReactMultiChildUpdateTypes$$module$react$lib$ReactMultiChild.TEXT_CONTENT, markupIndex:null, textContent:textContent, fromIndex:null, toIndex:null});
}
function processQueue$$module$react$lib$ReactMultiChild() {
  if (updateQueue$$module$react$lib$ReactMultiChild.length) {
    ReactComponentEnvironment$$module$react$lib$ReactMultiChild.processChildrenUpdates(updateQueue$$module$react$lib$ReactMultiChild, markupQueue$$module$react$lib$ReactMultiChild);
    clearQueue$$module$react$lib$ReactMultiChild();
  }
}
function clearQueue$$module$react$lib$ReactMultiChild() {
  updateQueue$$module$react$lib$ReactMultiChild.length = 0;
  markupQueue$$module$react$lib$ReactMultiChild.length = 0;
}
var ReactMultiChild$$module$react$lib$ReactMultiChild = {Mixin:{mountChildren:function(nestedChildren, transaction, context) {
  var children = ReactChildReconciler$$module$react$lib$ReactMultiChild.instantiateChildren(nestedChildren, transaction, context);
  this._renderedChildren = children;
  var mountImages = [];
  var index = 0;
  for (var name in children) {
    if (children.hasOwnProperty(name)) {
      var child = children[name];
      var rootID = this._rootNodeID + name;
      var mountImage = ReactReconciler$$module$react$lib$ReactMultiChild.mountComponent(child, rootID, transaction, context);
      child._mountIndex = index;
      mountImages.push(mountImage);
      index++;
    }
  }
  return mountImages;
}, updateTextContent:function(nextContent) {
  updateDepth$$module$react$lib$ReactMultiChild++;
  var errorThrown = true;
  try {
    var prevChildren = this._renderedChildren;
    ReactChildReconciler$$module$react$lib$ReactMultiChild.unmountChildren(prevChildren);
    for (var name in prevChildren) {
      if (prevChildren.hasOwnProperty(name)) {
        this._unmountChildByName(prevChildren[name], name);
      }
    }
    this.setTextContent(nextContent);
    errorThrown = false;
  } finally {
    updateDepth$$module$react$lib$ReactMultiChild--;
    if (!updateDepth$$module$react$lib$ReactMultiChild) {
      if (errorThrown) {
        clearQueue$$module$react$lib$ReactMultiChild();
      } else {
        processQueue$$module$react$lib$ReactMultiChild();
      }
    }
  }
}, updateChildren:function(nextNestedChildren, transaction, context) {
  updateDepth$$module$react$lib$ReactMultiChild++;
  var errorThrown = true;
  try {
    this._updateChildren(nextNestedChildren, transaction, context);
    errorThrown = false;
  } finally {
    updateDepth$$module$react$lib$ReactMultiChild--;
    if (!updateDepth$$module$react$lib$ReactMultiChild) {
      if (errorThrown) {
        clearQueue$$module$react$lib$ReactMultiChild();
      } else {
        processQueue$$module$react$lib$ReactMultiChild();
      }
    }
  }
}, _updateChildren:function(nextNestedChildren, transaction, context) {
  var prevChildren = this._renderedChildren;
  var nextChildren = ReactChildReconciler$$module$react$lib$ReactMultiChild.updateChildren(prevChildren, nextNestedChildren, transaction, context);
  this._renderedChildren = nextChildren;
  if (!nextChildren && !prevChildren) {
    return;
  }
  var name;
  var lastIndex = 0;
  var nextIndex = 0;
  for (name in nextChildren) {
    if (!nextChildren.hasOwnProperty(name)) {
      continue;
    }
    var prevChild = prevChildren && prevChildren[name];
    var nextChild = nextChildren[name];
    if (prevChild === nextChild) {
      this.moveChild(prevChild, nextIndex, lastIndex);
      lastIndex = Math.max(prevChild._mountIndex, lastIndex);
      prevChild._mountIndex = nextIndex;
    } else {
      if (prevChild) {
        lastIndex = Math.max(prevChild._mountIndex, lastIndex);
        this._unmountChildByName(prevChild, name);
      }
      this._mountChildByNameAtIndex(nextChild, name, nextIndex, transaction, context);
    }
    nextIndex++;
  }
  for (name in prevChildren) {
    if (prevChildren.hasOwnProperty(name) && !(nextChildren && nextChildren.hasOwnProperty(name))) {
      this._unmountChildByName(prevChildren[name], name);
    }
  }
}, unmountChildren:function() {
  var renderedChildren = this._renderedChildren;
  ReactChildReconciler$$module$react$lib$ReactMultiChild.unmountChildren(renderedChildren);
  this._renderedChildren = null;
}, moveChild:function(child, toIndex, lastIndex) {
  if (child._mountIndex < lastIndex) {
    enqueueMove$$module$react$lib$ReactMultiChild(this._rootNodeID, child._mountIndex, toIndex);
  }
}, createChild:function(child, mountImage) {
  enqueueMarkup$$module$react$lib$ReactMultiChild(this._rootNodeID, mountImage, child._mountIndex);
}, removeChild:function(child) {
  enqueueRemove$$module$react$lib$ReactMultiChild(this._rootNodeID, child._mountIndex);
}, setTextContent:function(textContent) {
  enqueueTextContent$$module$react$lib$ReactMultiChild(this._rootNodeID, textContent);
}, _mountChildByNameAtIndex:function(child, name, index, transaction, context) {
  var rootID = this._rootNodeID + name;
  var mountImage = ReactReconciler$$module$react$lib$ReactMultiChild.mountComponent(child, rootID, transaction, context);
  child._mountIndex = index;
  this.createChild(child, mountImage);
}, _unmountChildByName:function(child, name) {
  this.removeChild(child);
  child._mountIndex = null;
}}};
module$react$lib$ReactMultiChild = ReactMultiChild$$module$react$lib$ReactMultiChild;
