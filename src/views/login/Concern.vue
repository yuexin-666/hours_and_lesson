<template>
  <div class="concern_box">
    <van-nav-bar title="我的关注" left-arrow @click-left="onClickLeft">
    </van-nav-bar>
    <div class="concern_contant">
      <div class="concern_item">
        <img
          src="https://msmk2019.oss-cn-shanghai.aliyuncs.com/uploads/image/20199pIxx6OzV51566615814.jpg"
          alt=""
        />
        <div class="concern_info">
          <div class="concern_name"><span>李凡</span><span>M9</span></div>
          <div class="concern_jies">
            教学风格善于因材施教，针对不同学生的心理，采用不同的教学方法，以求达到更好的学习境界。
            从事多年教育工作，拥有丰富的一线经验，持有高级中学教师资格证。对于专业知识苦心孤诣，格物致知，对于学科知识内在联系逻辑有自己独特的见解。
            培养学生养成习惯，对于复杂的知识娓娓道来，将复杂的知识简单化，将教材的知识生活化，更深入，更直接，更生动，更活泼。
          </div>
        </div>
        <p class="concern_cls">取消关注</p>
      </div>
    </div>
    <p class="concern_test">没有更多了</p>
  </div>
</template>

<script>
export default {
  methods: {
    onClickLeft() {
      window.history.back();
    },
  },
};
</script>

<style scoped>
.concern_box {
  background-color: #f0f2f5;
  width: 100%;
  height: 100vh;
}
.concern_contant {
  width: 100%;
  margin: 0.3rem auto;
  display: flex;
  justify-content: center;
}
.concern_item {
  width: 95%;
  background-color: #fff;
  height: 1.4rem;
  padding: 0rem 0.3rem;
  box-sizing: border-box;
  border-radius: 0.1rem;
  display: flex;
  align-items: center;
}
.concern_item img {
  width: 1rem;
  height: 1rem;
}
.concern_info {
  width: 3.7rem;
  margin-left: 0.26667rem;
  line-height: 0.66667rem;
}
.concern_name {
  width: 100%;
  display: flex;
  margin: 0px;
  padding: 0px;
}
.concern_jies {
  width: 100%;
  font-size: 0.24rem;
  color: #b7b7b7;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  margin: 0;
}
.concern_cls {
  transform: translateY(-50%);
  font-size: 0.24rem;
  color: #eb6100;
  text-align: center;
  width: 1.6rem;
  height: 0.54667rem;
  line-height: 0.54667rem;
  background: rgba(235, 97, 0, 0.1);
  border-radius: 0.41333rem;
  margin-top: 0.78rem;
}
.concern_test {
  font-size: 0.26rem;
  color: #969799;
  width: 100%;
  text-align: center;
}
</style>