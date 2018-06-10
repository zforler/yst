// pages/search/search.js
let tabpage = require('../../component/tabpage/tabpage.js');
new Page({

  /**
   * 页面的初始数据
   */
  data: {
    tabParams: {
      tabs: [
        { name: '商品', key: 'a', hide: '' },
        { name: '店铺', key: 'b', hide: 'hide' }
      ],
      tabData: {
        a: {
          goodsList: 10
        },
        b: {
          test: '店铺'
        }
      }
    },
    clickTabClass: 'tab-click'
  },
  tabClick: tabpage.tabClick,
  search: search
})

/**
 * 搜索按钮
 */
function search(){

}