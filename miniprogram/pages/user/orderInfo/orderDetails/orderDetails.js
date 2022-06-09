// pages/user/orderInfo/orderDetails/orderDetails.js
var app = getApp()
const db=wx.cloud.database()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    consigneeName: "", 
    phoneNumber: "",
    consigneeRegion: "",
    detailedAddress: "",
  },
  copy: function (e) {

    var that = this;

    wx.setClipboardData({

      data: "这里为复制的内容",

      success: function (res) {

        wx.showModal({

          title: '提示',

          content: '复制成功',

          success: function (res) {

            if (res.confirm) {

              console.log('确定')

            } else if (res.cancel) {

              console.log('取消')

            }

          }

        })

      }

    });

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
      consigneeName:app.userInfo.consigneeName,
      phoneNumber:app.userInfo.phoneNumber,
      consigneeRegion:app.userInfo.consigneeRegion,
      detailedAddress:app.userInfo.detailedAddress,
    
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