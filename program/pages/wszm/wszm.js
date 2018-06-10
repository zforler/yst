// pages/wszm/wszm.js
new Page({

  /**
   * 页面的初始数据
   */
  data: {
    
  },

  wszmDetailGo: wszmDetailGo
})


function wszmDetailGo(e){
  wx.navigateTo({
    url: 'wsxq/wsxq',
  })
}