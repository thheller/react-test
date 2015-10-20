goog.provide("module$react$lib$ExecutionEnvironment");
var canUseDOM$$module$react$lib$ExecutionEnvironment = !!(typeof window !== "undefined" && window.document && window.document.createElement);
var ExecutionEnvironment$$module$react$lib$ExecutionEnvironment = {canUseDOM:canUseDOM$$module$react$lib$ExecutionEnvironment, canUseWorkers:typeof Worker !== "undefined", canUseEventListeners:canUseDOM$$module$react$lib$ExecutionEnvironment && !!(window.addEventListener || window.attachEvent), canUseViewport:canUseDOM$$module$react$lib$ExecutionEnvironment && !!window.screen, isInWorker:!canUseDOM$$module$react$lib$ExecutionEnvironment};
module$react$lib$ExecutionEnvironment = ExecutionEnvironment$$module$react$lib$ExecutionEnvironment;
