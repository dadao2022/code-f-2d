<template>
  <div class="app-container">
    <div class="welcome" v-if="showPanel">
      <img src="@/assets/images/public/visitor/title.png" />
    </div>
    <div class="left-con animated" :class="{'fadeOutLeft': !showPanel, 'fadeInLeft': showPanel}">
      <sq-card height="100%" :title="'三奇集团简介'">
        <div class="con-container card-body">
          <sq-sub-title :title="'匠心品质'" :simple="true"></sq-sub-title>
          <div class="m1">
            <v-hor-mul-layout :hasHead="false">
              <template slot="mod-0">
                <sq-circle-text></sq-circle-text>
              </template>
              <template slot="mod-1">
                <sq-circle-text></sq-circle-text>
              </template>
              <template slot="mod-2">
                <sq-circle-text></sq-circle-text>
              </template>
            </v-hor-mul-layout>
          </div>
          <sq-sub-title :title="'专业制造'" :simple="true"></sq-sub-title>
          <div class="m2">
            <img src="@/assets/images/public/visitor/intro.png" />
          </div>
          <sq-sub-title :title="'荣誉奖项'" :simple="true"></sq-sub-title>
          <div class="m1">
            <v-hor-mul-layout :hasHead="false">
              <template slot="mod-0">
                <sq-circle-text></sq-circle-text>
              </template>
              <template slot="mod-1">
                <sq-circle-text></sq-circle-text>
              </template>
              <template slot="mod-2">
                <sq-circle-text></sq-circle-text>
              </template>
            </v-hor-mul-layout>
            <div class="intro-txt">120项专利技术和产品，42项国家、省、市级荣誉，17个类别239个单品注册资质</div>
          </div>
          <div class="m3">
            <sq-sub-title :title="'主要产品'" :simple="true"></sq-sub-title>
            <div class="cir-button"><span>医疗器械</span></div>
            <div class="cir-button"><span>健康护理</span></div>
            <div class="cir-button"><span>医用卫生</span></div><br/>
            <div class="cir-button"><span>清洁卫生</span></div>
            <div class="cir-button"><span>日常民用</span></div>
            <div class="cir-button"><span>特种劳保</span></div>
            <div class="cir-button"><span>工业防护</span></div>
          </div>
        </div>
      </sq-card>
    </div>
    <div class="right-con animated" :class="{'fadeOutRight': !showPanel, 'fadeInRight': showPanel}">
      <sq-card height="100%" :title="'园区简介'">
        <div class="con-container card-body">
          <sq-sub-title :title="'园区简介'" :simple="true"></sq-sub-title>
          <div class="intro-icon-text">
            <div class="tl">
              三奇国家级医疗器械（防护用品）
            </div>
            <div class="con">应急产业园区建设始于2020年3月，占地面积450亩，建筑工程21座，建筑面积28.7平方米。为高端医疗器械（防护物资）集成产业园区，也是山东省5G物联示范项目基地及AAAA级工业旅游项目</div>
          </div>
          <sq-sub-title :title="'园区概况'" :simple="true"></sq-sub-title>
          <div class="m1">
            <sq-icon-text class="sit" :data="cd1"></sq-icon-text>
            <sq-icon-text class="sit" :data="cd2">
              <template slot="image">
                <img src="@/assets/images/icons/money.png" />
              </template>
            </sq-icon-text>
            <sq-icon-text class="sit" :data="cd3">
              <template slot="image">
                <img src="@/assets/images/icons/peos.png" />
              </template>
            </sq-icon-text>
            <sq-icon-text class="sit" :data="cd4">
              <template slot="image">
                <img src="@/assets/images/icons/money.png" />
              </template>
            </sq-icon-text>
            <sq-icon-text class="sit" :data="cd5">
              <template slot="image">
                <img src="@/assets/images/icons/i3.png" />
              </template>
            </sq-icon-text>
            <sq-icon-text class="sit" :data="cd6">
              <template slot="image">
                <img src="@/assets/images/icons/crash.png" />
              </template>
            </sq-icon-text>
            <sq-icon-text class="sit" :data="cd7">
              <template slot="image">
                <img src="@/assets/images/icons/tan.png" />
              </template>
            </sq-icon-text>
            <sq-icon-text class="sit" :data="cd8">
              <template slot="image">
                <img src="@/assets/images/icons/tan.png" />
              </template>
            </sq-icon-text>
          </div>
        </div>
      </sq-card>
    </div>

    <div class="bottom-container">
      <i v-if="showPanel" class="close-icon-folder el-icon-s-fold" @click="showPanel = !showPanel"></i>
      <i v-else class="close-icon-folder el-icon-s-unfold" @click="showPanel = !showPanel"></i>
    </div>

  </div>
</template>
<script>
import SqHeader from '@/components/Header/index.vue'
import SqCard from "@/components/Card/index.vue";
import SqSubTitle from '@/components/sub-title/index.vue'
import SqCircleText from '@/components/circle-text/index.vue'
import SqIconText from '@/components/icon-text/index.vue'


import VHorMulLayout from '@/views/components/hor-mul-layout.vue'
export default {
  components: {
    SqHeader,
    SqCard,
    SqSubTitle,
    SqCircleText,
    VHorMulLayout,
    SqIconText
  },
  data() {
    return {
      cd1: { title: '累计销量', dw: '个', val: '1,128,995' },
      cd2: { title: '累计缴纳税款', dw: '万元', val: '38,906' },
      cd3: { title: '累计参观人数', dw: '个', val: '128,995' },
      cd4: { title: '年产值', dw: '人', val: '512,545' },
      cd5: { title: '年产量', dw: '个', val: '1,265,614' },
      cd6: { title: '人均产值', dw: '元', val: '128,995' },
      cd7: { title: '碳排放', dw: '吨', val: '5,623' },
      cd8: { title: '碳减排', dw: '吨', val: '23,2114' },

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
.welcome{
  position: absolute;top: 100px;
  left: 0;width: 100%;text-align: center;
  z-index: 9;
  img{
    width: 50%;
  }
}
.left-con{
  position: absolute;top: 230px;
  left: 20px;width: 500px;
  height: calc(100% - 280px);
  z-index: 9;
  .m1{
    height: 10%;margin: 10px 0 0 0;
    text-align: center;
  }
  .m2{
    margin: 10px 0 0 0;
    text-align: center;
    img{
      width: 90%;
    }
  }
  .m3{
    margin: 80px 0 0 0;
    text-align: center;
  }
  .intro-txt{
    display: inline-block;font-size: 16px;color: #BFDFFF;
    border: solid 1px #00BFFF;border-top: none;width: 62%;
    padding: 0 20px 10px 20px;
  }
}
.right-con{
  position: absolute;top: 230px;
  right: 20px;width: 500px;
  height: calc(100% - 280px);
  z-index: 9;
  .m1{
    height: 430px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 0 20px;
    margin: 10px 0 0 0;
    .sit{
      margin: 8px 0;
    }
  }
}

.cir-button{
  background: url("@/assets/images/public/visitor/cirbtn.png") no-repeat 0 0;
  background-size: 100% 100%;
  display: inline-block;
  cursor: pointer;
  width: 100px;height: 100px;
  line-height: 100px;
  span{
    font-weight: bold;
    background-image: linear-gradient(to bottom, #FFFFFF, #8FFFFF);
    -webkit-background-clip: text;
    color: transparent;
    font-size: 16px;display: inline-block;
    width: 40%;line-height: 25px;padding-top: 25px;
  }
}

.intro-icon-text{
  width: 90%;height: 120px;
  background: url('@/assets/images/public/text/txt_bg.png') center center;
  background-size: 100% 100%;
  position: relative;
  border-top: solid 1px #1653B8;
  border-bottom: solid 1px #1653B8;
  margin: 10px 0 10px 5%;padding: 10px 0;
  .tl{
    color: #FFDC72;font-size: 20px;font-family: 'HY';
    text-shadow: 2px 2px 10px #000000;margin: 10px 0;
    padding: 0 10px;
  }
  .con{
    color: #BFDFFF;font-size: 16px;font-family: 'HY';
    text-shadow: 2px 2px 10px #000000;line-height: 21px;padding: 0 10px;
  }
}
</style>