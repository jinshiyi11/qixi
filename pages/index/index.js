//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    count: 5,
    currentIndex: 0,
    items: [],
    animationData: {},
    images: [
      'https://lg-7d7cxgzy-1251232205.cos.ap-shanghai.myqcloud.com/0.jpg',
      'https://lg-7d7cxgzy-1251232205.cos.ap-shanghai.myqcloud.com/1.jpg'
    ]
  },
  onShareAppMessage: function() {
    return {
      title: '一刀的小程序',
      path: '/pages/index/index'
    }
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  getRandomImage: function() {
    const index = Math.floor(Math.random() * this.data.images.length)
    return this.data.images[index]
  },
  getRandomLeft: function() {
    return Math.floor(Math.random() * 4) * 200
  },
  getRandomTop: function() {
    return Math.floor(Math.random() * 5) * 200
  },
  onLoad: function() {
    this.showAnimation(0)
  },
  onShow: function() {

  },
  showAnimation: function(index) {
    setTimeout(function() {
      let result = this.data.items.slice()
      const image = this.getRandomImage()
      const left = this.getRandomLeft()
      const top = this.getRandomTop()
      result.push({
        image,
        left,
        top
      });

      let animation = wx.createAnimation({
        duration: 1000,
        timingFunction: 'ease'
      })
      this.animation = animation
      animation.rotate(360).scale(1.1, 1.1).step()
      this.setData({
        animationData: this.animation.export(),
        currentIndex: index,
        items: result
      })

      if (index < this.data.count - 1) {
        this.showAnimation(index + 1)
      }
    }.bind(this), 1500)
  }
})