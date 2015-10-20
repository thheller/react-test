goog.provide("module$react$lib$EventPluginRegistry");
goog.require("module$react$lib$invariant");
var invariant$$module$react$lib$EventPluginRegistry = module$react$lib$invariant;
var EventPluginOrder$$module$react$lib$EventPluginRegistry = null;
var namesToPlugins$$module$react$lib$EventPluginRegistry = {};
function recomputePluginOrdering$$module$react$lib$EventPluginRegistry() {
  if (!EventPluginOrder$$module$react$lib$EventPluginRegistry) {
    return;
  }
  for (var pluginName in namesToPlugins$$module$react$lib$EventPluginRegistry) {
    var PluginModule = namesToPlugins$$module$react$lib$EventPluginRegistry[pluginName];
    var pluginIndex = EventPluginOrder$$module$react$lib$EventPluginRegistry.indexOf(pluginName);
    "production" !== process.env.NODE_ENV ? invariant$$module$react$lib$EventPluginRegistry(pluginIndex > -1, "EventPluginRegistry: Cannot inject event plugins that do not exist in " + "the plugin ordering, `%s`.", pluginName) : invariant$$module$react$lib$EventPluginRegistry(pluginIndex > -1);
    if (EventPluginRegistry$$module$react$lib$EventPluginRegistry.plugins[pluginIndex]) {
      continue;
    }
    "production" !== process.env.NODE_ENV ? invariant$$module$react$lib$EventPluginRegistry(PluginModule.extractEvents, "EventPluginRegistry: Event plugins must implement an `extractEvents` " + "method, but `%s` does not.", pluginName) : invariant$$module$react$lib$EventPluginRegistry(PluginModule.extractEvents);
    EventPluginRegistry$$module$react$lib$EventPluginRegistry.plugins[pluginIndex] = PluginModule;
    var publishedEvents = PluginModule.eventTypes;
    for (var eventName in publishedEvents) {
      "production" !== process.env.NODE_ENV ? invariant$$module$react$lib$EventPluginRegistry(publishEventForPlugin$$module$react$lib$EventPluginRegistry(publishedEvents[eventName], PluginModule, eventName), "EventPluginRegistry: Failed to publish event `%s` for plugin `%s`.", eventName, pluginName) : invariant$$module$react$lib$EventPluginRegistry(publishEventForPlugin$$module$react$lib$EventPluginRegistry(publishedEvents[eventName], PluginModule, eventName));
    }
  }
}
function publishEventForPlugin$$module$react$lib$EventPluginRegistry(dispatchConfig, PluginModule, eventName) {
  "production" !== process.env.NODE_ENV ? invariant$$module$react$lib$EventPluginRegistry(!EventPluginRegistry$$module$react$lib$EventPluginRegistry.eventNameDispatchConfigs.hasOwnProperty(eventName), "EventPluginHub: More than one plugin attempted to publish the same " + "event name, `%s`.", eventName) : invariant$$module$react$lib$EventPluginRegistry(!EventPluginRegistry$$module$react$lib$EventPluginRegistry.eventNameDispatchConfigs.hasOwnProperty(eventName));
  EventPluginRegistry$$module$react$lib$EventPluginRegistry.eventNameDispatchConfigs[eventName] = dispatchConfig;
  var phasedRegistrationNames = dispatchConfig.phasedRegistrationNames;
  if (phasedRegistrationNames) {
    for (var phaseName in phasedRegistrationNames) {
      if (phasedRegistrationNames.hasOwnProperty(phaseName)) {
        var phasedRegistrationName = phasedRegistrationNames[phaseName];
        publishRegistrationName$$module$react$lib$EventPluginRegistry(phasedRegistrationName, PluginModule, eventName);
      }
    }
    return true;
  } else {
    if (dispatchConfig.registrationName) {
      publishRegistrationName$$module$react$lib$EventPluginRegistry(dispatchConfig.registrationName, PluginModule, eventName);
      return true;
    }
  }
  return false;
}
function publishRegistrationName$$module$react$lib$EventPluginRegistry(registrationName, PluginModule, eventName) {
  "production" !== process.env.NODE_ENV ? invariant$$module$react$lib$EventPluginRegistry(!EventPluginRegistry$$module$react$lib$EventPluginRegistry.registrationNameModules[registrationName], "EventPluginHub: More than one plugin attempted to publish the same " + "registration name, `%s`.", registrationName) : invariant$$module$react$lib$EventPluginRegistry(!EventPluginRegistry$$module$react$lib$EventPluginRegistry.registrationNameModules[registrationName]);
  EventPluginRegistry$$module$react$lib$EventPluginRegistry.registrationNameModules[registrationName] = PluginModule;
  EventPluginRegistry$$module$react$lib$EventPluginRegistry.registrationNameDependencies[registrationName] = PluginModule.eventTypes[eventName].dependencies;
}
var EventPluginRegistry$$module$react$lib$EventPluginRegistry = {plugins:[], eventNameDispatchConfigs:{}, registrationNameModules:{}, registrationNameDependencies:{}, injectEventPluginOrder:function(InjectedEventPluginOrder) {
  "production" !== process.env.NODE_ENV ? invariant$$module$react$lib$EventPluginRegistry(!EventPluginOrder$$module$react$lib$EventPluginRegistry, "EventPluginRegistry: Cannot inject event plugin ordering more than " + "once. You are likely trying to load more than one copy of React.") : invariant$$module$react$lib$EventPluginRegistry(!EventPluginOrder$$module$react$lib$EventPluginRegistry);
  EventPluginOrder$$module$react$lib$EventPluginRegistry = Array.prototype.slice.call(InjectedEventPluginOrder);
  recomputePluginOrdering$$module$react$lib$EventPluginRegistry();
}, injectEventPluginsByName:function(injectedNamesToPlugins) {
  var isOrderingDirty = false;
  for (var pluginName in injectedNamesToPlugins) {
    if (!injectedNamesToPlugins.hasOwnProperty(pluginName)) {
      continue;
    }
    var PluginModule = injectedNamesToPlugins[pluginName];
    if (!namesToPlugins$$module$react$lib$EventPluginRegistry.hasOwnProperty(pluginName) || namesToPlugins$$module$react$lib$EventPluginRegistry[pluginName] !== PluginModule) {
      "production" !== process.env.NODE_ENV ? invariant$$module$react$lib$EventPluginRegistry(!namesToPlugins$$module$react$lib$EventPluginRegistry[pluginName], "EventPluginRegistry: Cannot inject two different event plugins " + "using the same name, `%s`.", pluginName) : invariant$$module$react$lib$EventPluginRegistry(!namesToPlugins$$module$react$lib$EventPluginRegistry[pluginName]);
      namesToPlugins$$module$react$lib$EventPluginRegistry[pluginName] = PluginModule;
      isOrderingDirty = true;
    }
  }
  if (isOrderingDirty) {
    recomputePluginOrdering$$module$react$lib$EventPluginRegistry();
  }
}, getPluginModuleForEvent:function(event) {
  var dispatchConfig = event.dispatchConfig;
  if (dispatchConfig.registrationName) {
    return EventPluginRegistry$$module$react$lib$EventPluginRegistry.registrationNameModules[dispatchConfig.registrationName] || null;
  }
  for (var phase in dispatchConfig.phasedRegistrationNames) {
    if (!dispatchConfig.phasedRegistrationNames.hasOwnProperty(phase)) {
      continue;
    }
    var PluginModule = EventPluginRegistry$$module$react$lib$EventPluginRegistry.registrationNameModules[dispatchConfig.phasedRegistrationNames[phase]];
    if (PluginModule) {
      return PluginModule;
    }
  }
  return null;
}, _resetEventPlugins:function() {
  EventPluginOrder$$module$react$lib$EventPluginRegistry = null;
  for (var pluginName in namesToPlugins$$module$react$lib$EventPluginRegistry) {
    if (namesToPlugins$$module$react$lib$EventPluginRegistry.hasOwnProperty(pluginName)) {
      delete namesToPlugins$$module$react$lib$EventPluginRegistry[pluginName];
    }
  }
  EventPluginRegistry$$module$react$lib$EventPluginRegistry.plugins.length = 0;
  var eventNameDispatchConfigs = EventPluginRegistry$$module$react$lib$EventPluginRegistry.eventNameDispatchConfigs;
  for (var eventName in eventNameDispatchConfigs) {
    if (eventNameDispatchConfigs.hasOwnProperty(eventName)) {
      delete eventNameDispatchConfigs[eventName];
    }
  }
  var registrationNameModules = EventPluginRegistry$$module$react$lib$EventPluginRegistry.registrationNameModules;
  for (var registrationName in registrationNameModules) {
    if (registrationNameModules.hasOwnProperty(registrationName)) {
      delete registrationNameModules[registrationName];
    }
  }
}};
module$react$lib$EventPluginRegistry = EventPluginRegistry$$module$react$lib$EventPluginRegistry;
