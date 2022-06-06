// pages/user/myinfo/phone/phone.js
const app = getApp()
const db = wx.cloud.database()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    phoneNumber: ''
  },

  handleText(ev) {
    let value = ev.detail.value;
    this.setData({
      phoneNumber: value
    })
  },
  handleBtn(ev) {
    this.updatePhoneNumber();
  },
  updatePhoneNumber() {
   if(this.data.phoneNumber.length < 11) { 
     //输入的手机号不足11位提示
      return wx.showModal({
        title: '提示',
        content: '您输入的手机号码有误,请输入11数字位手机号',
        success: function (res) {
          if (res.confirm) { //这里是点击了确定以后
            console.log('用户点击确定')
          } else { //这里是点击了取消以后
            console.log('用户点击取消')
          }
        }
      })
    }


    if (this.data.phoneNumber.length == 11) { //输入的手机号满足11位
      wx.showLoading({
        title: '更新中',
      })
      db.collection('users').doc(app.userInfo._id).update({
        data: {
          phoneNumber: this.data.phoneNumber
        }
      }).then((res) => {
        wx.hideLoading();
        wx.showToast({
          title: '更新成功',
        });
        app.userInfo.phoneNumber = this.data.phoneNumber
      })
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
  onReady() {
    this.setData({
      phoneNumber: app.userInfo.phoneNumber
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