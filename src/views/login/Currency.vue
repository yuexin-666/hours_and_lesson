<template>
  <div>
    <van-nav-bar
      left-arrow
      title="我的余额"
      @click-left="onClickLeft"
      @click-right="onClickRight"
      right-text="余额明细"
    />
    <div class="my_gold">
      <p class="top_bars">
        <span>我的余额</span>
        <span class="top_bars_num">0学习币</span>
      </p>
      <div class="ma_gold_pay">
        <div class="ma_gold_pay_box">
          <div class="ma_gold_pay_item" @click="choose(0)" :class="{active:changeIndex==0}">
            <p>30000.00学习币</p>
            <span>￥30000.00学习币</span>
          </div>
          <div class="ma_gold_pay_item" @click="choose(1)" :class="{active:changeIndex==1}">
            <p>20000.00学习币</p>
            <span>￥20000.00学习币</span>
          </div>
          <div class="ma_gold_pay_item" @click="choose(2)" :class="{active:changeIndex==2}">
            <p>10000.00学习币</p>
            <span>￥10000.00学习币</span>
          </div>
          <div class="ma_gold_pay_item" @click="choose(3)" :class="{active:changeIndex==3}">
            <p>8000.00学习币</p>
            <span>￥8000.00学习币</span>
          </div>
          <div class="ma_gold_pay_item" @click="choose(4)" :class="{active:changeIndex==4}">
            <p>5000.00学习币</p>
            <span>￥5000.00学习币</span>
          </div>
          <div class="ma_gold_pay_item" @click="choose(5)" :class="{active:changeIndex==5}">
            <p>3000.00学习币</p>
            <span>￥3000.00学习币</span>
          </div>
          <div class="ma_gold_pay_item" @click="choose(6)" :class="{active:changeIndex==6}">
            <p>0.01学习币</p>
            <span>￥0.01学习币</span>
          </div>
          <div class="ma_gold_pay_item" @click="choose(7)" :class="{active:changeIndex==7}">
            <p>100.00学习币</p>
            <span>￥100.00学习币</span>
          </div>
        </div>
      </div>
    </div>

    <div class="explain">
      <p class="explain_sm">充值说明</p>
      <div class="explain_contant">
        1、学习币是网校中专有的一种虚拟货币，大家可以用学习币购买网校内的任何虚拟商品，比如课程、辅导答疑。
        2、充值后没有使用期限,但无法提现,退款和转赠他人。
        3、如遇到无法充值、充值失败等问题,请联系客服。
      </div>
    </div>
    <div class="bottom_pay">
      <button @click="showPopup" :style="{background:color}">立即充值</button>
    </div>
    <van-popup v-model="show" position="bottom" :style="{ height: '30%' }" >
        <h3>支付方式</h3>
        <p>
            <input type="radio" name="a">
            <span></span>
            <span>微信</span>
        </p>
        <p>
            <input type="radio" name="a">
            <span></span>
            <span>支付宝</span>
        </p>
    </van-popup>
  </div>
</template>

<script>
export default {
  data() {
    return {
      show: false,
      changeIndex:-1,
      color:'#ccc'
    };
  },
  methods: {
    onClickLeft() {
        window.history.back()
    },
    onClickRight() {},
    showPopup() {
      this.show = true;
    },
    choose(val){
        this.changeIndex = val
        if(this.changeIndex!=-1){
          this.color = "#eb6100"
        }
    }
  },
};
</script>

<style scoped>
.my_gold {
  background-color: #fff;
  width: 100%;
  min-height: 90vh;
}
.top_bars {
  width: 100%;
  color: #333;
  font-size: 0.3rem;
  line-height: 0.8rem;
  border-bottom: 1px solid #f4f4f4;
  padding: 0 0.33333rem 0 0.4rem;
  box-sizing: border-box;
}
.top_bars_num {
  margin: 0rem 0.15rem;
  color: #dc692a;
}
.ma_gold_pay_box {
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  overflow: hidden;
  padding: 0.24rem 0.13rem 0 0.24rem;
  background-color: #eee;
}
.ma_gold_pay_item {
  width: 100%;
  height: 1.34667rem;
  margin-right: 0.33333rem;
  background-color: #fff;
  border: 0.02667rem solid #eee;
  border-radius: 0.33333rem;
  margin-bottom: 0.4rem;
  padding: 0 0.48rem;
  background-repeat: no-repeat;
  background-position: 100% 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  box-sizing: border-box;
  font-size: 0.28rem;
}
.ma_gold_pay_item span {
  font-weight: 500;
  color: #e90000;
}
.explain {
  width: 100%;
  padding: 0rem 0.3rem;
  box-sizing: border-box;
  margin: 0rem;
  overflow: hidden;
  font-size: 0.3rem;
}
.explain_sm {
  height: 0.6rem;
  margin: 0rem;
  font-size: 0.36rem;
  font-weight: 600;
}
.explain_contant {
  color: #e6b497;
}
.bottom_pay {
  width: 100%;
  height: 1rem;
  position: fixed;
  bottom: 0px;
}
.bottom_pay button {
  width: 100%;
  height: 1rem;
  color: #fff;
  border: none;
  font-size: 0.37rem;
}
.active{
    background-color: #FCEDE2;
    border: 1px solid #EB6100;
    box-shadow: 0px 2px 2px #EB6100;
}
</style>