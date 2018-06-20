let Mask = require('../../../../component/mask/mask.js');


new Page({

  /**
   * 页面的初始数据
   */
  data: {
        prevImg: [],
        
        goodsNum: '',
        goodsName: '',
        goodsPrice: '',
        goodsDesc: '',

        mask:{
            type: 'process',
            show: true,
            process: {
                num:0,
                totalNum: 9,
                percent: 20
            }
        }
  },

  chooseImg:chooseImg,
  save: function() {
      Mask.show.call(this)


      console.log(this.data)
      const uploadTask = wx.uploadFile({
          url: 'https://example.weixin.qq.com/upload', //仅为示例，非真实的接口地址
          filePath: tempFilePaths[0],
          name: 'file',
          formData: {
              'goodsNum': this.goodsNum,
              'goodsName': this.goodsName,
              'goodsPrice': this.goodsPrice,
              'goodsDesc': this.goodsDesc,
          },
          success: function (res) {
              var data = res.data
              //do something
          }
      })
      uploadTask.onProgressUpdate((res) => {
          console.log('上传进度', res.progress)
          console.log('已经上传的数据长度', res.totalBytesSent)
          console.log('预期需要上传的数据总长度', res.totalBytesExpectedToSend)
      })



  },
  back: back,
  inputChange: function(e){
        console.log(e);
        let value = e.detail.value,
        k = e.currentTarget.dataset.mark;
        this.setData({
            [k]: value
        })
  }
})

function chooseImg(){
    let that = this;
    wx.chooseImage({
        count: 6,
        // sizeType: [],
        // sourceType: [],
        success: function (res) { 
            let tempFilePaths = res.tempFilePaths;
            that.setData({
                prevImg: tempFilePaths
            })
            console.log(tempFilePaths);
        },
        fail: function (res) { 

        },
        complete: function (res) {

        },
    })
}



function back(){
    wx.redirectTo({
        url: '../shopmanage',
    })
}