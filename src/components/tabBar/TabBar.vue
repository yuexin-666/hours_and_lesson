<template>
  <div>
    <van-tabbar v-model="active" active-color="#FF7F16" route>
      <van-tabbar-item class="iconfont icon-xueshimao" to="/">首页</van-tabbar-item>
      <van-tabbar-item class="iconfont icon-shu" to="/about">课程</van-tabbar-item>
      <van-tabbar-item class="iconfont icon-shouzhi" to="/lessonHistory">约课记录</van-tabbar-item>
      <van-tabbar-item class="iconfont icon-whitePencil" to="/pricate">练习</van-tabbar-item>
      <van-tabbar-item class="iconfont icon-Icon_wode" to="/user">我的</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
export default {
  data() {
    return {
      active: 0,
    };
  },
};
</script>

<style scoped>
.iconfont {
    font-size: .3rem;
}
</style>