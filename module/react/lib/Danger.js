goog.provide("module$react$lib$Danger");
goog.require("module$react$lib$invariant");
goog.require("module$react$lib$getMarkupWrap");
goog.require("module$react$lib$emptyFunction");
goog.require("module$react$lib$createNodesFromMarkup");
goog.require("module$react$lib$ExecutionEnvironment");
var ExecutionEnvironment$$module$react$lib$Danger = module$react$lib$ExecutionEnvironment;
var createNodesFromMarkup$$module$react$lib$Danger = module$react$lib$createNodesFromMarkup;
var emptyFunction$$module$react$lib$Danger = module$react$lib$emptyFunction;
var getMarkupWrap$$module$react$lib$Danger = module$react$lib$getMarkupWrap;
var invariant$$module$react$lib$Danger = module$react$lib$invariant;
var OPEN_TAG_NAME_EXP$$module$react$lib$Danger = /^(<[^ \/>]+)/;
var RESULT_INDEX_ATTR$$module$react$lib$Danger = "data-danger-index";
function getNodeName$$module$react$lib$Danger(markup) {
  return markup.substring(1, markup.indexOf(" "));
}
var Danger$$module$react$lib$Danger = {dangerouslyRenderMarkup:function(markupList) {
  "production" !== process.env.NODE_ENV ? invariant$$module$react$lib$Danger(ExecutionEnvironment$$module$react$lib$Danger.canUseDOM, "dangerouslyRenderMarkup(...): Cannot render markup in a worker " + "thread. Make sure `window` and `document` are available globally " + "before requiring React when unit testing or use " + "React.renderToString for server rendering.") : invariant$$module$react$lib$Danger(ExecutionEnvironment$$module$react$lib$Danger.canUseDOM);
  var nodeName;
  var markupByNodeName = {};
  for (var i = 0;i < markupList.length;i++) {
    "production" !== process.env.NODE_ENV ? invariant$$module$react$lib$Danger(markupList[i], "dangerouslyRenderMarkup(...): Missing markup.") : invariant$$module$react$lib$Danger(markupList[i]);
    nodeName = getNodeName$$module$react$lib$Danger(markupList[i]);
    nodeName = getMarkupWrap$$module$react$lib$Danger(nodeName) ? nodeName : "*";
    markupByNodeName[nodeName] = markupByNodeName[nodeName] || [];
    markupByNodeName[nodeName][i] = markupList[i];
  }
  var resultList = [];
  var resultListAssignmentCount = 0;
  for (nodeName in markupByNodeName) {
    if (!markupByNodeName.hasOwnProperty(nodeName)) {
      continue;
    }
    var markupListByNodeName = markupByNodeName[nodeName];
    var resultIndex;
    for (resultIndex in markupListByNodeName) {
      if (markupListByNodeName.hasOwnProperty(resultIndex)) {
        var markup = markupListByNodeName[resultIndex];
        markupListByNodeName[resultIndex] = markup.replace(OPEN_TAG_NAME_EXP$$module$react$lib$Danger, "$1 " + RESULT_INDEX_ATTR$$module$react$lib$Danger + '\x3d"' + resultIndex + '" ');
      }
    }
    var renderNodes = createNodesFromMarkup$$module$react$lib$Danger(markupListByNodeName.join(""), emptyFunction$$module$react$lib$Danger);
    for (var j = 0;j < renderNodes.length;++j) {
      var renderNode = renderNodes[j];
      if (renderNode.hasAttribute && renderNode.hasAttribute(RESULT_INDEX_ATTR$$module$react$lib$Danger)) {
        resultIndex = +renderNode.getAttribute(RESULT_INDEX_ATTR$$module$react$lib$Danger);
        renderNode.removeAttribute(RESULT_INDEX_ATTR$$module$react$lib$Danger);
        "production" !== process.env.NODE_ENV ? invariant$$module$react$lib$Danger(!resultList.hasOwnProperty(resultIndex), "Danger: Assigning to an already-occupied result index.") : invariant$$module$react$lib$Danger(!resultList.hasOwnProperty(resultIndex));
        resultList[resultIndex] = renderNode;
        resultListAssignmentCount += 1;
      } else {
        if ("production" !== process.env.NODE_ENV) {
          console.error("Danger: Discarding unexpected node:", renderNode);
        }
      }
    }
  }
  "production" !== process.env.NODE_ENV ? invariant$$module$react$lib$Danger(resultListAssignmentCount === resultList.length, "Danger: Did not assign to every index of resultList.") : invariant$$module$react$lib$Danger(resultListAssignmentCount === resultList.length);
  "production" !== process.env.NODE_ENV ? invariant$$module$react$lib$Danger(resultList.length === markupList.length, "Danger: Expected markup to render %s nodes, but rendered %s.", markupList.length, resultList.length) : invariant$$module$react$lib$Danger(resultList.length === markupList.length);
  return resultList;
}, dangerouslyReplaceNodeWithMarkup:function(oldChild, markup) {
  "production" !== process.env.NODE_ENV ? invariant$$module$react$lib$Danger(ExecutionEnvironment$$module$react$lib$Danger.canUseDOM, "dangerouslyReplaceNodeWithMarkup(...): Cannot render markup in a " + "worker thread. Make sure `window` and `document` are available " + "globally before requiring React when unit testing or use " + "React.renderToString for server rendering.") : invariant$$module$react$lib$Danger(ExecutionEnvironment$$module$react$lib$Danger.canUseDOM);
  "production" !== process.env.NODE_ENV ? invariant$$module$react$lib$Danger(markup, "dangerouslyReplaceNodeWithMarkup(...): Missing markup.") : invariant$$module$react$lib$Danger(markup);
  "production" !== process.env.NODE_ENV ? invariant$$module$react$lib$Danger(oldChild.tagName.toLowerCase() !== "html", "dangerouslyReplaceNodeWithMarkup(...): Cannot replace markup of the " + "\x3chtml\x3e node. This is because browser quirks make this unreliable " + "and/or slow. If you want to render to the root you must use " + "server rendering. See React.renderToString().") : invariant$$module$react$lib$Danger(oldChild.tagName.toLowerCase() !== "html");
  var newChild = createNodesFromMarkup$$module$react$lib$Danger(markup, emptyFunction$$module$react$lib$Danger)[0];
  oldChild.parentNode.replaceChild(newChild, oldChild);
}};
module$react$lib$Danger = Danger$$module$react$lib$Danger;
