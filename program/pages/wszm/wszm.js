// pages/wszm/wszm.js
let TabBar = require('../../component/tabBar/tabBar.js');
const app = getApp();

new Page({

  /**
   * 页面的初始数据
   */
  data: {
      pageName: 'wszm',
      tabBar: ""
  },

  wszmDetailGo: wszmDetailGo,

  onLoad: pageOnLoad,
  tabBarClick: TabBar.tabBarClick
})
/**
 * 页面加载
 */
function pageOnLoad(e) {
    TabBar.createBar(this, app);
}

function wszmDetailGo(e){
  wx.navigateTo({
    url: 'wsxq/wsxq',
  })
}