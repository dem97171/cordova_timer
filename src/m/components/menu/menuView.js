const m = m || require("mithril");

const view = () => {
    const content = <ons-splitter-side id="menu" side="left" width="220px" swipe-target-width="40px" collapse swipeable>
        <ons-page>
            <ons-list>
                <ons-list-item onclick="fn.load('home.html')" tappable>
                Home
                </ons-list-item>
                <ons-list-item onclick="fn.load('settings.html')" tappable>
                Settings
                </ons-list-item>
                <ons-list-item onclick="fn.load('about.html')" tappable>
                About
                </ons-list-item>
            </ons-list>
        </ons-page>
    </ons-splitter-side>;
    return content;
};

module.exports = view;
