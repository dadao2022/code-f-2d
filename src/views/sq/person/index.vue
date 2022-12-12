<template>
  <div class="app-container">
    <div class="left-container animated" :class="{'fadeOutLeft': !showPanel, 'fadeInLeft': showPanel}">
      <md-visitor></md-visitor>

      <md-employee></md-employee>

      <md-check-out></md-check-out>
    </div>

    <div class="bottom-container">
      <i style="top: 5px" v-if="showPanel" class="close-icon-folder el-icon-s-fold" @click="showPanel = !showPanel"></i>
      <i style="top: 5px" v-else class="close-icon-folder el-icon-s-unfold" @click="showPanel = !showPanel"></i>
    </div>

    <div class="left-bg" v-if="showPanel"></div>
    <div class="right-bg" v-if="showPanel"></div>

  </div>
</template>
<script>
import SqTree from '@/components/tree-list/index.vue'
import MdVisitor from './components/visitor.vue'
import MdEmployee from './components/employee.vue'
import MdCheckOut from './components/checkout.vue'
export default {
  components: {
    SqTree,
    MdVisitor,
    MdEmployee,
    MdCheckOut
  },
  data() {
    return {
      showPanel: true
    }
  }
}
</script>
<style lang="scss" scoped>

</style>
