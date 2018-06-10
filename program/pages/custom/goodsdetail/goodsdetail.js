let tabpage = require('../../../component/tabpage/tabpage.js');
var order = ['red', 'yellow', 'blue', 'green', 'red']
Page({
  data: {
    tabParams: {
      tabs: [
        { name: '图文详情', key: 'a', hide: '' },
        { name: '买家秀', key: 'b', hide: 'hide' }
      ],
      tabData: {
        a: {
          goodsList: 10
        },
        b: {
          test: '买家秀'
        }
      }
    },
    clickTabClass: 'tab-click',


    toView: 'red',
    scrollTop: 100
  },

  tabClick: tabpage.tabClick,

  upper: function (e) {
    console.log(e)
  },
  lower: function (e) {
    console.log(e)
  },
  scroll: function (e) {
    console.log(e)
  },
  tap: function (e) {
    for (var i = 0; i < order.length; ++i) {
      if (order[i] === this.data.toView) {
        this.setData({
          toView: order[i + 1]
        })
        break
      }
    }
  },
  tapMove: function (e) {
    this.setData({
      scrollTop: this.data.scrollTop + 10
    })
  }
})