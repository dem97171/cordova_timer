const m = m || require("mithril");
const indexModel = require("./indexModel.js");
const menuComponent = require("../menu/menuComponent.js");
const fn = require("../../modules/onsenFn.js");

const mainContent = {
    view: () => {
        const content = <div className="l-content">
            <div className="index_view">
                <div className="index_view-time">
                    2m30h
                </div>
                <div className="index_view-set">
                    <div className="index_view-set_count">
                        4
                        <span className="index_view-set_unit">set</span>
                    </div>
                    <div className="index_view-set_up">
                        △
                    </div>
                    <div className="index_view-set_down">
                        ▽
                    </div>
                </div>
                <div className="index_view-start_button">
                    <ons-button modifier="large" name={device.platform} onclick={ m.withAttr("name", indexModel.push[device.platform]) }>
                        START
                    </ons-button>
                </div>
            </div>
        </div>;
        return content;
    }
};

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
                { m(mainContent) }
            </ons-page>
        </ons-splitter-content>
    </ons-splitter>;
    return content;
};

module.exports = view;
