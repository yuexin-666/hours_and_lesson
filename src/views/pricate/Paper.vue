<template>
  <div class="paper">
    <div>
      <Nav></Nav>
    </div>
    <van-search
      v-model="value"
      shape="round"
      background="#fff"
      placeholder="请输入题库名称关键词"
      class="serch"
      left-icon="false"
      right-icon="search"
      @search="onSearch"
    >
      <template #right-icon>
        <van-icon name="search" @click="onSearchright" />
      </template>
    </van-search>

    <div class="paper_content">
      <div class="paper_content_left">
        <Left
          :leftList="leftList"
          :defaultIndex="defaultIndex"
          @leftIndex="getIndex"
        ></Left>
      </div>
      <div class="paper_content_right">
        <div class="right_item" v-for="(item,index) in lessonList" :key="index">
          <p style="margin-left: 1rem">{{item.twoTitle}}</p>
          <div class="right_item_ch">
            <div class="ch_item" v-for="(items,index) in item.books" :key="index">{{items}}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Nav from "../../components/nav/Nav";
import Left from "../../components/pricatePaper/Left";
export default {
  components: {
    Nav,
    Left,
  },
  data() {
    return {
      value: "",
      leftList: [
        {
          title: "求导题库",
          twoList: [{ twoTitle: "小学英语", books: ["英语一册", "英语二册"] }],
        },
        {
          title: "极限题库",
          twoList: [{ twoTitle: "英语试题", books: ["英语一册", "英语二册"] }],
        },
        {
          title: "生物",
          twoList: [{ twoTitle: "小学生物", books: ["生物一册", "生物二册"] }],
        },
        {
          title: "化学",
          twoList: [{ twoTitle: "小学化学", books: ["化学一册", "化学二册"] }],
        },
        {
          title: "数学",
          twoList: [{ twoTitle: "小学数学", books: ["数学一册", "数学二册"] }],
        },
        {
          title: "物理",
          twoList: [{ twoTitle: "小学物理", books: ["物理一册", "物理二册"] }],
        },
        {
          title: "英语",
          twoList: [
            { twoTitle: "小学英语", books: ["英语一册", "英语二册"] },
            { twoTitle: "初中英语", books: ["英语一册", "英语二册"] },
          ],
        },
      ],
      defaultIndex: 0,
      lessonList: [],
    };
  },
  mounted(){
    this.getIndex(0)
  },
  methods: {
    onSearchright() {
      this.onSearch(this.value);
    },
    onSearch(iii) {
      
    },
    getIndex(index) {
      this.defaultIndex = index;
      this.lessonList = [];
      this.lessonList=this.leftList[index].twoList
    },
    
  },
};
</script>

<style scoped>
.right_item_ch {
  /* background-color: rgba(119, 119, 119, 0.664); */
  width: 100%;
  display: inline-flex;
  flex-direction: row;
  justify-content: space-around;
  text-align: center;
}
.ch_item {
  width: 40%;
  background-color: rgba(204, 204, 204, 0.575);
}
.right_item {
  width: 100%;
}
.paper_content_left {
  width: 25%;
  height: 100%;
  background-color: rgba(236, 236, 236, 0.342);
}
.paper_content_right {
  width: 75%;
  height: 100%;
  /* background-color: rgb(0, 247, 255); */
}
.paper_content {
  width: 100%;
  height: 8rem;
  /* background-color: rgb(240, 237, 41); */
  display: inline-flex;
  flex-direction: row;
  justify-content: space-between;
  justify-items: center;
  color: #777;
  font-size: 0.35rem;
}
.serch {
  border-bottom: 0.03rem solid #eee;
  font-size: 0.24rem;
}
.paper {
  width: 100vw;
  height: 100vh;
  /* background-color: rgba(238, 238, 238, 0.726); */
  font-size: 0.4rem;
  padding: 0;
  margin: 0;
}
</style>