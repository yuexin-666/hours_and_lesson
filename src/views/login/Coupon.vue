<template>
  <div class="coupon_box">
    <van-nav-bar
      title="我的优惠卷"
      left-arrow
      @click-left="onClickLeft"
    />
    <van-tabs v-model="active">
      <van-tab title="未使用">
        <van-empty
          image="http://localhost:8080/img/kong.png"
          description="暂无优惠卷"
          v-if="$route.query.val != 1"
        >
        </van-empty>
      </van-tab>
      <van-tab title="已使用">
        <van-empty
          image="http://localhost:8080/img/kong.png"
          description="暂无优惠卷"
          v-if="$route.query.val != 1"
        >
        </van-empty>
      </van-tab>
      <van-tab title="已过期">
        <van-empty
          image="http://localhost:8080/img/kong.png"
          description="暂无优惠卷"
          v-if="$route.query.val != 1"
        >
        </van-empty>
      </van-tab>
    </van-tabs>
  </div>
</template>

<script>
export default {
  data() {
    return {
      active: 0,
    };
  },
  methods: {
    onClickLeft() {
      window.history.back();
    },
  },
};
</script>

<style scoped>
.coupon_box{
  width: 100%;
  height: 100vh;
  background-color: #F0F2F5;
}
</style>