// pages/user/feedback/feedback.js

//  把app引进来
const app=getApp()
const db=wx.cloud.database();


Page({

  /**
   * 页面的初始数据
   */
  data: {
    feedback:''
  },
  handleText(ev){
    let value=ev.detail.value;
    this.setData({
      feedback : value})
  },
  handleBtn(){
    this.upLoadFeedback();
  },
  upLoadFeedback(){
    wx.showLoading({
      title: '反馈意见上传中',
    })
   db.collection('users').doc(app.userInfo._id).update({
     data:{
      feedback:this.data.feedback
     }
   }).then((res)=>{
     wx.hideLoading();
     wx.showToast({
       title: '意见反馈成功',
     });
     app.userInfo.feedback=this.data.feedback
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
      feedback:app.userInfo.feedback
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