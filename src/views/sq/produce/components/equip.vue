<template>
  <sq-card height="auto" :title="'设备状态'">
    <div class="card-body pabel-container">
      <div class="md">
        <sq-v-icon-text class="fk" :title="d1.title" :data="d1">
          <template slot="image">
            <div class="lf">
              <img src="@/assets/images/icons/cp.png" />
            </div>
          </template>
        </sq-v-icon-text>
      </div>
      <div class="md">
        <sq-v-icon-text class="fk" :title="d2.title" :data="d2">
          <template slot="image">
            <div class="lf">
              <img src="@/assets/images/icons/cp.png" />
            </div>
          </template>
        </sq-v-icon-text>
      </div>
      <div class="md">
        <sq-v-icon-text class="fk" :title="d3.title" :data="d3">
          <template slot="image">
            <div class="lf">
              <img src="@/assets/images/icons/cp.png" />
            </div>
          </template>
        </sq-v-icon-text>
      </div>
      <div class="md">
        <sq-v-icon-text class="fk" :title="d4.title" :data="d4">
          <template slot="image">
            <div class="lf">
              <img src="@/assets/images/icons/cp.png" />
            </div>
          </template>
        </sq-v-icon-text>
      </div>
      <div class="md">
        <sq-v-icon-text class="fk" :title="d5.title" :data="d5">
          <template slot="image">
            <div class="lf">
              <img src="@/assets/images/icons/cp.png" />
            </div>
          </template>
        </sq-v-icon-text>
      </div>
      <div class="md">
        <sq-v-icon-text class="fk" :title="d6.title" :data="d6">
          <template slot="image">
            <div class="lf">
              <img src="@/assets/images/icons/cp.png" />
            </div>
          </template>
        </sq-v-icon-text>
      </div>
    </div>
  </sq-card>
</template>
<script>
import SqCard from "@/components/Card/index.vue";
import SqVIconText from '@/components/icon-text/vindex.vue'
export default {
  components: {
    SqCard,
    SqVIconText
  },
  data() {
    return {
      d1: { type: 'text', val: 500, dw: '台', title: '设备总计' },
      d2: { type: 'text', val: 190, dw: '台', title: '在线设备' },
      d3: { type: 'text', val: 10, dw: '台', title: '离线设备' },
      d4: { type: 'text', val: 0, dw: '台', title: '故障设备' },
      d5: { type: 'text', val: 476, dw: '台', title: '正常设备' },
      d6: { type: 'text', val: 20, dw: '台', title: '需开机数量' },
    }
  }
}
</script>
<style lang="scss" scoped>
.card-body{
  padding: 0 10px 10px 10px;
  flex-direction: row;
  justify-content: space-between;
  margin: 5px 0 0 0;
  .md{
    width: 15%;
  }
}
</style>
