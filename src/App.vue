<template>
  <div id="app">
    <router-view/>
    <tabBar/>
  </div>
</template>

<script>
import tabBar from "./components/tabBar/TabBar"
export default {
  components:{
    tabBar
  }
}
</script>

<style scoped>
#app{
  font-size: .48rem;
}
</style>
