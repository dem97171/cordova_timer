const m = m || require("mithril");
const view = require("./menuView.js");
const model = require("./menuModel.js");

const menuComponent = {
    view: view,
    model: model
};

module.exports = menuComponent;
