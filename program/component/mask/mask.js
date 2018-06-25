function show(params){
    this.setData({
        mask: params
    })
}

function hide(params){
    this.setData({
        mask: params
    })
}



module.exports = {
    show: show,
    hide: hide
};