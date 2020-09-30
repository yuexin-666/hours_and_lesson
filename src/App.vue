<template>
  <div id="app">
    <router-view/>
    <tabBar v-show="$route.meta.tabberShow"/>
<<<<<<< HEAD
=======
<<<<<<< HEAD
    
>>>>>>> 1371a801b5778e09ca28977e1c383f391a8d290b
    <tabBar />
=======
>>>>>>> acd86914436c8ee0aa725d48905aeef3c14d292a
    <div class="leaveMsg" id="leaveMsg" @touchmove.prevent ="move">
      <span class="iconfont icon-mail"></span>
    </div>
  </div>
</template>

<script>
import tabBar from "./components/tabBar/TabBar";
export default {
  components: {
    tabBar,
  },
  methods: {
    move(event) {
      var ss = document.querySelector("#leaveMsg")
      var x = event.targetTouches[0].clientX;
      var y = event.targetTouches[0].clientY;
      var clientW = document.documentElement.clientWidth;
      var clientH = document.documentElement.clientHeight;
      ss.style.left = x - 25 + "px";
      ss.style.top = y - 25 + "px";
      // 检测碰撞
      if (x < 25) {
        x = 25;
      } else if (x > clientW - 25) {
        x = clientW - 25;
      }

      if (y < 25) {
        y = 25;
      } else if (y > clientH - 25) {
        y = clientH - 25;
      }
      ss.style.left = x - 25 + "px";
      ss.style.top = y - 25 + "px";
    },
  },
};
</script>

<style scoped>
#app {
  font-size: 0.48rem;
}
.leaveMsg {
  width: 1.35rem;
  height: 1.35rem;
  background-color: #007aff;
  border-radius: 50%;
  position: fixed;
  bottom: 2rem;
  right: .1rem;
  text-align: center;
  line-height: 1.5rem;
  z-index: 999;
}
.leaveMsg .iconfont {
  font-size: 0.65rem;
  color: #fff;
}
</style>
