import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './components/App.vue'
import routes from './routes'
import BaiduMap from 'src/index.js'

import Hljs from 'highlight.js'

Vue.use(VueRouter);
Vue.use(BaiduMap, {
  ak: 'oW2UEhdth2tRbEE4FUpF9E5YVDCIPYih'
})

const router = new VueRouter({
    routes,
    linkActiveClass: 'is-active',
})

router.beforeEach(function (to, from, next) {
  global.scrollTo(0, 0)
  next()
})

router.afterEach(route => {
  let blocks = document.querySelectorAll('pre code');
  Array.prototype.forEach.call(blocks, Hljs.highlightBlock);
})

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})