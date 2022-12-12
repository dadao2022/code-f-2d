import Vue from 'vue'
import VueRouter from 'vue-router'

// 页面二级容器
import Container from '../views/Container/Index.vue'
// 默认首页
import Index from '../views/Index.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/sq/login.vue'),
    meta: {
      title: "登录"
    }
  },

  {
    path: "/dadao",
    name: "dadao",
    component: Container,
    children: [
      {
        path: "/dadao/index",
        redirect: "/dadao/zhts"
      },

      {
        path: "/dadao/zhts",
        name: "dadao-zhts",
        component: () => import('@/views/dadao/zhts/index.vue'),
        meta: {
          title: "综合态势"
        }
      },

      {
        path: "/dadao/qyts",
        name: "dadao-qyts",
        component: () => import('@/views/dadao/qsts/index.vue'),
        meta: {
          title: "趋势态势"
        }
      },

      {
        path: "/dadao/zzzt",
        name: "dadao-zzzt",
        component: () => import('@/views/dadao/zzzt/index.vue'),
        meta: {
          title: "总装专题"
        }
      },

      {
        path: "/dadao/yjzt",
        name: "dadao-yjzt",
        component: () => import('@/views/dadao/yjzt/index.vue'),
        meta: {
          title: "应急专题"
        }
      },

      {
        path: "/dadao/hjzt",
        name: "dadao-hjzt",
        component: () => import('@/views/dadao/hjzt/index.vue'),
        meta: {
          title: "环境专题"
        }
      },

      {
        path: "/dadao/sbzt",
        name: "dadao-sbzt",
        component: () => import('@/views/dadao/sbzt/index.vue'),
        meta: {
          title: "设备专题"
        }
      },

      {
        path: "/dadao/afzt",
        name: "dadao-afzt",
        component: () => import('@/views/dadao/afzt/index.vue'),
        meta: {
          title: "安防专题"
        }
      },

    ]
  },


  {
    path: "/sq",
    name: "sq",
    component: Container,
    children: [
      {
        path: "/sq/index",
        redirect: "/sq/data"
      },

      {
        path: "/sq/data",
        name: "sq-data",
        component: () => import('@/views/sq/data/index.vue'),
        meta: {
          title: "数据总览"
        }
      },

      {
        path: "/sq/park",
        name: "sq-park",
        component: () => import('@/views/sq/park/index.vue'),
        meta: {
          title: "园区概况"
        }
      },

      {
        path: "/sq/person",
        name: "sq-person",
        component: () => import('@/views/sq/person/index.vue'),
        meta: {
          title: "人员管理"
        }
      },

      {
        path: "/sq/finance",
        name: "sq-finance",
        component: () => import('@/views/sq/finance/index.vue'),
        meta: {
          title: "财务管理"
        }
      },

      {
        path: "/sq/market",
        name: "sq-market",
        component: () => import('@/views/sq/market/index.vue'),
        meta: {
          title: "市场管理"
        }
      },

      {
        path: "/sq/supply",
        name: "sq-supply",
        component: () => import('@/views/sq/supply/index.vue'),
        meta: {
          title: "供应链管理"
        }
      },

      {
        path: "/sq/produce",
        name: "sq-produce",
        component: () => import('@/views/sq/produce/index.vue'),
        meta: {
          title: "生产管理"
        }
      },

      {
        path: "/sq/costom",
        name: "sq-custom",
        component: () => import('@/views/sq/custom/index.vue'),
        meta: {
          title: "客户管理"
        }
      },

      {
        path: "/sq/carbon",
        name: "sq-carbon",
        component: () => import('@/views/sq/carbon/index.vue'),
        meta: {
          title: "碳能管家"
        }
      },

      {
        path: "/sq/prev",
        name: "sq-prev",
        component: () => import('@/views/sq/preview/index.vue'),
        meta: {
          title: "参观者"
        }
      },
      // 未配置的路由页面
      {
        path: "*",
        name: "404",
        component: () => import('@/views/404.vue')
      },
    ]
  }

]

const router = new VueRouter({
  // mode: 'history',
  base: process.env.BASE_URL,
  routes
})

// 路由守卫
router.beforeEach((to, from, next) => {
  // 设置页面标题
  document.title = to.meta.title
  next()
}
)

export default router
