var app = getApp()
Page({
  data: {
    // 顶部菜单切换
    navbar: ['全部', "待支付","待发货", "待收货", "已完成"],
    // 默认选中菜单
    currentTab: 0,
    index: 0,
    pick_name: "",
    // list数据
    list: [{
        binahao: "3124356568797697978",
        start: "已发货",
        arry: [{
            name: "这里是昵称这里是昵称这里是昵称这里是昵称这里是昵称",
            image: "../../../images/user_image/HDKG-ON.png",
            money: "56",
          },
          {
            name: "这里是昵称这里是昵称这里是昵称这里是昵称这里是昵称",
            image: "../../../images/user_image/HDKG-ON.png",
            money: "56",
          },
        ],
        cont_count: "2",
        count_money: "112",
      }, {
        binahao: "3124356568797697978",
        start: "已发货",
        arry: [{
            name: "这里是昵称这里是昵称这里是昵称这里是昵称这里是昵称",
            image: "../../../images/user_image/HDKG-ON.png",
            money: "56",
          },
          {
            name: "这里是昵称这里是昵称这里是昵称这里是昵称这里是昵称",
            image: "../../../images/user_image/HDKG-ON.png",
            money: "56",
          },
        ],
        cont_count: "2",
        count_money: "112",
      }, {
        binahao: "3124356568797697978",
        start: "已发货",
        arry: [{
            name: "这里是昵称这里是昵称这里是昵称这里是昵称这里是昵称",
            image: "../../../images/user_image/HDKG-ON.png",
            money: "56",
          },
          {
            name: "这里是昵称这里是昵称这里是昵称这里是昵称这里是昵称",
            image: "../../../images/user_image/HDKG-ON.png",
            money: "56",
          },
        ],
        cont_count: "2",
        count_money: "112",
      },
 
    ],
 
  },
  //跳转到订单详情页面
  orderDetails:function(e){
    wx.navigateTo({
      url: '/pages/user/orderInfo/orderDetails/orderDetails',
      success: function(res) {
        console.log("成功跳转到订单详情页面");
      },
      fail: function(res) {
        console.log("失败");
      },
     })
  },

  // 初始化加载
  onLoad: function() {
    var that = this;
 
  },
 
 
  //顶部tab切换
  navbarTap: function(e) {
    this.setData({
      currentTab: e.currentTarget.dataset.idx
    })
  },
 
 
 
})