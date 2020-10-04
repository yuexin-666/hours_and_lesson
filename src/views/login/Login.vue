<template>
  <div>
    <div class="body">
      <!-- User-logo -->
      <div class="user-logo">
        <img src="../../../public/img/User-logo.png" alt="" />
      </div>
      <div class="login">
        <!-- 表单 -->
        <div>
          <van-form @submit="onSubmit">
            <van-field
              name="username"
              v-model="username"
              placeholder="请输入手机号"
              class="active"
            />
            <van-field
              name="password"
              v-model="password"
              type="password"
              placeholder="请输入密码"
            />
            <!-- 验证 -->
            <div class="proving">
              <span @click="toFind">找回密码</span>
              <span @click="goregister">注册/验证码登录</span>
            </div>
            <div style="margin: 16px">
              <van-button round block native-type="submit" class="btn"
                >登录</van-button
              >
            </div>
          </van-form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: "",
      password: "",
      user: [],
    };
  },
  mounted() {
    let user = localStorage.user;
    if (user) {
      this.user = JSON.parse(user);
    }
  },
  methods: {
    name() {},
    onSubmit(val) {
      this.user.forEach((element) => {
        if (element.username == val.username) {
          if (element.password == val.password) {
            localStorage.setItem("token",JSON.stringify(val));
            this.$router.push({
              path: "/user",
            });
          } else {
            this.$toast.fail("账号密码错误");
          }
        } else {
          this.$toast.fail("账号密码错误");
        }
      });
    },
    // 找回密码
    toFind() {
      this.$router.push({ path: "/forgetPass" });
    },
    goregister() {
      this.$router.push({
        path: "/register",
      });
    },
  },
};
</script>

<style>
</style>




<style scoped>
.body {
  width: 100%;
}
/* user-logo */
.user-logo {
  width: 100%;
  height: 25vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
.user-logo img {
  width: 65%;
}
/* 登录 注册 */
.login {
  width: 100%;
  height: 60vh;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  padding: 0.5rem;
}
/* 表单 */
.from {
  font-size: 0.9rem;
}
/* 验证 */
.proving {
  width: 89%;
  height: 8vh;
  line-height: 8vh;
  margin: 0 auto;
  font-size: 0.2rem;
  display: flex;
  justify-content: space-between;
  color: #999999;
}
/* 提交按钮 */
.btn {
  background-color: #fd6d1c;
  color: #fff;
  height: 0.9rem;
}
/* 点击激活 */
.active {
  border-bottom: #fd6d1c;
}
</style>

