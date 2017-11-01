import Vue from 'vue'
const Toast = Vue.extend(require('./Toast.vue'));

export default class ToastUtil {
  static _instance = null

  static show (options = {}) {
    ToastUtil._init({ ...options, show: true })
    setTimeout(ToastUtil._close, 3000)
  }

  static _close () {
    ToastUtil._instance.options = { show: false }
  }

  static _init (options) {
    ToastUtil._instance = ToastUtil._getInstance()
    ToastUtil._instance.options = options
  }

  static _getInstance () {
    if (ToastUtil._instance) {
      return ToastUtil._instance
    }

    return new Toast({ el: '#toast' })
  }
}