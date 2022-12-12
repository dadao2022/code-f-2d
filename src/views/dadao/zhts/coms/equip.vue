<template>
  <div class="pad30 alert-con">
    <sq-sub-title class="title" :title="'监控设备'"></sq-sub-title>
    
    <div class="m1bg">
      <div class="lt">
        <span class="v1">33</span>
        <span class="v2">100</span>
        <span class="v1" style="margin-left:113px">33</span>
        <span class="v2">100</span>
      </div>
      <div class="lt" style="margin-top: 11px;">
        <span class="v1">33</span>
        <span class="v2">100</span>
        <span class="v1" style="margin-left:113px">33</span>
        <span class="v2">100</span>
      </div>
      <div class="lt" style="margin-top: 14px;">
        <span class="v1">33</span>
        <span class="v2">100</span>
        <span class="v1" style="margin-left:113px">33</span>
        <span class="v2">100</span>
      </div>
    </div>
  </div>
</template>
<script>
import SqSubTitle from '@/components/sub-title/index.vue'
export default {
  components: {
    SqSubTitle
  },
  data() {
    return {
      datas: [
      ]
    }
  }
}
</script>
<style lang="scss" scoped>
.alert-con{
  margin: 20px 0 0 0;
  .m1bg{
    margin: 10px 0 0 0;
    background: url('@/assets/images/dd/m1bg.png');
    width: 459px;height: 190px;
  }
  .lt{
    display: flex;
    align-items: center;height: 55px;
    padding: 0 0 0 126px;
    .v1{font-size: 26px;color: #f00;font-family: 'Agency FB';width: 50px;text-align: right;}
    .v2{font-size: 26px;color: #fff;font-family: 'Agency FB';width: 50px;text-align: left;margin-left: 10px;}
  }
}
</style>
