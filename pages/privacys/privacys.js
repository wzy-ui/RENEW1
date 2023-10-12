Page({
  onAgree: function() {
      wx.navigateBack({});
  },
  onDecline: function() {
    wx.navigateBack({
      delta: 2,
    });
  },
});