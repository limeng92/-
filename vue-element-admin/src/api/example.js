import request from '@/utils/request'

export function fetchList(query) {
  return request({
    url: '/example/list',
    method: 'get',
    params: query
  })
}

export function fetchExample(id) {
  return request({
    url: '/example/detail/' + id,
    method: 'get',
    params: { id }
  })
}

export function updateExample(data) {
  return request({
    url: '/example/update',
    method: 'put',
    params: { data }
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
