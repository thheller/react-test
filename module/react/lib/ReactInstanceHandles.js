goog.provide("module$react$lib$ReactInstanceHandles");
goog.require("module$react$lib$invariant");
goog.require("module$react$lib$ReactRootIndex");
var ReactRootIndex$$module$react$lib$ReactInstanceHandles = module$react$lib$ReactRootIndex;
var invariant$$module$react$lib$ReactInstanceHandles = module$react$lib$invariant;
var SEPARATOR$$module$react$lib$ReactInstanceHandles = ".";
var SEPARATOR_LENGTH$$module$react$lib$ReactInstanceHandles = SEPARATOR$$module$react$lib$ReactInstanceHandles.length;
var MAX_TREE_DEPTH$$module$react$lib$ReactInstanceHandles = 100;
function getReactRootIDString$$module$react$lib$ReactInstanceHandles(index) {
  return SEPARATOR$$module$react$lib$ReactInstanceHandles + index.toString(36);
}
function isBoundary$$module$react$lib$ReactInstanceHandles(id, index) {
  return id.charAt(index) === SEPARATOR$$module$react$lib$ReactInstanceHandles || index === id.length;
}
function isValidID$$module$react$lib$ReactInstanceHandles(id) {
  return id === "" || id.charAt(0) === SEPARATOR$$module$react$lib$ReactInstanceHandles && id.charAt(id.length - 1) !== SEPARATOR$$module$react$lib$ReactInstanceHandles;
}
function isAncestorIDOf$$module$react$lib$ReactInstanceHandles(ancestorID, descendantID) {
  return descendantID.indexOf(ancestorID) === 0 && isBoundary$$module$react$lib$ReactInstanceHandles(descendantID, ancestorID.length);
}
function getParentID$$module$react$lib$ReactInstanceHandles(id) {
  return id ? id.substr(0, id.lastIndexOf(SEPARATOR$$module$react$lib$ReactInstanceHandles)) : "";
}
function getNextDescendantID$$module$react$lib$ReactInstanceHandles(ancestorID, destinationID) {
  "production" !== process.env.NODE_ENV ? invariant$$module$react$lib$ReactInstanceHandles(isValidID$$module$react$lib$ReactInstanceHandles(ancestorID) && isValidID$$module$react$lib$ReactInstanceHandles(destinationID), "getNextDescendantID(%s, %s): Received an invalid React DOM ID.", ancestorID, destinationID) : invariant$$module$react$lib$ReactInstanceHandles(isValidID$$module$react$lib$ReactInstanceHandles(ancestorID) && isValidID$$module$react$lib$ReactInstanceHandles(destinationID));
  "production" !== process.env.NODE_ENV ? invariant$$module$react$lib$ReactInstanceHandles(isAncestorIDOf$$module$react$lib$ReactInstanceHandles(ancestorID, destinationID), "getNextDescendantID(...): React has made an invalid assumption about " + "the DOM hierarchy. Expected `%s` to be an ancestor of `%s`.", ancestorID, destinationID) : invariant$$module$react$lib$ReactInstanceHandles(isAncestorIDOf$$module$react$lib$ReactInstanceHandles(ancestorID, destinationID));
  if (ancestorID === destinationID) {
    return ancestorID;
  }
  var start = ancestorID.length + SEPARATOR_LENGTH$$module$react$lib$ReactInstanceHandles;
  var i;
  for (i = start;i < destinationID.length;i++) {
    if (isBoundary$$module$react$lib$ReactInstanceHandles(destinationID, i)) {
      break;
    }
  }
  return destinationID.substr(0, i);
}
function getFirstCommonAncestorID$$module$react$lib$ReactInstanceHandles(oneID, twoID) {
  var minLength = Math.min(oneID.length, twoID.length);
  if (minLength === 0) {
    return "";
  }
  var lastCommonMarkerIndex = 0;
  for (var i = 0;i <= minLength;i++) {
    if (isBoundary$$module$react$lib$ReactInstanceHandles(oneID, i) && isBoundary$$module$react$lib$ReactInstanceHandles(twoID, i)) {
      lastCommonMarkerIndex = i;
    } else {
      if (oneID.charAt(i) !== twoID.charAt(i)) {
        break;
      }
    }
  }
  var longestCommonID = oneID.substr(0, lastCommonMarkerIndex);
  "production" !== process.env.NODE_ENV ? invariant$$module$react$lib$ReactInstanceHandles(isValidID$$module$react$lib$ReactInstanceHandles(longestCommonID), "getFirstCommonAncestorID(%s, %s): Expected a valid React DOM ID: %s", oneID, twoID, longestCommonID) : invariant$$module$react$lib$ReactInstanceHandles(isValidID$$module$react$lib$ReactInstanceHandles(longestCommonID));
  return longestCommonID;
}
function traverseParentPath$$module$react$lib$ReactInstanceHandles(start, stop, cb, arg, skipFirst, skipLast) {
  start = start || "";
  stop = stop || "";
  "production" !== process.env.NODE_ENV ? invariant$$module$react$lib$ReactInstanceHandles(start !== stop, "traverseParentPath(...): Cannot traverse from and to the same ID, `%s`.", start) : invariant$$module$react$lib$ReactInstanceHandles(start !== stop);
  var traverseUp = isAncestorIDOf$$module$react$lib$ReactInstanceHandles(stop, start);
  "production" !== process.env.NODE_ENV ? invariant$$module$react$lib$ReactInstanceHandles(traverseUp || isAncestorIDOf$$module$react$lib$ReactInstanceHandles(start, stop), "traverseParentPath(%s, %s, ...): Cannot traverse from two IDs that do " + "not have a parent path.", start, stop) : invariant$$module$react$lib$ReactInstanceHandles(traverseUp || isAncestorIDOf$$module$react$lib$ReactInstanceHandles(start, stop));
  var depth = 0;
  var traverse = traverseUp ? getParentID$$module$react$lib$ReactInstanceHandles : getNextDescendantID$$module$react$lib$ReactInstanceHandles;
  for (var id = start;;id = traverse(id, stop)) {
    var ret;
    if ((!skipFirst || id !== start) && (!skipLast || id !== stop)) {
      ret = cb(id, traverseUp, arg);
    }
    if (ret === false || id === stop) {
      break;
    }
    "production" !== process.env.NODE_ENV ? invariant$$module$react$lib$ReactInstanceHandles(depth++ < MAX_TREE_DEPTH$$module$react$lib$ReactInstanceHandles, "traverseParentPath(%s, %s, ...): Detected an infinite loop while " + "traversing the React DOM ID tree. This may be due to malformed IDs: %s", start, stop) : invariant$$module$react$lib$ReactInstanceHandles(depth++ < MAX_TREE_DEPTH$$module$react$lib$ReactInstanceHandles);
  }
}
var ReactInstanceHandles$$module$react$lib$ReactInstanceHandles = {createReactRootID:function() {
  return getReactRootIDString$$module$react$lib$ReactInstanceHandles(ReactRootIndex$$module$react$lib$ReactInstanceHandles.createReactRootIndex());
}, createReactID:function(rootID, name) {
  return rootID + name;
}, getReactRootIDFromNodeID:function(id) {
  if (id && id.charAt(0) === SEPARATOR$$module$react$lib$ReactInstanceHandles && id.length > 1) {
    var index = id.indexOf(SEPARATOR$$module$react$lib$ReactInstanceHandles, 1);
    return index > -1 ? id.substr(0, index) : id;
  }
  return null;
}, traverseEnterLeave:function(leaveID, enterID, cb, upArg, downArg) {
  var ancestorID = getFirstCommonAncestorID$$module$react$lib$ReactInstanceHandles(leaveID, enterID);
  if (ancestorID !== leaveID) {
    traverseParentPath$$module$react$lib$ReactInstanceHandles(leaveID, ancestorID, cb, upArg, false, true);
  }
  if (ancestorID !== enterID) {
    traverseParentPath$$module$react$lib$ReactInstanceHandles(ancestorID, enterID, cb, downArg, true, false);
  }
}, traverseTwoPhase:function(targetID, cb, arg) {
  if (targetID) {
    traverseParentPath$$module$react$lib$ReactInstanceHandles("", targetID, cb, arg, true, false);
    traverseParentPath$$module$react$lib$ReactInstanceHandles(targetID, "", cb, arg, false, true);
  }
}, traverseAncestors:function(targetID, cb, arg) {
  traverseParentPath$$module$react$lib$ReactInstanceHandles("", targetID, cb, arg, true, false);
}, _getFirstCommonAncestorID:getFirstCommonAncestorID$$module$react$lib$ReactInstanceHandles, _getNextDescendantID:getNextDescendantID$$module$react$lib$ReactInstanceHandles, isAncestorIDOf:isAncestorIDOf$$module$react$lib$ReactInstanceHandles, SEPARATOR:SEPARATOR$$module$react$lib$ReactInstanceHandles};
module$react$lib$ReactInstanceHandles = ReactInstanceHandles$$module$react$lib$ReactInstanceHandles;
