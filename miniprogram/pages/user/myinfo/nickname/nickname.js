// pages/user/myinfo/editNickname/editNickname.js
const app=getApp()
const db=wx.cloud.database()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    nickName:''
  },
  bindGetUserInfo(ev){
    let userInfo=ev.detail.userInfo;
    if(userInfo){
      this.setData({
        nickName:userInfo.nickName

      },()=>{
        this.updateNickName();
      }
      
      )
    }
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
      nickName:app.userInfo.nickName
    });
  },
  handleText(ev){
    let value=ev.detail.value;
    this.setData({
      nickName : value
    });
  },
  handleBtn(ev){
    this.updateNickName();
  },
  updateNickName(){
    wx.showLoading({
      title: '更新中',
    })
   db.collection('users').doc(app.userInfo._id).update({
     data:{
      nickName:this.data.nickName
     }
   }).then((res)=>{
     wx.hideLoading();
     wx.showToast({
       title: '更新成功',
     });
     app.userInfo.nickName=this.data.nickName
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