//index.js
//获取应用实例
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
    tabBar: ""
  },
  


  onLoad: pageOnLoad,
  onReady: pageOnReady,
  scrollImgClick: scrollImgClick,
  shopGo: shopGo,
  searchGo: searchGo,
  tabBarClick: tabBarClick
})

/**
 * 页面加载
 */
function pageOnLoad(e) {
    createBar(this);
}
function pageOnReady(e){
  
}

function scrollImgClick(e){
  console.log(e);
}

function createBar(obj){
    let tabBar = app.globalData.tabBar;
    console.log(tabBar);
    tabBar[obj.data.pageName].select = true;
    if (app.globalData.prevBar){

    }
    obj.setData({'tabBar':tabBar});
    app.globalData.prevBar = obj.data.pageName;
}
function tabBarClick(e){
    console.log(e);
    let page = e.currentTarget.dataset.page;
    wx.navigateTo({
        url: `../${page}/${page}`,
    })
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
