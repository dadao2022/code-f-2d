<template>
  <div class="pad30 video-con">
    <sq-sub-title class="title" :title="'应急预案'"></sq-sub-title>
    <div class="sel-con">
      <div class="dd-select shadow">
        <select class="dd-select">
          <option>火工品爆炸应急处置预案</option>
        </select>
      </div>
    </div>
    
    <div class="txts">
        1. 事故类型和危害程度分析

       1.1火工品是指工程建设中使用的各类炸药、击管、导火索、导爆索、非电导爆系统、起爆药、爆破剂等爆破器材和公

        1.2火工品爆炸事故发生突然，通常都会造成人员伤亡、设施被毁、影响工程施工和周边

        2.应急处置基本原则
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
  margin: 10px 0 0 0;
  .sel-con{
    margin: 10px 0 0 0;
    text-align: left;
  }
  .txts{
    height: 190px;overflow: auto;
    color: #fff;font-size: 16px;
    margin: 10px 0 0 0;line-height: 30px;white-space: pre-wrap;
  }
}
</style>
