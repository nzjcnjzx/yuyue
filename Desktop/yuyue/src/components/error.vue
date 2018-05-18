<template>
  <div class="bg w-p100 h-p100 box box-ver box-ac">
    <div class="tips">抱歉！您的号码已经过号</div>
    <image @click="handleClick()" class="button" src="/static/images/button2.png"></image>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  data () {
    return {
      data: {
      }
    }
  },
  computed: mapState(['data']),
  mounted () {
  },
  methods: {
    handleClick () {
      this.$store.commit('status', 0)
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
      console.log('刷新')
    }
  }
}
</script>

<style lang="scss" scoped>
.bg{
  position: absolute;
  z-index:2;
  background-color:#FFF;
  .tips{
    color:#3f1871;
    font-size:48rpx;
    width:100%;
    text-align:center;
    padding-top:220rpx;
  }
  .button{
    margin-top:110rpx;
    width:434rpx;
    height:434rpx;
  }
}
</style>
