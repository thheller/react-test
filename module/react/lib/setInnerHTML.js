goog.provide("module$react$lib$setInnerHTML");
goog.require("module$react$lib$ExecutionEnvironment");
var ExecutionEnvironment$$module$react$lib$setInnerHTML = module$react$lib$ExecutionEnvironment;
var WHITESPACE_TEST$$module$react$lib$setInnerHTML = /^[ \r\n\t\f]/;
var NONVISIBLE_TEST$$module$react$lib$setInnerHTML = /<(!--|link|noscript|meta|script|style)[ \r\n\t\f\/>]/;
var setInnerHTML$$module$react$lib$setInnerHTML = function(node, html) {
  node.innerHTML = html;
};
if (typeof MSApp !== "undefined" && MSApp.execUnsafeLocalFunction) {
  setInnerHTML$$module$react$lib$setInnerHTML = function(node, html) {
    MSApp.execUnsafeLocalFunction(function() {
      node.innerHTML = html;
    });
  };
}
if (ExecutionEnvironment$$module$react$lib$setInnerHTML.canUseDOM) {
  var testElement$$module$react$lib$setInnerHTML = document.createElement("div");
  testElement$$module$react$lib$setInnerHTML.innerHTML = " ";
  if (testElement$$module$react$lib$setInnerHTML.innerHTML === "") {
    setInnerHTML$$module$react$lib$setInnerHTML = function(node, html) {
      if (node.parentNode) {
        node.parentNode.replaceChild(node, node);
      }
      if (WHITESPACE_TEST$$module$react$lib$setInnerHTML.test(html) || html[0] === "\x3c" && NONVISIBLE_TEST$$module$react$lib$setInnerHTML.test(html)) {
        node.innerHTML = "\ufeff" + html;
        var textNode = node.firstChild;
        if (textNode.data.length === 1) {
          node.removeChild(textNode);
        } else {
          textNode.deleteData(0, 1);
        }
      } else {
        node.innerHTML = html;
      }
    };
  }
}
module$react$lib$setInnerHTML = setInnerHTML$$module$react$lib$setInnerHTML;
