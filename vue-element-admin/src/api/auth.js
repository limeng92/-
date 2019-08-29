import request from '@/utils/request'

export function fetchAuthList(query) {
  return request({
    url: '/auth/list',
    method: 'post',
    params: query
  })
}
export function AuthAllList() {
  return request({
    url: '/auth/all_list',
    method: 'post'
  })
}
export function fetchAuthDetail(id) {
  return request({
    url: '/auth/detail/' + id,
    method: 'post',
    params: { id }
  })
}
export function createAuth(data) {
  return request({
    url: '/auth/create',
    method: 'post',
    data
  })
}
export function updateAuth(data) {
  return request({
    url: '/Auth/update',
    method: 'put',
    params: { data }
  })
}
export function deleteAuth(id) {
  return request({
    url: '/auth/delete',
    method: 'delete',
    params: { id }
  })
}

