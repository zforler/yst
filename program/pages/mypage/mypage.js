//获取应用实例
let TabBar = require('../../component/tabBar/tabBar.js');
const app = getApp()



Page({
    data: {


        pageName: 'mypage',
        tabBar: ""
    },

    onLoad: pageOnLoad,
    tabBarClick: TabBar.tabBarClick
})
/**
 * 页面加载
 */
function pageOnLoad(e) {
    TabBar.createBar(this, app);
}