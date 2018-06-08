let commonUtil = require('../../utils/common.js');



Page({
  data: {
    tabParams: {
      tabs: [
        {name: '商品列表',key: 'a',hide: ''},
       {name: '买家秀',key: 'b',hide: 'hide'}
      ],
      tabData:{
        a: {
          goodsList: 10
        },
        b: {
          test: '买家秀'
        }
      }
    },
    clickTabClass: 'tab-click'


  },
  onLoad: pageOnLoad,

  tabClick: tabClick,

  goodsClick: goodsClick
})


/**
 * 页面加载
 */
function pageOnLoad(e) {
  wx.setNavigationBarColor({
    frontColor: '#000000',
    backgroundColor: '#ffffff',
  })
}

/**
 * tabbar点击切换页面
 */
function tabClick(e){
  let id = e.currentTarget.dataset.id,
    tabParams = this.data.tabParams.tabs;
  let tab = [],
    tabParam = {};
  for (let i = 0, len = tabParams.length; i < len; i++) {
    tabParam = tabParams[i];
    if (tabParam.key === id) {
      tabParam.hide = '';
      this.setData({
        clickTab: tabParam
      })
    } else {
      tabParam.hide = 'hide';
    }
    tab.push(tabParam);
  }
  this.data.tabParams.tabs = tab;
  console.log(tab);
  this.setData({
    tabParams: this.data.tabParams,
  });

}

/**
 * goods-type-a
 * 商品点击，进入商品详情页面
 */
function goodsClick(e){
  
  wx.navigateTo({
    url: 'goodsdetail/goodsdetail',
  })
}