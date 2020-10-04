<template>
  <div>
    <!-- 导航 -->
    <van-nav-bar title="课程通知" left-arrow @click-left="onClickLeft">
      <template #left>
        <van-icon name="arrow-left" color="gray" size="18" />
      </template>
    </van-nav-bar>

    <div class="massage1_container">
      <div class="massage1_container_item">
        <div class="massage1_container_item_time">10月03日 14:49</div>
        <div class="massage1_container_item_text">
          您报名的课程《李老师9号地理大课堂开课啦》已经有3天没有学习了，快去学习吧
        </div>
      </div>

      <div class="massage1_container_item">
        <div class="massage1_container_item_time">10月03日 08:47</div>
        <div class="massage1_container_item_text">
          您报名的课程《李老师16号到22号地理大课堂开课啦》已经有3天没有学习了，快去学习吧
        </div>
      </div>

      <div class="massage1_container_item">
        <div class="massage1_container_item_time">10月01日 14:34</div>
        <div class="massage1_container_item_text">
          您报名的课程《每时每课特级教师-自主招生冲刺讲座10-二次函数4--存在性问题》已经有3天没有学习了，快去学习吧
        </div>
      </div>
    </div>
    <p class="massage_text">没有更多了</p>
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
.massage1_container {
  width: 100%;
  padding: 0rem 0.22rem;
  box-sizing: border-box;
}
.massage1_container_item {
  padding: 0.4rem 0rem;
  border-bottom: 1px solid #f5f5f5;
}
.massage1_container_item_time {
  width: 2rem;
  height: 0.48rem;
  background: #b7b7b7;
  border-radius: 0.05333rem;
  font-size: 0.22rem;
  color: #fff;
  line-height: 0.48rem;
  padding: 0 0.13333rem;
  text-align: center;
  margin: 0 auto;
}
.massage1_container_item_text {
  font-size: 0.24rem;
  color: #8c8c8c;
  line-height: 0.3rem;
  padding: 0 0.26rem;
  margin-top: 0.3rem;
}
.massage_text{
  width: 100%;
  text-align: center;
  color: #969799;
  font-size: .24rem;
}
</style>