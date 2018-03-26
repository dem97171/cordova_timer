const m = m || require("mithril");
// const indexModel = require("./indexModel.js");
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
                <p style="text-align: center; opacity: 0.6; padding-top: 20px;">
                Swipe right to open the menu!
                </p>
            </ons-page>
        </ons-splitter-content>
    </ons-splitter>;
    return content;
};

module.exports = view;
