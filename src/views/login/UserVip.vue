<template>
  <div>
    <van-nav-bar title="开通会员" left-arrow @click-left="onClickLeft" />
    <div class="vip_top">

    </div>
  </div>
</template>

<script>
export default {
    methods:{
        onClickLeft(){
             window.history.back();
        }
    }
};
</script>

<style scoped>
.vip_top{
    display: inline-flex;
    justify-content: flex-start;
}
</style>