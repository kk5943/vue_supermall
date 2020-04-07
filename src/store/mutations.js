import { ADD_COUNT, ADD_TO_CART } from './mutations-types.js'
export default {
    [ADD_COUNT](state, payload) {
        payload.count += 1
    },
    [ADD_TO_CART](state, payload) {
        payload.checked = true
        state.cartList.push(payload)
    },
    allClick(state, payload) {
        // if (payload) {
        //     state.cartList.forEach(item => (item.checked = false))
        // } else {
        //     state.cartList.forEach(item => (item.checked = true))
        // }
        state.cartList.forEach(item => (item.checked = !payload))
    }
}