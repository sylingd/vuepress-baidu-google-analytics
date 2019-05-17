module.exports = {
  init(id) {
    window._hmt = window._hmt || [];
    var hm = document.createElement("script")
    hm.src = "https://hm.baidu.com/hm.js?" + id
    var s = document.getElementsByTagName("script")[0]
    s.parentNode.insertBefore(hm, s)
  },
  callback(to) {
    _hmt.push(['_trackPageview', to])
  }
}