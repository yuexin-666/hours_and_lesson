<template>
  <div>
    <van-nav-bar
      title="我的优惠卷"
      left-arrow
      @click-left="onClickLeft"
    />
    <van-tabs v-model="active">
      <van-tab title="未使用">
        <van-empty
          image="https://img.yzcdn.cn/vant/custom-empty-image.png"
          description="暂无优惠卷"
          v-if="$route.query.val != 1"
        >
        </van-empty>
      </van-tab>
      <van-tab title="已使用">
        <van-empty
          image="https://img.yzcdn.cn/vant/custom-empty-image.png"
          description="暂无优惠卷"
          v-if="$route.query.val != 1"
        >
        </van-empty>
      </van-tab>
      <van-tab title="已过期">
        <van-empty
          image="https://img.yzcdn.cn/vant/custom-empty-image.png"
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

<style>
</style>