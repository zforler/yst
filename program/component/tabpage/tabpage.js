// component/tabpage/tabpage.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    tabParams: {
      type: Object,
      value: {}
    },
    myOption: {
      type: String,
      value: ''
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    tabmap: {
      a: ''
    },
    clickTab: {}
  },

  /**
   * 组件的方法列表
   */
  methods: {
    onTap(e){
      console.log(this.data);

      let id = e.currentTarget.dataset.id,
      tabParams = this.data.tabParams.tabs;
      let tab = [],
       tabParam = {};
      for (let i = 0, len = tabParams.length; i < len; i++){
        tabParam = tabParams[i];
        if(tabParam.key === id){
            tabParam.hide = '';
            this.setData({
              clickTab: tabParam
            })
        } else{
            tabParam.hide = 'hide';
        }
        tab.push(tabParam);
     }
      this.data.tabParams.tabs = tab;
      console.log(tab);
      this.setData({
        tabParams: this.data.tabParams,
      });

      this.triggerEvent('tabClick', this.data.clickTab);

    }
  }
})
