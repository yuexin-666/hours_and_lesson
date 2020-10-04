<template>
  <div class="home">
    <!-- 轮播图 -->
    <van-swipe :autoplay="3000" :show-indicators="false">
      <van-swipe-item v-for="(image, index) in images" :key="index">
        <img v-lazy="image" />
      </van-swipe-item>
    </van-swipe>
    <!-- flex -->
    <div class="plate">
      <div @click="feature">
        <img
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEIAAAA8CAYAAADSfGxZAAAFZUlEQVRoQ+1bW2xUVRRd68xMeZPaFESeBkuLhkekk6IfxDEEMQqUmWGMwcQPE5FEo9GYGONP/TIh8UH88BsNwTDObR0CGsUImGDAGVEQIn1JIBYqBSwtr5m5Z5tbaDLYoXPb28d8nPs1ybl7n7PXXWedk8leRN6zfv3pSr/f9wypN4uwlhAheJKQvVnNfblc2fkLFy72ptPBbH5cqf0OhcQ/ZcqJaWVl02dRsmtJrtPQywmQwG+AfJG1M98mk0s7+9dO50dDg6jjx5vrofE2qFYC4htYnPQC6gREpwl1BD5/KpF48DRAKQ0ghNFoexVsvVKAWlCCAJYDmDZwfbQBSYPqo2XLHoo3NFD3AbEp3FKvIZ8CmFesKBE4hfcQuASgTSi7/f7pTfH4AxeLxY7G+MaNV8qV6opSEBVIjQgqSU4FRBWbTwSdCmproqmqibG1Jyv05EBCgFCxwHuNk8hCuF+RO5Dhz7dU9koyWXMNoB5uzsJxomKxi5Ntu7tcCR63oV8g1NOATPAwz8GcrTczGm2Lira/BOD3kOxOaN82+UegjwE4qrRKZcVOJ5OLO7zk3rCh/X6lsisUVJ1QgnSoD84CpI/RHp8ciJcZibRaEB32mGxAuAhyJLodYEB1REQn/P7Md/H4koybuUKhH/0VFfNDgH4eIo8BmCki95EcgQ/2/xWovYyEW/4GZLabxXl/hx0UvHnmXHfjvU6eWEx8OtuyUYhtABZ6n9NNBl5gJNx8tbCyukkwrHe6QLXFsqoaC0WHw+1riNxOADOGlX14Qb0OI256FJuhT00esqxFTxQGonk/gdVDT+op4ta4AEHiWsKqnlpo6ZFwcw+AgmOeSh00mOMFBHXCWlTg0gZEIy22SPE7wMiCYoDoP/YNI24jYRhhGHG3xhhGGEYYRhQ8d83WMFvDbA2zNQa7lBuNMBphNMJohNEIF39dGLE0YmnE0oilEUsjli4QMGJpxNKIpRFLF1JhbpZGLI1YGrE0YmnE0gUC+WI55j1UIEuuUaTHaSY7BeBh9+h5f7MEgWhmJNKyGyIx7+W5zzAYEJFws9OtOxKNpO4XBCQZibRththOO9+YPSXHCGIrY+va5tsB+zCAOWOFRCkBIYIOZfMphkJ/Tawoz34G4kUARTvaRwKsUgHCcRoQ2JHT+vXbNoX69lVa5XaNFStKBQgAl0GELav6UB8QfQ3g5XNfA+XjkfjixXKUChCK8l7X5Y5tBw48mbtLnaPh5u0CbAEwsVgxXsZL4NS4CeJzy6p+pb+Ou4CIxQ5PyuUq3yL4BiCj1hQ+zoz4F4IPc1pvTyYXO+3Ofc+A89oBQzIzH9VKPgBk1Wic6eMEhGOqOQLiHZ9v0i/x+Lwb+ay+58XF8U3YduuzFHlVgKUQTAc5yY1Xqti2GQsg7pwI10H2CORPQH9y9mzNvnSaBR2Krm5wkcipBSKBOooESdQKuAKQ8uGyZRSBcL56twC/UyRFqKOiJGVZ1e1FP06xF/LHa2tTgTlzJlQEAhNna40QgSggdQACQ8kDoNdqrC5gQwSGaVPIkvhVNCz6yr6/caP3fGfnzUtD8ae6YsRgRcZirVW2Lc9BY5NAHLvkNBKDue4cw+QPVlP1mkJ5I+HT3wBcOzjbJCPCq1ToANhIqp2JxMJWLx5Uz0D0F+O4b2eUn1liq1wQIkEI60A8MsAdRLQqW1766uuanwoBEY22BSF6l4hU5Y87ZjkQfxBMQUuKwqNqwq2Tbs1yxRg7YkDkT+ScPJnMzMoyxQU29DpA6gHMFeCYz+d7v6vr7EHnElN4caLC4ZbVhLwL0HH1ngO4F0BSa7ZrPfnSnj2zrxcrbKjj/wFPducAYoibwgAAAABJRU5ErkJggg=="
          alt=""
        />
        <p>特色课</p>
      </div>
      <div @click="tutoring">
        <img
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAD8AAAA8CAYAAADRy2JxAAAEDElEQVRoQ+2aTWhUVxTH/+fNRyYmE78WirTQFgwiXSjFjWDRlR+k0CIOlJiaVk1VNGrGmBZaOy24EXSmlBqk2inUyaRZKM3MFFxoNt1VQXEhiogSSKwL48ckMTNz7yk3VQntTN7Me2HezJv3tveee+7vnnP+9773LgFAaGjIPZ4eeVsCX4KwCZKXgEhTbRX3EP4mxiXp1b46tfHjYTPzIwX+/PloO4i/AfCGmcHKZcsAa6ALYnKiIxzY9dioX+pOxJZL4Eq1gM8AfeRyy/dPbG67bRg+mIxFwWg3OoBldkTMLFaf+qDthtE5UDDRNwrwUqMDWGnHkKvMwQ/GBAiVKW46K2sePhFjK6NnxrcDb67mncibyT7LbJ20d9LeWPJR0KZq352KLmX2vguX5n+9NDmAmB7kXqTvh7ftHLMlfFeqv5lYXARjZZ6cEAD+AmG/LeGDidhBAJFCxaBejEAYtCV8VzL2NTG+m1UJCE9rFx6AA29so7DeqtAhp6i0dyJvw33eibye2jtp76S99cptZAaO2ud5pXUEzxG82YvJOd4aEZtKsHEEr0YFb0oKXhP+cPvN/2ZhLaj9XUHYGGlpvVcz8OoTFAETID7pn/AeDwUCmfLAT/8Wxp9EuE7M2XKLHhMxMacl+NaLSW/qdCCQzjeHuU97IgbzOZGRx0T92OOp4TpZbvhlzc0cWr9B/VWe9efqnMIzIEAUnwR39ra0jpUbulR/cwf/b8TPC4/siWxqGy11Ilb0nxt4VWPA2Vx26mjko0+fWAFixKdpeJXqBPSJXKazmsCnr9WNj/wiGa16C5f/bK+T6ocuRhdoLs8KaFSv56Cc7STIzRqvJaJOMC/S8/1/eAUO/klkMz35In7093N+ofl6AV4PaC49B2VtZ3U9D00gqgOritV7q0vGnoAxX3UrJtW/+CO+OivkNfX9T2/wSm+nI6l4J0vZw0ATgfpFRhyLbC2s6l2D51uIKFHpYMXMj7YNDHjfdE++xW6PJ+eWwz9s2f5sNkNbwRezQjP7dCV/20Ccu2yLtC8V/lAy9o6LoWp+Qam2lda/ZNHqSJyZ59caf4ZEoNqjXzK8it7h5K/rNNbOMrCcqlj1DcGrPfTwYP97mov3QvJmAEuq8f6uMfiXxbtv4MdGX8PiZaRhviayPstqmqlegrYQcIBR/CVqU/CWwRZwfCQR382QYQDzitEjW8F3XD3jaRpp3AtCiIGFesGxFbyCDQ1FfemJuh2QfFqvBGwH/yrawVTfLkiEAW4oVAK2hVcl4H/o30PM3xYqAdvCqwxoH4r6Fo97PyFGb74SsDX8qxLoTsY/E1J+D0LDjEOZrAn46V1gtPFzxvSV1Je7AN2pCfjXJZCu3wqSx8H8yEXo+Qf3I4hni2PDwwAAAABJRU5ErkJggg=="
          alt=""
        />
        <p>一对一辅导</p>
      </div>
      <div @click="calendar">
        <img
          src="data:image/png;base64,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"
          alt=""
        />
        <p>学习日历</p>
      </div>
    </div>
    <!-- 名师阵容 -->
    <div class="teacher_list">
      <div class="teacher_item">
        <div>
          <div class="title">名师阵容</div>
          <div>
            <div class="item" @click="teacherdetails">
              <img
                src="https://msmk2019.oss-cn-shanghai.aliyuncs.com/uploads/image/2019X3gWvILU7J1571983543.png"
                alt=""
              />
              <div>
                <p>杨德胜</p>
                <p class="describe">
                  杨老师，特级教师，多次被中国数学会评为...
                </p>
              </div>
            </div>
            <div class="item" @click="teacherdetails">
              <img
                src="https://msmk2019.oss-cn-shanghai.aliyuncs.com/uploads/image/2019wX5ZNRNxBT1577773182.jpg"
                alt=""
              />
              <div>
                <p>文卫星</p>
                <p class="describe">文卫星，江苏沭阳县人，上海市特技教师...</p>
              </div>
            </div>
            <div class="item" @click="teacherdetails">
              <img
                src="https://msmk2019.oss-cn-shanghai.aliyuncs.com/uploads/image/20192TSKKmyNso1572684453.png"
                alt=""
              />
              <div>
                <p>马学斌</p>
                <p class="describe">马学斌老师，从2004年起，专注中考数学...</p>
              </div>
            </div>
          </div>
        </div>

        <div class="Boutique">
          <div class="title">精品课程</div>
          <!-- <div class="course">
            <ul>
              <li class="title">
                每时每课特级教师-自主招生冲刺讲座6-多元方程组与可转化多元方程组问题
              </li>
              <li class="hour">1一课时</li>
              <li>
                <img
                  src="https://msmk2019.oss-cn-shanghai.aliyuncs.com/uploads/image/2019X3gWvILU7J1571983543.png"
                  alt=""
                />
                <span>杨德胜</span>
              </li>
              <li>
                <span>138人已报名</span>
                <span>免费</span>
              </li>
            </ul>
          </div> -->
        </div>
      </div>
    </div>
   
    
    <!-- 精品课程 -->
    <div class="course" @click="lessondetails">
      <ul>
        <li class="tit">每时每课特级教师-自主招生冲刺讲座6-多元方程组与可转化多元方程组问题</li>
        <li class="hour">共1课时</li>
        <li class="teacher">
          <img src="https://msmk2019.oss-cn-shanghai.aliyuncs.com/uploads/image/2019X3gWvILU7J1571983543.png" alt="">
          <span>杨德胜</span>
        </li>
        <li class="del">
          <span class="apply">138人已报名</span>
          <span class="cost">免费</span>
          </li>
      </ul>
    </div>
        <div class="course" @click="lessondetails">
      <ul>
        <li class="tit">每时每课特级教师-自主招生冲刺讲座8-二次函数2--根的分布</li>
        <li class="hour">共1课时</li>
        <li class="teacher">
          <img src="https://msmk2019.oss-cn-shanghai.aliyuncs.com/uploads/image/2019X3gWvILU7J1571983543.png" alt="">
          <span>杨德胜</span>
        </li>
        <li class="del">
          <span class="apply">100人已报名</span>
          <span class="cost">免费</span>
          </li>
      </ul>
    </div> 
    <div class="course" @click="lessondetails">
      <ul>
        <li class="tit">每时每课特级教师-自主招生冲刺讲座-1代数式求值1</li>
        <li class="hour">共1课时</li>
        <li class="teacher">
          <img src="https://msmk2019.oss-cn-shanghai.aliyuncs.com/uploads/image/20192TSKKmyNso1572684453.png" alt="">
          <span>杨德胜</span>
        </li>
        <li class="del">
          <span class="apply">127人已报名</span>
          <span class="cost">免费</span>
          </li>
      </ul>
    </div>



     <div class="course" @click="lessondetails">
      <ul>
        <li class="tit">初中重点几何知识点————第三讲:平行四边形与矩形、菱形、正方形的关系</li>
        <li class="hour">共1课时</li>
        <li class="teacher">
          <img src="https://msmk2019.oss-cn-shanghai.aliyuncs.com/uploads/image/20192TSKKmyNso1572684453.png" alt="">
          <span>马学斌</span>
        </li>
        <li class="del">
          <span class="apply">123人已报名</span>
          <span class="cost">
            <img src="https://msmk2019.oss-cn-shanghai.aliyuncs.com/uploads/image/20191HHDExgz0u1567065946.png" alt="">
            <span>1.00</span>
          </span>
          </li>
      </ul>
    </div>
 <div class="course" @click="lessondetails">
      <ul>
        <li class="tit">初中重点几何知识点————第九讲:用描点法画出二次函数y=-x^2的图像</li>
        <li class="hour">共1课时</li>
        <li class="teacher">
          <img src="https://msmk2019.oss-cn-shanghai.aliyuncs.com/uploads/image/20192TSKKmyNso1572684453.png" alt="">
          <span>马学斌</span>
        </li>
        <li class="del">
          <span class="apply">127人已报名</span>
          <span class="cost">
            <img src="https://msmk2019.oss-cn-shanghai.aliyuncs.com/uploads/image/20191HHDExgz0u1567065946.png" alt="">
            <span>1.00</span>
          </span>
          </li>
      </ul>
    </div>
     <div class="course" @click="lessondetails">
      <ul>
        <li class="tit">初中重点几何知识点————第二讲:三角形对平行四边形的影响</li>
        <li class="hour">共1课时</li>
        <li class="teacher">
          <img src="https://msmk2019.oss-cn-shanghai.aliyuncs.com/uploads/image/20192TSKKmyNso1572684453.png" alt="">
          <span>杨德胜</span>
        </li>
        <li class="del">
          <span class="apply">120人已报名</span>
          <span class="cost">
            <img src="https://msmk2019.oss-cn-shanghai.aliyuncs.com/uploads/image/20191HHDExgz0u1567065946.png" alt="">
            <span>1.00</span>
          </span>
          </li>
      </ul>
    </div> 
    <div class="course" @click="lessondetails">
      <ul>
        <li class="tit">每时每课特级教师-自主招生冲刺讲座-1代数式求值1</li>
        <li class="hour">共1课时</li>
        <li class="teacher">
          <img src="https://msmk2019.oss-cn-shanghai.aliyuncs.com/uploads/image/20192TSKKmyNso1572684453.png" alt="">
          <span>杨德胜</span>
        </li>
        <li class="del">
          <span class="apply">127人已报名</span>
          <span class="cost">
            <img src="https://msmk2019.oss-cn-shanghai.aliyuncs.com/uploads/image/20191HHDExgz0u1567065946.png" alt="">
            <span>1.00</span>
          </span>
          </li>
      </ul>
    </div>
    <!-- 推荐课程 -->
     <div class="title">推荐课程</div>
    <div class="course" @click="lessondetails">
      <ul>
        <li class="tit">每时每课初中数学——初一拓展-分式（一）</li>
        <li class="hour">共1课时</li>
        <li class="teacher">
          <img src="https://baijiayun-wangxiao.oss-cn-beijing.aliyuncs.com/uploads/avatar.jpg" alt="">
          <span>廖天金</span>
        </li>
        <li class="del">
          <span class="apply">36人已报名</span>
          <span class="cost">免费</span>
          </li>
      </ul>
    </div>
        <div class="course" @click="lessondetails">
      <ul>
        <li class="tit">每时每课-初二物理-摩擦力</li>
        <li class="hour">共1课时</li>
        <li class="teacher">
          <img src="https://baijiayun-wangxiao.oss-cn-beijing.aliyuncs.com/uploads/avatar.jpg" alt="">
          <span>白静</span>
        </li>
        <li class="del">
          <span class="apply">43人已报名</span>
          <span class="cost">免费</span>
          </li>
      </ul>
    </div> 
    <div class="course" @click="lessondetails">
      <ul>
        <li class="tit">每时每课-初二物理-牛顿第一定律&二力平衡知识点</li>
        <li class="hour">共1课时</li>
        <li class="teacher">
          <img src="https://baijiayun-wangxiao.oss-cn-beijing.aliyuncs.com/uploads/avatar.jpg" alt="">
          <span>白静</span>
        </li>
        <li class="del">
          <span class="apply">39人已报名</span>
          <span class="cost">免费</span>
          </li>
      </ul>
    </div>
    <div class="course" @click="lessondetails">
      <ul>
        <li class="tit">每时每课-初一英语-where引导的特殊疑问句和on，in，under介词用法知识点</li>
        <li class="hour">共1课时</li>
        <li class="teacher">
          <img src="https://baijiayun-wangxiao.oss-cn-beijing.aliyuncs.com/uploads/avatar.jpg" alt="">
          <span>璐璐</span>
        </li>
        <li class="del">
          <span class="apply">37人已报名</span>
          <span class="cost">免费</span>
          </li>
      </ul>
    </div>
    <div class="course" @click="lessondetails">
      <ul>
        <li class="tit">每时每课-初二英语-频率副词知识点</li>
        <li class="hour">共1课时</li>
        <li class="teacher">
          <img src="https://baijiayun-wangxiao.oss-cn-beijing.aliyuncs.com/uploads/avatar.jpg" alt="">
          <span>Willa</span>
        </li>
        <li class="del">
          <span class="apply">28人已报名</span>
          <span class="cost">免费</span>
          </li>
      </ul>
    </div>
    <!-- 明星讲师 -->
     <div class="title">明星讲师</div>
        <div class="item" @click="teacherdetails">
          <img src="https://baijiayun-wangxiao.oss-cn-beijing.aliyuncs.com/uploads/avatar.jpg" alt="">
          <div>
            <p>杨德老师<span class="rank">M10</span></p>
            <p class="describe">中学一级教师，16年教学经验。学校骨干，中学一级教师，16年教学经验。学校骨干</p>
          </div>
        </div>
        <div class="item" @click="teacherdetails">
          <img src="https://baijiayun-wangxiao.oss-cn-beijing.aliyuncs.com/uploads/avatar.jpg" alt="">
          <div>
            <p>白静<span class="rank">M8</span></p>
            <p class="describe">教学风格幽默风趣的同时也很严谨，对学生也很严谨，对学生</p>
          </div>
        </div>
      
        <div class="item" @click="teacherdetails">
          <img src="https://baijiayun-wangxiao.oss-cn-beijing.aliyuncs.com/uploads/avatar.jpg" alt="">
          <div>
            <p>Grace<span class="rank">M20</span></p>
            <p class="describe">国内知名师范院校英语专业毕业，授课方式，授课方式</p>
          </div>
        </div>
        <div class="item" @click="teacherdetails">
          <img src="https://baijiayun-wangxiao.oss-cn-beijing.aliyuncs.com/uploads/avatar.jpg" alt="">
          <div>
            <p>Willa<span class="rank">M1</span></p>
            <p class="describe">具有较强的英语专业素养和较高的英语师资，较高的英语师资</p>
          </div>
        </div>
        <div class="item" @click="teacherdetails">
          <img src="https://baijiayun-wangxiao.oss-cn-beijing.aliyuncs.com/uploads/avatar.jpg" alt="">
          <div>
            <p>璐璐<span class="rank">M1</span></p>
            <p class="describe">教学风格擅长教于乐人的教学方式，条理，教学风格擅长教于乐人的教学方式，条理</p>
          </div>
        </div>






 





  
  

<div class="mat">

</div>
  </div>
</template>

<script>
import Vue from "vue";
import { Lazyload } from "vant";

Vue.use(Lazyload);
export default {
data(){
  return{
    images: [
        'https://msmk2019.oss-cn-shanghai.aliyuncs.com/uploads/image/2019LnKumseuhw1569839569.jpg',
        'https://msmk2019.oss-cn-shanghai.aliyuncs.com/uploads/image/2019MGNW3BtiS91569839576.jpg',
       
      ],
  }
},
methods:{
  
  feature(){
    this.$router.push({
      path:'/about'
    })
  },
  tutoring(){
    this.$router.push({
      path:'/tutoring'
    })
  },
  calendar(){
     this.$router.push({
      path:'/calendar'
    })
  },
  teacherdetails(){
    this.$router.push({
      path:'/teacherdetails'
    })
  },
  lessondetails(){
     this.$router.push({
      path:'/lessondetails'
    })
  }
}

}
</script>

<style scoped>
.home {
  background: #f0f2f5;
}
.van-swipe-item {
  width: 100%;
}
.van-swipe-item img {
  width: 100%;
}
.plate {
  /* border: 1px solid red; */
  display: flex;
  justify-content: space-around;
  width: 100%;
  height: 3rem;
  margin-top: -0.8rem;
}
.plate div {
  height: 2rem;
  z-index: 999;

  width: 2rem;

  background: white;
  border-radius: 0.3rem;
  text-align: center;
  font-size: 0.25rem;
}
.plate div img {
  width: 0.5rem;
  height: 0.5rem;
  margin-top: 0.3rem;
}
.teacher_list {
  margin-top: -0.7rem;
}
.teacher_item {
  width: 90%;
  margin-left: 5%;
}
.title {
  border-left: red 0.1rem solid;
  padding-left: 0.2rem;
  font-size: 0.35rem;
  margin: 0.3rem 0rem;
}
.item {
  margin-top: 0.2rem;
  width: 100%;
  height: 1.8rem;
  font-size: 0.2rem;
  background: white;
  border-radius: 0.1rem;
  display: flex;
  justify-content: space-around;
}
.item div {
  width: 80%;
  height: 100%;
  /* line-height: 100%; */
}
.item img {
  width: 1rem;
  height: 1rem;
  border-radius: 50%;
  /* line-height:100%; */
  margin-top: 0.2rem;
}
.describe {
  color: rgb(177, 174, 174);
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.course {
  width: 100%;
  /* height: 3rem; */
  background: white;
  border-radius: 0.1rem;
  margin-top: 0.3rem;
}
.course ul{
  width: 94%;
  margin-left: 3%;

}
.course ul img{
  width: 0.5rem;
  height: 0.5rem;
  border-radius: 50%;
}
.course .tit{
font-size: 0.32rem;
padding-top: 0.4rem;
}
.hour{
  font-size: 0.3rem;
  color:#666;
  margin-top: 0.1rem;
}
.teacher{
  height: 1rem;
  
  border-bottom: 0.01rem solid  rgba(218, 212, 212, 0.45);
  display: flex;
  align-items: center;
  /* float: left; */
  /* margin-right: 0.2rem; */
  font-size: 0.3rem;
}
.teacher span{
  margin-left: 0.3rem;
  color: rgba(0,0,0,.45);
}

.del{
  height: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.apply{
  font-size: 0.32rem;
  color:rgb(80, 78, 78) ;
}
.cost{
  font-size: 0.34rem;
  color: rgb(80, 158, 34);
}
ul .cost img{
  width: 0.35rem;
  height: 0.32rem;
  
}
.cost span{
  color: red;
  margin-left: 0.1rem;
}
.mat{
  width:100%;
  height: 1.5rem;
}
.rank{
  color: rgb(226, 134, 80);
  margin-left: 0.2rem;
}
</style>