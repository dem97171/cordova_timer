/*globals ons */
const indexModel = {};

indexModel.showToast = () => {
    ons.notification.confirm({title: "プログラミング難しい", message: "難しいよね？"});
};

module.exports = indexModel;