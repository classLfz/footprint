import Vue from 'vue'
import App from './App'
import router from './router'
// promise polyfill
import Promise from 'es6-promise'
Promise.polyfill()

// ui components
import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.css'

Vue.use(VueMaterial)

// vuex
import Vuex from 'vuex'
import state from './state'
Vue.use(Vuex)
const store = new Vuex.Store(state)

// axios
import axios from 'axios'
let httpRequest = axios.create({
  baseURL: 'http://easy-mock.com/mock/59ac067de0dc6633419a126f/footprint/',
  timeout: 10000
})
Vue.prototype.$http = httpRequest

Vue.config.productionTip = false

Vue.material.registerTheme('default', {
  primary: 'blue',
  accent: 'red',
  warn: 'red',
  background: 'white'
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  template: '<App/>',
  components: { App }
})
