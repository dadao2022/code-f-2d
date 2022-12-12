<template>
  <div class="left-right-layout">
    <div class="md" :style="{ width: widths[0] }">
      <slot name="left"></slot>
    </div>
    <div class="md" :style="{ width: widths[1] }">
      <slot name="right"></slot>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    widths: {
      type: Array,
      default: () => ['49%', '49%']
    }
  }
}
</script>
<style lang="scss" scoped>
.left-right-layout{
  height: 100%;width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  .md{
    width: 49%;height: 100%;margin-bottom: 8px;
  }
}
</style>
