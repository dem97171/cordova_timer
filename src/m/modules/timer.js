// timer.js
class timer {
    constructor() {
        console.log("timer class initialized.");

        // add evnet listener
        cordova.plugins.notification.local.on("trigger", function(notification) {
            // window.open("cordova_timer://", "_system");
            console.log("triggered: " + notification.id);
            // intentPlugin.startActivity("org.apache.cordova.cordova_timer", "MainActivity", JSON.stringify({name:"namepara"}));
            // ons.notification.alert({message: "triggered: " + notification.id});
            // toForeground("MainActivity", "org.apache.cordova.cordova_timer", this.successFunction, this.errorFunction);
        });
        cordova.plugins.notification.local.on("schedule", function(notification) {
            ons.notification.alert({message: "scheduled: " + notification.id});
        });
    }

    successFunction(){
        console.log("success to foreground.");
    }

    errorFunction(err){
        console.log("failed to foreground.");
        console.log(err);
    }


    // wakeup timer test
    wakeupOnetime(){
        // set wakeup timer
        const d = new Date();
        d.setTime(d.getTime() + 1*60*1000); // set the alarm for two minutes prior to the current time on the next day
        window.wakeuptimer.wakeup(
            this.successFunction,
            this.errorFunction,
            {
                alarms: [{
                    type: "onetime",
                    time: { hour : d.getHours(), minute : d.getMinutes(), second : d.getSeconds() },
                    extra: { message : "json containing app-specific information to be posted when alarm triggers" },
                    message: 'Alarm has expired!'
                }]
            }
        );
    }
}
module.exports = timer;
