goog.provide("module$react$lib$getMarkupWrap");
goog.require("module$react$lib$invariant");
goog.require("module$react$lib$ExecutionEnvironment");
var ExecutionEnvironment$$module$react$lib$getMarkupWrap = module$react$lib$ExecutionEnvironment;
var invariant$$module$react$lib$getMarkupWrap = module$react$lib$invariant;
var dummyNode$$module$react$lib$getMarkupWrap = ExecutionEnvironment$$module$react$lib$getMarkupWrap.canUseDOM ? document.createElement("div") : null;
var shouldWrap$$module$react$lib$getMarkupWrap = {"circle":true, "clipPath":true, "defs":true, "ellipse":true, "g":true, "line":true, "linearGradient":true, "path":true, "polygon":true, "polyline":true, "radialGradient":true, "rect":true, "stop":true, "text":true};
var selectWrap$$module$react$lib$getMarkupWrap = [1, '\x3cselect multiple\x3d"true"\x3e', "\x3c/select\x3e"];
var tableWrap$$module$react$lib$getMarkupWrap = [1, "\x3ctable\x3e", "\x3c/table\x3e"];
var trWrap$$module$react$lib$getMarkupWrap = [3, "\x3ctable\x3e\x3ctbody\x3e\x3ctr\x3e", "\x3c/tr\x3e\x3c/tbody\x3e\x3c/table\x3e"];
var svgWrap$$module$react$lib$getMarkupWrap = [1, "\x3csvg\x3e", "\x3c/svg\x3e"];
var markupWrap$$module$react$lib$getMarkupWrap = {"*":[1, "?\x3cdiv\x3e", "\x3c/div\x3e"], "area":[1, "\x3cmap\x3e", "\x3c/map\x3e"], "col":[2, "\x3ctable\x3e\x3ctbody\x3e\x3c/tbody\x3e\x3ccolgroup\x3e", "\x3c/colgroup\x3e\x3c/table\x3e"], "legend":[1, "\x3cfieldset\x3e", "\x3c/fieldset\x3e"], "param":[1, "\x3cobject\x3e", "\x3c/object\x3e"], "tr":[2, "\x3ctable\x3e\x3ctbody\x3e", "\x3c/tbody\x3e\x3c/table\x3e"], "optgroup":selectWrap$$module$react$lib$getMarkupWrap, "option":selectWrap$$module$react$lib$getMarkupWrap, 
"caption":tableWrap$$module$react$lib$getMarkupWrap, "colgroup":tableWrap$$module$react$lib$getMarkupWrap, "tbody":tableWrap$$module$react$lib$getMarkupWrap, "tfoot":tableWrap$$module$react$lib$getMarkupWrap, "thead":tableWrap$$module$react$lib$getMarkupWrap, "td":trWrap$$module$react$lib$getMarkupWrap, "th":trWrap$$module$react$lib$getMarkupWrap, "circle":svgWrap$$module$react$lib$getMarkupWrap, "clipPath":svgWrap$$module$react$lib$getMarkupWrap, "defs":svgWrap$$module$react$lib$getMarkupWrap, "ellipse":svgWrap$$module$react$lib$getMarkupWrap, 
"g":svgWrap$$module$react$lib$getMarkupWrap, "line":svgWrap$$module$react$lib$getMarkupWrap, "linearGradient":svgWrap$$module$react$lib$getMarkupWrap, "path":svgWrap$$module$react$lib$getMarkupWrap, "polygon":svgWrap$$module$react$lib$getMarkupWrap, "polyline":svgWrap$$module$react$lib$getMarkupWrap, "radialGradient":svgWrap$$module$react$lib$getMarkupWrap, "rect":svgWrap$$module$react$lib$getMarkupWrap, "stop":svgWrap$$module$react$lib$getMarkupWrap, "text":svgWrap$$module$react$lib$getMarkupWrap};
function getMarkupWrap$$module$react$lib$getMarkupWrap(nodeName) {
  "production" !== process.env.NODE_ENV ? invariant$$module$react$lib$getMarkupWrap(!!dummyNode$$module$react$lib$getMarkupWrap, "Markup wrapping node not initialized") : invariant$$module$react$lib$getMarkupWrap(!!dummyNode$$module$react$lib$getMarkupWrap);
  if (!markupWrap$$module$react$lib$getMarkupWrap.hasOwnProperty(nodeName)) {
    nodeName = "*";
  }
  if (!shouldWrap$$module$react$lib$getMarkupWrap.hasOwnProperty(nodeName)) {
    if (nodeName === "*") {
      dummyNode$$module$react$lib$getMarkupWrap.innerHTML = "\x3clink /\x3e";
    } else {
      dummyNode$$module$react$lib$getMarkupWrap.innerHTML = "\x3c" + nodeName + "\x3e\x3c/" + nodeName + "\x3e";
    }
    shouldWrap$$module$react$lib$getMarkupWrap[nodeName] = !dummyNode$$module$react$lib$getMarkupWrap.firstChild;
  }
  return shouldWrap$$module$react$lib$getMarkupWrap[nodeName] ? markupWrap$$module$react$lib$getMarkupWrap[nodeName] : null;
}
module$react$lib$getMarkupWrap = getMarkupWrap$$module$react$lib$getMarkupWrap;
