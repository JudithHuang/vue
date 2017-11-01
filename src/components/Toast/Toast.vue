<template>
  <div class="toast" v-show="options.show">
    {{options.message}}
    <div>My position is: {{options.position}}</div>
    <div>I should be: {{options.size}}</div>
  </div>
</template>
<script>
export default {
  props: {
    options: {
      type: 'Object',
      default: function () {
        return {}
      }
    }
  }
}
</script>
<style scoped>
.toast {
  position: fixed;
  max-width: 80%;
  border-radius: 5px;
  background: rgba(0, 0, 0, 0.7);
  color: #fff;
  box-sizing: border-box;
  text-align: center;
  z-index: 1000;
  font-size: 24px;
  padding: 14px 20px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>