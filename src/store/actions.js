import { ADD_COUNT, ADD_TO_CART } from './mutations-types.js'
export default {
    addCart({ commit, state }, payload) {
        return new Promise((resolve, reject) => {
            let oldGoods = state.cartList.find(item => payload.iid === item.iid)
            if (!oldGoods) {
                payload.count = 1
                    // state.cartList.push(payload)
                commit(ADD_TO_CART, payload)
                resolve('成功添加商品')
                return
            }
            // oldGoods.count += 1
            commit(ADD_COUNT, oldGoods)
            resolve('当前商品数量+1')
        })
    }
}