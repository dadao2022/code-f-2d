<template>
  <div class="app-container">
    <div class="left-container animated" :class="{'fadeOutLeft': !showPanel, 'fadeInLeft': showPanel}">
      <md-equip></md-equip>

      <md-plan></md-plan>
    </div>

    <div class="right-container animated" :class="{'fadeOutRight': !showPanel, 'fadeInRight': showPanel}">
      <md-status></md-status>
      <div class="rg-tree">
        <sq-tree></sq-tree>
      </div>
    </div>
    
    <div class="bottom-container">
      <i v-if="showPanel" class="close-icon-folder el-icon-s-fold" @click="showPanel = !showPanel"></i>
      <i v-else class="close-icon-folder el-icon-s-unfold" @click="showPanel = !showPanel"></i>
    </div>

    <div class="left-bg" v-if="showPanel"></div>
    <div class="right-bg" v-if="showPanel"></div>
  </div>
</template>
<script>
import MdEquip from './components/equip.vue'
import MdPlan from './components/plan.vue'
import MdStatus from './components/status.vue'
import SqTree from '@/components/tree-list/index.vue'
export default {
  components: {
    MdEquip,
    MdPlan,
    MdStatus,
    SqTree
  },
  data() {
    return {
      showPanel: true
    }
  }
}
</script>
<style lang="scss" scoped>
.rg-tree{
  width: 250px;
  margin: 4% 11px 0 0;
  float: right;
}
</style>
