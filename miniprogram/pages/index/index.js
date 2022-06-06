// pages/index/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    swiperImgUrl: [],
    active: 1,

  },
  onChange(event) {
    wx.showToast({
      title: `切换到标签 ${event.detail.name}`,
      icon: 'none',
    });},

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    const db = wx.cloud.database()
    db.collection('index_swiper').get().then(res => {this.setData({swiperImgUrl: res.data})}).catch(err => {console.log(err);})
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})