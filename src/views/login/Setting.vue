<template>
  <div>
    <div class="bos">
           <van-nav-bar
  title="设置"
  left-arrow
  @click-left="onlist()"
    />
    <br>
    <div class="bos_top" style="color: #595959">
        <span>设置密码</span>
        <van-icon name="arrow" />
    </div>
    <div class="bos_tui">
        <div class="ss" @click="tuichu">退出登录</div>
    </div>
    </div>
  </div>
</template>

<script>
export default {
    methods:{
        onlist(){
            this.$router.go(-1)
        },
        tuichu(){
            localStorage.token=''
            this.$router.push({
                path:"/"
            })
        }
    }
}
</script>

<style scoped>
.van-nav-bar{
        height: 39px;
        font-size: 15px;
        
}
.bos{
    min-height: 100vh;
    background: #f0f2f5;
    box-sizing: border-box
}
.bos_top{
    display: flex;
    justify-content: space-between;
    width: 100%;
    height: 1rem;
    align-items: center;
    padding: 0px 0.3rem;
    background: #fff;
    box-sizing: border-box;
}
.bos_tui{
    width: 100%;
    height: 3rem;
    padding-top: 1.4rem;
    box-sizing: border-box;
    background: #fff;
}
.ss{
     background-color: #eb6100;
    color: #fff;
    width: 92vw;
    height: 0.8rem;
    margin:  auto;
    border-radius: .10667rem;
    font-size: 0.3rem;
    text-align: center;
    line-height: 0.8rem;
}
</style>