<template>
<div>
  <div class="sq-tree-search">
    <i class="el-icon-search"></i>
    <input type="text" placeholder="请输入设备名称" />
  </div>
  <div class="sq-tree-list">
    <el-tree :data="data" :props="defaultProps">
      <span class="custom-tree-node" slot-scope="{ node, data }">
        <span class="txts">
          <span class="light" v-if="node.isLeaf"></span>
          {{ node.label }}
        </span>
      </span>
    </el-tree>
    <div class="bottom">
      <div class="md on">
        <span class="fk"></span><span>在线</span>
      </div>
      <div class="md off">
        <span class="fk"></span><span>离线</span>
      </div>
      <div class="md err">
        <span class="fk"></span><span>故障</span>
      </div>
    </div>
  </div>
</div>
</template>
<script>
export default {
  data() {
    return {
      data: [
        {
          label: "一级 1",
          children: [
            {
              label: "二级 1-1",
              children: [
                {
                  label: "三级 1-1-1",
                },
              ],
            },
          ],
        },
        {
          label: "一级 2",
          children: [
            {
              label: "二级 2-1",
              children: [
                {
                  label: "三级 2-1-1",
                },
              ],
            },
            {
              label: "二级 2-2",
              children: [
                {
                  label: "三级 2-2-1",
                },
              ],
            },
          ],
        },
        {
          label: "一级 3",
          children: [
            {
              label: "二级 3-1",
              children: [
                {
                  label: "三级 3-1-1",
                },
              ],
            },
            {
              label: "二级 3-2",
              children: [
                {
                  label: "三级 3-2-1",
                },
              ],
            },
          ],
        },
      ],
      defaultProps: {
        children: "children",
        label: "label",
      },
    };
  },
  methods: {
  },
};
</script>
<style lang="scss">
.sq-tree-search{
  display: flex;
  padding: 10px 5px;
  align-items: center;
  background: rgba(2, 9, 17, 0.75);
  height: 30px;
  width: 100%;
  box-shadow: 0 0 10px #4dd2ff;
  i{color: #fff;font-size: 20px;margin: 0 8px;}
  input{
    height: 100%;
    flex: 1;background: transparent;
    border: none;margin: 0 0 0 10px;
    outline: none;color: #fff;font-size: 14px;
  }
}
.sq-tree-list {
  background: rgba(2, 9, 17, 0.75);
  padding: 10px 5px;
  height: 100%;
  width: 100%;
  margin: 20px 0 0 0;
  box-shadow: 0 0 10px #4dd2ff;

  .bottom{
    border-top: dotted 1px #999;
    height: 30px;display: flex;
    align-items: center;
    padding: 0 10px;
    justify-content: space-between;
    .md{
      display: flex;
      align-items: center;
      color: #BFDFFF;
      font-size: 16px;
      margin: 0 8px 0 0;
      .fk{
        width: 10px;height: 10px;background: #fff;
        margin: 0 4px 0 0;
      }
      &.off{
        .fk{
          background: #666;
        }
      }
      &.err{
        .fk{
          background: #FF0000;
        }
      }
    }
  }
  .el-tree{
    background: transparent;
    height: calc(100% - 30px);
  }
  .el-tree-node:focus>.el-tree-node__content,
  .el-tree-node__content:hover, .el-upload-list__item:hover{
    background: transparent;
  }
  .el-tree-node__label{
    color: #BFDFFF;
    font-size: 16px;
  }
  .el-tree-node__expand-icon{
    font-size: 20px;
    color: #26FFFF;
  }
  .el-tree-node__expand-icon.is-leaf{
    color: transparent;
  }
  .custom-tree-node{
    color: #BFDFFF;
    font-size: 16px;
  }
  .txts{
    display: flex;
    align-items: center;
    .light{
      width: 10px;height: 3px;
      background: #fff;
      box-shadow: 0 0 6px #4AD8FB;
      margin: 0 5px 0 0;
    }
  }
}
</style>
