<template>
  <div class="video-con">
    <sq-sub-title class="title" :title="'发射任务'"></sq-sub-title>
    
    <div class="lists">
      <div class="md">
        <span class="title">计划发射时间</span>
        <span class="value">2022年12月25日09：00：00</span>
      </div>
      <div class="md">
        <span class="title">计划总装完成时间</span>
        <span class="value">2022年12月25日09：00：00</span>
      </div>
      <div class="md">
        <span class="title">任务代号</span>
        <span class="value">CZ-5圆梦之旅</span>
      </div>
      <div class="md">
        <span class="title">航天器型号</span>
        <span class="value">CZ-5遥6</span>
      </div>
      <div class="md">
        <span class="title">火箭型号</span>
        <span class="value">CZ-5</span>
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

  .lists{
    .md{
      
    }
  }
}
</style>
