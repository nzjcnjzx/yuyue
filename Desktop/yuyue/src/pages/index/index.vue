<template>
  <div class="box box-ver w-p100 h-p100">
    <div class="box box-ver box-ac w-p100 h-p100">
      <image class="num" src="/static/images/num1.png"></image>
      <image @click="reservation()" class="button" src="/static/images/button.png"></image>
    </div>
    <success v-if="status === 1"></success>
    <error v-if="status === 2"></error>
  </div>
</template>

<script>
import success from '@/components/success'
import error from '@/components/error'
import { mapState } from 'vuex'
import request from '../../utils/request.js'
export default {
  data () {
    return {
      userInfo: {}
    }
  },
  computed: mapState(['data', 'status']),
  components: {
    success,
    error
  },

  methods: {
    getUserInfo () {
      // 调用登录接口
      wx.login({
        success: () => {
          wx.getUserInfo({
            success: (res) => {
              this.userInfo = res.userInfo
            }
          })
        }
      })
    },
    reservation () {
      this.$store.commit('status', 1)
      wx.setNavigationBarTitle({
        title: '预约成功'
      })
      wx.setNavigationBarColor({
        frontColor: '#ffffff',
        backgroundColor: '#03983e',
        animation: {
          duration: 400,
          timingFunc: 'easeIn'
        }
      })
    }
  },
  created () {
    // 调用应用实例的方法获取全局数据
    this.getUserInfo()
    request.get('https://easy-mock.com/mock/5a3b08b9ab7fde5ac9937af3/zx/message/5').then(res => {
      console.log(res.data)
      this.$store.commit('data', res.data[0])
      // this.$store.state.data.wait = res.data[0].id
    })
    request.post('https://easy-mock.com/mock/5a3b08b9ab7fde5ac9937af3/zx/testPost').then(res => {
      console.log(res)
    })
  }
}
</script>

<style scoped>
.num{
  margin-top:160rpx;
  width:513rpx;
  height:124rpx;
}
.button{
  margin-top:127rpx;
  width:430rpx;
  height:430rpx;
}
</style>
