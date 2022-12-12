<template>
  <div class="sq-header">
    <div class="menu">
      <div class="nav-button" v-for="item in menusLeft" :key="item.id" :class="{'nav-button-click': curPath == item.path}">
        <router-link :to="item.path">
          <span class="nav-button-text">{{ item.title }}</span>
        </router-link>
      </div>
    </div>
    <!-- <div class="menu" v-else></div> -->
    <div class="title">数字孪生系统
      <!-- <iframe style="padding: 0;" width="500" height="40" src="https://i.tianqi.com/?c=code&amp;a=getcode&amp;id=40&amp;icon=1" frameborder="0"></iframe> -->
    </div>
    <div class="menu rg">
      <div class="nav-button" v-for="item in menusRight" :key="item.id" :class="{'nav-button-click': curPath == item.path}">
        <router-link :to="item.path">
          <span class="nav-button-text">{{ item.title }}</span>
        </router-link>
      </div>
      <div class="nav-right-icon-time">
        <img src="@/assets/images/dd/sun.png" alt="" />
        <div class="weather">
          <span class="txt">晴转多云</span><br/>
          <span class="num">20℃-21℃</span>
        </div>
        <div class="nav-right-icon-time-line"></div>
        <div class="times">
          <span class="txt">2022-12-10</span><br/>
          <span class="num">14:02:34</span>
        </div>
        <!-- <div class="time-class">
          <div>{{ week }}</div>
          <div>{{ time }}</div>
        </div>
        <div class="nav-right-icon-time-line"></div>
        <span class="temp">30℃</span>
        <div class="nav-right-icon-time-line"></div>
        <i class="el-icon-user-solid" style="cursor:pointer;" @click="handleLogout"></i> -->
      </div>
    </div>
    <!-- <div class="menu rg" v-else>
      <div class="nav-right-icon-time">
        <div class="time-class">
          <div>{{ week }}</div>
          <div>{{ time }}</div>
        </div>
        <div class="nav-right-icon-time-line"></div>
        <i class="el-icon-user-solid" style="cursor:pointer;" @click="handleLogout"></i>
      </div>
    </div> -->
  </div>
</template>
<script>
import { mapGetters } from 'vuex'
export default {
  props: {
    showMenu: {
      type: Boolean,
      default: true
    },
    isVisitor: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    ...mapGetters([
      'roles', 'menus'
    ]),
  },
  data() {
    return {
      menusLeft: [
        { id: 'l1', title: "综合态势", icon: "", path: "/dadao/zhts" },
        { id: 'l2', title: "区域态势", icon: "", path: "/dadao/qyts" },
        { id: 'l3', title: "总装专题", icon: "", path: "/dadao/zzzt" },
        { id: 'l4', title: "应急专题", icon: "", path: "/dadao/yjzt" }
      ],
      menusRight: [
        { id: 'r1', title: "环境专题", icon: "", path: "/dadao/hjzt" },
        { id: 'r2', title: "设备专题", icon: "", path: "/dadao/sbzt" },
        { id: 'r3', title: "安防专题", icon: "", path: "/dadao/afzt" },
      ],
      week: "",
      time: "",
      curPath: ''
    }
  },
  watch: {
    '$route'(to, from) {
      this.curPath = to.path
    },
    // menus(n, o) {
    //   this.initMenus()
    // }
  },
  mounted() {
    this.getNowTime()
    this.initMenus()
  },
  methods: {
    initMenus() {
      let n = this.menus
      if (n.length <= 5) {
        for (let ni of n) {
          this.menusLeft.push(ni)
        }
      } else {
        for (let i=0;i<5;i++) {
          this.menusLeft.push(n[i])
        }
        for (let i=5;i<n.length;i++) {
          this.menusRight.push(n[i])
        }
      }
      console.log('#########', this.menusLeft)
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
    async handleLogout() {
      await this.$store.dispatch('user/logout')
      // window.location.href = '/web/#/login'
      window.location.reload()
    }
  }
}
</script>
<style lang="scss" scoped>
.sq-header{
  display: flex;
  align-items: center;
  justify-content: space-between;
  .title{
    
    color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: "HY";
    // 文字投影
    text-shadow: 0 5px 10px #000;
    padding: 10px 0 0 0;
  }
  .menu{
    flex: 1;
    display: flex;
    align-items: center;
    padding: 0 0 0 20px;
    &.rg{
      padding: 0 20px 0 0;
      text-align: right;
      .nav-button{
        margin: 0 15px;
      }
    }
  }
}
.nav-button {
  font-family: "HY";
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-position: center !important;
  background-size: cover !important;
  position: relative;
  cursor: pointer;
  &:first-child{
    margin-left: 0 !important;
  }
  &:last-child{
    margin-right: 0 !important;
  }
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
}
.nav-button::before {
  content: "";
  position: absolute;
  
  background: url("@/assets/images/public/navicon.png");
  background-position: center !important;
  background-size: cover !important;
}
.nav-button::after {
  content: "";
  position: absolute;
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

.nav-right-icon-time {
  color: #fff;
  display: flex;
  align-items: center;
  .weather{
    text-align: center;margin-left: 10px;
    .txt{font-weight: bold;font-size: 18px;}
    .num{font-family: '方正姚体';font-size: 15px;}
  }
  .times{
    text-align: center;
    .num{letter-spacing: 3px;}
  }
  .time-class {
    display: flex;
    align-items: flex-end;
    justify-content: center;
    flex-direction: column;
    letter-spacing: 2px;
    font-weight: 900;
    div{
      font-size: 12px;
    }
    .temp{
      font-size: 12px;
    }
  }
  .nav-right-icon-time-line {
    height: 26px;
    width: 2px;
    background: rgba($color: #fff, $alpha: 0.35);
    margin: 0 10px;
  }
}
</style>
