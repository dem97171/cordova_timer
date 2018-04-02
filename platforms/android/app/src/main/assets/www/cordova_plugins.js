cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
  {
    "id": "cordova-plugin-device.device",
    "file": "plugins/cordova-plugin-device/www/device.js",
    "pluginId": "cordova-plugin-device",
    "clobbers": [
      "device"
    ]
  },
  {
    "id": "cordova-plugin-badge.Badge",
    "file": "plugins/cordova-plugin-badge/www/badge.js",
    "pluginId": "cordova-plugin-badge",
    "clobbers": [
      "cordova.plugins.notification.badge"
    ]
  },
  {
    "id": "cordova-plugin-local-notification.LocalNotification",
    "file": "plugins/cordova-plugin-local-notification/www/local-notification.js",
    "pluginId": "cordova-plugin-local-notification",
    "clobbers": [
      "cordova.plugins.notification.local"
    ]
  },
  {
    "id": "cordova-plugin-local-notification.LocalNotification.Core",
    "file": "plugins/cordova-plugin-local-notification/www/local-notification-core.js",
    "pluginId": "cordova-plugin-local-notification",
    "clobbers": [
      "cordova.plugins.notification.local.core",
      "plugin.notification.local.core"
    ]
  },
  {
    "id": "cordova-plugin-local-notification.LocalNotification.Util",
    "file": "plugins/cordova-plugin-local-notification/www/local-notification-util.js",
    "pluginId": "cordova-plugin-local-notification",
    "merges": [
      "cordova.plugins.notification.local.core",
      "plugin.notification.local.core"
    ]
  },
  {
    "id": "cordova-toforeground.toForeground",
    "file": "plugins/cordova-toforeground/www/ToForeground.js",
    "pluginId": "cordova-toforeground",
    "clobbers": [
      "cordova.plugins.toForeground"
    ]
  },
  {
    "id": "com.napolitano.cordova.plugin.intent.IntentPlugin",
    "file": "plugins/com.napolitano.cordova.plugin.intent/www/android/IntentPlugin.js",
    "pluginId": "com.napolitano.cordova.plugin.intent",
    "clobbers": [
      "IntentPlugin"
    ]
  },
  {
    "id": "sevensky-cordova-plugin-intent.intentPlugin",
    "file": "plugins/sevensky-cordova-plugin-intent/www/intentPlugin.js",
    "pluginId": "sevensky-cordova-plugin-intent",
    "clobbers": [
      "intentPlugin"
    ]
  },
  {
    "id": "org.nypr.cordova.wakeupplugin.Wakeup",
    "file": "plugins/org.nypr.cordova.wakeupplugin/www/wakeup.js",
    "pluginId": "org.nypr.cordova.wakeupplugin",
    "clobbers": [
      "wakeuptimer"
    ]
  }
];
module.exports.metadata = 
// TOP OF METADATA
{
  "cordova-plugin-whitelist": "1.3.3",
  "cordova-plugin-browsersync": "0.1.7",
  "cordova-plugin-device": "2.0.1",
  "cordova-plugin-badge": "0.8.7",
  "cordova-plugin-local-notification": "0.9.0-beta.2",
  "cordova-toforeground": "1.0.0",
  "com.napolitano.cordova.plugin.intent": "0.1.3",
  "sevensky-cordova-plugin-intent": "1.0.6",
  "org.nypr.cordova.wakeupplugin": "0.1.0"
};
// BOTTOM OF METADATA
});