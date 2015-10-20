goog.provide("module$react$lib$onlyChild");
goog.require("module$react$lib$invariant");
goog.require("module$react$lib$ReactElement");
var ReactElement$$module$react$lib$onlyChild = module$react$lib$ReactElement;
var invariant$$module$react$lib$onlyChild = module$react$lib$invariant;
function onlyChild$$module$react$lib$onlyChild(children) {
  "production" !== process.env.NODE_ENV ? invariant$$module$react$lib$onlyChild(ReactElement$$module$react$lib$onlyChild.isValidElement(children), "onlyChild must be passed a children with exactly one child.") : invariant$$module$react$lib$onlyChild(ReactElement$$module$react$lib$onlyChild.isValidElement(children));
  return children;
}
module$react$lib$onlyChild = onlyChild$$module$react$lib$onlyChild;
