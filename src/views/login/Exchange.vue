<template>
  <div>
    <van-nav-bar title="我的学习卡" left-arrow @click-left="onClickLeft" />
    <div class="exchange_box">
      <div class="exchange_contant">
        <van-field placeholder="请输入学习卡卡号">
          <template #label>
            <span>卡号:</span>
          </template>
        </van-field>
        <van-field placeholder="请输入学习卡密码">
          <template #label>
            <span>密码:</span>
          </template>
        </van-field>
        <div class="btn">
          <button>立即兑换</button>
        </div>
      </div>
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
.exchange_box {
  width: 100%;
  height: 100vh;
  background-color: #f0f2f5;
  padding-top: 0.4rem;
}
.exchange_contant {
  width: 100%;
  height: 4.5rem;
  background-color: #fff;
}
.exchange_card {
  width: 1rem;
}
.van-cell__title van-field__label {
  width: 1rem !important;
}
.btn{
    width: 100%;
    margin-top: 1rem;
    display: flex;
    justify-content: center;
}
.btn button{
    font-size: .3rem;
    width: 80%;
    margin: 0 auto;
    height: 0.9rem;
    background-color: #EB6100;
    color: #fff;
    border: none;
}
</style>