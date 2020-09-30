<template>
  <div>
    <div class="serch_header">
      <van-icon @click="$router.go(-1)" name="arrow-left" />
      <van-search
        class="serch_header_ss"
        v-model="value"
        placeholder="请输入搜索关键词"
      >
        <template #action>
          <div @click="onSearch">搜索</div>
        </template>
      </van-search>
      <span class="serch_header_size">取消</span>
    </div>
  </div>
</template>

<script>
export default {
    data () {
        return {
            value:''
        }
    },
    methods: {
        onSearch(){

        }
    },
};
</script>

<style scoped>
.serch_header {
  width: 100%;
  height: 0.7rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  direction: fixed;
}
.serch_header_ss {
  width: 80%;
}
.serch_header_size{
    font-size: 0.3rem;
    color: gray;
}
</style>