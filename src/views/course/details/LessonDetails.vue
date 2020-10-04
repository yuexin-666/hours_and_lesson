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
          <span class="iconfont icon-fenxiang2" @click="share"></span>
          <van-popup v-model="show"><img src="data:image/png;base64,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"></van-popup>
        </template>
      </van-nav-bar>
        </div>
        <div class="nav_teacher">
            <p class="lesson_title">李老师16号到22号地理大课堂开课啦 <span class="start"><van-icon size="20" name="star-o" @click="changeyellow" v-show="isshow"/><span class="iconfont icon-xiaoxingxing" @click="changewhite" v-show="areshow"></span></span></p>
            <p class="lesson_price">免费</p>
            <p class="lesson_time">共8课时 | 119人报名</p>
            <p class="lesson_data">开课时间：2020.03.16  18:30 — 2020.03.22  18:30</p>
        </div>
    </div>

  <div class="middle">
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
        <div class="lesson_playback" @click="showplayback" v-for="i in 8" :key="i">
            <p><span>.</span><span><van-tag type="warning">回放</van-tag></span>第一讲第一课时</p>
            <p style="color:lightgray"><span>李青</span> <span>03月16日 18:30 — 19:30</span></p>
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


    <!-- 立即学习 -->
    <div class="bottom" @click="gostudy">
        <p>立即学习</p>
    </div>
  </div>
</template>

<script>
export default {
    data(){
        return{
            value:5,//评分
             value1:3,//评分
             value3:1,
             show:false,
             isshow:true,//星星显示
             areshow:false,//收藏星星
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
        },
         share(){
             this.show = true;
        },
        changeyellow(){
            this.$toast.success('已收藏');
            this.isshow=false
            this.areshow=true
        },
        changewhite(){
            this.$toast.fail('取消收藏');
            this.isshow=true
            this.areshow=false
        },
        showplayback(){//点击回放
            this.$toast('回放未生成');
        },
        gostudy(){//点击跳转至学习页面
            this.$router.push({
                path:"/study"
            })
        }
    }
};
</script>

<style scoped>
.nav{
    width: 100%;
    height: 30vh;
}
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
    margin-top: -0.3rem;
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

.middle{
    width: 100%;
    height: 60vh;
    overflow: scroll;
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

/* 收藏小星星 */
.start{
    margin-left: 1rem;
}

/* 底部学习 */
.bottom{
    width: 100%;
    height: 10vh;
    position: absolute;
    bottom:0rem;
}
.bottom p{
     width: 100%;
    height: 1rem;
    background: orangered;
    text-align: center;
    line-height: 1rem;
    font-size: 0.35rem;
    color: white;
}
</style>