<template>
  <div class="hello">
    <button @click="showToast">Show Toast</button>
  </div>
</template>

<script>
import Toast from './Toast/index.js'
import Vue from 'vue'

export default {
  data () {
    return {
      msg: 'Hello World!'
    }
  },
  methods: {
    showToast () {
      const options = {
        position: 'top',
        size: 'small',
        message: 'I am a Toast from outer component'
      }
      Toast.show(options)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.helle {
  text-align: cenetr;
}
</style>
