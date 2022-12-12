<template>
  <div class="app-container">
    <div class="left-container animated" :class="{'fadeOutLeft': !showPanel, 'fadeInLeft': showPanel}">
      <md-finace></md-finace>
      <md-sale></md-sale>
    </div>

    <div class="mid-info-container" :class="{'full': !showPanel}">
      <div class="mid-data">
        <md-com-select></md-com-select>
        <md-com-date style="margin-left: 15px;"></md-com-date>
      </div>
      <div class="info-panel">
        <div class="top"></div>
        <div class="line-text">
          <div class="lf">
            <span class="tl">销售总量</span><br/>
            <span class="dw">单位：万个</span>
          </div>
          <div class="rg">
            930527
          </div>
          <div class="bot-line"></div>
        </div>
        <div class="line-text">
          <div class="lf">
            <span class="tl">销售总量</span><br/>
            <span class="dw">单位：万个</span>
          </div>
          <div class="rg">
            930527
          </div>
          <div class="bot-line"></div>
        </div>
        <div class="line-text">
          <div class="lf">
            <span class="tl">销售总量</span><br/>
            <span class="dw">单位：万个</span>
          </div>
          <div class="rg">
            930527
          </div>
          <div class="bot-line"></div>
        </div>
        <div class="line-text">
          <div class="lf">
            <span class="tl">销售总量</span><br/>
            <span class="dw">单位：万个</span>
          </div>
          <div class="rg">
            930527
          </div>
          <div class="bot-line"></div>
        </div>
      </div>

      <md-slider-bar class="bot-slider"></md-slider-bar>

      <md-bottom-button>
      </md-bottom-button>
      
      <md-bot-tuli></md-bot-tuli>
    </div>

    <div class="right-container animated" :class="{'fadeOutRight': !showPanel, 'fadeInRight': showPanel}">
      <md-customer></md-customer>
      <md-produce></md-produce>
      <md-safe></md-safe>
    </div>

    <div class="bottom-container">
      <i v-if="showPanel" class="close-icon-folder el-icon-s-fold" @click="showPanel = !showPanel"></i>
      <i v-else class="close-icon-folder el-icon-s-unfold" @click="showPanel = !showPanel"></i>
    </div>
  </div>
</template>
<script>
import MdFinace from './components/finance.vue'
import MdSale from './components/sale.vue'
import MdCustomer from './components/customer.vue'
import MdProduce from './components/produce.vue'
import MdSafe from './components/safe.vue'
import MdComSelect from '@/components/com-select/index.vue'
import MdComDate from '@/components/com-date/index.vue'

import MdSliderBar from './components/left-slide-bar.vue'
import MdBottomButton from './components/bot-cir-button.vue'
import MdBotTuli from './components/bot-tuli.vue'
export default {
  components: {
    MdFinace,
    MdSale,MdCustomer,MdProduce,MdSafe,
    MdComSelect,
    MdComDate,
    MdSliderBar,
    MdBottomButton,
    MdBotTuli
  },
  data() {
    return {
      showPanel: true
    }
  }
}
</script>
<style lang="scss" scoped>
.mid-data{
  display: flex;
  position: relative;
  z-index: 9;
}
.bot-slider{
  position: absolute;
  bottom: 100px;
  z-index: 9;
}
.info-panel{
  margin: 20px 0 0 0;
  width: 160px;
  height: auto;
  padding: 10px;
  border-radius: 10px;
  background: #020911E6;
  box-shadow: 0 0 10px #4DD2FF;
  position: relative;
  z-index: 9;
  .top{
    position: absolute;left: 0;top: 0;height: 35px;width: 100%;
    background: linear-gradient(to bottom, #009dff34, #009dff00);
  }
}
.line-text{
  display: flex;padding: 0 0 5px 0;
  justify-content: space-between;
  align-items: center;position: relative;
  margin: 5px 0;
  .tl{
    font-size: 16px;color: #BFDFFF;font-family: 'HK';
  }
  .dw{
    font-size: 14px;color: #77C5FE;
  }
  .rg{
    font-size: 30px;font-family: 'Agency FB';color: #4AFDE7;
  }
  .bot-line{
    width: 96%;height: 1px;left: 2%;position: absolute;bottom: 1px;
    background: linear-gradient(to right, #000 -4%,#1FA2EF 50%,#000 100%);
  }
}
</style>
