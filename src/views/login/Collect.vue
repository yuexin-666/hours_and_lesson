<template>
  <div class="collect_box">
       <van-nav-bar
      title="我的收藏"
      left-arrow
      @click-left="onClickLeft"
     >
       </van-nav-bar>
        <van-empty
          image="http://localhost:8080/img/kong.png"
          description="暂无收藏"
        >
        </van-empty>
  </div>
</template>

<script>
export default {
    methods:{
        onClickLeft(){
            window.history.back()
        }
    }
};
</script>

<style scoped>
.collect_box{
  width: 100%;
  height: 100vh;
  background-color: #F0F2F5;
}
</style>