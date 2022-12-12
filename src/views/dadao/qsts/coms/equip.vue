<template>
  <div class="pad30 alert-con">
    <sq-sub-title class="title" :title="'设备情况'"></sq-sub-title>
    
    <div class="m2bg">
      <div class="lt">
        <span class="v1">33</span>
        <span class="v2">100</span>
        <span class="v1" style="margin-left:154px">33</span>
        <span class="v2">100</span>
      </div>
      <div class="lt" style="margin-top: 23px;">
        <span class="v1">33</span>
        <span class="v2">100</span>
        <span class="v1" style="margin-left:154px">33</span>
        <span class="v2">100</span>
      </div>
      <div class="lt" style="margin-top: 19px;">
        <span class="v1">33</span>
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
  .m2bg{
    margin: 10px 0 0 0;
    background: url('@/assets/images/dd/m2bg.png');
    width: 461px;height: 201px;
  }
  .lt{
    display: flex;
    align-items: center;height: 55px;
    padding: 0 0 0 115px;
    .v1{font-size: 26px;color: #f00;font-family: 'Agency FB';width: 50px;text-align: right;}
    .v2{font-size: 26px;color: #fff;font-family: 'Agency FB';width: 30px;text-align: left;margin-left: 10px;}
  }
}
</style>
