let loginModal = false;
let app = getApp();
function close(){
    this.setData({"loginModal": false});
}

function show(){
    this.setData({ "loginModal": true});
}

function login(e){
    let that = this;
    close.call(that);
    let userInfo = wx.getStorageSync('userInfo');
    if (userInfo){
        return;
    }
    wx.getUserInfo({
        success: function (res) {
            console.log("userinfo",res.userInfo)
            // 登录
            wx.login({
                success: res1 => {
                    // 发送 res.code 到后台换取 openId, sessionKey, unionId
                    // console.log(res);
                    res.userInfo.code = res1.code;
                    wx.request({
                        method: "POST",
                        url: app.globalData.serviceUrl + 'login',
                        data: res.userInfo,
                        success: (data) => {
                            console.log(data.data.userName);
                            wx.setStorage({
                                key: 'userInfo',
                                data: data.data,
                            })
                        }
                    })
                }
            })
        }
    });
}

module.exports = {
    close: close,
    show: show,
    login: login
}