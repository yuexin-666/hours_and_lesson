<template>
  <div>
    <div class="pian_header">
      <div class="pian_header_hea">
        <van-icon @click="$router.go(-1)" name="arrow-left" />
        <span class="oto_header_mid">预约课程</span>
        <van-icon />
      </div>
      <div class="bai">
        <div class="item">
          <img
            src="https://msmk2019.oss-cn-shanghai.aliyuncs.com/uploads/image/2019X3gWvILU7J1571983543.png"
            alt=""
          />
          <div>
            <p>杨德胜</p>
            <p class="describe">男 30年教龄</p>
          </div>
          <button class="anniu" @click="tiao">查看详情</button>
        </div>
      </div>
    </div>
    <div class="time">
      <p class="time_p">选择时间<span class="time_span">(北京时间)</span></p>
    </div>
    <div class="week">
        <div class="divdiv">
          <p>周一</p>
          <p class="item_describe">9/28</p>
        </div>
        <div class="divdiv">
          <p>周二</p>
          <p class="item_describe">9/29</p>
        </div>
        <div class="divdiv">
          <p>周三</p>
          <p class="item_describe">9/30</p>
        </div>
        <div class="divdiv">
          <p>周四</p>
          <p class="item_describe">10/01</p>
        </div>
        <div class="divdiv">
          <p>周五</p>
          <p class="item_describe">10/02</p>
        </div>
    </div>
    <div class="hou">
        立即预约
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      
    }
  },
  methods: {
    tiao(){
      this.$router.push({
        path:'/teacher'
      })
    }
  },
};
</script>

<style scope>
.pian_header {
  width: 100%;
  height: 2rem;
  background: rgb(95, 172, 250);
}
.pian_header_hea {
  display: flex;
  justify-content: space-between;
}
.oto_header_mid {
  font-size: 0.35rem;
  color: white;
}
.bai {
  width: 90%;
  height: 1.7rem;
  background: white;
  margin: 0 auto;
}
.item {
  margin-top: 0.2rem;
  width: 90%;
  height: 1.8rem;
  font-size: 0.2rem;
  margin: 0 auto;
  border-radius: 0.1rem;
  display: flex;
  justify-content: space-around;
  margin-top: 0.5rem;
}
.item div {
  width: 80%;
  height: 100%;
  /* line-height: 100%; */
}
.item img {
  width: 1rem;
  height: 1rem;
  border-radius: 50%;
  /* line-height:100%; */
  margin-top: 0.2rem;
}
.describe {
  color: rgb(177, 174, 174);
}
.anniu {
  width: 1.5rem;
  height: 0.7rem;
  border: 0.01rem solid #000;
  color: orange;
  border: none;
  border-radius: 30%;
  margin-top: 0.5rem;
}
.time {
  width: 90%;
  height: 0.4rem;
  border-left: 0.09rem solid orange;
  margin: 0 auto;
  margin-top: 0.5rem;
}
.time_p {
  font-size: 0.3rem;
  color: gray;
  margin-left: 0.2rem;
}
.time_span {
  font-size: 0.1rem;
  line-height: 0.4rem;
  margin-left: 0.2rem;
}
.week {
  width: 100%;
  height: 1.5rem;
  display: flex;
  flex-direction: row;
  flex-wrap: no-wrap;
  margin-top: 0.2rem;
    
}
.item_describe {
  color: rgb(177, 174, 174);
}
.divdiv {
  width: 1rem;
  height: 1.5rem;
  margin: 0 auto;
  font-size: 0.3rem;
  color: gray;
  text-align: center;
}
.hou{
    width: 100%;
    height: 1rem;
    background: orange;
    color: white;
    text-align: center;
    line-height: 1rem;
    font-size: 0.4rem;
    margin-top: 6.7rem;
}
</style>