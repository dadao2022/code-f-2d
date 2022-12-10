import request from '@/utils/request'

export function login(data) {
  return request({
    url: '/cms/api/login',
    method: 'post',
    params: data
  })
}

export function getInfo(params) {
  return request({
    url: '/cms/api/userinfo',
    method: 'get',
    params: params
  })
}

export function logout() {
  return request({
    url: '/user/logout',
    method: 'get'
  })
}

export function GetMyLinks() {
  return request({
    url: '/cms/api/userLinks',
    method: 'get'
  })
}
