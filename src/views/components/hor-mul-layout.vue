<template>
  <div class="hor-mul-layout">
    <div class="mul-head" v-if="hasHead">
      <slot name="m-top"></slot>
    </div>
    <div class="list-mul-card" :style="{ height: hasHead ? 'calc(100% - 40px)' : 'calc(100% - 15px)' }">
      <div class="md" v-for="item,inx in widths" :key="inx" :style="{width: item}">
        <slot :name="`mod-` + inx"></slot>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    hasHead: {
      type: Boolean,
      default: true
    },
    widths: {
      type: Array,
      default: () => ['31%', '31%', '31%']
    }
  }
}
</script>
<style lang="scss" scoped>
.hor-mul-layout{
  height: 100%;width: 100%;
  
  .list-mul-card{
    display: flex;height: calc(100% - 40px);
    flex-wrap: wrap;
    justify-content: space-between;
    .md{
      height: 100%;
    }
  }
}
</style>
