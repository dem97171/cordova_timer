"use strict";

console.log("loaded app.js");

window.onload = () => {
    document.addEventListener("deviceready", onDeviceReady, false);
};

const onDeviceReady = () => {
    // Now safe to use device APIs
    console.log("exec function onDeviceReady");
    // 初期処理
    console.log(event);

    const m = m || require("mithril");
    const indexComponent = require("../components/index/indexComponent.js");
    // var Main = Main || require("../modules/Main/entrypoint.js");
    // var AddParentCategory = AddParentCategory || require("../modules/AddParentCategory/entrypoint.js");
    // // require("../modules/helper/entrypoint.js");

    // m.route.mode = "search";
    setTimeout(() => {
        m.route(
            document.body,
            "/",
            {
                "/": indexComponent
                //         "/parent_category/add": AddParentCategory
                //         // "/server": y.ServerList,
                //         // "/StockPortfolio": y.StockPortfolio,
                //         // "/server/add": y.ServerAdd
            }
        );
    }, 2000);

    // y.global.init();

    // document.body.addEventListener("click", y.Header.model.clearHeaderMenu ,false );
};
