const m = m || require("mithril");
const indexModel = require("./indexModel.js");
const menuComponent = require("../menu/menuComponent.js");
const fn = require("../../modules/onsenFn.js");

const view = () => {
    const content = <ons-splitter>
        { m(menuComponent) }
        <ons-splitter-content id="content">
            <ons-page>
                <ons-toolbar>
                    <div class="left">
                        <ons-toolbar-button onclick={ m.withAttr("value",fn.open) }>
                            <ons-icon icon="md-menu"></ons-icon>
                        </ons-toolbar-button>
                    </div>
                    <div class="center">
                        Main
                    </div>
                </ons-toolbar>
                <ons-select class="select">
                    <select class="select-input">
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                        <option value="7">7</option>
                        <option value="8">8</option>
                        <option value="9">9</option>
                        <option value="10">10</option>
                    </select>
                </ons-select>
                <ons-button modifier="large" name={device.platform} onclick={ m.withAttr("name", indexModel.push[device.platform]) }>large</ons-button>
            </ons-page>
        </ons-splitter-content>
    </ons-splitter>;
    return content;
};

module.exports = view;
