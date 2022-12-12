<template>
  <div class="pad30 per-con">
    <sq-sub-title class="title" :title="'人员情况'"></sq-sub-title>
    <div class="txt-lists">
      <div class="md" v-for="(item,i) in datas" :key="item.id" :class="{'odd': i % 2 != 0}">
        <span class="lbl">{{ item.title }}</span>
        <span class="val">{{ item.value }}</span>
      </div>
    </div>
  </div>
</template>
<script>
import SqSubTitle from '@/components/sub-title/index.vue'
export default {
  components: {
    SqSubTitle
  },
  data() {
    return {
      datas: [
        { id: 1, title: '厂房总人数', value: '2924' },
        { id: 12, title: '外来人数', value: '33' },
        { id: 13, title: '大门岗位', value: '33' },
        { id: 14, title: '吊车岗位', value: '33' },
        { id: 15, title: '平台岗位', value: '33' },
        { id: 16, title: '其他岗位', value: '33' },
      ]
    }
  }
}
</script>
<style lang="scss" scoped>
.per-con{
  margin: 20px 0 0 0;
}
.txt-lists{
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  .md{
    width: 60%;
    display: flex;
    align-items: center;
    margin: 10px 0;
    .lbl{
      font-size: 18px;color: #fff;
      width: 140px;
    }
    .val{
      font-family: 'Agency FB';
      font-size: 26px;color: #FF0000;
      flex: 1;
    }
    &.odd{
      width: 40%;
    }
    &.odd .lbl{
      width: 100px;
    }
    &.odd .val{
      text-align: right;
    }
  }
}
</style>
