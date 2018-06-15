//app.js
App({
  onLaunch: function () {

    //   login.call(this);

    // // 展示本地存储能力
    // var logs = wx.getStorageSync('logs') || []
    // logs.unshift(Date.now())
    // wx.setStorageSync('logs', logs)
    
   
  
    // // 获取用户信息
    // wx.getSetting({
    //   success: res => {
    //       console.log(res);
    //     if (!res.authSetting['scope.userInfo']) {
    //       // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
    //       wx.getUserInfo({
    //         success: res => {
    //           // 可以将 res 发送给后台解码出 unionId
    //           this.globalData.userInfo = res.userInfo

    //           // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
    //           // 所以此处加入 callback 以防止这种情况
    //           if (this.userInfoReadyCallback) {
    //             this.userInfoReadyCallback(res)
    //           }
    //         }
    //       })
    //     }
    //   }
    // })
  },
  globalData: {
      serviceUrl: 'http://127.0.0.1/',
    userInfo: null,
    shopId: "111",
    prevBar: '',
    
    tabBar: {
        index: {
            index: 0,
            text: '首页',
            show: true,
        },
        create: {
            index: 1,
            text: '创建店铺',
            show: true,
        },
        custom: {
            index: 2,
            text: '我的店铺',
            show: true
        },
        wszm: {
            index: 3,
            text: '微商招募',
            show: true
        },
        mypage: {
            index: 4,
            text: '我的',
            show: true
        }
    }
   
  }
})
