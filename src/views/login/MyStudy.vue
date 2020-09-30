<template>
  <div>
    <van-nav-bar
      title="我的学习"
      left-arrow
      @click-left="onClickLeft"
      @click-right="onClickRight"
    >
      <template #right>
        <span><van-icon name="coupon-o" /></span>
      </template>
    </van-nav-bar>
    <van-tabs
      v-model="active"
      title-active-color="#ED6F17"
      title-inactive-color="#7D7E80"
    >
      <van-tab title="直播课(0)">
        <van-empty
          image="https://img.yzcdn.cn/vant/custom-empty-image.png"
          description="还没有课程,快去选择课程学习吧"
        >
          <van-button type="primary" size="mini" color="#EB6100" @click="goAbout"
            >选择课程</van-button
          >
        </van-empty>
      </van-tab>
      <van-tab title="点播课(1)">
        <div class="tabs_box">
          <div class="tabs_item">
            <p class="tabs_item_title">
              每时每课特级教师-自主招生冲刺讲座10-二次函数4--存在性问题
            </p>
            <p class="tabs_item_time">共一课时</p>
            <div class="tabs_item_info">
              <p class="tabs_item_info_aa"></p>
              <span class="tabs_item_info_bb">已学习0%</span>
            </div>
          </div>
        </div>
      </van-tab>
      <van-tab title="音频课(0)">
        <van-empty
          image="https://img.yzcdn.cn/vant/custom-empty-image.png"
          description="还没有课程,快去选择课程学习吧"
        >
          <van-button type="primary" size="mini" color="#EB6100" @click="goAbout"
            >选择课程</van-button
          >
        </van-empty>
      </van-tab>
      <van-tab title="图文课(0)">
        <van-empty
          image="https://img.yzcdn.cn/vant/custom-empty-image.png"
          description="还没有课程,快去选择课程学习吧"
        >
          <van-button type="primary" size="mini" color="#EB6100" @click="goAbout"
            >选择课程</van-button
          >
        </van-empty>
      </van-tab>
      <van-tab title="面授课(0)">
        <van-empty
          image="https://img.yzcdn.cn/vant/custom-empty-image.png"
          description="还没有课程,快去选择课程学习吧"
        >
          <van-button type="primary" size="mini" color="#EB6100" @click="goAbout"
            >选择课程</van-button
          >
        </van-empty>
      </van-tab>
      <van-tab title="会员课(0)">
        <van-empty
          image="https://img.yzcdn.cn/vant/custom-empty-image.png"
          description="还没有课程,快去选择课程学习吧"
        >
          <van-button type="primary" size="mini" color="#EB6100" @click="goAbout"
            >选择课程</van-button
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
        window.history.back()
    },
    onClickRight() {},
    goAbout(){
        this.$router.push({
            path:"/about"
        })
    }
  },
};
</script>

<style scoped>
.tabs_box {
  padding: 0.26667rem 0.4rem;
  box-sizing: border-box;
}
.tabs_item {
  background-color: #fff;
  border-radius: 0.133rem;
  padding: 0.05rem 0.373rem;
  box-shadow: 0 0 0.2rem rgba(0, 0, 0, 0.1);
}
.tabs_item_title {
  font-size: 0.3rem;
  font-weight: 400;
  color: #333;
  vertical-align: top;
}
.tabs_item_time {
  margin-bottom: 0.4rem;
  font-size: 0.27rem;
  font-weight: 400;
  color: #666;
  margin-top: 0.26667rem;
}
.tabs_item_info {
  width: 100%;
  display: inline-flex;
  justify-content: flex-start;
  align-items: center;
}
.tabs_item_info_aa {
  width: 2rem;
  height: 0.1rem;
  background-color: #f5f5f5;
}
.tabs_item_info_bb {
  font-size: 0.22rem;
  color: #8c8c8c;
}
</style>