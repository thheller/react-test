goog.provide("module$react$lib$ViewportMetrics");
var ViewportMetrics$$module$react$lib$ViewportMetrics = {currentScrollLeft:0, currentScrollTop:0, refreshScrollValues:function(scrollPosition) {
  ViewportMetrics$$module$react$lib$ViewportMetrics.currentScrollLeft = scrollPosition.x;
  ViewportMetrics$$module$react$lib$ViewportMetrics.currentScrollTop = scrollPosition.y;
}};
module$react$lib$ViewportMetrics = ViewportMetrics$$module$react$lib$ViewportMetrics;
