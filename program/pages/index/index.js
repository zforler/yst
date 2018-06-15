//index.js
//获取应用实例
let TabBar = require('../../component/tabBar/tabBar.js');
let LoginModal = require('../../component/loginmodal/loginmodal.js');
const app = getApp()



Page({
  data: {
    imgUrls: [
    '../../img/1.jpg',
    'http://img06.tooopen.com/images/20160818/tooopen_sy_175866434296.jpg',
    'http://img06.tooopen.com/images/20160818/tooopen_sy_175833047715.jpg'
    ],


    indicatorDots: false,
    autoplay: false,
    interval: 5000,
    duration: 1000,
    pageName: 'index',
    tabBar: "",
    showTabBar: false
  },
  


  onLoad: pageOnLoad,
  onReady: pageOnReady,
  scrollImgClick: scrollImgClick,
  shopGo: shopGo,
  searchGo: searchGo,
  tabBarClick: TabBar.tabBarClick,


  login: LoginModal.login,
  loginModalClose:function(e){
      let that = this;
      LoginModal.close.call(that);
  }
})

/**
 * 页面加载
 */
function pageOnLoad(e) {
    
    let that = this;

    TabBar.createBar(this,app);
    LoginModal.loginCheck.call(this);
}


function pageOnReady(e){
  
}

function scrollImgClick(e){
  console.log(e);
}



/**
 * 点击进入商店
 */
function shopGo(e){
  console.log(e);
  console.log(app);
  let dataSet = e.currentTarget.dataset;
  console.log(dataSet)
  app.globalData.shopId = dataSet.shopid;
  wx.navigateTo({
    url: '../custom/custom',
  })
}
/**
 * 点击搜索框进入搜索页面
 */
function searchGo(){
  wx.navigateTo({
    url: '../search/search',
  })
}
