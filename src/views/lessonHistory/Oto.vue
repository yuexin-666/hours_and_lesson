<template>
  <div>
    <div class="oto_header">
      <van-icon @click="$router.go(-1)" name="arrow-left" />
      <span class="oto_header_mid">一对一辅导</span>
      <van-icon @click="serch" name="search" />
    </div>
    <div class="oto_time">
      <van-dropdown-menu>
        <van-dropdown-item title="选择上课时间">
          <van-calendar
            title="日历"
            :poppable="false"
            :show-confirm="false"
            :style="{ height: '500px' }"
          />
        </van-dropdown-item>
        <van-dropdown-item title="选择老师条件" ref="item">
          <div class="sortDiv">
            <van-dropdown-menu>
              <div class="classify_item">
                <p>老师类型</p>
                <span>M1</span>
                <span>M1</span>
                <span>M1</span>
                <span>M1</span>
                <span>M1</span>
                <span>M1</span>
                <span>M1</span>
                <span>M1</span>
                <span>M1</span>
                <span>M1</span>
                <span>M1</span>
                <span>M1</span>
                <span>M1</span>
                <span>M1</span>
                <span>M1</span>
                <span>M1</span>
              </div>

              <div class="classify_item_ke">
                <p>只看</p>
                <van-checkbox-group shape="square" direction="horizontal">
                  <van-checkbox name="a" shape="square">已关注</van-checkbox>
                  <van-checkbox name="b" shape="square">上过课的</van-checkbox>
                </van-checkbox-group>
              </div>

              <div class="classify_item" style="height:2rem">
                <p>性别</p>
                <span>男</span>
                <span>女</span>
              </div>

              <div class="classify_item" style="height:4rem">
                <p>年纪</p>
                <span>一年级</span>
                <span>二年级</span>
                <span>三年级</span>
                <span>四年级</span>
                <span>五年级</span>
              </div>

              <div class="classify_item_last">
                <p>学科</p>
                <span>语文</span>
                <span>数学</span>
                <span>英语</span>
                <span>物理</span>
                <span>化学</span>
                <span>生物</span>
                <span>信息技术</span>
              </div>
              <div class="classify_item_container">
                <span>重置</span>
                <span style="background: orange">确定</span>
              </div>
            </van-dropdown-menu>
          </div>
        </van-dropdown-item>
      </van-dropdown-menu>
    </div>

    <div v-for="item in 20" :key="item" class="item">
      <img
        src="https://msmk2019.oss-cn-shanghai.aliyuncs.com/uploads/image/2019X3gWvILU7J1571983543.png"
        alt=""
      />
      <div>
        <p>杨德胜</p>
        <p class="describe">男 30年教龄</p>
      </div>

      <button class="anniu" @click="tiao">预约</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      switch1: false,
      switch2: false,
      show: true,
      minDate: new Date(2010, 0, 1),
      maxDate: new Date(2010, 0, 31)
    };
  },
  methods: {
    onConfirm() {
      this.$refs.item.toggle();
    },
    serch() {
      this.$router.push({
        path: "/serch"
      });
    },
    tiao(){
        this.$router.push({
            path:'/plan'
        })
    }
  }
};
</script>

<style scoped>
.oto_header {
  width: 100%;
  height: 0.7rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  direction: fixed;
}
.oto_header_mid {
  font-size: 0.35rem;
}
.div {
  width: 96%;
  height: 4rem;
  margin: 0 auto;
  background: gray;
}
.sortDiv {
  width: 100%;
  font-size: 0.2rem;
}
.sortDiv .classify_item {
  width: 92%;
  height: 5rem;
  border-bottom: 0.01rem solid lightgrey;
  margin: 4%;
}
.classify_item_ke {
  width: 92%;
  height: 1.5rem;
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
.anniu{
    width: 1.3rem;
    height: 0.7rem;
    border: 0.01rem solid #000;
    color: orange;
    border: none;
    border-radius:30%;
    margin-top: 0.5rem;
}
</style>