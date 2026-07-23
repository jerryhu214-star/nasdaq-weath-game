// pages/webview/webview.js
const app = getApp()

Page({
  data: {
    gameUrl: ''
  },

  onLoad: function() {
    // 从全局变量获取游戏链接
    this.setData({
      gameUrl: app.globalData.gameUrl
    })
  },

  // 接收 HTML5 游戏发来的消息
  onMessage: function(e) {
    console.log('收到���戏消息:', e.detail.data)

    // 如果游戏发来了分享数据
    const data = e.detail.data
    if (data && data.length > 0) {
      const msg = data[data.length - 1]
      if (msg.action === 'share') {
        // 可以在这里触发微信分享
        console.log('分享数据:', msg)
      }
    }
  },

  // 微信分享
  onShareAppMessage: function() {
    return {
      title: '纳指100·财富沙盘 - 二十年定投模拟器',
      path: '/pages/index/index',
      imageUrl: ''
    }
  },

  // 分享到朋友圈
  onShareTimeline: function() {
    return {
      title: '纳指100·财富沙盘 - 你能拿得住吗？',
      query: ''
    }
  }
})
