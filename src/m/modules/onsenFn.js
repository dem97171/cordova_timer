// onsenUI splitter side menu functions
const fn = {
    open: function() {
        const menu = document.getElementById("menu");
        menu.open();
    },
    load: function(page) {
        const content = document.getElementById("content");
        const menu = document.getElementById("menu");
        content.load(page)
            .then(menu.close.bind(menu));
    }
};

module.exports = fn;
