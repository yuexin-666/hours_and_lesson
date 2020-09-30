<template>
  <div class="pricate">
    <div class="pricate_nav">练习</div>
    <div class="pricate_list">
      <van-grid :column-num="4">
        <van-grid-item
          v-for="(item, index) in imgList"
          :key="index"
          :icon="item.img"
          :text="item.title"
          class="pricate_list_img"
          @click="grid(item)"
        />
      </van-grid>
    </div>
    <div class="pricate_test">
      <p>近期模考</p>
      <div class="pricate_test_item">
        <div style="color: orange">默认排序</div>
        <div style="color: #777">时间</div>
      </div>
      <div class="pricate_test_img">
        <div>
          <img src="../../../public/img/机器人.png" />
          <div style="margin-left: 2rem">暂无模考安排，敬请期待</div>
        </div>
      </div>
    </div>
<<<<<<< HEAD
  <div>
    
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
  <div>
    
  </div>
>>>>>>> 6657e37f7e378a447d5c437b0f3717cc50f198aa
>>>>>>> acd86914436c8ee0aa725d48905aeef3c14d292a
>>>>>>> 1371a801b5778e09ca28977e1c383f391a8d290b
  </div>
</template>

<script>
export default {
  data() {
    return {
      imgList: [
        {
          img: require("../../../public/img/考点专练.png"),
          title: "考点专练",
          path: "/paper",
        },
        {
          img: require("../../../public/img/套卷练习.png"),
          title: "套卷练习",
          path: "/test",
        },
        {
          img: require("../../../public/img/模仿真题.png"),
          title: "模仿真题",
          path: "/model",
        },
        {
          img: require("../../../public/img/错题练习.png"),
          title: "错题练习",
          path: "/wrong",
        },
        {
          img: require("../../../public/img/测评记录.png"),
          title: "测评记录",
          path: "/problem",
        },
        {
          img: require("../../../public/img/习题收藏.png"),
          title: "习题收藏",
          path: "/collection",
        },
      ],
    };
  },
  methods: {
    grid(item) {
      console.log(item);
      this.$router.push({
        path: item.path,
      });
      console.log(this.$router);
    },
  },
};
</script>

<style scoped>
.pricate_test_img {
  width: 100%;
}
.pricate_test_img img {
  width: 2.3rem;
  margin-left: 2.5rem;
}
.pricate_test {
  width: 100%;
  height: 4.3rem;
  background-color: #fff;
  font-size: 0.32rem;
  color: rgba(77, 77, 77, 0.897);
  overflow: hidden;
}
.pricate_test p {
  margin-left: 0.2rem;
}
.pricate_test_item {
  width: 80%;
  display: inline-flex;
  flex-direction: row;
  justify-content: space-between;
  margin-left: 10%;
  font-size: 0.3rem;
}
.van-grid-item__icon {
  font-size: 20px !important;
}
.pricate_list {
  width: 94%;
  margin: 0.2rem 3%;
  background-color: #fff;
}
.pricate {
  width: 100vw;
  height: 100vh;
  background-color: rgba(238, 238, 238, 0.726);
  font-size: 0.4rem;
  padding: 0;
  margin: 0;
}
.pricate_nav {
  height: 1rem;
  width: 100%;
  background-color: #fff;
  display: inline-flex;
  justify-content: center;
  line-height: 1rem;
}
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======



>>>>>>> 6657e37f7e378a447d5c437b0f3717cc50f198aa
>>>>>>> acd86914436c8ee0aa725d48905aeef3c14d292a
>>>>>>> 1371a801b5778e09ca28977e1c383f391a8d290b
</style>