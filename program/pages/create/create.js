// pages/create/create.js
let app = getApp();
new Page({

  /**
   * 页面的初始数据
   */
  data: {
      array: ['美国', '中国', '巴西', '日本'],
      index: 0,
      imgSrc: wx.getStorageSync('userInfo').avatarUrl,
      selctImg: wx.getStorageSync('userInfo').avatarUrl
  },

  changeImg: changeImg,

  bindPickerChange: function (e) {
      console.log('picker发送选择改变，携带值为', e.detail.value)
      this.setData({
          index: e.detail.value
      })
  },
  formSubmit: submit,

  formReset: function () {
      console.log('form发生了reset事件')
  }
})

function changeImg(){
    let that = this;
    wx.chooseImage({
        count: 1, // 默认9
        sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
        sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
        success: function (res) {
            console.log(res);
            // 返回选定照片的本地文件路径列表，tempFilePath可以作为img标签的src属性显示图片
            var tempFilePaths = res.tempFilePaths;
            that.setData({imgSrc: tempFilePaths[0]});

        }
    })
}

function submit(e){
    wx.request({
        method: "POST",
        url: app.globalData.serviceUrl + 'shop/add',
        data: e.detail.value,
        success: (data) => {
            let resdata = data.data;
            console.log(resdata);
           
        }
    })
}


function upload(e){
    let that = this,
        filePath = that.data.imgSrc,
        mark = true;

    if (that.imgSrc !== that.selectImg){
        mark = false;
    }
    console.log(that.data.imgSrc)
    e.detail.value.mark = mark;
    console.log(e.detail.value)
    let value = e.detail.value;
    console.log(value.shopName);
    wx.uploadFile({
        url: app.globalData.serviceUrl + 'shop/add', //仅为示例，非真实的接口地址
        filePath: filePath,
        name: 'file',
        formData: {
            'shopName': value.shopName,
            'shopType': value.shopType,
            'phone': value.phone,
            'shopDesc': value.shopDesc,
            'mark': value.mark
        },
        success: function (res) {
            var data = res.data
            //do something
        }
    })
}