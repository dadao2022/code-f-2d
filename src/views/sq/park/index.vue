<template>
  <div class="app-container">
    <div class="left-container animated" :class="{'fadeOutLeft': !showPanel, 'fadeInLeft': showPanel}">
      <md-alert></md-alert>

      <md-car></md-car>

      <md-monitor></md-monitor>
    </div>

    <div class="right-container animated" :class="{'fadeOutRight': !showPanel, 'fadeInRight': showPanel}" style="width: 250px;">
      <div>
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
import MdAlert from './components/alert.vue'
import MdCar from './components/car.vue'
import MdMonitor from './components/monitor.vue'
import SqTree from '@/components/tree-list/index.vue'
export default {
  components: {
    MdAlert,
    MdCar,
    MdMonitor,
    SqTree
  },
  data() {
    return {
      showPanel: true
    }
  },
  mounted() {
    window.addEventListener('message', (msg) => {
      if (msg.data == 'closePanel') {
        this.showPanel = false  
      }
    })
  }
}
</script>
<style lang="scss" scoped>

</style>
