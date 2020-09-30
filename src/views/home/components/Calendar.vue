<template>
  <div>
<van-nav-bar
  title="学习日历"

 
  @click-left="onClickLeft"

>
 <template #left>
    <van-icon name="arrow-left" size="18" />
  </template>
</van-nav-bar>
<!-- 日历 -->
<!-- <van-cell title="选择单个日期" :value="date" @click="show = true" /> -->
<van-calendar
  :poppable="false"
  color=#FF6600
  :style="{ height: '300px' }"
  :show-subtitle="false"
  :show-title="false"
  :show-confirm="false"
  @select="dt"
/>
<p class="date">
  {{date}}  
</p>

  </div>
</template>

<script>
export default {
    data(){
        return{
            date: '',
      show: false,
      date:''
        }
    },
methods:{
        onClickLeft() {
      this.$router.go(-1)
    },
    dt(date){
        var newDate=date.toLocaleString()
       
        this.date=newDate
        console.log(this.date);
    }
}
}
</script>

<style scoped>
.van-icon{
    color: dimgrey;
}
.date{
    color: lightsalmon;
}
</style>