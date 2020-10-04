<template>
  <div>
    <van-tabbar
      v-model="active"
      active-color="#FF7F16"
      route
      @change="changeNav"
    >
      <van-tabbar-item :class="shouye" to="/">首页</van-tabbar-item>
      <van-tabbar-item :class="kecheng" to="/about">课程</van-tabbar-item>
      <van-tabbar-item :class="yueke" to="/lessonHistory">约课记录</van-tabbar-item>
      <van-tabbar-item :class="lianxi" to="/pricate">练习</van-tabbar-item>
      <van-tabbar-item :class="wode" to="/user">我的</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
export default {
  data() {
    return {
      active: 0,
      shouye: "iconfont icon-xueshimao",
      kecheng: "iconfont icon-shu",
      yueke: "iconfont icon-shouzhi",
      lianxi: "iconfont icon-whitePencil",
      wode: "iconfont icon-Icon_wode",
    };
  },
  methods: {
    changeNav(str) {
      switch (str) {
        case 0:
          (this.shouye = "iconfont icon-niu"),
            (this.kecheng = "iconfont icon-shu"),
            (this.yueke = "iconfont icon-shouzhi"),
            (this.lianxi = "iconfont icon-whitePencil"),
            (this.wode = "iconfont icon-Icon_wode");
          break;
        case 1:
          (this.shouye = "iconfont icon-xueshimao"),
            (this.kecheng = "iconfont icon-dingdan1"),
            (this.yueke = "iconfont icon-shouzhi"),
            (this.lianxi = "iconfont icon-whitePencil"),
            (this.wode = "iconfont icon-Icon_wode");
          break;
        case 2:
          (this.shouye = "iconfont icon-xueshimao"),
            (this.kecheng = "iconfont iconfont icon-shu"),
            (this.yueke = "iconfont icon-zhongbiao"),
            (this.lianxi = "iconfont icon-whitePencil"),
            (this.wode = "iconfont icon-Icon_wode");
          break;
        case 3:
          (this.shouye = "iconfont icon-xueshimao"),
            (this.kecheng = "iconfont iconfont icon-shu"),
            (this.yueke = "iconfont icon-shouzhi"),
            (this.lianxi = "iconfont icon-jiqiren"),
            (this.wode = "iconfont icon-Icon_wode");
          break;
        case 4:
          (this.shouye = "iconfont icon-xueshimao"),
            (this.kecheng = "iconfont iconfont icon-shu"),
            (this.yueke = "iconfont icon-shouzhi"),
            (this.lianxi = "iconfont icon-whitePencil"),
            (this.wode = "iconfont icon-jiqiren");
          break;
      }
    },
  },
};
</script>

<style scoped>
.iconfont {
  font-size: 0.3rem;
}
</style>