// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vuetify from 'vuetify'
import vuetify from '@/plugins/vuetify'
Vue.use(Vuetify)

Vue.config.productionTip = false
// js-300ms
import FastClick from 'fastclick'
FastClick.attach(document.body);
// css 
import 'css/reset.css'
import 'css/iconfont.css'
// css简洁路径不用在前面加~     js才要
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: {
    App
  },
  template: '<App/>'
})
