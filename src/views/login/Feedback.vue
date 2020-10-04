<template>
  <div>
    <!-- 导航栏 -->
    <van-nav-bar title="意见反馈" left-arrow @click-left="onClickLeft">
      <template #left>
        <van-icon name="arrow-left" size="18" color="gray" />
      </template>
    </van-nav-bar>
    <!-- 内容 -->
    <div class="cont"> 
      <textarea
        cols="20"
        rows="8"
        class="text"
        placeholder="请输入您的意见"
        v-model="text"
      ></textarea>
      <p class="s"><span class="x">0/500</span></p>
      <van-button type="primary" block class="btn" @click="submit">提交</van-button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      text: "",
    };
  },
  methods: {
    onClickLeft() {
      window.history.back();
    },
    submit(){
      if(this.text===""){
          this.$toast('反馈内容  必须填写');
      }
    }
  },
};
</script>

<style scoped>
.cont {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.cont .text {
  width: 90%;
  border-radius: 0.25rem;
  border: 0.01rem solid #eee;

  font-size: 0.2rem;
}
.s{
  width: 90%;
 
}
.x {
  /* margin-left: 16rem; */
  /* padding: 1rem; */
  float: right;
 
  color: rgb(187, 187, 187);
}
.btn {
  width: 92%;
  height: 6vh;
  /* margin: 1rem; */
  background-color: #eb6100;
  color: #fff;
  border: 0.1rem solid #eb6100;
}
</style>