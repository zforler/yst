let Mask = require('../../../../component/mask/mask.js');
let app = getApp();

new Page({

  /**
   * 页面的初始数据
   */
  data: {
        prevImg: [],
        
        goodsNum: '1',
        goodsName: '1',
        goodsPrice: '1',
        goodsDesc: '1',
        shopId: 1,
        mask:{
            type: 'process',
            show: false,
            process: {
                num:0,
                totalNum: 9,
                percent: 20
            }
        }
  },

    onLoad: function(option){
        console.log(option.shopId);
        // this.setData({
        //     shopId: option.shopId?option.shopId:0
        // })
    },
  chooseImg:chooseImg,
  save: function() {
      let that = this;
      let data = this.data;
      Mask.show.call(that, {
          type: 'process',
          show: true,
          process: {
              num: 0,
              totalNum: 0,
              percent: 0
        }})
  
      wx.request({
          url: app.globalData.serviceUrl + 'goods/add',
          method: 'POST',
          header: {
              'content-type': 'application/x-www-form-urlencoded', // 默认值
              'charset': 'utf-8'
          },
          data:{
              'goodsNum': data.goodsNum,
              'goodsName': data.goodsName,
              'goodsPrice': data.goodsPrice,
              'goodsDesc': data.goodsDesc,
              'shopId': data.shopId
          },
          success: function(e){
            console.log(e);
            let data = e.data;
            if(1 == data.code){
                uploadImg(0);
            }
          }
      })

      function uploadImg(index){
          if(index > data.prevImg.length - 1){
              console.log(index);
              Mask.hide.call(that, {
                  type: 'process',
                  show: false,
                  process: {
                      num: 0,
                      totalNum: 0,
                      percent: 0
                  }
              });
              wx.redirectTo({
                  url: '../shopmanage',
              });
              return;
          }
         
          const uploadTask = wx.uploadFile({
              url: app.globalData.serviceUrl + 'goods/image/upload',
              filePath: data.prevImg[index],
              name: 'file',
              success: function (res) {
                  var data = res.data
                  console.log(data);
                  uploadImg(index + 1);
              }
          })
          uploadTask.onProgressUpdate((res) => {
              that.setData({
                  mask: {
                      type: 'process',
                      show: true,
                      process: {
                          num: index+1,
                          totalNum: data.prevImg.length,
                          percent: res.progress
                      }

                  }
              })
              console.log('上传进度', res.progress)
              console.log('已经上传的数据长度', res.totalBytesSent)
              console.log('预期需要上传的数据总长度', res.totalBytesExpectedToSend)
          })
      }






  },
  back: back,
  inputChange: function(e){
        console.log(e);
        let value = e.detail.value,
        k = e.currentTarget.dataset.mark;
        console.log(k);
        this.setData({
            [k]: value
        });
    
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