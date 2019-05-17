module.exports = {
  init(id) {
    window._hmt = window._hmt || [];
    const hm = document.createElement("script")
    hm.src = "https://hm.baidu.com/hm.js?" + id
    const s = document.getElementsByTagName("script")[0]
    s.parentNode.insertBefore(hm, s)
  },
  callback(to) {
    _hmt.push(['_trackPageview', to.fullPath])
  }
}