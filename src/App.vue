<template>
  <div id="app">
    <date></date>
    <list-one></list-one>
  </div>
</template>

<script>
import Date from './components/Date'
import ListOne from './components/ListOne'

export default {
  components: {
    Date,
    ListOne
  }
}
</script>

<style>
html {
  height: 100%;
}

body {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  overflow: hidden;
}

#app {
  color: #2c3e50;
  width: 100%;
  font-family: Source Sans Pro, Helvetica, sans-serif;
  text-align: center;
  height: 100%;
  overflow: hidden;
}

#app a {
  color: #42b983;
  text-decoration: none;
}

.logo {
  width: 100px;
  height: 100px
}
</style>
