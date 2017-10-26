<template>
  <div class="date">
    <div>Date: <input type="date" v-model="date" /></div>
    <div>Phone: <a href="tel:17621072371">17621072371</a></div>
    <div>
      <!-- The second value will be selected initially -->
      <select class="select" name="select"> <!--Supplement an id here instead of using 'name'-->
        <option value="value1">Value 1</option> 
        <option value="value2" selected>Value 2</option>
        <option value="value3">Value 3</option>
        <option value="value4">Value 4</option> 
        <option value="value6">Value 5</option>
        <option value="value7">Value 6</option>
      </select>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      date: new Date()
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.date,
input[type=date] {
    font-size: 30px;
}
.select {
  font-size: 30px;
}
</style>
