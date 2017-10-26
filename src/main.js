import Vue from 'vue'
import App from './App'
import VueResource from 'vue-resource'

/* eslint-disable no-new */
new Vue({
  el: 'body',
  components: { App }
})

Vue.use(VueResource)