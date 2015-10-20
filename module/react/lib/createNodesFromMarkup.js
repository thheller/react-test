goog.provide("module$react$lib$createNodesFromMarkup");
goog.require("module$react$lib$invariant");
goog.require("module$react$lib$getMarkupWrap");
goog.require("module$react$lib$createArrayFromMixed");
goog.require("module$react$lib$ExecutionEnvironment");
var ExecutionEnvironment$$module$react$lib$createNodesFromMarkup = module$react$lib$ExecutionEnvironment;
var createArrayFromMixed$$module$react$lib$createNodesFromMarkup = module$react$lib$createArrayFromMixed;
var getMarkupWrap$$module$react$lib$createNodesFromMarkup = module$react$lib$getMarkupWrap;
var invariant$$module$react$lib$createNodesFromMarkup = module$react$lib$invariant;
var dummyNode$$module$react$lib$createNodesFromMarkup = ExecutionEnvironment$$module$react$lib$createNodesFromMarkup.canUseDOM ? document.createElement("div") : null;
var nodeNamePattern$$module$react$lib$createNodesFromMarkup = /^\s*<(\w+)/;
function getNodeName$$module$react$lib$createNodesFromMarkup(markup) {
  var nodeNameMatch = markup.match(nodeNamePattern$$module$react$lib$createNodesFromMarkup);
  return nodeNameMatch && nodeNameMatch[1].toLowerCase();
}
function createNodesFromMarkup$$module$react$lib$createNodesFromMarkup(markup, handleScript) {
  var node = dummyNode$$module$react$lib$createNodesFromMarkup;
  "production" !== process.env.NODE_ENV ? invariant$$module$react$lib$createNodesFromMarkup(!!dummyNode$$module$react$lib$createNodesFromMarkup, "createNodesFromMarkup dummy not initialized") : invariant$$module$react$lib$createNodesFromMarkup(!!dummyNode$$module$react$lib$createNodesFromMarkup);
  var nodeName = getNodeName$$module$react$lib$createNodesFromMarkup(markup);
  var wrap = nodeName && getMarkupWrap$$module$react$lib$createNodesFromMarkup(nodeName);
  if (wrap) {
    node.innerHTML = wrap[1] + markup + wrap[2];
    var wrapDepth = wrap[0];
    while (wrapDepth--) {
      node = node.lastChild;
    }
  } else {
    node.innerHTML = markup;
  }
  var scripts = node.getElementsByTagName("script");
  if (scripts.length) {
    "production" !== process.env.NODE_ENV ? invariant$$module$react$lib$createNodesFromMarkup(handleScript, "createNodesFromMarkup(...): Unexpected \x3cscript\x3e element rendered.") : invariant$$module$react$lib$createNodesFromMarkup(handleScript);
    createArrayFromMixed$$module$react$lib$createNodesFromMarkup(scripts).forEach(handleScript);
  }
  var nodes = createArrayFromMixed$$module$react$lib$createNodesFromMarkup(node.childNodes);
  while (node.lastChild) {
    node.removeChild(node.lastChild);
  }
  return nodes;
}
module$react$lib$createNodesFromMarkup = createNodesFromMarkup$$module$react$lib$createNodesFromMarkup;
