const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    goodsNum:'',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),

    slideProductList: [
      {
        id:1,
        name: '智能手环1111111112222211',
        url: "../../image/bracelet.jpg",
        style: "2代",
        price: "149.5",
        select: "circle",
        num: "1",
        code: "0001",
        amount: 500
      },
      {
        id: 2,
        name: "指环支架",
        url: "../../image/ring.jpg",
        style: "金色",
        price: "19.9",
        select: "circle",
        code: "0002",
        num: "1",
        amount: 500
      },
      {
        id: 3,
        name: "新款平板电脑",
        url: "../../image/iphone.png",
        style: "9.7英寸",
        price: "100",
        select: "circle",
        code: "0003",
        num: "1",
        amount: 110
      },
      {
        id: 4,
        code: "0001",
        name: "无人机",
        url: "../../image/uav.jpg",
        style: "低配版",
        price: "4999",
        select: "circle",
        code: "0004",
        num: "1",
        amount: 200
      },
      {
        id: 5,
        code: "0001",
        name: "无人机",
        url: "../../image/uav.jpg",
        style: "低配版",
        price: "4999",
        select: "circle",
        code: "0004",
        num: "1",
        amount: 200
      },
      {
        id: 6,
        code: "0001",
        name: "无人机",
        url: "../../image/uav.jpg",
        style: "低配版",
        price: "4999",
        select: "circle",
        code: "0004",
        num: "1",
        amount: 200
      },
    ],
    allSelect: "circle",
    num: 0,
    count: 0,
    lastX: 0,
    lastY: 0,
    text: "没有滑动",

   
  },

  change: function (e) {
    var that = this
    var index = e.currentTarget.dataset.index
    var select = e.currentTarget.dataset.select

    if (select == "circle") {
      var stype = "success"
    } else {
      var stype = "circle"
    }
    var newList = that.data.slideProductList
    newList[index].select = stype
    that.setData({
      slideProductList: newList
    })
    that.countNum()
    that.count()
  },
  addtion: function (e) {
    var that = this
    var index = e.currentTarget.dataset.index
    var num = e.currentTarget.dataset.num
    //默认99件
    if (num < 99) {
      num++
    }
    var newList = that.data.slideProductList
    newList[index].num = num
    that.setData({
      goodsNum:num,
      slideProductList: newList
    })
    that.countNum()
    that.count()
  },
  inputNum:function(e){
    var num = e.detail.value;
    this.setData({
      goodsNum:num
    })
  },
  numIputBlur:function(e){
    var that = this
    var num = that.data.goodsNum
    var index = e.currentTarget.dataset.index
    var newList = that.data.slideProductList
    if (num == "") { //盘空
      newList[index].num = 1;
      that.setData({
        slideProductList: newList
      })
    }else if (num < 1) {
      that.setData({
        goodsNum: newList[index].num,
        slideProductList: newList
      })
      wx.showToast({
        title: '亲，该宝贝不能减少了哦~',
        icon: 'none'
      })
    }else if(num>99){
      
      that.setData({
        goodsNum: newList[index].num,
        slideProductList: newList
      })
      wx.showToast({
        title: '亲，该宝贝最多购买99件哦~',
        icon: 'none'
      })
    }else{
      newList[index].num = num;
      that.setData({
        slideProductList: newList
      })
    }
    that.countNum()
    that.count()
  },
  //减法
  subtraction: function (e) {
    var that = this
    var index = e.currentTarget.dataset.index
    var num = e.currentTarget.dataset.num
    var newList = that.data.slideProductList
    
    if (num == 1) {//当数量为1件时，再次点击移除该商品
      newList.splice(index, 1)
    } else {
      num--
      newList[index].num = num
    }
    that.setData({
      goodsNum: num,
      slideProductList: newList
    })
    that.countNum()
    that.count()
  },
  //全选
  allSelect: function (e) {
    var that = this
    var allSelect = e.currentTarget.dataset.select //先判断是否选中
    var newList = that.data.slideProductList
    console.log(newList)
    if (allSelect == "circle") {
      for (var i = 0; i < newList.length; i++) {
        newList[i].select = "success"
      }
      var select = "success"
    } else {
      for (var i = 0; i < newList.length; i++) {
        newList[i].select = "circle"
      }
      var select = "circle"
    }
    that.setData({
      slideProductList: newList,
      allSelect: select
    })
    that.countNum()
    that.count()
  },
 
  countNum: function () { //计算数量
    var that = this
    var newList = that.data.slideProductList
    var allNum = 0
    for (var i = 0; i < newList.length; i++) {
      if (newList[i].select == "success") {
        allNum += parseInt(newList[i].num)
      }
    }
    parseInt
    that.setData({
      num: allNum
    })
  },
  
  count: function () {//计算金额方法
    var that = this
    var newList = that.data.slideProductList
    var newCount = 0
    for (var i = 0; i < newList.length; i++) {
      if (newList[i].select == "success") {
        newCount += newList[i].num * newList[i].price
      }
    }
    that.setData({
      count: newCount
    })
  },

  

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var width=wx.getSystemInfoSync().windowWidth
    var height=wx.getSystemInfoSync().windowHeight
    height=height-55-53;
    this.setData({
      height:height
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

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
