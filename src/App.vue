<template>
  <div id="app">
    <div class="header">Header</div>
    <list-one></list-one>
    <div class="footer">Footer</div>
  </div>
</template>

<script>
import Date from './components/Date'
import ListOne from './components/ListOne'
import TreeView from './components/TreeView'

// demo data
var data = {
  name: 'My Tree',
  children: [
    { name: 'hello' },
    { name: 'wat' },
    {
      name: 'child folder',
      children: [
        {
          name: 'child folder',
          children: [
            { name: 'hello' },
            { name: 'wat' }
          ]
        },
        { name: 'hello' },
        { name: 'wat' },
        {
          name: 'child folder',
          children: [
            { name: 'hello' },
            { name: 'wat' }
          ]
        }
      ]
    }
  ]
}

export default {
  components: {
    Date,
    ListOne,
    TreeView
  },
  data: function() {
    return {
      data: data
    }
  }
}
</script>

<style>
body {
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0;
}

#app {
  color: #2c3e50;
  width: 100%;
  font-family: Source Sans Pro, Helvetica, sans-serif;
  text-align: center;
  overflow: hidden;
  flex-direction: column;
  height: 100vh;
}

#app a {
  color: #42b983;
  text-decoration: none;
}

.logo {
  width: 100px;
  height: 100px
}

.content {
  flex: 1;
  overflow-y: scroll;
}

div {
  display: flex;
}
</style>
