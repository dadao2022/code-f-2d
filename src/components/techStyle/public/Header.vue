<template>
  <div class="header-class" :style="{ height: height }">
    <!-- 左侧导航 -->
    <div class="nav-left nav-public">
      <!-- 如果路由与当前路由相同则添加nav-button-click -->
      <div
        v-for="(item, index) in navList_left"
        :key="'navleft_' + index"
        class="nav-button"
        :class="{ 'nav-button-click': getRouteIn(item) }"
        @mousemove="navMouseMove(index, true)"
        @mouseout="navMouseMove(index, false)"
      >
        <!-- 跳转路由 -->
        <router-link v-if="item.path" :to="item.path">
          <span class="nav-button-text">{{ item.title }}</span>
        </router-link>

        <span class="nav-button-text" v-else>{{ item.title }}</span>

        <!-- 如果包含children则在鼠标移入时弹出二级菜单 -->
        <div
          class="nav-button-children"
          v-if="item.children && mouseList[index]"
          :ref="'children_item_' + index"
          @mousemove="navChildrenMouseMove(index, true)"
          @mouseout="navChildrenMouseMove(index, false)"
        >
          <div
            v-for="(child, index) in item.children"
            :key="'navleft_' + index"
            class="nav-button-children-item"
            :class="{
              'nav-button-children-item-click': child.path === $route.path,
            }"
          >
            <router-link :to="child.path">{{ child.title }}</router-link>
          </div>
        </div>
      </div>
    </div>
    <div class="header-title">{{ title }}</div>

    <!-- 右侧导航 -->
    <div class="nav-right nav-public">
      <!-- 如果路由与当前路由相同则添加nav-button-click -->
      <div
        v-for="(item, index) in navList_right"
        :key="'navright_' + index"
        class="nav-button"
        :class="{ 'nav-button-click': getRouteIn(item) }"
        @mousemove="navMouseMove(index, true)"
        @mouseout="navMouseMove(index, false)"
      >
        <!-- 跳转路由 -->
        <router-link v-if="item.path" :to="item.path">
          <span class="nav-button-text">{{ item.title }}</span>
        </router-link>

        <span class="nav-button-text" v-else>{{ item.title }}</span>

        <!-- 如果包含children则在鼠标移入时弹出二级菜单 -->
        <div
          class="nav-button-children"
          v-if="item.children && mouseList[index]"
          :ref="'children_item_' + index"
          @mousemove="navChildrenMouseMove(index, true)"
          @mouseout="navChildrenMouseMove(index, false)"
        >
          <div
            v-for="(child, index) in item.children"
            :key="'navleft_' + index"
            class="nav-button-children-item"
            :class="{
              'nav-button-children-item-click': child.path === $route.path,
            }"
          >
            <router-link :to="child.path">{{ child.title }}</router-link>
          </div>
        </div>
      </div>
    </div>
    <div class="nav-right-icon-time">
      <div class="time-class">
        <div>{{ week }}</div>
        <div>{{ time }}</div>
      </div>
      <div class="nav-right-icon-time-line"></div>
      <i class="el-icon-user-solid"></i>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    height: {
      type: String,
      default: "6%",
    },
    title: {
      type: String,
      default: "标题",
    },
  },
  data() {
    return {
      navList_left: [
        {
          title: "数据总览",
          icon: "",
          path: "/sq/data",
        },
        {
          title: "园区概况",
          icon: "",
          path: "/monitor/road3",
        },
        {
          title: "人员管理",
          icon: "",
          path: "/monitor/road3",
        },
        {
          title: "财务管理",
          icon: "",
          path: "/monitor/road3",
        },
        {
          title: "市场管理",
          icon: "",
          path: "/monitor/road3",
        },
      ],

      navList_right: [
        {
          title: "供应链管理",
          icon: "",
          path: "/monitor/road3",
        },
        {
          title: "生产管理",
          icon: "",
          path: "/monitor/road3",
        },
        {
          title: "客户管理",
          icon: "",
          path: "/monitor/road3",
        },
        {
          title: "碳能管家",
          icon: "",
          path: "/monitor/road3",
        },
      ],
      mouseList: {},
      indexSave: -1,

      week: "",
      time: "",
    };
  },
  mounted() {
    this.getNowTime();
  },
  methods: {
    getRouteIn(item) {
      if (item.path) {
        return this.$route.path == item.path;
      } else if (item.children) {
        for (let i = 0; i < item.children.length; i++) {
          if (this.$route.path == item.children[i].path) {
            return true;
          }
        }
      }
    },
    navMouseMove(index, isMouse) {
      if (!isMouse) {
        this.indexSave = index;
        setTimeout(() => {
          if (this.indexSave === index) {
            this.$set(this.mouseList, index, isMouse);
          }
        }, 500);
      } else {
        this.$set(this.mouseList, index, isMouse);
      }
    },
    navChildrenMouseMove(index, isMouse) {
      if (isMouse) {
        this.indexSave = -1;
        this.$set(this.mouseList, index, isMouse);
      } else {
        this.$set(this.mouseList, index, isMouse);
      }
    },

    getNowTime() {
      // 获取今天是周几
      let week = new Date().getDay();
      let weekList = ["周日", "周一", "周二", "周三", "周四", "周五", "周六"];
      this.week = weekList[week];

      // 获取今天是YYYY-MM-DD
      let date = new Date();
      let year = date.getFullYear();
      let month = date.getMonth() + 1;
      let day = date.getDate();
      // 如果月份小于10，则前面加0
      if (month < 10) {
        month = "0" + month;
      }
      // 如果天数小于10，则前面加0
      if (day < 10) {
        day = "0" + day;
      }
      this.time = year + "-" + month + "-" + day;
    },
  },
};
</script>

<style lang="scss" scoped>
.header-class {
  z-index: 50;
  width: 100%;
  top: 0;
  left: 0;
  position: absolute;
  background: url("@/assets/images/public/header.png");
  background-position: center !important;
  background-size: cover !important;
  .header-title {
    height: 100%;
    width: 25%;
    position: absolute;
    // 整体居中
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    font-size: 46px;
    color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: "HY";
    letter-spacing: 5px;
    // 文字投影
    text-shadow: 0 5px 10px #000;
  }

  @media screen and (max-width: 2560px) {
    .header-title {
      font-size: 34px;
      letter-spacing: 5px;
    }
  }
  // 分辨率小于等于1920时
  @media screen and (max-width: 1920px) {
    .header-title {
      font-size: 26px;
      letter-spacing: 5px;
    }
  }
  .nav-public {
    height: 70%;
    width: 35%;
    display: flex;
    align-items: center;
    justify-content: space-around;
    .nav-button {
      font-family: "HY";
      font-size: 28px;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 0 30px;
      background-position: center !important;
      background-size: cover !important;
      position: relative;
      cursor: pointer;
      .nav-button-text {
        background-image: -webkit-linear-gradient(top, #fff, #d5f7fd, #d5f7fd);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        position: relative;
      }

      // 去掉下划线
      a {
        text-decoration: none;
      }
      .router-link-active {
        text-decoration: none;
      }

      .nav-button-children {
        position: absolute;
        width: 100%;
        top: 70px;
        background: rgba($color: #072a4c, $alpha: 0.7);
        .nav-button-children-item {
          width: 100%;
          padding: 10px 0;
          display: flex;
          align-items: center;
          justify-content: center;
          background-image: -webkit-linear-gradient(top, #fff, #d5f7fd, #d5f7fd);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        .nav-button-children-item-click {
          background-image: -webkit-linear-gradient(top, #fff, #ffbc4d);
        }
      }
      @media screen and (max-width: 2560px) {
        .nav-button-children {
          top: 54px;
        }
      }
      // 分辨率小于等于1920时
      @media screen and (max-width: 1920px) {
        .nav-button-children {
          top: 40px;
        }
      }
    }
    .nav-button::before {
      content: "";
      position: absolute;
      top: calc(50% - 10px);
      left: -20px;
      width: 20px;
      height: 20px;
      background: url("@/assets/images/public/navicon.png");
      background-position: center !important;
      background-size: cover !important;
    }
    .nav-button::after {
      content: "";
      position: absolute;
      top: calc(50% - 10px);
      right: -20px;
      width: 20px;
      height: 20px;
      // 背景图旋转180°
      transform: rotate(180deg);
      background: url("@/assets/images/public/navicon.png");
      background-position: center !important;
      background-size: cover !important;
    }
    .nav-button-click {
      background: url("@/assets/images/public/navbackclick.png");
      .nav-button-text {
        background-image: -webkit-linear-gradient(top, #fff, #ffbc4d);
      }
    }
    .nav-button-click::before {
      content: "";
      position: absolute;
      background: url("@/assets/images/public/naviconclick.png");
      background-position: center !important;
      background-size: cover !important;
    }
    .nav-button-click::after {
      content: "";
      position: absolute;
      // 背景图旋转180°
      transform: rotate(180deg);
      background: url("@/assets/images/public/naviconclick.png");
      background-position: center !important;
      background-size: cover !important;
    }
    @media screen and (max-width: 2560px) {
      .nav-button {
        font-size: 20px;
        padding: 0 20px;
      }
      .nav-button::after {
        width: 16px;
        height: 16px;
        top: calc(50% - 8px);
        right: -5px;
      }
      .nav-button::before {
        width: 16px;
        height: 16px;
        top: calc(50% - 8px);
        left: -5px;
      }
    }
    // 分辨率小于等于1920时
    @media screen and (max-width: 1920px) {
      .nav-button {
        font-size: 16px;
        padding: 0 20px;
      }
      .nav-button::after {
        width: 12px;
        height: 12px;
        top: calc(50% - 6px);
        right: 0px;
      }
      .nav-button::before {
        width: 12px;
        height: 12px;
        top: calc(50% - 6px);
        left: 0px;
      }
    }
  }
  .nav-left {
    position: absolute;
    left: 0;
    top: 5px;
  }
  .nav-right {
    position: absolute;
    right: 8%;
    top: 5px;
    width: 25% !important;
  }
  .nav-right-icon-time {
    position: absolute;
    right: 10px;
    top: 10px;
    color: #fff;
    font-size: 26px;
    display: flex;
    align-items: center;
    .time-class {
      font-size: 20px;
      display: flex;
      align-items: flex-end;
      justify-content: center;
      flex-direction: column;
      letter-spacing: 2px;
      font-weight: 900;
    }
    .nav-right-icon-time-line {
      height: 26px;
      width: 2px;
      background: rgba($color: #fff, $alpha: 0.35);
      margin: 0 10px;
    }
  }
  // 分辨率小于等于1920时
  @media screen and (max-width: 1920px) {
    .nav-right-icon-time {
      right: 10px;
      top: 10px;
      font-size: 16px;
      .time-class {
        font-size: 12px;
      }
      .nav-right-icon-time-line {
        height: 16px;
      }
    }
  }
}
</style>
