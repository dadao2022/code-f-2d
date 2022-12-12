<template>
  <div class="app-container">
    
    <div class="left-container animated">
      <sq-card height="100%" :title="'任务流程'">

        <dd-task></dd-task>
        <dd-equip></dd-equip>
        <dd-repqire></dd-repqire>
        
      </sq-card>
    </div>

    <div class="right-container animated">
      <sq-card height="100%" :title="'视频监控'">
        <dd-video></dd-video>
        <dd-yuan></dd-yuan>
        <dd-alert></dd-alert>
      </sq-card>
    </div>

  </div>
</template>
<script>
import SqCard from "@/components/Card/index.vue";
import DdTask from './coms/task'
import DdEquip from './coms/equip'
import DdRepqire from './coms/repaire'

import DdVideo from './coms/videos'
import DdYuan from './coms/yuan'
import DdAlert from './coms/alert'

export default {
  components: {
    SqCard,
    DdTask,
    DdEquip,
    DdRepqire,
    DdVideo,
    DdYuan,
    DdAlert
  }
}
</script>
<style lang="scss" scoped>
.rg-txt{
  display: inline-block;
  margin: 5px 30px 0 0;
}
</style>

