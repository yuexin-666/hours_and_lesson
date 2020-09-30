<template>
  <div>
    <van-nav-bar title="找回密码" left-arrow @click-left="onClickLeft" />
    <div class="conter">
      <van-form @submit="onSubmit">
        <van-field
          v-model="username"
          placeholder="请填写手机号"
          @focus="inputFocus(1)"
          @blur="inputBlue"
          :class="{avtive :val ==1}"
          center=true
        >
          <template #right-icon>
            <span class="getInfo">获取验证码</span>
          </template>
        </van-field>
        <van-field
          v-model="result"
          placeholder="请填写验证码"
          @focus="inputFocus(2)"
          @blur="inputBlue"
           :class="{avtive :val ==2}"
           center=true
        />
        <van-field
          v-model="password"
          type="password"
          placeholder="请填写密码"
          @focus="inputFocus(3)"
          @blur="inputBlue"
           :class="{avtive :val ==3}"
           center=true
        />
        <div style="margin: 16px">
          <van-button round block type="info" native-type="submit" class="btn">
            确定
          </van-button>
        </div>
      </van-form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: "",
      password: "",
      result: "",
      val: 0,
    };
  },
  methods: {
    onSubmit(values) {
      console.log("submit", values);
    },
    onClickLeft() {
      this.$router.push({
        path:"/login"
      })
    },
    inputBlue(){
      this.val = -1
    },
    inputFocus(str) {
      this.val = str
    }
  },
};
</script>

<style scoped>
.conter {
  margin-top: 0.13333rem;
  padding: 0 0.53333rem;
}
.getInfo {
  color: #eb6100;
  font-size: 0.28rem;
}
.btn {
  background-color: #fd6d1c;
  color: #fff;
  height: 0.9rem;
}
.avtive {
  padding: 0rem 0.3rem;
  height: 1rem;
  border-bottom: 1px solid #fd6d1c;
}
</style>