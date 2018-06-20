function show(){
    this.setData({
        mask: {
            show: true
        }
    })
}

function hide(){
    this.setData({
        mask: {
            show: false
        }
    })
}



module.exports = {
    show: show,
    hide: hide
};