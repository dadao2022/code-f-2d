<template>
  <div class="app-container">
    
    <div class="left-container animated">
      <sq-card height="100%" :title="'发射任务'" :showHeader="false">
        <dd-task></dd-task>
        <dd-flow></dd-flow>
        
      </sq-card>
    </div>

    <div class="right-container animated">
      <sq-card height="100%" :title="'方案推演回放'">
        <dd-fangan></dd-fangan>
        <dd-tuiyan></dd-tuiyan>
        <dd-gongxu></dd-gongxu>

      </sq-card>
    </div>

  </div>
</template>
<script>
import SqCard from "@/components/Card/index.vue";

import DdTask from './coms/task'
import DdFlow from './coms/flow'
import DdFangan from './coms/fangan'
import DdTuiyan from './coms/tuiyan'
import DdGongxu from './coms/gongxu'

export default {
  components: {
    SqCard,
    DdTask,
    DdFlow,
    DdFangan,
    DdTuiyan,
    DdGongxu
  }
}
</script>
<style lang="scss" scoped>
.rg-txt{
  display: inline-block;
  margin: 5px 30px 0 0;
}
</style>

