import request from '@/utils/request'

export function login(data) {
  return request({
    url: '/auth/login',
    method: 'post',
    data
  })
}

export function getInfo() {
  return request({
    url: '/system/user/getInfo',
    method: 'get'
  })
}

export function getMenus() {
  return request({
    url: '/system/menu/getRouters',
    method: 'get'
  })
}
