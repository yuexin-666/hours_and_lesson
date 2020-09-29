<template>
  <div id="app">
    <router-view/>
    <tabBar v-show="$route.meta.tabberShow"/>
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
