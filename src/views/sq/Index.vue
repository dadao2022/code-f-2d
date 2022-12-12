<template>
  <div class="home-class">
    <i
      class="close-open"
      :class="showBol ? 'el-icon-s-fold' : 'el-icon-s-unfold'"
      @click="showBol = !showBol"
    ></i>
    <transition name="el-zoom-in-top">
      <div
        class="home-public-class home-left-class"
        :style="{
          height: 100 - headerHeight - 2 + '%',
          top: headerHeight - 1 + '%',
        }"
        v-show="showBol"
      >
        <Card height="30%" title="财务"></Card>
        <Card height="67%" title="销售与客户体验" style="margin-top: 3%"></Card>
      </div>
    </transition>

    <transition name="el-zoom-in-top">
      <div
        class="home-public-class home-right-class"
        :style="{
          height: 100 - headerHeight - 2 + '%',
          top: headerHeight - 1 + '%',
        }"
        v-show="showBol"
      >
        <Card height="20%" title="客户管理"></Card>
        <Card height="47%" title="生产管理" style="margin-top: 3%"></Card>
        <Card height="28%" title="质量及安全" style="margin-top: 3%"></Card>
      </div>
    </transition>
  </div>
</template>

<script>
import Card from "@/components/techStyle/public/Card.vue";
export default {
  props: {
    headerHeight: {
      type: Number,
      default: 8,
    },
  },
  components: {
    Card,
  },
  data() {
    return {
      showBol: true,
    };
  },
};
</script>

<style lang="scss" scoped>
.home-class {
  width: 100%;
  height: 100%;
  .home-public-class {
    width: 25%;
    position: absolute;
  }
  .home-left-class {
    left: 1%;
  }
  .home-right-class {
    right: 1%;
  }
  .close-open {
    position: absolute;
    top: 4%;
    left: 1%;
    font-size: 36px;
    color: #0087d8;
    cursor: pointer;
    z-index: 500;
  }
  @media screen and (max-width: 2560px) {
    .close-open {
      font-size: 30px;
    }
  }
  @media screen and (max-width: 1920px) {
    .close-open {
      font-size: 24px;
    }
  }
}
</style>
