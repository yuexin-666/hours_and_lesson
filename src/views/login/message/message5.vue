<template>
  <div>
    <!-- 导航 -->
    <van-nav-bar title="  考试通知" left-arrow @click-left="onClickLeft">
      <template #left>
        <van-icon name="arrow-left" color="gray" size="18" />
      </template>
    </van-nav-bar>
    <!-- 图片 -->
    <div class="img">
      <img src="/server-images/zz.png" alt="" />
      <span class="text">暂无消息通知</span>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    onClickLeft() {
      window.history.back();
    },
  },
};
</script>

<style scoped>
.img {
  width: 100%;
  height: 35vh;
  display: flex;
  align-items: center;
  flex-direction: column;
}
.img img {
  width: 50%;
  height: 70%;
}
.img .text {
  margin-top: 0.5rem;
  font-size: 0.3rem;
  color: #8c8c8c;
}
</style>