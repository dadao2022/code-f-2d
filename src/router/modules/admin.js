
import Container from '@/views/Container/Index.vue'

const adminRoutes = [
  // 设置默认加载页面
  {
    path: "/",
    redirect: "/sq/data"
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

export default adminRoutes