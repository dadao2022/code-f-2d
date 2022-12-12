<template>
  <div class="app-container">
    
    <div class="left-container animated">
      <sq-card height="100%" :title="'厂房状况'">
        <template slot="right">
          <span class="rg-txt">A厂房</span>
        </template>

        <dd-title></dd-title>

        <dd-per></dd-per>

        <dd-alert></dd-alert>
      </sq-card>
    </div>

    <div class="right-container animated">
      <sq-card height="100%" :title="'视频监控'">
        <dd-video></dd-video>
        <dd-equip></dd-equip>
        <dd-gas></dd-gas>
      </sq-card>
    </div>

  </div>
</template>
<script>
import SqCard from "@/components/Card/index.vue";
import DdTitle from './coms/titles'
import DdPer from './coms/person'
import DdAlert from './coms/alert'

import DdVideo from './coms/videos'
import DdEquip from './coms/equip'
import DdGas from './coms/gas'
export default {
  components: {
    SqCard,
    DdTitle,
    DdPer,
    DdAlert,
    DdVideo,
    DdEquip,
    DdGas
  }
}
</script>
<style lang="scss" scoped>
.rg-txt{
  display: inline-block;
  margin: 5px 30px 0 0;
}
</style>

