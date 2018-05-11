<template>
  <div id="app">
    <h1 class="text">{{words}}</h1>
    <!-- <router-link to="main">main</router-link>
    <router-link to="product-list">product-list</router-link> -->
    <router-view></router-view>
  </div>
</template>
<script>
export default {
  name: 'app',
  data() {
    return {
      words: 'Hello,world'
    }
  },
  mounted(){
    console.log(this.$router)
  }
}
</script>
<style lang="scss" scoped>
.text {
  color: red;
}
</style>
