<template>
  <div class="normal-table">
    <table>
      <thead>
        <tr>
          <th v-for="(item, ix) in columns" :key="ix">{{ item.name }}</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="d in tableData" :key="d.id">
          <td v-for="(item, ix) in columns" :key="ix">
            <span v-if="item.prop != 'op'">{{ d[item.prop] }}</span>

            <div v-else>
              <slot :name="'data-' + d.id"></slot>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script>
export default {
  props: {
    tableData: {
      type: Array,
      default: () => [],
    },
    columns: {
      type: Array,
      default: () => [],
    },
  },
};
</script>
<style lang="scss" scoped>
.normal-table {
  width: 100%;
  height: 100%;
  overflow-y: auto;
  table {
    height: 100%;
    width: 100%;
    th {
      background: rgba(11, 99, 151, 0.8);
      font-size: 12px;
      color: #bfdfff;
      height: 23px;
      vertical-align: middle;
      text-align: left;
      padding: 0 0 0 5px;
      white-space: nowrap;
    }
    td {
      color: #bfdfff;
      height: 23px;
      vertical-align: middle;
      text-align: left;
      padding: 0 0 0 5px;
      white-space: nowrap;
      span {
        font-size: 12px;
      }
    }
    tr:nth-child(even) {
      td {
        background: rgba(119, 197, 254, 0.15);
      }
    }
  }
}
@media screen and (min-width: 2560px) {
  .normal-table {
    table {
      th {
        font-size: 14px;
        color: #bfdfff;
        height: 30px;
        padding: 0 0 0 10px;
      }
      td {
        font-size: 14px;
        height: 30px;
        padding: 0 0 0 10px;
        span {
          font-size: 14px;
        }
      }
    }
  }
}
@media screen and (min-width: 3840px) {
  .normal-table {
    table {
      th {
        font-size: 16px;
        color: #bfdfff;
        height: 30px;
        padding: 0 0 0 10px;
      }
      td {
        font-size: 16px;
        height: 30px;
        padding: 0 0 0 10px;
        span {
          font-size: 16px;
        }
      }
    }
  }
}
</style>
