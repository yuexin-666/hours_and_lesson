
<template>
  <div>
    <!-- 顶部 -->
    <div class="top">
      <van-nav-bar title="特色课">
        <template #right>
          <van-icon name="search" size="18" color="black" />
        </template>
      </van-nav-bar>

      <van-divider :hairline="false" />
    </div>

    <!-- 排序 -->
    <div class="sortDiv">
      <van-dropdown-menu>
        <van-dropdown-item title="分类">
          <div class="classify_item">
            <p>年级</p>
            <span>初一</span>
            <span>初二</span>
            <span>初三</span>
            <span>高一</span>
            <span>高二</span>
          </div>
          <div class="classify_item">
            <p>学科</p>
            <span>语文</span>
            <span>数学</span>
            <span>英语</span>
            <span>物理</span>
            <span>化学</span>
          </div>
          <div class="classify_item_container">
            <span>重置</span>
            <span style="background: orange">确定</span>
          </div>
        </van-dropdown-item>
        <van-dropdown-item title="排序" v-model="value1" :options="option1" />
        <van-dropdown-item title="排序">
          <div class="classify_item_last">
            <span>全部</span>
            <span>大班课</span>
            <span>小班课</span>
            <span>公开课</span>
            <span>点播课</span>
            <span>面授课</span>
            <span>影评课</span>
            <span>系统课</span>
            <span>图文课</span>
            <span>会员课</span>
          </div>
        </van-dropdown-item>
      </van-dropdown-menu>
    </div>

    <!-- 课程 -->
    <div class="lesson">
      <div class="lesson_item">
        <div class="lesson_item_container">
            <p class="lesson_title">李老师16号到22号地理大课堂开课啦</p>
        <p class="lesson_time">
          <span class="iconfont icon-zhongbiao1"></span>03月16日18:30~03月22日   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|共8课
        </p>
         <p class="lesson_teacher"><span class="iconfont icon-yonghu"></span><span>李青</span></p>
          <van-divider />
          <p class="lesson_reserve"><span>118人已报名</span><span class="lesson_reserve_span">免费</span></p>
        </div>
      </div>

       <div class="lesson_item">
        <div class="lesson_item_container">
            <p class="lesson_title">李老师16号到22号地理大课堂开课啦</p>
        <p class="lesson_time">
          <span class="iconfont icon-zhongbiao1"></span>03月16日18:30~03月22日   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|共8课
        </p>
         <p class="lesson_teacher"><span class="iconfont icon-yonghu"></span><span>李青</span></p>
          <van-divider />
          <p class="lesson_reserve"><span>118人已报名</span><span class="lesson_reserve_span">免费</span></p>
        </div>
      </div>

       <div class="lesson_item">
        <div class="lesson_item_container">
            <p class="lesson_title">李老师16号到22号地理大课堂开课啦</p>
        <p class="lesson_time">
          <span class="iconfont icon-zhongbiao1"></span>03月16日18:30~03月22日   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|共8课
        </p>
         <p class="lesson_teacher"><span class="iconfont icon-yonghu"></span><span>李青</span></p>
          <van-divider />
          <p class="lesson_reserve"><span>118人已报名</span><span class="lesson_reserve_span">免费</span></p>
        </div>
      </div>

       <div class="lesson_item">
        <div class="lesson_item_container">
            <p class="lesson_title">李老师16号到22号地理大课堂开课啦</p>
        <p class="lesson_time">
          <span class="iconfont icon-zhongbiao1"></span>03月16日18:30~03月22日   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|共8课
        </p>
         <p class="lesson_teacher"><span class="iconfont icon-yonghu"></span><span>李青</span></p>
          <van-divider />
          <p class="lesson_reserve"><span>118人已报名</span><span class="lesson_reserve_span">免费</span></p>
        </div>
      </div>

       <div class="lesson_item">
        <div class="lesson_item_container">
            <p class="lesson_title">李老师16号到22号地理大课堂开课啦</p>
        <p class="lesson_time">
          <span class="iconfont icon-zhongbiao1"></span>03月16日18:30~03月22日   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|共8课
        </p>
         <p class="lesson_teacher"><span class="iconfont icon-yonghu"></span><span>李青</span></p>
          <van-divider />
          <p class="lesson_reserve"><span>118人已报名</span><span class="lesson_reserve_span">免费</span></p>
        </div>
      </div>

       <div class="lesson_item">
        <div class="lesson_item_container">
            <p class="lesson_title">李老师16号到22号地理大课堂开课啦</p>
        <p class="lesson_time">
          <span class="iconfont icon-zhongbiao1"></span>03月16日18:30~03月22日   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|共8课
        </p>
         <p class="lesson_teacher"><span class="iconfont icon-yonghu"></span><span>李青</span></p>
          <van-divider />
          <p class="lesson_reserve"><span>118人已报名</span><span class="lesson_reserve_span">免费</span></p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      value: 0,
      value1: 0,
      switch1: false,
      switch2: false,
      option1: [
        { text: "综合排序", value: 0 },
        { text: "最新", value: 1 },
        { text: "最热", value: 2 },
        { text: "价格从低底高", value: 3 },
        { text: "价格从高到低", value: 4 },
      ],
    };
  },
  methods: {
    onConfirm() {
      this.$refs.item.toggle();
    },
  },
};
</script>

<style scoped>
.sortDiv {
  width: 100%;
  font-size: 0.2rem;
}
.sortDiv .classify_item {
  width: 92%;
  height: 2.8rem;
  border-bottom: 0.01rem solid lightgrey;
  margin: 4%;
}
.classify_item span {
  display: inline-block;
  width: 1.3rem;
  height: 0.7rem;
  background: whitesmoke;
  margin: 0.2rem;
  text-align: center;
  line-height: 0.7rem;
}
.classify_item_container {
  width: 100%;
  height: 1rem;
  display: flex;
  justify-content: space-around;
}
.classify_item_container span {
  display: inline-block;
  width: 3rem;
  height: 0.5rem;
  border: 0.02rem solid lightgray;
  text-align: center;
  line-height: 0.5rem;
}
.classify_item_last {
  width: 92%;
  height: 3rem;
  margin: 4%;
}
.classify_item_last span {
  display: inline-block;
  width: 1.3rem;
  height: 0.7rem;
  background: whitesmoke;
  margin: 0.2rem;
  text-align: center;
  line-height: 0.7rem;
}
.lesson {
  width: 100%;
  height: 78vh;
  background: lightgrey;
  overflow: scroll;
}
.lesson_item {
  width: 92%;
  height: 4rem;
  background: white;
  margin: 4%;
  border-radius: 0.2rem;
   /* text-align: center; */
  /* line-height: 4rem; */
}
.lesson_title{
    font-size: 0.35rem;
    margin-top: 0.5rem;
}
.lesson_time{
    font-size: 0.22rem;
    color: lightgray;
}
.lesson_teacher{
    font-size: 0.22rem;
    color: lightgray;
}
.lesson_reserve{
    font-size: 0.22rem;
    color: lightgray;
}
.lesson_reserve_span{
    font-size: 0.32rem;
    color: lightgreen;
    margin-left: 4rem;
} 
</style>>