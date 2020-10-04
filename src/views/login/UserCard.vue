<template>
  <div class="userCard_box">
    <van-nav-bar
      title="我的学习卡"
      right-text="学习卡兑换"
      left-arrow
      @click-left="onClickLeft"
      @click-right="onClickRight"
    />
    <van-empty
      image="http://localhost:8080/img/kong.png"
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

<style scoped>
.userCard_box{
  width: 100%;
  height: 100vh;
  background-color: #F0F2F5;
}
</style>