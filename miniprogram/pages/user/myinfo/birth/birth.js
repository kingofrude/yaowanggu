// pages/user/myinfo/birth/birth.js

//  把app引进来
const app=getApp()
const db=wx.cloud.database();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    birth:'2021-01-01',
    //date:'2021-01-01',
  },
  bindDateChange: function(e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      birth: e.detail.value
    })
  },
  handleText(ev){
    let value=ev.detail.value;
    this.setData({
      birth : value})
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
      birth:this.data. birth
     }
   }).then((res)=>{
     wx.hideLoading();
     wx.showToast({
       title: '更新成功',
     });
     app.userInfo.birth=this.data.birth
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
  onReady() {
    this.setData({
      birth:app.userInfo.birth
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