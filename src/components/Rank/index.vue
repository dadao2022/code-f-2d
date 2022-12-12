<template>
  <div class="rank-con">
    <sq-sub-title class="title" :title="title"></sq-sub-title>
    <div class="rank-list">
      <div
        class="md"
        v-for="(item, index) in dataList"
        :key="index"
        :class="getClass(index)"
      >
        <div class="num">
          <span>{{ index + 1 }}</span>
          <i class="el-icon-caret-right"></i>
        </div>
        <div class="content">
          <span class="name">{{ item.name }}</span>
          <span class="val">{{ item.val }}</span>
          <span class="dw">{{ item.dw }}</span>
        </div>
      </div>
      <!-- <div class="md">
        <div class="num">
          <span>1</span>
          <i class="el-icon-caret-right"></i>
        </div>
        <div class="content">
          <span class="name">地区名称</span>
          <span class="val">937</span>
          <span class="dw">个</span>
        </div>
      </div>
      <div class="md green">
        <div class="num">
          <span>2</span>
          <i class="el-icon-caret-right"></i>
        </div>
        <div class="content">
          <span class="name">地区名称</span>
          <span class="val">937</span>
          <span class="dw">个</span>
        </div>
      </div>
      <div class="md green">
        <div class="num">
          <span>3</span>
          <i class="el-icon-caret-right"></i>
        </div>
        <div class="content">
          <span class="name">地区名称</span>
          <span class="val">937</span>
          <span class="dw">个</span>
        </div>
      </div>
      <div class="md blue">
        <div class="num">
          <span>4</span>
          <i class="el-icon-caret-right"></i>
        </div>
        <div class="content">
          <span class="name">地区名称</span>
          <span class="val">937</span>
          <span class="dw">个</span>
        </div>
      </div>
      <div class="md blue">
        <div class="num">
          <span>5</span>
          <i class="el-icon-caret-right"></i>
        </div>
        <div class="content">
          <span class="name">地区名称</span>
          <span class="val">937</span>
          <span class="dw">个</span>
        </div>
      </div> -->
    </div>
  </div>
</template>
<script>
import SqSubTitle from "@/components/sub-title/index.vue";
export default {
  props: {
    title: {
      type: String,
      default: "销售排行",
    },
    dataList: {
      type: Array,
      default: () => [
        { name: "地区名称", val: 937, dw: "个" },
        { name: "地区名称", val: 937, dw: "个" },
        { name: "地区名称", val: 937, dw: "个" },
        { name: "地区名称", val: 937, dw: "个" },
        { name: "地区名称", val: 937, dw: "个" },
      ],
    },
  },
  components: {
    SqSubTitle,
  },
  mounted() {},
  methods: {
    getClass(index) {
      if (index == 0) {
        return "";
      } else if (index == 1) {
        return "green";
      } else if (index == 2) {
        return "green";
      } else if (index == 3) {
        return "blue";
      } else if (index == 4) {
        return "blue";
      } else {
        return "";
      }
    },
  },
};
</script>
<style lang="scss" scoped>
.rank-con {
  .rank-list {
    margin: 10px 0 0 0;
    .md {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin: 0 0 8px 0;
      .num {
        border: solid 1px #f1b34c;
        width: 30px;
        height: 30px;
        text-align: center;
        line-height: 30px;
        font-family: "Agency FB";
        color: #f1b34c;
        font-size: 22px;
        position: relative;
        i {
          position: absolute;
          right: 0;
          bottom: 0;
          transform: rotateZ(45deg);
        }
      }
      .content {
        flex: 1;
        margin: 0 0 0 10px;
        height: 30px;
        line-height: 30px;
        border-bottom: dotted 1px #7cb0c9;
        color: #fff;
        display: flex;
        justify-content: space-between;

        .name {
          font-size: 16px;
          color: #bfdfff;
        }
        .val {
          font-size: 28px;
          color: #f1b34c;
          font-family: "Agency FB";
          flex: 1;
          text-align: right;
        }
        .dw {
          font-size: 16px;
          color: #bfdfff;
        }
      }

      &.green {
        .num {
          border: solid 1px #34e7c1;
          color: #34e7c1;
        }
        .content .val {
          color: #34e7c1;
        }
      }
      &.blue {
        .num {
          border: solid 1px #00d1ff;
          color: #00d1ff;
        }
        .content .val {
          color: #00d1ff;
        }
      }
    }
  }
}
</style>
