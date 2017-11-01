<template>
  <div id="app">
    <hello></hello>
    <div id="toast"></div>
  </div>
</template>

<script>
import Hello from './components/Hello'

export default {
  components: {
    'hello': Hello
  }
}
</script>
