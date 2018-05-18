<template>
  <div class="bg w-p100 h-p100">
    <div class="top"></div>
    <div class="bg-ticket">
      <image src="/static/images/bg-ticket.png" class=""></image>
      <div class="title">排 队 号 码</div>
      <div class="num1">{{data.num1}}</div>
      <div class="num2 box box-jc">
        <div class="num" v-for="item in data.num2">{{item}}</div>
      </div>
      <div class="wait">{{data.wait}}人</div>
      <div @click="refresh()" class="refresh">刷新</div>
    </div>

  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  data () {
    return {
    }
  },
  computed: mapState(['data']),
  mounted () {
  },
  methods: {
    refresh () {
      this.$store.commit('status', 2)
      wx.setNavigationBarTitle({
        title: '预约取号'
      })
      wx.setNavigationBarColor({
        frontColor: '#ffffff',
        backgroundColor: '#3f1871',
        animation: {
          duration: 400,
          timingFunc: 'easeIn'
        }
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.bg{
  position: absolute;
  z-index:2;
  background-color:#3f1871;
}
.top{
  width:100%;
  height:770rpx;
  background-color:#03983e;
}
.bg-ticket{
  position: absolute;
  z-index:2;
  top:168rpx;
  left:97rpx;
  width:556rpx;
  height:976rpx;
  image{
    position: absolute;
    width:100%;
    height:100%;
  }
  .title{
    position: absolute;
    font-size:50rpx;
    top:70rpx;
    left:166rpx;
    color:#000;
  }
  .num1{
    position: absolute;
    top:175rpx;
    width:100%;
    text-align:center;
    font-size:60rpx;
    font-weight:800;
    color:#03983e;
  }
  .num2{
    position: absolute;
    top:446rpx;
    padding-left:93rpx;
    font-size:38rpx;
    font-weight:800;
    color:#03983e;
    .num{
      width:40rpx;
      height:60rpx;
      text-align:center;
      line-height: 60rpx;
      background-color:#03983e;
      color:#FFF;
      margin:0 8rpx;
    }
  }
  .wait{
    width:84rpx;
    height:40rpx;
    line-height:40rpx;
    font-weight:800;
    position: absolute;
    font-size:40rpx;
    left:284rpx;
    top:586rpx;
    color:#03983e;
  }
  .refresh{
    position: absolute;
    font-size:24rpx;
    right:82rpx;
    top:586rpx;
    width:72rpx;
    height:40rpx;
    text-align:center;
    line-height: 40rpx;
    background-color:#03983e;
    border-bottom:5px solid #065e29;
    color:#FFF;
  }
}
</style>
