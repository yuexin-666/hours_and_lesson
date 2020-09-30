 <template>
  <div class="detailsDiv">
      <!-- 顶部 -->
    <div class="nav">
        <div class="nav_item">
             <van-nav-bar title="课程详情"  left-arrow color="black">
                 <template #left>
                     <span><van-icon name="arrow-left" @click="goback"/></span>
                 </template>
        <template #right>
          <span class="iconfont icon-fenxiang2"></span>
        </template>
      </van-nav-bar>
        </div>
        <div class="nav_teacher">
            <p class="lesson_title">李老师16号到22号地理大课堂开课啦</p>
            <p class="lesson_price">免费</p>
            <p class="lesson_time">共8课时 | 119人报名</p>
            <p class="lesson_data">开课时间：2020.03.16  18:30 — 2020.03.22  18:30</p>
        </div>
    </div>

    <!-- 教学团队 -->
    <div class="teacher_team">
        <p class="team_title">教学团队</p>
        <p class="teacher_img"><img src="https://baijiayun-wangxiao.oss-cn-beijing.aliyuncs.com/uploads/avatar.jpg" @click="goteacherDetails"></p>
        <p class="teacher_name">李青</p>
    </div>

    <!-- 课程介绍 -->
    <div class="lesson_recom">
        <p>课程介绍</p>
    </div>

    <!-- 课程大纲 -->
    <div class="lesson_outline">
        <p class="outline">课程大纲</p>
        <div class="lesson_playback">
            <p><span>.</span><span><van-tag type="warning">回放</van-tag></span>第一讲第一课时</p>
            <p style="color:lightgray"><span>李青</span> <span>03月16日 18:30 — 19:30</span></p>
        </div>
         <div class="lesson_playback">
            <p><span>.</span><span><van-tag type="warning">回放</van-tag></span>第一讲第一课时</p>
            <p style="color:lightgray"><span>李青</span> <span>03月16日 18:30 — 19:30</span></p>
        </div>
         <div class="lesson_playback">
            <p><span>.</span><span><van-tag type="warning">回放</van-tag></span>第一讲第一课时</p>
            <p style="color:lightgray"><span>李青</span> <span>03月16日 18:30 — 19:30</span></p>
        </div>
         <div class="lesson_playback">
            <p><span>.</span><span><van-tag type="warning">回放</van-tag></span>第一讲第一课时</p>
            <p style="color:lightgray"><span>李青</span> <span>03月16日 18:30 — 19:30</span></p>
        </div>
         <div class="lesson_playback">
            <p><span>.</span><span><van-tag type="warning">回放</van-tag></span>第一讲第一课时</p>
            <p style="color:lightgray"><span>李青</span> <span>03月16日 18:30 — 19:30</span></p>
        </div>
         <div class="lesson_playback">
            <p><span>.</span><span><van-tag type="warning">回放</van-tag></span>第一讲第一课时</p>
            <p style="color:lightgray"><span>李青</span> <span>03月16日 18:30 — 19:30</span></p>
        </div>
         <div class="lesson_playback">
            <p><span>.</span><span><van-tag type="warning">回放</van-tag></span>第一讲第一课时</p>
            <p style="color:lightgray"><span>李青</span> <span>03月16日 18:30 — 19:30</span></p>
        </div>
         <div class="lesson_playback">
            <p><span>.</span><span><van-tag type="warning">回放</van-tag></span>第一讲第一课时</p>
            <p class="playback_teacher"><span>李青</span> <span>03月16日 18:30 — 19:30</span></p>
        </div>
    </div>

    <!-- 课程评论 -->
    <div class="lesson_discuss">
        <p class="discuss">课程评论</p>
        <div class="lesson_grade" v-for="index in 5" :key="index">
            <img src="https://baijiayun-wangxiao.oss-cn-beijing.aliyuncs.com/uploads/avatar.jpg">
            <div class="grade_comtainer">
                <p>
                    <span>15927895678</span>
                    <span><van-rate v-model="value" readonly /></span>
                    <span style="color:lightgray">2020-04-23 14:56</span>
                </p>
                <p style="color:lightgray">very good </p>
            </div>
        </div>

        <div class="lesson_grade" v-for="i in 7" :key="i">
            <img src="https://msmk2019.oss-cn-shanghai.aliyuncs.com/uploads/image/2019EyguqBTdIZ1577257133.jpeg" alt="">
            <div class="grade_comtainer">
                <p>
                    <span>15927895678</span>
                    <span><van-rate v-model="value1" readonly /></span>
                    <span style="color:lightgray">2020-04-23 14:56</span>
                </p>
                <p style="color:lightgray">very good </p>
            </div>
        </div>
        <div class="zz"></div>
    </div>

  </div>
</template>

<script>
export default {
    data(){
        return{
            value:5,//评分
             value1:3//评分
        }
    },
    methods:{
        goteacherDetails(){//点击跳转至讲师详情
                this.$router.push({
                    path:"/teacherdetails",
                })
        },
        goback(){
            this.$router.go(-1)
        }
    }
};
</script>

<style scoped>
.detailsDiv{
    background: #f0f2f5;
}
.nav_item{
    width: 100%;
    height: 1rem;
    border-bottom: 0.08rem solid lightgray;
}
.nav_teacher{
    width: 100%;
    height: 3rem;
    background: white;
}
.lesson_title{
    font-size: 0.32rem;
}
.lesson_price{
    font-size: 0.37rem;
    color: red;
}
.lesson_time{
    font-size: 0.12rem;
    color: lightgray;
}
.lesson_data{
    font-size: 0.12rem;
    color: lightgray;
}
.teacher_team{
    width: 100%;
    height: 2.8rem;
    background: white;
}
.teacher_name{
    font-size: 0.2rem;
    color: lightgray;
}
.team_title{
    font-size: 0.32rem;
}
.teacher_img{
    width: 0.8rem;
    height: 0.8rem;
}
.teacher_img img{
    width: 100%;
    height: 100%;
}

/* 课程介绍 */
.lesson_recom{
    width: 100%;
    height: 1.5rem;
    background: white;
}
.lesson_recom p{
    font-size: 0.32rem;
}
/* 课程大纲 */

.lesson_outline{
    width: 100%;
    background: white;
}
.outline{
     font-size: 0.32rem;   
}
.lesson_playback{
    width: 90%;
    height: 1.5rem;
    background: white;
    font-size: 0.32rem;
    margin-left: 5%;
}
.playback_teacher{
    color: lightgray;
    margin-left: 20px !important;
}

/* 课程评分 */
.lesson_discuss{
    width: 100%;
    background: white;
}
.discuss{
    font-size: 0.32rem;
}
.lesson_grade{
    width: 90%;
    height: 2.0rem;
    margin-left: 5%;
    background: white;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
}
.lesson_grade img{
    width: 0.5rem;
    height: 0.5rem;
}
.grade_comtainer{
    font-size: 0.3rem;
}

/* 占位盒子 */
.zz{
    width: 100%;
    height: 1rem;
}
</style>