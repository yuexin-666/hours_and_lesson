
<template>
  <div class="tutoring">
<!-- 一对一辅导 -->

<!-- 头部导航 -->
<van-nav-bar
  title="一对一辅导"
  right-text="一对一辅导"
 
  @click-left="onClickLeft"
  @click-right="onClickRight"
>
 <template #left>
    <van-icon name="arrow-left" size="18" />
  </template>
 <template #right>
    <van-icon name="search" size="18" />
  </template>
</van-nav-bar>
<!-- 下拉菜单 -->
<van-dropdown-menu>
<van-dropdown-item title="选择上课时间" ref="item"   @click="show = true">

<van-calendar
  :poppable="false"
  color=#FF6600
  :style="{ height: '300px' }"
  :show-subtitle="false"
  :show-title="false"
/>








</van-dropdown-item>
<van-dropdown-item title="选择老师条件" ref="item">
    <div class="all">
        <p class="title">老师类型</p>
        <div class="select">
           <button v-for="(item,index) in button" :key="index"  @click="type(index)" :class="{'action':index==indexVal}">{{item.title}}</button>
           
           text
        </div> 
        <p class="title">只看</p>
        <div class="sls">
            <van-checkbox icon-size="15px" v-model="checked" shape="square">已关注</van-checkbox>
            <van-checkbox icon-size="15px" v-model="checked1" shape="square">上过课的</van-checkbox>
        </div>
        <p class="title">性别</p>
       
             <div class="select">
            <button v-for="(item,index) in button2" :key="index"  @click="type2(index)" :class="{'action':index==indexVal2}">{{item.title}}</button>
            
             </div>
              <p class="title">年级</p>
       
             <div class="select">
            <button v-for="(item,index) in button3" :key="index"  @click="type3(index)" :class="{'action':index==indexVal3}">{{item.title}}</button>
           
             </div>
              <p class="title">学科</p>
       
             <div class="select">
            <button v-for="(item,index) in button4" :key="index"  @click="type4(index)" :class="{'action':index==indexVal4}">{{item.title}}</button>

             </div>
            
        
    </div>
    <van-button type="primary" size="large" class="confirm">确定</van-button>
</van-dropdown-item>


</van-dropdown-menu>
<!-- 老师列表 -->
<div class="teacher_list">
    <div class="teacher_item" v-for="(item,index) in list" :key="index" @click="subscribe">
        <img :src="item.img" alt="">
        <div>
            <p>{{item.name}}</p>
            <p class="del"><span class="sex">{{item.sex}}</span><span>{{item.age}}</span></p>
        </div>
        <button>{{item.button}}</button>
    </div>
</div>
<div class="mat"></div>
  </div>
</template>

<script>
export default {
data(){
    return{
        button:[{title:"M1"},{title:"M2"},{title:"M3"},{title:"M4"},{title:"M5"},{title:"M6"},{title:"M7"},{title:"M8"},{title:"M9"},{title:"M10"},{title:"M11"},{title:"M12"}],
        button2:[{title:"男"},{title:"女"}],
        button3:[{title:"小学一年级"},{title:"小学二年级"},{title:"小学三年级"},{title:"小学四年级"},{title:"小学五年级"},{title:"小学六年级"},{title:"初一"},{title:"初二"},{title:"初三"},{title:"高一"},{title:"高二"},{title:"高三"}],
        button4:[{title:"语文"},{title:"数学"},{title:"英语"},{title:"物理"},{title:"化学"},{title:"生物"},{title:"信息技术"}],
        list:[
            {img:"https://msmk2019.oss-cn-shanghai.aliyuncs.com/uploads/image/2019X3gWvILU7J1571983543.png",
             name:"杨德胜",
             sex:"男",
             age:"30年教龄",
             button:"预约"
            },
             {img:"https://msmk2019.oss-cn-shanghai.aliyuncs.com/uploads/image/20199pIxx6OzV51566615814.jpg",
             name:"李凡",
             sex:"男",
             age:"10年教龄",
             button:"预约"
            },
             {img:"https://msmk2019.oss-cn-shanghai.aliyuncs.com/uploads/image/20191q20gY29bo1566617207.jpg",
             name:"齐钰",
             sex:"女",
             age:"8年教龄",
             button:"预约"
            },
             {img:"https://msmk2019.oss-cn-shanghai.aliyuncs.com/uploads/image/2019i5PsxDwbxK1571361181.jpg",
             name:"森一",
             sex:"男",
             age:"8年教龄",
             button:"预约"
            },
             {img:"https://baijiayun-wangxiao.oss-cn-beijing.aliyuncs.com/uploads/avatar.jpg",
             name:"宋老师",
             sex:"男",
             age:"20年教龄",
             button:"预约"
            },
             {img:"https://msmk2019.oss-cn-shanghai.aliyuncs.com/uploads/image/2019X3gWvILU7J1571983543.png",
             name:"T1陆老师",
             sex:"男",
             age:"8年教龄",
             button:"预约"
            },
              {img:"https://msmk2019.oss-cn-shanghai.aliyuncs.com/uploads/image/2019i5PsxDwbxK1571361181.jpg",
             name:"森一",
             sex:"男",
             age:"8年教龄",
             button:"预约"
            },
             {img:"https://baijiayun-wangxiao.oss-cn-beijing.aliyuncs.com/uploads/avatar.jpg",
             name:"宋老师",
             sex:"男",
             age:"20年教龄",
             button:"预约"
            },
             {img:"https://msmk2019.oss-cn-shanghai.aliyuncs.com/uploads/image/2019X3gWvILU7J1571983543.png",
             name:"T1陆老师",
             sex:"男",
             age:"8年教龄",
             button:"预约"
            }
            ],
      show: false,
       checked:false,
       checked1:false,
       indexVal:-1,
        indexVal2:-1,
         indexVal3:-1,
          indexVal4:-1
    }
},
methods:{
       onClickLeft() {
      this.$router.go(-1)
    },
    onClickRight() {
      
    },
      onConfirm(date) {
     
     
    },
    type(index){
        console.log(index);
        this.indexVal=index
        console.log(this.indexVal);

    },
      type2(index){
        this.indexVal2=index
    },
    type3(index){
        this.indexVal3=index
    },
    type4(index){
        this.indexVal4=index
    },
    subscribe(){
       
    }
}
}
</script>

<style scoped>
.van-icon{
    color: dimgrey;
}
div.van-ellipsis{
    color: rgb(211, 204, 204) !important;
    font-size: 0.3rem;
}
.select button{
    background:#f5f5f5;
    width: 1.5rem;
    height: 0.7rem;
    font-size: 0.3rem;
    border: none;
margin-top: 0.1rem;
margin: 0.1rem 0.13rem;
border-radius: 0.1rem;
}
.select{
    padding-bottom: 0.2rem;
    display: flex;
    /* justify-content: space-between; */

    flex-wrap: wrap;
    border-bottom: 0.01rem solid #f5f5f5;
    font-size: 0.3rem;
}
.all .title{
    font-size: 0.3rem;
}
.all{
    width: 94%;
    margin-left: 3%;

}
.sls{
    display: flex;
    font-size: 0.27rem;
    padding-bottom: 0.2rem;
    border-bottom: 0.01rem solid #f5f5f5;
}
.sls .van-checkbox{
    margin-right: 0.2rem;
}
/* .van-popup--top{
    height: 100% !important;
} */

.van-dropdown-item .van-popup--top{
    height: 100%;
}
.confirm{
    background: rgb(255, 102, 0);
}
.select .action{
    background: rgb(255, 102, 0);
}
.teacher_item{
    margin-top: 0.2rem;
    background: white;
    width: 94%;
    margin-left: 3%;
    border-radius: 0.15rem;
    display: flex;
    align-items: center;
    justify-content: space-around;
    font-size: 0.3rem;
}
.teacher_item div{
    width: 60%;
}
.teacher_item button{
    width: 1.4rem;
    height: 0.6rem;
    background: #ebeefe;
    color: #eb6100;
    border-radius: 0.3rem;
    border:none
}
.teacher_item img{
    width: 1rem;
    height: 1rem;
    border-radius: 50%;
}
.tutoring{
  background:#f0f2f5;
}
.sex{
    margin-right: 0.3rem;
}
.del{
    color: rgb(194, 192, 189);
}
.mat{
  width:100%;
  height: 1.5rem;
}
</style>