goog.provide("module$react$lib$ReactDOM");
goog.require("module$react$lib$mapObject");
goog.require("module$react$lib$ReactElementValidator");
goog.require("module$react$lib$ReactElement");
var ReactElement$$module$react$lib$ReactDOM = module$react$lib$ReactElement;
var ReactElementValidator$$module$react$lib$ReactDOM = module$react$lib$ReactElementValidator;
var mapObject$$module$react$lib$ReactDOM = module$react$lib$mapObject;
function createDOMFactory$$module$react$lib$ReactDOM(tag) {
  if ("production" !== process.env.NODE_ENV) {
    return ReactElementValidator$$module$react$lib$ReactDOM.createFactory(tag);
  }
  return ReactElement$$module$react$lib$ReactDOM.createFactory(tag);
}
var ReactDOM$$module$react$lib$ReactDOM = mapObject$$module$react$lib$ReactDOM({a:"a", abbr:"abbr", address:"address", area:"area", article:"article", aside:"aside", audio:"audio", b:"b", base:"base", bdi:"bdi", bdo:"bdo", big:"big", blockquote:"blockquote", body:"body", br:"br", button:"button", canvas:"canvas", caption:"caption", cite:"cite", code:"code", col:"col", colgroup:"colgroup", data:"data", datalist:"datalist", dd:"dd", del:"del", details:"details", dfn:"dfn", dialog:"dialog", div:"div", 
dl:"dl", dt:"dt", em:"em", embed:"embed", fieldset:"fieldset", figcaption:"figcaption", figure:"figure", footer:"footer", form:"form", h1:"h1", h2:"h2", h3:"h3", h4:"h4", h5:"h5", h6:"h6", head:"head", header:"header", hr:"hr", html:"html", i:"i", iframe:"iframe", img:"img", input:"input", ins:"ins", kbd:"kbd", keygen:"keygen", label:"label", legend:"legend", li:"li", link:"link", main:"main", map:"map", mark:"mark", menu:"menu", menuitem:"menuitem", meta:"meta", meter:"meter", nav:"nav", noscript:"noscript", 
object:"object", ol:"ol", optgroup:"optgroup", option:"option", output:"output", p:"p", param:"param", picture:"picture", pre:"pre", progress:"progress", q:"q", rp:"rp", rt:"rt", ruby:"ruby", s:"s", samp:"samp", script:"script", section:"section", select:"select", small:"small", source:"source", span:"span", strong:"strong", style:"style", sub:"sub", summary:"summary", sup:"sup", table:"table", tbody:"tbody", td:"td", textarea:"textarea", tfoot:"tfoot", th:"th", thead:"thead", time:"time", title:"title", 
tr:"tr", track:"track", u:"u", ul:"ul", "var":"var", video:"video", wbr:"wbr", circle:"circle", clipPath:"clipPath", defs:"defs", ellipse:"ellipse", g:"g", line:"line", linearGradient:"linearGradient", mask:"mask", path:"path", pattern:"pattern", polygon:"polygon", polyline:"polyline", radialGradient:"radialGradient", rect:"rect", stop:"stop", svg:"svg", text:"text", tspan:"tspan"}, createDOMFactory$$module$react$lib$ReactDOM);
module$react$lib$ReactDOM = ReactDOM$$module$react$lib$ReactDOM;
