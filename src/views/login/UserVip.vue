<template>
  <div>
      <div class="viset">

         <van-nav-bar
      title="开通会员"
      left-arrow
      @click-left="onClickLeft"
    />
    <div class="seotp">
        <img src="https://msmk2019.oss-cn-shanghai.aliyuncs.com/uploads/avatar.jpg" alt="">
        <div class="swe">
            <p>152****8356</p>
            <p style="color: #8c8c8c">开通会员免费学习</p>
        </div>
    </div>
        <div style="padding: 8vw 4vw;">

              <p>
            <span style="font-size: 4vw;ont-weight: 500;color: #595959; margin-right: 0.2rem;">购买会员</span>
            <span style="color: #8c8c8c">购买会员后可免费观看会员课程</span>
        </p>
        <div class="boxs">
            <div   v-for="(item,index) in list" :key="index" @click="add(index)" :class="['boxs_bo',index==active?'active':'']">
                <p style="margin:0px;">季度会员</p>
                <p>
                    <img style="width: 0.3rem; height: 0.3rem;" src="https://msmk2019.oss-cn-shanghai.aliyuncs.com/uploads/image/20191HHDExgz0u1567065946.png" alt="">
                    <span style="font-size:0.5rem;color: #d5a322">{{item.jx}}</span>
                </p>
            </div>
        </div>

            <div class="lijs"  @click="userPay">立即支付</div>
        </div>
      </div>
  </div>
</template>

<script>
export default {
    data(){
        return{
           list:[
              {jx:"40.00"},
             {jx:"75.00"},
             {jx:"15.00"},
            ],
            active:-1
        }
    },
    methods:{
         onClickLeft(){
           window.history.back()
       },
       add(i){
           this.active = i
       },
       userPay(){
            this.$notify('提示文案');
  
       }
    }
}
</script>

<style scoped>
.seotp{
   border-top: 1px solid #f5f5f5;
    height: 1.94667rem;
    background-color: #fff;
    display: flex;
    align-items: center;
    padding: 0 .4rem;
    display: flex;
    align-items: center;
}
.seotp img{
    width: 1.2rem;
    height: 1.2rem;
    margin-right: 0.1rem;
}
.seotp p{
    margin: 0px;
}
.viset{
    min-height: 100vh;
    background: #f0f2f5;
    box-sizing: border-box
}
.boxs{
    display: flex;
    justify-content: space-around;
}
.boxs_bo{
    width: 2rem;
    height: 2.2rem;
    border-radius: .21333rem;
    border: .02667rem solid #d9d9d9;
    background-color: #fff;
    margin-bottom: .26667rem;
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: center
}
.lijs{
    width: 6.2rem;
    height: 1rem;
    background: linear-gradient(90deg,#eac687,#c8ae84);
    border-radius: .58667rem;
    font-size: 0.35rem;
    font-family: PingFangSC-Regular;
    font-weight: 400;
    color: #fff;
    line-height: 1rem;
    text-align: center;
    position: fixed;
    left: 50%;
    bottom: .8rem;
    transform: translateX(-50%);
    z-index: 999;
}
.active{
    border: .26667vw solid #e6c37f;
    background-color: #f9f0d9
}
</style>