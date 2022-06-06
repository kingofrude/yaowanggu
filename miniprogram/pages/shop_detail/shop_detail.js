// pages/shop_detail/shop_detail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    //转存onload数据
    query:{},
    shop_detail:[],
    page:1,
    text:'hello baby'

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    //获取加载数据
    this.setData({
      query:options
    })

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {
    //设置加载页面标题
    wx.setNavigationBarTitle({
      title: this.data.query.title
    })
  },
  //点击放大图片预览
  handlePreviewImage(e){
    //先构造要预览的图片数组
    const urls=this.GoodsInfo.pics.map(v=>v.pics_mid);
    //接收传递过来的url
    const current=e.currentTarget.dataset.url;
    wx.previewImage({
      current,
      urls,
    })
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