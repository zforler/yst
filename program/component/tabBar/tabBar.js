
function createBar(obj, app) {
    let tabBar = app.globalData.tabBar;
    console.log(tabBar);
    tabBar[obj.data.pageName].select = true;
    if (app.globalData.prevBar) {
        tabBar[app.globalData.prevBar].select = false;
    }
    obj.setData({ 'tabBar': tabBar });
    app.globalData.prevBar = obj.data.pageName;
}
function tabBarClick(e) {
    console.log(e);
    let page = e.currentTarget.dataset.page;
    wx.navigateTo({
        url: `../${page}/${page}`,
    })
}

module.exports = {
    createBar: createBar,
    tabBarClick: tabBarClick
}