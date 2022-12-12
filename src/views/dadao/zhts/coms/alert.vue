<template>
  <div class="pad30 alert-con">
    <sq-sub-title class="title" :title="'告警情况'"></sq-sub-title>
    
    <div class="table-con">
      <table class="dd-table">
        <thead>
          <tr>
            <th>序号</th>
            <th>告警时间</th>
            <th>告警类型</th>
            <th>操作</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>01</td>
            <td>2022-04-05 12:00:00</td>
            <td>违停告警</td>
            <td><a class="green">处置</a></td>
          </tr>
          <tr>
            <td>02</td>
            <td>2022-04-05 12:00:00</td>
            <td>违停告警</td>
            <td><a class="green">处置</a></td>
          </tr>
          <tr>
            <td>03</td>
            <td>2022-04-05 12:00:00</td>
            <td>违停告警</td>
            <td><a class="red">未处置</a></td>
          </tr>
          <tr>
            <td>04</td>
            <td>2022-04-05 12:00:00</td>
            <td>违停告警</td>
            <td><a class="red">未处置</a></td>
          </tr>
          <tr>
            <td>05</td>
            <td>2022-04-05 12:00:00</td>
            <td>违停告警</td>
            <td><a class="red">未处置</a></td>
          </tr>
          <tr>
            <td>06</td>
            <td>2022-04-05 12:00:00</td>
            <td>违停告警</td>
            <td><a class="red">未处置</a></td>
          </tr>
        </tbody>
      </table>
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
      ]
    }
  }
}
</script>
<style lang="scss" scoped>
.alert-con{
  margin: 20px 0 0 0;
}
.table-con{
  margin: 10px 0 0 0;
}
</style>
