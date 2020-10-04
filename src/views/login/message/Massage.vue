<template>
  <div>
    <!-- 导航栏 -->
    <van-nav-bar title="消息通知" left-arrow @click-left="onClickLeft" >
      <template #left>
        <van-icon name="arrow-left" size="18" color="gray" />
      </template>
    </van-nav-bar>
    <!-- 通知 -->
    <van-cell-group>
    <van-cell @click="jump('/massage1')" >
    <template #title>
        <span class="massage_title">课程通知</span>
    </template>
    <template #icon>
        <span class="massage_img"><img src="http://localhost:8080/server-images/m1.png" alt=""></span>
    </template>
    <template #label>
        <span class="massage_label">您报名的课程《李老师9号地理大课堂开课啦》已经有3天没有学习了，快去学习吧</span>
    </template>
    </van-cell>
    <van-cell @click="jump('/massage2')">
    <template #title>
        <span class="massage_title">系统通知</span>
    </template>
    <template #icon>
        <span class="massage_img"><img src="http://localhost:8080/server-images/m2.png" alt=""></span>
    </template>
    <template #label>
        <span class="massage_label">暂无消息</span>
    </template>
    </van-cell>

    <van-cell  @click="jump('/massage3')">
    <template #title>
        <span class="massage_title">订单通知</span>
    </template>
    <template #icon>
        <span class="massage_img"><img src="http://localhost:8080/server-images/m3.png" alt=""></span>
    </template>
    <template #label>
        <span class="massage_label">暂无消息</span>
    </template>
    </van-cell>

    <van-cell @click="jump('/massage4')">
    <template #title>
        <span class="massage_title">约课通知</span>
    </template>
    <template #icon>
        <span class="massage_img"><img src="http://localhost:8080/server-images/m4.png" alt=""></span>
    </template>
    <template #label>
        <span class="massage_label">暂无消息</span>
    </template>
    </van-cell>

    <van-cell @click="jump('/massage5')">
    <template #title>
        <span class="massage_title">考试通知</span>
    </template>
    <template #icon>
        <span class="massage_img"><img src="http://localhost:8080/server-images/m5.png" alt=""></span>
    </template>
    <template #label>
        <span class="massage_label">暂无消息</span>
    </template>
    </van-cell>

    </van-cell-group>
  </div>
</template>

<script>
export default {
  methods: {
    onClickLeft() {
      window.history.back();
    },
    jump(path){
      this.$router.push(path)
    }
  },
};
</script>

<style scoped>
.massage_title{
    font-size: .3rem;
    color: #000;
    font-weight: 500;
}
.massage_img{
    display: inline-block;
    width: 1rem;
    height: 1rem;
    align-items: center;
    line-height: 1rem;
    justify-content: center;
}
.massage_img img{
    width: .8rem;
    height: .8rem;
    text-align: center;
}
.massage_label{
    font-size: .26rem;
    color: #595959;
}
</style>