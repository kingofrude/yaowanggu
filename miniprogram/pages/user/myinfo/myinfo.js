// pages/myinfo/myinfo.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    // onPullDownRefresh: function () {
    //   wx.stopPullDownRefresh()
    // },
    username: '',
    gender: '男',


  },

  // 修改头像
  editAvatar: function () {
    wx.navigateTo({
      url: '/pages/user/myinfo/avatar/avatar',
      success: function (res) {
        console.log("成功");
      },
    })
  },
  // 修改昵称
  editNickname: function () {
    wx.navigateTo({
      url: '/pages/user/myinfo/nickname/nickname',
      success: function (res) {
        console.log("成功");
      },
    })
  },
  // 修改性别
  gender: function () {
    wx.navigateTo({
      url: '/pages/user/myinfo/gender/gender',
      success: function (res) {
        console.log("成功");
      },
    }
    )
  },

  //修改签名
  signature: function () {
    wx.navigateTo({
      url: '/pages/user/myinfo/signature/signature',
      success: function (res) {
        console.log("成功");
      },
    })
  },
  //设置出生日期
  birth:function () {
    wx.navigateTo({
      url: '/pages/user/myinfo/birth/birth',
      success: function (res) {
        console.log("成功");
      },
    })
  },
  //修改手机号
  phone: function () {
    wx.navigateTo({
      url: '/pages/user/myinfo/phone/phone',
      success: function (res) {
        console.log("成功");
      },
    })
  },
  //修改手机号
  phone: function () {
    wx.navigateTo({
      url: '/pages/user/myinfo/phone/phone',
      success: function (res) {
        console.log("成功");
      },
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  }
})