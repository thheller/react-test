goog.provide("module$react$lib$ReactComponentEnvironment");goog.require("module$react$lib$invariant");var invariant$$module$react$lib$ReactComponentEnvironment=module$react$lib$invariant;var injected$$module$react$lib$ReactComponentEnvironment=false;
var ReactComponentEnvironment$$module$react$lib$ReactComponentEnvironment={unmountIDFromEnvironment:null,replaceNodeWithMarkupByID:null,processChildrenUpdates:null,injection:{injectEnvironment:function(environment){"production"!==process.env.NODE_ENV?invariant$$module$react$lib$ReactComponentEnvironment(!injected$$module$react$lib$ReactComponentEnvironment,"ReactCompositeComponent: injectEnvironment() can only be called once."):invariant$$module$react$lib$ReactComponentEnvironment(!injected$$module$react$lib$ReactComponentEnvironment);
ReactComponentEnvironment$$module$react$lib$ReactComponentEnvironment.unmountIDFromEnvironment=environment.unmountIDFromEnvironment;ReactComponentEnvironment$$module$react$lib$ReactComponentEnvironment.replaceNodeWithMarkupByID=environment.replaceNodeWithMarkupByID;ReactComponentEnvironment$$module$react$lib$ReactComponentEnvironment.processChildrenUpdates=environment.processChildrenUpdates;injected$$module$react$lib$ReactComponentEnvironment=true}}};module$react$lib$ReactComponentEnvironment=ReactComponentEnvironment$$module$react$lib$ReactComponentEnvironment