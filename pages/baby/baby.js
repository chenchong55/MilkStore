const app = getApp()
var Bmob = require('../dist/Bmob-1.1.1.min.js')

var that;
// pages/baby/baby.js
Page({
  /**
   * 页面的初始数据
   */
  data: {
    hidden: true,
    powerList: []
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    that = this;
    //let Diary = Bmob.Object.extend("detail")
    const query = Bmob.Query("milk_powder");

    query.find().then((res) => {
      that.setData({
        powerList: res
      });
    });
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
