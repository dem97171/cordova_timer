"use strict";

document.addEventListener("DOMContentLoaded", (event) => {
    // 初期処理
    console.log("event: DOMContentLoaded");
    console.log(event);

    const m = m || require("mithril");
    // require("../modules/common/entrypoint.js");
    // var Main = Main || require("../modules/Main/entrypoint.js");
    // var AddParentCategory = AddParentCategory || require("../modules/AddParentCategory/entrypoint.js");
    // // require("../modules/helper/entrypoint.js");

    // m.route.mode = "search";

    // m.route(
    //     document.body,
    //     "/",
    //     {
    //         "/": Main,
    //         "/parent_category/add": AddParentCategory
    //         // "/server": y.ServerList,
    //         // "/StockPortfolio": y.StockPortfolio,
    //         // "/server/add": y.ServerAdd
    //     }
    // );

    // y.global.init();

    // document.body.addEventListener("click", y.Header.model.clearHeaderMenu ,false );
});
