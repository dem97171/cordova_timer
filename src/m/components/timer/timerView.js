const m = m || require("mithril");
const timerModel = require("./timerModel.js");
const menuComponent = require("../menu/menuComponent.js");
const fn = require("../../modules/onsenFn.js");

const mainContent = {
    view: () => {
        const content = <div className="l-content">
            <div className="timer_view">
                <div className="timer_view-round_wrapper">
                    <span className="timer_view-round_count">
                        1/4
                    </span>
                    <span className="timer_view-round_unit">
                        set
                    </span>
                </div>
                <div className="timer_view-status_wrapper">
                    <ul className="timer_view-status_list_wrapper">
                        <li className="timer_view-status_list timer_view-status_list_active">work</li>
                        <li className="timer_view-status_list">break</li>
                        <li className="timer_view-status_list">rest</li>
                    </ul>
                    <div className="tiemr_view-status">
                        work
                    </div>
                    <div className="timer_view-countdown_wrapper">
                        <span className="timer_view-countdown">22</span>
                        <span className="timer_view-countdown_unit">m</span>
                        <span className="timer_view-countdown">09</span>
                        <span className="timer_view-countdown_unit">s</span>
                    </div>
                </div>
                <div className="timer_view-button_area">
                    <ul className="timer_view-button_wrapper">
                        <li className="timer_view-button">
                            <button className="button button--large">pause</button>
                        </li>
                        <li className="timer_view-button">
                            <button className="button button--large button--light">reset</button>
                        </li>
                    </ul>
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
