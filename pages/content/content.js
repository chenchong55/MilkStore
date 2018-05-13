var Bmob = require('../dist/Bmob-1.1.1.min.js');
var that;

Page({
  data: {
    imgUrl: '',
    objectId:'',
    contentUrl:'',
    name: '',
    priceUrl: '',
    priceCheap:'',
    recommend:'',
    recommend_:'',
    milk_url:'',
    content_url: false,
    hidden: true
  },
  onLoad:function(options){
    that = this;
   // 页面初始化 options为页面跳转所带来的参数
   that.setData({
       imgUrl:options.imgUrl,
       objectId: options.objectId,
       name: options.name,
       priceUrl: options.priceUrl,
       priceCheap:options.priceCheap,
       recommend:options.recommend,
       recommend_:options.recommend_,
       milk_url:options.milk_url
   });

   const query = Bmob.Query("milk_powder");
   query.get(that.data.objectId).then(res => {
     that.setData({
       contentUrl: res.milk_content
     });
   });

 },
  checkon: function(){
    this.setData({
      content_url: true,
      hidden: !this.data.hidden
    });
  }
  // go_click: function(){
  //   that = this;
  //   wx.redirectTo({
  //     url: that.data.contentUrl
  //   });
  // }
});
