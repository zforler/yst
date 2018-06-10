function tabClick(e) {
  let id = e.currentTarget.dataset.id,
    tabParams = this.data.tabParams.tabs;
  let tab = [],
    tabParam = {};
  for (let i = 0, len = tabParams.length; i < len; i++) {
    tabParam = tabParams[i];
    if (tabParam.key === id) {
      tabParam.hide = '';
      this.setData({
        clickTab: tabParam
      })
    } else {
      tabParam.hide = 'hide';
    }
    tab.push(tabParam);
  }
  this.data.tabParams.tabs = tab;
  console.log(tab);
  this.setData({
    tabParams: this.data.tabParams,
  });

}

module.exports = {
  tabClick: tabClick
}