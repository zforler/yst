let loginModal = false;
let app = getApp();
function close(){
    this.setData({ "loginModal": false });
    setTimeout(()=>{
        this.setData({"showTabBar":true});
    },1000)
}

function show(){
    this.setData({ "loginModal": true});
}

function loginCheck(){
    let that = this;
    // 查看是否授权
    wx.getSetting({
        success: function (res) {
            console.log(res);
            if (res.authSetting['scope.userInfo']) {
                // 已经授权，可以直接调用 getUserInfo 获取头像昵称
                login.call(that);
            }
            else {
                show.call(that);
            }
        },
        fail: (e) => {
            console.log(e);
            show.call(that);
        }
    })
}

function login(e){
    let that = this;
    close.call(that);
    let userInfo = wx.getStorageSync('userInfo');
    console.log("userinfo", userInfo)
    if (userInfo){
        setUserInfo.call(that,userInfo);
        return;
    }
    wx.getUserInfo({
        success: function (res) {
            
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
                            let resdata = data.data;
                            console.log(resdata);
                            if (1 == resdata.code){
                                setUserInfo.call(that, resdata.data);
                                wx.setStorage({
                                    key: "userInfo",
                                    data: resdata.data,
                                })
                            }
                            
                        }
                    })
                }
            })
        }
    });
}

function setUserInfo(userInfo){
    //普通用户
    if (1 == userInfo.userType) {
        app.globalData.tabBar.custom.show = false;
        app.globalData.tabBar.create.show = true;

    }
    //微商用户
    else if (2 == userInfo.userType) {
        app.globalData.tabBar.custom.show = true;
        app.globalData.tabBar.create.show = false;
    }
    this.setData({ tabBar: app.globalData.tabBar });
    console.log(this.data);
}

module.exports = {
    close: close,
    show: show,
    loginCheck: loginCheck,
    login: login
}