<template>
  <div class="app-container">
    <div class="left-container animated" :class="{'fadeOutLeft': !showPanel, 'fadeInLeft': showPanel}">
      <md-alert></md-alert>

      <md-inventory></md-inventory>
    </div>

    <div class="right-container animated" :class="{'fadeOutRight': !showPanel, 'fadeInRight': showPanel}">
      <md-purchase></md-purchase>

      <md-logistics></md-logistics>
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
import MdInventory from './components/inventory.vue'
import MdPurchase from './components/purchase.vue'
import MdLogistics from './components/logistics.vue'
export default {
  components: {
    MdAlert,
    MdInventory,
    MdPurchase,
    MdLogistics
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
