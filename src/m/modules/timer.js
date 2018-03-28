// timer.js
class timer {
    constructor() {
        console.log("timer class initialized.");

        // add evnet listener
        cordova.plugins.notification.local.on("trigger", function(notification) {
            console.log("triggered: " + notification.id);
            ons.notification.alert({message: "triggered: " + notification.id});
        });
        cordova.plugins.notification.local.on("schedule", function(notification) {
            ons.notification.alert({message: "scheduled: " + notification.id});
        });
    }
}
module.exports = timer;
