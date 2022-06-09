// pages/me/me.js
const app=getApp()
const db=wx.cloud.database()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    userPhoto:"../../images/user_image/YHWDL.png",
    nickName:"空用户名",
    logged:false,
    disabled:true
  },
  bindGetUserInfo(ev){
    let userInfo=ev.detail.userInfo;
    if(!this.data.logged && userInfo){
      db.collection('users').add({
        data:{
          userPhoto:userInfo.avatarUrl,
          nickName:userInfo.nickName,
          gender:'',
          phoneNumber:'',
          signature:'',
          time:new Date(),
          consigneeName:'',
          consigneeRegion:'',
          detailedAddress:'',
          labelDefault:''
        }
      }).then((res)=>{
        db.collection('users').doc(res._id).get().then((res)=>{
          //console.log(res.data);
          app.userInfo = Object.assign(app.userInfo , res.data);
          this.setData({
            userPhoto:app.userInfo.userPhoto,
            nickName:app.userInfo.nickName,
            logged:true
          })
        });
      });
    }
  },

  // 个人资料页面跳转
  personal:function()
{
  wx.navigateTo({
    url: '/pages/user/myinfo/myinfo',
    success: function(res) {
      console.log("成功");
    },
    fail: function(res) {
      console.log("失败");
    },
   })
},


// 我的收藏页面跳转
myCollection:function()
{
  wx.navigateTo({
    url: '/pages/user/myCollection/myCollection',
    success: function(res) {
      console.log("成功");
    },
    fail: function(res) {
      console.log("失败");
    },
   })
},
// 购物车页面跳转
shoppingCarts:function(){
  wx.navigateTo({
    url: '/pages/user/shoppingCarts/shoppingCarts',
    success: function(res) {
      console.log("成功");
    },
    fail: function(res) {
      console.log("失败");
    },
   })
},

  // 收货地址页面跳转
  myAddress:function()
{
  wx.navigateTo({
    url: '/pages/user/myAddress/myAddress',
    success: function(res) {
      console.log("成功");
    },
    fail: function(res) {
      console.log("失败");
    },
   })
},
 // 订单信息页面跳转
orderInfo:function()
{
  wx.navigateTo({
    url: '/pages/user/orderInfo/orderInfo',
    success: function(res) {
      console.log("成功");
    },
    fail: function(res) {
      console.log("失败");
    },
   })
},

// 意见反馈页面跳转
feedback:function()
{
  wx.navigateTo({
    url: '/pages/user/feedback/feedback',
    success: function(res) {
      console.log("成功");
    },
    fail: function(res) {
      console.log("失败");
    },
   })
},

// 设置 页面跳转
userSettings:function()
{
  wx.navigateTo({
    url: '/pages/user/userSettings/userSettings',
    success: function(res) {
      console.log("成功");
    },
    fail: function(res) {
      console.log("失败");
    },
   })
},

// 管理员页面跳转
adminLogin(){
  wx.navigateTo({
    url: '../admin/adminlogin/adminlogin',
  })
},

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
      wx.cloud.callFunction({
        name:'getOpenId',
        data:''
    }).then((res)=>{
      //console.log(res);
      db.collection('users').where({
        _openid:res.result._openid
      }).get().then((res)=>{
        if(res.data.length){
          app.userInfo=Object.assign(app.userInfo,res.data[0]);
          this.setData({
            userPhoto:app.userInfo.userPhoto,
            nickName:app.userInfo.nickName,
            logged:true
          });
        }
        
        else{
          this.setData({
            disabled:false
          });
        } 

      });
      
    });
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    this.setData({
      userPhoto:app.userInfo.userPhoto,
      nickName:app.userInfo.nickName
    });

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})