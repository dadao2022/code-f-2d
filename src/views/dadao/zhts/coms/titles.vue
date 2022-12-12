<template>
<div>
  <div class="titles-lists">
    <dd-nor-txt class="md" v-for="item in datas" :key="item.id" :title="item.title" :value="item.value"></dd-nor-txt>
  </div>

  <div class="ht-lists">
    <dd-hor-txt :title="'当前工作：全箭总检查测试'"></dd-hor-txt>
    <dd-hor-txt :title="'当前工序：火工品的安装和更新'" style="margin-top: 20px;"></dd-hor-txt>
  </div>
</div>
</template>
<script>
import DdNorTxt from '@/components/dd/nor-txt'
import DdHorTxt from '@/components/dd/hor-txt'
export default {
  components: {
    DdNorTxt,
    DdHorTxt
  },
  data() {
    return {
      datas: [
        { id: 1, title: '任务代号', value: '圆梦之旅' },
        { id: 12, title: '发射时间', value: '2022年12月25日' },
        { id: 13, title: '火箭型号', value: 'CZ-5' },
        { id: 14, title: '航天器', value: 'CZ-5摇6' },
      ]
    }
  }
}
</script>
<style lang="scss" scoped>
.titles-lists{
  padding: 30px 30px 0 30px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  .md{
    width: 180px;height: 94px;
    margin: 0 0 30px 0;
  }
}
.ht-lists{
  margin: 10px 0 0 0;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
}
</style>

