<template>
  <div class="paper">
    <div>
      <Nav></Nav>
    </div>
    <div><van-dropdown-menu>
  <van-dropdown-item v-model="value1" :options="option1" />
  <van-dropdown-item v-model="value2" :options="option2" />
</van-dropdown-menu></div>
  </div>
</template>

<script>
import Nav from "../../components/nav/Nav"
export default {
  components:{
    Nav
  },
  data() {
    return {
      value1: 0,
      value2: 'a',
      option1: [
        { text: '全部商品', value: 0 },
        { text: '新款商品', value: 1 },
        { text: '活动商品', value: 2 },
      ],
      option2: [
        { text: '默认排序', value: 'a' },
        { text: '好评排序', value: 'b' },
        { text: '销量排序', value: 'c' },
      ],
    };
  },

};
</script>

<style scoped>
.paper{
  width: 100vw;
  height: 100vh;
  background-color: rgba(238, 238, 238, 0.726);
  font-size: 0.4rem;
  padding: 0;
  margin: 0;
}
</style>