<template>
  <div class="normal-tab">
    <a v-for="item in tabData" :key="item.id" class="tab" :class="{ 'sel': curtab && item.id == curtab.id }" @click="handleClick(item)">{{ item.name }}</a>
  </div>
</template>
<script>
export default {
  props: {
    tabData: {
      type: Array,
      default: () => []
    },
    value: {
      type: Object,
      default: () => null
    }
  },
  data() {
    return {
      curtab: null
    }
  },
  mounted() {
    this.curtab = this.value
  },
  watch: {
    value: {
      handler(n, o) {
        this.curtab = n
      },
      deep: true
    }
  },
  methods: {
    handleClick(item) {
      this.curtab = item
      this.$emit('input', item)
      this.$emit('eventChange')
    }
  }
}
</script>
<style lang="scss" scoped>
.normal-tab{
  display: inline-block;
  border-bottom: solid 1px #4DFFFF;
  width: auto;
  padding: 0 0 0px 0;
  white-space: nowrap;
  .tab{
    height: 20px;
    display: inline-block;
    cursor: pointer;
    font-size: 12px;
    border-bottom: solid 2px transparent;
    padding: 1px 6px;
    font-family: '微软雅黑';
    font-weight: bold;
    color: #fff;
    &.sel{
      border-bottom: solid 2px #4DFFFF;
      color: #4DFFFF;
      background: linear-gradient(rgba(77, 255, 255, 0), rgba(77, 255, 255, 0.4));
    }
    &:hover{
      border-bottom: solid 2px #4DFFFF;
      color: #4DFFFF;
    }
  }
}
@media screen and (min-width: 2560px) {
  .normal-tab{
    .tab{
      font-size: 14px;
      padding: 5px 10px;
      height: 20px;
    }
  }
}
@media screen and (min-width: 3840px) {
  .normal-tab{
    .tab{
      font-size: 16px;
      padding: 8px 15px;
      height: 20px;
    }
  }
}
</style>
