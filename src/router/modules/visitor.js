const visitorRoutes = [
    // 设置默认加载页面
    {
      path: "/",
      redirect: "/visitor"
    },
    {
        path: "/sq/prev",
        name: "sq-prev",
        component: () => import('@/views/sq/preview/index.vue'),
        meta: {
            title: "碳能管家"
        }
    },
    // 未配置的路由页面
    {
        path: "*",
        name: "404",
        component: () => import('@/views/404.vue')
    },
]

export default visitorRoutes