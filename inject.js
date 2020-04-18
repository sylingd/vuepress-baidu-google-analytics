/* global HM_ID, GA_ID, IGNORE_HASH */
const hm = require('./baidu');
const ga = require('./google');

export default ({
  router
}) => {
  if (process.env.NODE_ENV === 'production' && typeof window !== 'undefined') {
    const cb = [];
    let last_url = null;
    if (HM_ID) {
      hm.init(HM_ID);
      cb.push(hm.callback);
    }
    if (GA_ID) {
      ga.init(GA_ID);
      cb.push(ga.callback);
    }

    if (!cb.length) {
      return;
    }

    router.afterEach(function (to) {
      let current = to.fullPath;
      if (IGNORE_HASH) {
        current = to.path;
      }
      // vuepress会在首次进入页面时回调此函数，但首次不应统计
      if (last_url === null) {
        last_url = current;
        return;
      }
      // URL不变化的情况下不统计
      if (last_url === current) {
        return;
      }
      last_url = current;
      cb.forEach(function (it) {
        it.call(this, current)
      });
    });
  }
}