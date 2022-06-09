// pages/user/myinfo/editAvatar/editAvatar.js
const app=getApp()
const db=wx.cloud.database()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    userPhoto:""
  },
  //处理更新头像
  handleUploadImage(){
    //微信开发文档自带
    wx.chooseImage({
      count: 1,
      sizeType: [ 'compressed'],
      sourceType: ['album', 'camera'],
      success :(res) =>{
        
        // tempFilePath可以作为 img 标签的 src 属性显示图片
        const tempFilePaths = res.tempFilePaths[0];
        this.setData({
          userPhoto:tempFilePaths
          })
      }
    })
  },
   //微信头像
  bindGetUserInfo(ev){
    let userInfo=ev.detail.userInfo;
    if(userInfo){
      this.setData({
        userPhoto:userInfo.avatarUrl
      },()=>{  
        wx.showLoading({
          title: '上传中',
        })
        db.collection('users').doc(app.userInfo._id).update({
          data:{
            userPhoto:userInfo.avatarUrl
          }
        }).then((res)=>{
          wx.hideLoading();
          wx.showToast({
            title: '头像上传并更新成功',
        });
        app.userInfo.userPhoto=userInfo.avatarUrl;
      })


      })
    }
  },
  
  //自定义头像-上传头像
  handleBtn(){
    wx.showLoading({
      title: '上传中',
    })
let cloudPath="userPhoto/"+app.userInfo._openid+Date.now()+".jpg";
    wx.cloud.uploadFile({
      cloudPath, // 上传至云端的路径
      filePath: this.data.userPhoto, // 小程序临时文件路径
    }).then((res)=>{ 
      let fileID=res.fileID;
      if(fileID){
        db.collection('users').doc(app.userInfo._id).update({
          data:{
            userPhoto:fileID
          }
        }).then((res)=>{
          wx.hideLoading();
          wx.showToast({
            title: '头像上传并更新成功',
        });
        app.userInfo.userPhoto=fileID;
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
  onReady:function() {
    this.setData({
    userPhoto:app.userInfo.userPhoto
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