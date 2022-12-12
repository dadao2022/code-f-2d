<template>
  <div class="login-container">
    <img class="title" src="@/assets/images/public/login/title.png" />
    <div class="intro">
      <div class="md">
        <sq-card height="250px" :title="'匠心品质'">
          <div class="bd">
            <sq-circle-text :isBig="true" :data="d1"></sq-circle-text>
            <sq-circle-text :isBig="true" :data="d2"></sq-circle-text>
            <sq-circle-text :isBig="true" :data="d3"></sq-circle-text>
          </div>
          <div class="txt">28年从业历史，26年出口经验的匠心坚守，217项检测实验室</div>
        </sq-card>
      </div>
      <div class="md">
        <sq-card height="250px" :title="'专业制造'">
          <div class="bd">
            <div class="cir"><span class="t">设计</span></div>
            <div class="cir"><span class="t">生产</span></div>
            <div class="cir"><span class="t">销售</span></div>
          </div>
          <div class="txt">集研发、设计、生产、销售于一体的现代化专业制造商</div>
        </sq-card>
      </div>
      <div class="md">
        <sq-card height="250px" :title="'荣誉奖项'">
          <div class="bd">
            <sq-circle-text :isBig="true" :data="d11"></sq-circle-text>
            <sq-circle-text :isBig="true" :data="d12"></sq-circle-text>
            <sq-circle-text :isBig="true" :data="d13"></sq-circle-text>
          </div>
          <div class="txt">28年从业历史，26年出口经验的匠心坚守，217项检测实验室</div>
        </sq-card>
      </div>
    </div>

    <div class="forms" v-loading="loading">
      <div class="inp">
        <input type="text" v-model="form.username" placeholder="请输入用户名" />
      </div>
      <div class="inp">
        <input type="password" v-model="form.password" placeholder="请输入密码" />
      </div>
      <img class="btn" @click="handleLogin" src="@/assets/images/public/login/btn_confirm.png" />
    </div>
  </div>
</template>
<script>
import SqCard from "@/components/Card/index.vue";
import SqCircleText from '@/components/circle-text/index.vue'
import { login } from '@/api/user'
export default {
  components: {
    SqCard,
    SqCircleText
  },
  data() {
    return {
      d1: { label: '从业历史', val: '28', unit: '年' },
      d2: { label: '出口经验', val: '26', unit: '年' },
      d3: { label: '检测实验室', val: '217', unit: '项' },

      d11: { label: '专利技术和产品', val: '120', unit: '项' },
      d12: { label: '荣誉', val: '42', unit: '项' },
      d13: { label: '注册资质', val: '239', unit: '个' },

      form: {
        username: 'sqadmin',
        password: 'sqadmin'
      },
      loading: false
    }
  },
  methods: {
    async handleLogin() {
      this.loading = true
      this.$store.dispatch('user/login', this.form)
        .then((res) => {
          console.log(res)
          this.$router.push('/sq/data')
          this.loading = false
        })
        .catch(() => {
          this.loading = false
        })
    }
  }
}
</script>
<style lang="scss" scoped>
.login-container{
  background: url('@/assets/images/public/bg.jpg') no-repeat center center;
  width: 100%;height: 100%;background-size: cover;

  .title{
    width: 100%;
  }
  .intro{
    margin: 100px auto;
    display: flex;justify-content: space-between;
    width: 80%;
    .md{width: 30%;}
    .bd{
      margin: 20px 0 0 0;
      display: flex;justify-content: space-between;
    }
    .cir{
      background: url('@/assets/images/public/login/cir_bg.png') no-repeat 0 0;
      background-size: 100% 100%;width: 130px;height: 130px;
      font-size: 16px;
      display: flex;
      justify-content: center;
      align-items: center;
      .t{
        background-image: -webkit-linear-gradient(top, #fff, #d5f7fd, #d5f7fd);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        font-family: HY;
        font-size: 24px;
      }
    }
  }
  .txt{
    color: #BFDFFF;
    font-family: HY;
    font-size: 14px;
    padding: 10px 10px;
    line-height: 30px;
    text-align: center;
  }

  .forms{
    margin: 10px 0 0 0;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .inp{
    background: url('@/assets/images/public/login/input.png') no-repeat 0 0;
    background-size: 100% 100%;
    width: 400px;height: 120px;
    input{
      width: 80%;height: 40px;background: transparent;
      margin: 38px 0 0 5px;border: none;color:#fff;
      font-size: 18px;outline: none;
      &::-webkit-input-placeholder{
        color: #fff;
      }
    }
  }
  .btn{
    cursor: pointer;
  }
}
</style>
