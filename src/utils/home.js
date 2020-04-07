import request from './request.js'

// 获取轮播图数据
export function getHomeMultiData() {
  return request({
    url: '/home/multidata'
  })
}

// 获取商品列表数据
export function getHomeGoodsData(type,page) {
  return request({
    url: '/home/data',
    params: {
      type,
      page
    }
  })
}