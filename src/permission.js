import router from './router'
import store from './store'
import { Message } from 'element-ui'
import NProgress from 'nprogress' // progress bar
import 'nprogress/nprogress.css' // progress bar style
import { getToken } from '@/utils/auth' // get token from cookie
import getPageTitle from '@/utils/get-page-title'

import { getMenus } from '@/api/user'

import adminRoutes from '@/router/modules/admin'
import visitorRoutes from '@/router/modules/visitor'
import Container from '@/views/Container/Index.vue'

NProgress.configure({ showSpinner: false }) // NProgress Configuration

const whiteList = ['/login', '/test'] // no redirect whitelist

router.beforeEach(async (to, from, next) => {
  // start progress bar
  NProgress.start()

  // set page title
  document.title = getPageTitle(to.meta.title)

  // determine whether the user has logged in
  const hasToken = getToken()

  if (hasToken) {
    if (to.path === '/login') {
      // if is logged in, redirect to the home page
      next({ path: '/' })
      NProgress.done()
    } else {
      const hasGetUserInfo = store.getters.name
      if (hasGetUserInfo) {
        next()
      } else {
        try {
          let maping = {
            "sq-data": { "path": "/sq/data", "name": "sq-data", "meta": { "title": "数据总览" }, component: () => import('@/views/sq/data/index.vue') },
            "sq-park": { "path": "/sq/park", "name": "sq-park", "meta": { "title": "园区概况" }, component: () => import('@/views/sq/park/index.vue') },
            "sq-person": { "path": "/sq/person", "name": "sq-person", "meta": { "title": "人员管理" }, component: () => import('@/views/sq/person/index.vue') },
            "sq-finance": { "path": "/sq/finance", "name": "sq-finance", "meta": { "title": "财务管理" }, component: () => import('@/views/sq/finance/index.vue') },
            "sq-market": { "path": "/sq/market", "name": "sq-market", "meta": { "title": "市场管理" }, component: () => import('@/views/sq/market/index.vue') }, 
            "sq-supply": { "path": "/sq/supply", "name": "sq-supply", "meta": { "title": "供应链管理" }, component: () => import('@/views/sq/supply/index.vue') }, 
            "sq-produce": { "path": "/sq/produce", "name": "sq-produce", "meta": { "title": "生产管理" }, component: () => import('@/views/sq/produce/index.vue') }, 
            "sq-custom": { "path": "/sq/costom", "name": "sq-custom", "meta": { "title": "客户管理" }, component: () => import('@/views/sq/custom/index.vue') }, 
            "sq-carbon": { "path": "/sq/carbon", "name": "sq-carbon", "meta": { "title": "碳能管家" }, component: () => import('@/views/sq/carbon/index.vue') }
          }

          // get user info
          await store.dispatch('user/getInfo')
          // console.log('roles' + store.getters.roles)
          // if (store.getters.roles == 'admin') {
          //   console.log('admin')
          //   router.addRoutes(adminRoutes)

          //   next({ ...to, replace: true })
          // } else {
            let rses = await getMenus()
            let resRoutes = [
              {
                path: "/",
                redirect: "/sq/data"
              },
              {
                path: "/sq",
                name: "sq",
                component: Container,
                children: []
              }
            ]

            let ztchildres = []
            for (let r of rses.data) {
              if (r.meta.title == '三奇数据中台') {
                for (let ri of r.children) {
                  if (ri.path == 'sq-front') {
                    ztchildres = ri.children
                  }
                }
              }
            }
            
            if (ztchildres.length > 0) {
              let arr = []
              for (let ro of ztchildres) {
                if (maping[ro.path]) {
                  arr.push({
                    id: maping[ro.path].name,
                    title: maping[ro.path].meta.title,
                    path: maping[ro.path].path,
                  })
                  resRoutes[1].children.push(maping[ro.path])
                }
                if (ro.path = 'sq-visitor') {
                  resRoutes.push({
                    path: '/visitor',
                    name: 'visitor',
                    component: () => import('@/views/sq/visitor/index.vue'),
                    meta: {
                      title: "访客"
                    }
                  })
                }
              }
              await store.dispatch('user/setMenus', arr)
              
              if (resRoutes[1].children.length > 0) {
                resRoutes[0].redirect = resRoutes[1].children[0].path
              } else {
                resRoutes[0].redirect = resRoutes[2].path
              }

              resRoutes[1].children.push({ "path": "/sq/prev", "name": "sq-prev", "meta": { "title": "参观者" }, component: () => import('@/views/sq/preview/index.vue') })
              resRoutes[1].children.push({
                path: "*",
                name: "404",
                component: () => import('@/views/404.vue')
              })
              
              // console.log('other', to)
              router.addRoutes(resRoutes)

              next({ ...{ path: resRoutes[0].redirect, fullPath: resRoutes[0].redirect }, replace: true })
            } else {
              await store.dispatch('user/resetToken')
              Message.error('没有权限查看，请联系管理员')
              next(`/login`)
              NProgress.done()
            }
            
          // }
        } catch (error) {
          // remove token and go to login page to re-login
          await store.dispatch('user/resetToken')
          Message.error(error || 'Has Error')
          next(`/login?redirect=${to.path}`)
          NProgress.done()
        }
      }
    }
  } else {
    /* has no token*/

    if (whiteList.indexOf(to.path) !== -1) {
      // in the free login whitelist, go directly
      next()
    } else {
      // other pages that do not have permission to access are redirected to the login page.
      next(`/login?redirect=${to.path}`)
      NProgress.done()
    }
  }
})

router.afterEach(() => {
  // finish progress bar
  NProgress.done()
})
