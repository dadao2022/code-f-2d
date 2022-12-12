<template>
  <div class="list-sim-card">
    <div class="md">
      <sq-icon-text :data="cd1" class="lc">
      </sq-icon-text>
    </div>
    <div class="md">
      <sq-icon-text :data="cd2" class="lc">
      </sq-icon-text>
    </div>
    <div class="md">
      <sq-icon-text :data="cd3" class="lc">
      </sq-icon-text>
    </div>
    <div class="md">
      <sq-icon-text :data="cd4" class="lc">
      </sq-icon-text>
    </div>
  </div>
</template>
<script>
import SqIconText from '@/components/icon-text/index.vue'
export default {
  components: {
    SqIconText
  },
  data() {
    return {
      cd1: { title: '生产产值', dw: '亿元', val: 103 },
      cd2: { title: '人均产值', dw: '亿元', val: 60 },
      cd3: { title: '营业收入', dw: '亿元', val: 60 },
      cd4: { title: '实时交易额', dw: '亿元', val: 60 },
    }
  }
}
</script>
<style lang="scss" scoped>
.list-sim-card{
  height: auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  .md{
    width: 49%;height: 45px;margin-bottom: 8px;;
  }
}
</style>
