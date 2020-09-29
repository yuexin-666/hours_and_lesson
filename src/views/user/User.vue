<template>
  <div class="user_container">
    <div class="person">
      <div class="top_box">
        <div class="tab">
          <div class="info">
            <div class="login">
              <div class="avatar">
                <img
                  src="https://msmk2019.oss-cn-shanghai.aliyuncs.com/uploads/avatar.jpg"
                  alt=""
                />
              </div>
              <div class="extra">
                <div class="name">
                  <span>135*****9999</span>
                </div>
                <p><van-icon name="edit" /></p>
              </div>
            </div>
          </div>
          <div class="mine">
            <div class="mine_item">
              <p class="mine_item_count">1</p>
              <p class="mine_item_name">我的特色课</p>
              <p class="mine_item_note">已购特色课程的学习</p>
            </div>
            <div class="mine_item">
              <p class="mine_item_count">0</p>
              <p class="mine_item_name">一对一辅导</p>
              <p class="mine_item_note">我的一对一老师辅导</p>
            </div>
            <div class="mine_item">
              <p class="mine_item_count">0.00</p>
              <p class="mine_item_name">剩余学习币</p>
              <p class="mine_item_note">查看剩余学习币</p>
            </div>
          </div>
          <div class="to_set">
            <span>去约课</span>
          </div>
        </div>
      </div>

      <div class="to_share">
        <div class="to_share_box">
          <span>
            <van-icon name="send-gift-o" />
          </span>
          <div class="to_share_size">
            <p>邀请好友注册APP，享多重好礼</p>
            <p>限时特惠，多邀多得</p>
          </div>
          <span class="arrow">
            <van-icon name="arrow" />
          </span>
        </div>
      </div>
      <div class="menu_box">
        <div class="menu_box_item">
          <div class="menu_box_item_title">课程相关</div>
          <div class="menu_box_item_contant">
            <van-grid gutter="" icon-size="40px" column-num=3>
              <van-grid-item text="关注的老师">
                <template #icon>
                  <span class="iconfont icon-Icon_wode"></span>
                </template>
              </van-grid-item>
              <van-grid-item text="我的收藏">
                <template #icon>
                  <span class="iconfont icon-xingxing"></span>
                </template>
              </van-grid-item>
            </van-grid>
          </div>
        </div>

        <div class="menu_box_item">
          <div class="menu_box_item_title">订单相关</div>
          <div class="menu_box_item_contant">
            <van-grid gutter="" icon-size="40px" column-num=4>
              <van-grid-item text="课程订单">
                <template #icon>
                  <span class="iconfont icon-dingdan1"></span>
                </template>
              </van-grid-item>
              <van-grid-item text="会员订单">
                <template #icon>
                  <span class="iconfont icon-dingdan1"></span>
                </template>
              </van-grid-item>
              <van-grid-item text="约课订单">
                <template #icon>
                  <span class="iconfont icon-dingdan1"></span>
                </template>
              </van-grid-item>
            </van-grid>
          </div>
        </div>

        <div class="menu_box_item">
          <div class="menu_box_item_title">我的账户</div>
          <div class="menu_box_item_contant">
            <van-grid gutter="" icon-size="40px" column-num=4>
              <van-grid-item text="优惠卷">
                <template #icon>
                  <span class="iconfont icon-youhuijuan"></span>
                </template>
              </van-grid-item>
              <van-grid-item text="学习卡">
                <template #icon>
                  <span class="iconfont icon-icon-test"></span>
                </template>
              </van-grid-item>
              <van-grid-item text="会员">
                <template #icon>
                  <span class="iconfont icon-huiyuan"></span>
                </template>
              </van-grid-item>
            </van-grid>
          </div>
        </div>

        <div class="menu_box_item">
          <div class="menu_box_item_title">自助服务</div>
          <div class="menu_box_item_contant">
            <van-grid gutter="" icon-size="40px" column-num=4>
              <van-grid-item text="我的消息">
                <template #icon>
                  <span class="iconfont icon-wodexiaoxi"></span>
                </template>
              </van-grid-item>
              <van-grid-item text="意见反馈">
                <template #icon>
                  <span class="iconfont icon-mail"></span>
                </template>
              </van-grid-item>
              <van-grid-item text="在线客服">
                <template #icon>
                  <span class="iconfont icon-kefu1"></span>
                </template>
              </van-grid-item>
            </van-grid>
          </div>
        </div>
      </div>
      <div class="bottom_b"></div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.user_container {
  background: #fff;
  min-height: 100vh;
  box-sizing: border-box;
}
.person {
  min-height: 100vh;
  background: #fff;
  box-sizing: border-box;
}
.top_box {
  height: 5.8rem;
  height: 58vw;
  background-size: 100%;
  background-color: #fff;
  position: relative;
  padding: 0 0.4rem;
  padding: 0 4vw;
  background-color: #fc5500;
  border-radius: 0rem 0rem 2.6rem 2.6rem;
}
.tab {
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 9.2rem;
  width: 92vw;
  background-color: #fff;
  box-shadow: 0 0 0.32rem 0 rgba(0, 0, 0, 0.05);
  box-shadow: 0 0 3.2vw 0 rgba(0, 0, 0, 0.05);
  border-radius: 0.13333rem;
  border-radius: 1.33333vw;
  height: 4.6rem;
  height: 46vw;
}
.info {
  overflow: hidden;
}
.info .login {
  overflow: hidden;
  width: 100%;
  margin: 4vw 0 0 4vw;
  position: relative;
  display: flex;
  justify-content: flex-start;
  align-items: center;
}
.extra {
  display: flex;
  justify-content: flex-start;
  align-items: center;
}
.avatar {
  margin: 0 3.33333vw 0 0;
  position: relative;
  width: 16.53333vw;
  height: 16.53333vw;
  background-color: #bdcdf1;
  border-radius: 50%;
}
.avatar img {
  width: 15.73333vw;
  height: 15.73333vw;
  border-radius: 50%;
}
.name {
  font-size: 4.26667vw;
  color: #333;
}
.mine {
  display: flex;
  justify-content: space-between;
  width: 100%;
}
.mine_item {
  width: 33%;
  margin-top: 4vw;
  text-align: center;
  position: relative;
}
.mine_item_count {
  color: #eb6100;
  margin: 0px;
}
.mine_item_name {
  font-size: 3.73333vw;
  color: #595959;
  margin-bottom: 1.6vw;
  margin: 0px;
}
.mine_item_note {
  font-size: 2.93333vw;
  color: #b7b7b7;
  margin: 0px;
}
.to_set {
  border-bottom-left-radius: 2.66667vw;
  background-color: #eb6100;
  text-align: center;
  vertical-align: middle;
  height: 6.66667vw;
  line-height: 50%;
  width: 14.8vw;
  top: 8.8vw;
  right: 0;
  position: absolute;
}
.to_set span {
  font-size: 3.2vw;
  vertical-align: middle;
  font-family: PingFang SC;
  font-weight: 400;
  color: #fff;
  line-height: 6.66667vw;
  height: 6.66667vw;
  display: inline-block;
}
.to_share {
  width: 100%;
  padding: 4vw 4vw 0;
  background-color: #fff;
  box-sizing: border-box;
}
.to_share .to_share_box {
  position: relative;
  display: flex;
  justify-content: flex-start;
  padding: 0rem 0.1rem;
  box-sizing: border-box;
  align-items: center;
  width: 100%;
  height: 11.73333vw;
  background: linear-gradient(-90deg, #f2995a, #eb6100);
  border-radius: 5.86667vw;
  color: #fff;
}
.to_share .to_share_box .to_share_size p {
  font-size: 0.24rem;
  margin: 0rem;
}
.to_share_size {
  margin: 0rem 0.1rem;
}
.arrow {
  margin-left: 1.9rem;
}
.menu_box {
  width: 100%;
  padding: 0 .4rem;
  background-color: #fff;
  box-sizing: border-box;

}
.menu_box_item_title {
  font-size: 0.32rem;
  margin: 0rem;
}
.menu_box_item{
    padding: .13333rem 0;
    margin: 0rem;
    border-bottom: 1px solid #eee;
}
.menu_box_item_contant .iconfont{
    color: #FFAF00;
}
.bottom_b{
    height: 2rem;
    background-color: #fff;
}
</style>