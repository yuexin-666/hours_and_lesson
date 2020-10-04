<template>
  <div class="box">
      <van-nav-bar
  title="李老师16号到22号课堂开课啦"

 
  @click-left="onClickLeft"
  @click-right="onClickRight"
>
 <template #left>
    <van-icon name="arrow-left" size="18" />
  </template>
   <template #right>
    <van-icon name="notes-o" size="18" />
  </template>
</van-nav-bar>

<div class="plan">
    <span>共3课时</span>
    <div></div>
    <span>以学习0%</span>
</div>

    <div class="lesson_playback">
<div><span class="dot">.</span><span><van-tag type="warning">回放</van-tag></span>第一讲第一课时</div>
<p style="color:lightgray"><span>李青</span> <span>03月16日 18:30 — 19:30</span></p>
<div class="plan">
   <div></div>
    <span>已观看0%</span> 
</div>
    </div>
   <div class="lesson_playback">
<div><span class="dot">.</span><span><van-tag type="warning">回放</van-tag></span>第一讲第一课时</div>
<p style="color:lightgray"><span>李青</span> <span>03月16日 18:30 — 19:30</span></p>
<div class="plan">
   <div></div>
    <span>已观看0%</span> 
</div>
    </div>
       <div class="lesson_playback">
<div><span class="dot">.</span><span><van-tag type="warning">回放</van-tag></span>第一讲第一课时</div>
<p style="color:lightgray"><span>李青</span> <span>03月16日 18:30 — 19:30</span></p>
<div class="plan">
   <div></div>
    <span>已观看0%</span> 
</div>
    </div>
    


<div class="footer">
    <div is-link @click="showPopup"><van-icon name="edit"/>写评论</div>
    <div><van-icon name="qr"/>课程详情</div>
    <div @click="toast"><van-icon name="delete" />移除列表</div>
</div>
<van-popup v-model="show">
    <div class="txt">
        <p>星级：<van-rate v-model="value" /></p>
        内容：<textarea name="" id="" cols="30" rows="7"></textarea>
    </div>
</van-popup>

  </div>
</template>

<script>
import Vue from 'vue';
import { Toast } from 'vant';

Vue.use(Toast);
export default {
    data(){
        return{
            show: false,
             value: 5,
        }
    },
methods:{
    onClickLeft(){
        this.$router.go(-1)
    },
    onClickRight(){
        this.$router.push({
            path:'/calendar'
        })
    },
    showPopup(){
         this.show = true;
    },
    toast(){
      Toast.success('成功文案');
    }
}
}
</script>

<style scoped>
/* .box{
    position: relative;
} */
.van-icon{
    color: dimgrey;
}
.plan{
    display: flex;
    justify-content: space-around;
}
.plan div{
    width: 50%;
   height: 0.06rem;
   background: rgb(206, 204, 204);
   margin-top: 0.2rem;
}
.lesson_playback{
    margin-top: 0.3rem;
    border: 0.05rem solid rgb(233, 229, 229);
    width: 90%;
    /* height: 1.5rem; */
    border-radius: 0.1rem;
    background: white;
    font-size: 0.32rem;
    margin-left: 5%;

}
.footer{
    font-size: 0.3rem;
    display: flex;
    justify-content: space-around;

    align-items: center;
    height: 8vh;
    border-top: 0.01rem solid rgb(224, 218, 218);
    /* margin-top: 100%; */
    color: rgb(184, 180, 180) ;
margin-top: 44%;
}
.van-popup{
    width: 90%;
    height: 4rem;
    border-radius: 0.1rem;

}
.txt{
    width: 90%;
    margin-left: 5%;
}
.dot{
    font-size: 0.5rem;
}
</style>