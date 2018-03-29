// timer.js
class timer {
    constructor() {
        console.log("timer class initialized.");

        // add evnet listener
        cordova.plugins.notification.local.on("trigger", function(notification) {
            // window.open("cordova_timer://", "_system");
            console.log("triggered: " + notification.id);
            intentPlugin.startActivity("org.apache.cordova.cordova_timer", "MainActivity", JSON.stringify({name:"namepara"}));
            ons.notification.alert({message: "triggered: " + notification.id});
            toForeground("MainActivity", "org.apache.cordova.cordova_timer", this.successFunction, this.errorFunction);
        });
        cordova.plugins.notification.local.on("schedule", function(notification) {
            ons.notification.alert({message: "scheduled: " + notification.id});
        });
    }

    successFunction(){
        console.log("success to foreground.");
    }

    errorFunction(){
        console.log("failed to foreground.");
    }

}
module.exports = timer;
