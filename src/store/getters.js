export default {
    cartLength(state) {
        return state.cartList.length
    },
    cartList(state) {
        return state.cartList
    },
    totalPrice(state) {
        return state.cartList
            .filter(item => item.checked)
            .reduce((prevValue, item) => {
                return prevValue + item.count * item.price
            }, 0)
            .toFixed(2)
    },
    totalCount(state) {
        return state.cartList.filter(item => item.checked).length
    },
    isSelectAll(state) {
        if (state.cartList.length === 0) return false
        return !state.cartList.find(item => !item.checked)
            // for (let item of state.cartList) {
            //     if (!item.checked) {
            //         return false
            //     }
            //     return true
            // }
    }
}