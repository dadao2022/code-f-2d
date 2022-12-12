<template>
  <div class="app-container">
    <div class="left-container animated" :class="{'fadeOutLeft': !showPanel, 'fadeInLeft': showPanel}">
      <md-sale></md-sale>
    </div>

    <div class="right-container animated" :class="{'fadeOutRight': !showPanel, 'fadeInRight': showPanel}">
      <md-rank></md-rank>
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
import MdSale from './components/sale.vue'
import MdRank from './components/rank.vue'
export default {
  components: {
    MdSale,
    MdRank
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
