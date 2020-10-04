<template>
  <div class="teacherDiv">
    <!-- 导航栏 -->
    <div class="first">
         <div class="nav">
      <p>
        <span><van-icon name="arrow-left" @click="goback"/></span>
        <span style="margin-left: 2.5rem">讲师详情</span>
      </p>
    </div>

    <!-- 讲师介绍 -->
    <div class="teacher_recom">
      <div class="teacher_card">
        <img
          src="https://baijiayun-wangxiao.oss-cn-beijing.aliyuncs.com/uploads/avatar.jpg"
          alt=""
        />
        <div class="teacher_name">
          <p>马学兵 <span style="color: red">M13</span></p>
          <p style="color: lightgray">女 7年教龄</p>
        </div>
        <div class="teacher_follow">
          <p><span class="follower" v-show="isshow" @click="follow">关注</span><span v-show="areshow" @click="notfollow" style="color:lightgray">已关注</span></p>
        </div>
      </div>
      <div class="teacher_tab">
        <span>深入浅出</span>
        <span>言简意赅</span>
        <span>幽默风趣</span>
        <span>亲和力强</span>
      </div>
    </div>
    </div>
 

    <!-- 中间 -->
    <div class="tab">
      <van-tabs v-model="active" title-active-color="red">
        <van-tab style="background: white" title="讲师介绍">
          <p class="teacher_year">教学年龄 <span>25年</span></p>
          <p class="teacher_year">授课价格 <span>400学习币</span></p>
          <p class="teacher_year">
            老师简介
            <span>马学兵老师，从2004年起，专注中考数学压轴题15年，专著《挑战终考数学压轴题》近几年服务学生30万。“中考数学压轴题解题策略12件”
              涉足40多个市，上海中学高级教师马学兵老师，从2004年起，专注中考数学压轴题15年，专著《挑战终考数学压轴题》近几年服务学生30万。“中考数学压轴题解题策略12件”
              涉足40多个市，上海中学高级教师马学兵老师，从2004年起，专注中考数学压轴题15年，专著《挑战终考数学压轴题》近几年服务学生30万。“中考数学压轴题解题策略12件”
              涉足40多个市，上海中学高级教师</span
            >
          </p>
        </van-tab>
        <van-tab title="主讲课程">
          <div class="main">
            <div class="lesson_main" v-for="i in 10" :key="i">
              <p style="font-size: 0.32rem">
                初中重点集合知识点——第九讲：用描点法画出二次函数的图像
              </p>
              <p style="font-size: 0.12rem">共1课时</p>
              <p class="main_teacher">
                <img
                  src="https://baijiayun-wangxiao.oss-cn-beijing.aliyuncs.com/uploads/avatar.jpg"
                />
                <span style="font-size: 0.12rem; color: lightgray">马学兵</span>
              </p>
              <p style="font-size: 0.32rem">
                <span style="color: lightgray">127人已报名</span>
                <span style="color: red; margin-left: 3.5rem"> 1.00</span>
              </p>
            </div>
          </div>
        </van-tab>
        <van-tab title="学员评价">
          <van-collapse v-model="activeNames">
            <van-collapse-item name="1">
              <span class="suggest">深入浅出(1)</span>
              <span class="suggest">言简意赅(1)</span>
              <span class="suggest">幽默风趣(1)</span>
              <span class="suggest">深入浅出(1)</span>
              <span class="suggest">幽默风趣(1)</span>
              <span class="suggest">言简意赅(1)</span>
              <span class="suggest">幽默风趣(1)</span>
              <span class="suggest">深入浅出(1)</span>
              <span class="suggest">言简意赅(1)</span>
              <template #title>
                <span class="suggest">深入浅出(1)</span>
                <span class="suggest">言简意赅(1)</span>
                <span class="suggest">幽默风趣(1)</span>
              </template>
              <template #right-icon>
                <span class="right_icon">
                  <van-icon name="arrow-up" />
                </span>
              </template>
            </van-collapse-item>
          </van-collapse>
          <div class="student_grade">
            <img
              src="https://msmk2019.oss-cn-shanghai.aliyuncs.com/uploads/image/2019gmlVeDY3I71570278157.jpg"
              alt=""
            />
            <div class="grade">
              <p>
                <van-rate v-model="value"  :size="15" />
              </p>
              <p class="grade_span">
                <span>深入浅出</span>
                <span>言简意赅</span>
                <span>幽默风趣</span>
                <span>深入浅出</span>
                <span>言简意赅</span>
                <span>幽默风趣</span>
                <span>深入浅出</span>
                <span>言简意赅</span>
                <span>幽默风趣</span>
                <span>深入浅出</span>
                <span>言简意赅</span>
                <span>幽默风趣</span>
              </p>
            </div>
          </div>
        </van-tab>
      </van-tabs>
      <div class="zz"></div>
    </div>

    <!-- 底部 -->
    <div class="bottom">
        <p>立即预约</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeNames: ["1"],
      value: 5,
      isshow:true,
      areshow:false
    };
  },
  methods:{
      goback(){
          this.$router.go(-1)
      },
      follow(){
         this.$toast.success('已关注');
        this.areshow=true
        this.isshow=false
      },
      notfollow(){
         this.$toast.fail('取消关注');
        this.areshow=false
        this.isshow=true
      }
  }
};
</script>

<style scoped>
.first{
  width: 100%;
  height: 30vh;
}
.teacherDiv {
  width: 100%;
  height: 100vh;
  background: #f0f2f5;
}
.nav {
  width: 100%;
  height: 3rem;
  background: linear-gradient(180deg, #63b7fe, #4e7de3);
  color: white;
  font-size: 0.4rem;
  margin-top: -0.4rem;
}
.teacher_recom {
  width: 90%;
  height: 3rem;
  background: white;
  font-size: 0.32rem;
  margin-top: -2rem;
  margin-left: 5%;
  border-radius: 0.2rem;
}
.teacher_card {
  width: 90%;
  height: 2rem;
  margin-left: 5%;
  display: flex;
  align-items: center;
}
.teacher_card img {
  width: 0.8rem;
  height: 0.8rem;
}

.teacher_follow p {
  float: left;
  margin-left: 1.9rem;
}
.teacher_follow p  .follower{
  display: inline-block;
  width: 1.5rem;
  height: 0.7rem;
  background: #ebeefe;
  color: red;
  text-align: center;
  line-height: 0.7rem;
  border-radius: 0.5rem;
}
.teacher_tab {
  display: flex;
  justify-content: space-around;
  flex-direction: row;
}
.teacher_tab span {
  display: inline-block;
  width: 1.5rem;
  height: 0.5rem;
  background: #ffe4d3;
  font-size: 0.32rem;
  color: #ea7a2f;
  text-align: center;
  line-height: 0.5rem;
  border-radius: 0.5rem;
}

.teacher_year {
  font-size: 0.35rem;
  color: lightgray;
  margin-left: 0.5rem;
}
.teacher_year span {
  display: inline-block;
  margin-left: 1.4rem;
}
.tab{
  width: 100%;
  height: 60vh;
  overflow: scroll;
  margin-top: 0.3rem;
}

/* 主讲课程 */
.main {
  width: 100%;
  background: whitesmoke;
}
.lesson_main {
  width: 90%;
  height: 4rem;
  margin-left: 5%;
  margin-top: 2%;
  border-bottom: 0.05rem solid lightgray;
  background: white;
  border-radius: 0.3rem;
}
.main_teacher {
  display: flex;
  justify-content: flex-start;
}
.main_teacher img {
  width: 0.5rem;
  height: 0.5rem;
}

/* 占位盒子 */
.zz {
  width: 100%;
  height: 1rem;
}

.suggest {
  display: inline-block;
  width: 2rem;
  height: 0.5rem;
  color: #ea7a2f;
  font-size: 0.32rem;
  text-align: center;
  line-height: 0.5rem;
  border: 0.02rem solid #ea7a2f;
  margin-left: 0.04rem;
  margin-top: 0.09rem;
}
.right_icon {
  display: inline-block;
  width: 0.4rem;
  height: 0.4rem;
  background: lightgray;
  border-radius: 50%;
  color: white;
  text-align: center;
  line-height: 0.4rem;
}

.student_grade {
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  background: white;
}
.student_grade img {
  width: 0.6rem;
  height: 0.6rem;
}
.grade_span span {
  display: inline-block;
  width: 1.5rem;
  height: 0.5rem;
  background: #f5f5f5;
  font-size: 0.32rem;
  text-align: center;
  line-height: 0.5rem;
  color: lightgray;
  margin-left: 0.32rem;
  margin-top: 0.5rem;
}

/* 底部预约 */
.bottom{
    width: 100%;
    height: 10vh;
    position: absolute;
    bottom:0rem;
}
.bottom p{
     width: 100%;
    height: 100%;
    background: orangered;
    text-align: center;
    line-height: 7vh;
    font-size: 0.35rem;
    color: white;
}
</style>