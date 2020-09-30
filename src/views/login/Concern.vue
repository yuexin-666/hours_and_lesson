<template>
  <div>
       <van-nav-bar
      title="我的关注"
      left-arrow
      @click-left="onClickLeft"
     >
       </van-nav-bar>
        <van-empty
          image="https://img.yzcdn.cn/vant/custom-empty-image.png"
          description="暂无关注"
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

<style>
</style>