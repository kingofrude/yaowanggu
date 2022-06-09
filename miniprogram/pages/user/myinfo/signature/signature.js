// pages/user/myinfo/signature/signature.js

//  把app引进来
const app=getApp()
const db=wx.cloud.database();

Page({

  /**
   * 页面的初始数据
   */
  data: {
    signature:''
  },
  handleText(ev){
    let value=ev.detail.value;
    this.setData({
      signature : value})
  },
  handleBtn(){
    this.updateSignnature();
  },
  updateSignnature(){
    wx.showLoading({
      title: '更新中',
    })
   db.collection('users').doc(app.userInfo._id).update({
     data:{
       signature:this.data.signature
     }
   }).then((res)=>{
     wx.hideLoading();
     wx.showToast({
       title: '更新成功',
     });
     app.userInfo.signature=this.data.signature
   })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady:function() {
    this.setData({
      signature:app.userInfo.signature
    });
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