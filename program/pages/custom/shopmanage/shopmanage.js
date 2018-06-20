// pages/custom/shopmanage/shopmanage.js

new Page({
    data: {

        list:{abs:'gd-item-detail'}
    },
    itemClick: function(e){
        console.log(e)
        this.setData({ list: { [e.currentTarget.dataset.val]:'gd-item-detail'}})
    },
    addGoods: addGoods,
    deleteGoods: deleteGoods
})


function addGoods(){
    wx.navigateTo({
        url: 'addgoods/addgoods',
    })
}

function deleteGoods(){
    
}