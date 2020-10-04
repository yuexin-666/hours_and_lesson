<template>
  <div class="order_box">
    <van-nav-bar :title="title" left-arrow @click-left="onClickLeft">
    </van-nav-bar>
    <van-tabs v-model="active">
      <van-tab title="全部订单">
        <div class="order_box" v-if="$route.query.val == 1">
          <div class="order_item">
            <div class="order_item_top">
              <div class="order_item_number">订单编号：2020092814332604620</div>
              <div class="order_item_status">交易完成</div>
            </div>
            <div class="order_item_center">
              <p>每时每课特级教师-自主招生冲刺讲座10-二次函数4--存在性问题</p>
              <p>时间：2020.09.28 14:33</p>
              <p>
                实付款：<span
                  ><img
                    src="https://msmk2019.oss-cn-shanghai.aliyuncs.com/uploads/image/20191HHDExgz0u1567065946.png"
                    alt=""
                  />0</span
                >
              </p>
            </div>
          </div>
        </div>

        <van-empty
          image="http://localhost:8080/img/kong.png"
          description="暂无订单"
          v-if="$route.query.val != 1"
        >
        </van-empty>
      </van-tab>
      <van-tab title="待支付">
        <van-empty
          image="http://localhost:8080/img/kong.png"
          description="暂无订单"
        >
        </van-empty>
      </van-tab>

      <van-tab title="已完成">
        <div class="order_box" v-if="$route.query.val == 1">
          <div class="order_item">
            <div class="order_item_top">
              <div class="order_item_number">订单编号：2020092814332604620</div>
              <div class="order_item_status">交易完成</div>
            </div>
            <div class="order_item_center">
              <p>每时每课特级教师-自主招生冲刺讲座10-二次函数4--存在性问题</p>
              <p>时间：2020.09.28 14:33</p>
              <p>
                实付款：<span
                  ><img
                    src="https://msmk2019.oss-cn-shanghai.aliyuncs.com/uploads/image/20191HHDExgz0u1567065946.png"
                    alt=""
                  />0</span
                >
              </p>
            </div>
          </div>
        </div>
        <van-empty
          image="http://localhost:8080/img/kong.png"
          description="暂无订单"
          v-if="$route.query.val != 1"
        >
        </van-empty>
      </van-tab>
      <van-tab title="已取消">
        <van-empty
          image="http://localhost:8080/img/kong.png"
          description="暂无订单"
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
  computed: {
    title: function () {
      let val = this.$route.query.val;
      var title = "";
      if (val == 1) {
        title = "课程订单";
      } else if (val == 2) {
        title = "会员订单";
      } else if (val == 3) {
        title = "约课订单";
      }
      return title;
    },
  },
  methods: {
    onClickLeft() {
      window.history.back();
    },
  },
};
</script>

<style scoped>
.order_box{
  width: 100%;
  height: 100vh;
  background-color: #F0F2F5;
}
.order_item {
  margin: 0.3rem;
  padding: 0.2rem;
  border: 1px solid #f8f8f8;
}
.order_item_top {
  display: flex;
  justify-content: space-between;
  padding-bottom: 0.2rem;
  margin-bottom: 0.2rem;
  border-bottom: 1px solid #f5f5f5;
}
.order_item_center p {
  margin: 0.05rem;
}
.order_item_center p img {
  width: 0.22rem;
}
</style>