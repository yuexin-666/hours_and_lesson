<template>
  <div>
    <van-nav-bar
      title="我的学习卡"
      right-text="学习卡兑换"
      left-arrow
      @click-left="onClickLeft"
      @click-right="onClickRight"
    />
    <van-empty
      image="https://img.yzcdn.cn/vant/custom-empty-image.png"
      description="暂无订单"
      v-if="$route.query.val != 1"
    >
    </van-empty>
  </div>
</template>

<script>
export default {
  methods: {
    onClickLeft() {
        window.history.back()
    },
    onClickRight() {
        this.$router.push({
            path:"/exchange"
        })
    },
  },
};
</script>

<style>
</style>