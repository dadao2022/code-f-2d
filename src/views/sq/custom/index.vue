<template>
  <div class="app-container">
    <div class="left-container animated" :class="{'fadeOutLeft': !showPanel, 'fadeInLeft': showPanel}">
      <md-customer></md-customer>
    </div>

    <div class="right-container">
      
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
import MdCustomer from './components/customer.vue'
export default {
  components: {
    MdCustomer
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
