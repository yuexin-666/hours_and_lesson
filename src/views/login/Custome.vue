<template>
  <div class="bbody">
    <div class="top">
      <span>给我们留言</span>
      <van-icon name="arrow-down" size="18" color="white" @click="back" />
    </div>
    <!-- 提示 -->
    <div class="text">
      您好，很抱歉我们暂时无法为您提供服务，如需帮助，请留言，我们将尽快联系并解决您的问题
    </div>
    <!-- 手机 -->
    <div class="phone">手机</div>
    <van-cell-group>
      <van-field v-model="value1" placeholder="请输入" />
    </van-cell-group>
    <!-- 留言内容： -->
    <div class="phone">留言内容：</div>
    <van-cell-group class="value2">
      <van-field v-model="value2" placeholder="请输入" />
    </van-cell-group>
    <!-- 按钮 -->
    <van-button type="info" block class="btn">提交</van-button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      value1: "",
      value2: "",
    };
  },
  methods: {
    back() {
      window.history.back();
    },
  },
};
</script>

<style scoped>
.bbody {
  width: 100%;
  /* height: 100vh; */
  background-color: #f2f3f5;
}
.top {
  width: 100%;
  height: 10vh;
  background-color: #007aff;
  color: #fff;
  font-size: 0.35rem;
  display: flex;
  justify-content: center;
  align-items: center;
  justify-content: space-between;
  box-sizing: border-box;
  padding: 0.4rem;
}
.text {
  width: 100%;
  box-sizing: border-box;
  padding: 0.3rem;
  font-size: 0.2rem;
}
.phone {
  font-size: 0.3rem;
  box-sizing: border-box;
  padding: 0.2rem;
}
.value2{
  height: 15vh;
}
.btn{
  width: 90%;
  height: 6.5vh;
  background-color: #007aff;
  margin: 0.6rem auto;
}
</style>