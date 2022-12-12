<template>
  <div class="video-con">
    
    <div class="video-pics">
      <div class="img i1">
        <span>一组大门</span>
      </div>
      <div class="img i2">
        <span>二组大门</span>
      </div>
      <div class="img i3">
        <span>三组大门</span>
      </div>
      <div class="img i4">
        <span>四组大门</span>
      </div>
      <div class="img i5">
        <span>五组大门</span>
      </div>
      <div class="img i6">
        <span>大门内部</span>
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
.video-con{
  padding: 0 7px;
  .sel-con{
    text-align: right;
  }

  .video-pics{
    display: flex;
    flex-wrap: wrap;
    margin: 10px 0 0 0;
    .img{
      width: 243px;height: 130px;
      background: url('@/assets/images/dd/i1.png');
      span{
        color: #77C5FE;font-size: 18px;font-weight: bold;
        display: inline-block;
        padding: 10px 0 0 10px;
        text-shadow: 2px 2px 2px #000;
      }
      &.i2{
        background: url('@/assets/images/dd/i2.png');
      }
      &.i3{
        background: url('@/assets/images/dd/i3.png');
      }
      &.i4{
        background: url('@/assets/images/dd/i4.png');
      }
      &.i5{
        background: url('@/assets/images/dd/i5.png');
      }
      &.i6{
        background: url('@/assets/images/dd/i6.png');
      }
    }
    

  }
}
</style>
