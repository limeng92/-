import request from '@/utils/request'

export function fetchList(query) {
  return request({
    url: '/example/list',
    method: 'get',
    params: query
  })
}

export function fetchArticle(id) {
  return request({
    url: '/example/detail',
    method: 'get',
    params: { id }
  })
}

export function fetchPv(pv) {
  return request({
    url: '/example/update',
    method: 'get',
    params: { pv }
  })
}

export function createArticle(data) {
  return request({
    url: '/example/create',
    method: 'post',
    data
  })
}

export function updateArticle(data) {
  return request({
    url: '/example/update',
    method: 'post',
    data
  })
}
