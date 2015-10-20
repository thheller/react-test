goog.provide("module$react$lib$CSSProperty");
var isUnitlessNumber$$module$react$lib$CSSProperty = {boxFlex:true, boxFlexGroup:true, columnCount:true, flex:true, flexGrow:true, flexPositive:true, flexShrink:true, flexNegative:true, fontWeight:true, lineClamp:true, lineHeight:true, opacity:true, order:true, orphans:true, widows:true, zIndex:true, zoom:true, fillOpacity:true, strokeDashoffset:true, strokeOpacity:true, strokeWidth:true};
function prefixKey$$module$react$lib$CSSProperty(prefix, key) {
  return prefix + key.charAt(0).toUpperCase() + key.substring(1);
}
var prefixes$$module$react$lib$CSSProperty = ["Webkit", "ms", "Moz", "O"];
Object.keys(isUnitlessNumber$$module$react$lib$CSSProperty).forEach(function(prop) {
  prefixes$$module$react$lib$CSSProperty.forEach(function(prefix) {
    isUnitlessNumber$$module$react$lib$CSSProperty[prefixKey$$module$react$lib$CSSProperty(prefix, prop)] = isUnitlessNumber$$module$react$lib$CSSProperty[prop];
  });
});
var shorthandPropertyExpansions$$module$react$lib$CSSProperty = {background:{backgroundImage:true, backgroundPosition:true, backgroundRepeat:true, backgroundColor:true}, border:{borderWidth:true, borderStyle:true, borderColor:true}, borderBottom:{borderBottomWidth:true, borderBottomStyle:true, borderBottomColor:true}, borderLeft:{borderLeftWidth:true, borderLeftStyle:true, borderLeftColor:true}, borderRight:{borderRightWidth:true, borderRightStyle:true, borderRightColor:true}, borderTop:{borderTopWidth:true, 
borderTopStyle:true, borderTopColor:true}, font:{fontStyle:true, fontVariant:true, fontWeight:true, fontSize:true, lineHeight:true, fontFamily:true}};
var CSSProperty$$module$react$lib$CSSProperty = {isUnitlessNumber:isUnitlessNumber$$module$react$lib$CSSProperty, shorthandPropertyExpansions:shorthandPropertyExpansions$$module$react$lib$CSSProperty};
module$react$lib$CSSProperty = CSSProperty$$module$react$lib$CSSProperty;
