<template>
  <div class="sq-header">
    <div class="menu">
      <img src="@/assets/images/public/welcome.png" class="img-wel" />
    </div>
    <div class="title">三奇集团普立尔国家级应急产业园
    </div>
    <div class="menu rg">
      <div class="nav-right-icon-time">
        <div class="time-class">
          <div>{{ week }}</div>
          <div>{{ time }}</div>
        </div>
        <div class="nav-right-icon-time-line"></div>
        <i class="el-icon-user-solid" style="cursor:pointer;" @click="handleLogout"></i>
      </div>
    </div>
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
      'roles'
    ]),
  },
  data() {
    return {
      week: "",
      time: "",
      curPath: ''
    }
  },
  watch: {
    '$route'(to, from) {
      this.curPath = to.path
    }
  },
  mounted() {
    this.getNowTime()
  },
  methods: {
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
.img-wel{
  height: 30px;
  margin: 10px 0 0 0;
}
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
      justify-content: flex-end;
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
    margin: 0 3px;
  }
}
</style>
