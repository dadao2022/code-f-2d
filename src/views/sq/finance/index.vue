<template>
  <div class="app-container">
    <div class="left-container animated" :class="{'fadeOutLeft': !showPanel, 'fadeInLeft': showPanel}">
      <md-data></md-data>
    </div>

    <div class="right-container animated" :class="{'fadeOutRight': !showPanel, 'fadeInRight': showPanel}">
      <md-real></md-real>

      <md-board></md-board>
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
import MdData from './components/data.vue'
import MdReal from './components/real.vue'
import MdBoard from './components/board.vue'
export default {
  components: {
    MdData,
    MdReal,
    MdBoard
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
