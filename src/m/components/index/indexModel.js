/*globals ons */

const m = m || require("mithril");
const indexModel = {};

indexModel.showToast = () => {
    ons.notification.confirm({title: "プログラミング難しい", message: "難しいよね？"});
};

indexModel.push = {
    browser: () => {
        alert("browser alert");
    },
    Android: () => {
        const Timer = require("../../modules/timer.js");
        const timer = new Timer();
        timer.wakeupOnetime();

        // console.log("cordova plugin local notification scheduled.");
        // ons.notification.toast({message: "1分後にスケジュールしました。", timeout: 1000});
        // cordova.plugins.notification.local.schedule(
        //     {
        //         // trigger: { at: new Date(2018, 3, 27, 10, 59, 0) },
        //         trigger: { in: 5, unit: "second" },
        //         foreground: true,
        //         priority: 2,
        //         text: "Test Message 1",
        //         wakeup: true,
        //         data: {
        //             test: 1
        //         },
        //         actions: [
        //             { id: "yes", title: "Yes" },
        //             { id: "no",  title: "No" }
        //         ]
        //     });
    }
    
};


indexModel.timerStart = {

    // タイマースタートした時の動作
    "work": () => {
        m.route.set("/timer");
        return true;
    }
};

module.exports = indexModel;
