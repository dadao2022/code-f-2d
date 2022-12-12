<template>
  <div class="video-con">
    <sq-sub-title class="title" :title="'报警情况'"></sq-sub-title>
    
    <div class="lists">
      <div class="md">
        <span class="time">2022/02/08</span>
        <span class="desc">大门电机停止运行</span>
        <span class="loc">1号门</span>
      </div>
      <div class="md">
        <span class="time">2022/02/08</span>
        <span class="desc">大门电机停止运行</span>
        <span class="loc">2号门</span>
      </div>
      <div class="md">
        <span class="time">2022/02/06</span>
        <span class="desc">大门电机停止运行</span>
        <span class="loc">1号门</span>
      </div>
      <div class="md">
        <span class="time">2022/02/04</span>
        <span class="desc">大门脱落</span>
        <span class="loc">1号门</span>
      </div>
      <div class="md">
        <span class="time">2022/01/08</span>
        <span class="desc">大门装置老化</span>
        <span class="loc">1号门</span>
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
    height: 190px;overflow: auto;
    .md{
      height: 36px;background: #0B6397;
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin: 0 0 1px 0;
      font-size: 16px;color: #c4c4c4;
      text-align: center;
      .time{width: 130px;}
      .loc{width: 87px;text-align: left;}
    }
  }
}
</style>
