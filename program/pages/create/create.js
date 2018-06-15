// pages/create/create.js

new Page({

  /**
   * 页面的初始数据
   */
  data: {
      array: ['美国', '中国', '巴西', '日本'],
      index: 0
  },

  bindPickerChange: function (e) {
      console.log('picker发送选择改变，携带值为', e.detail.value)
      this.setData({
          index: e.detail.value
      })
  }
})
