<template>
  <div class="cart">
    <nav-bar class="nav-bar">
      <div slot="center">购物车 ({{ cartLength }})</div>
    </nav-bar>
    <scroll class="wrapper">
      <cart-list></cart-list>
    </scroll>
    <cart-bottom-bar></cart-bottom-bar>
  </div>
</template>

<script>
import NavBar from 'common/navbar/NavBar'
import CartList from './childrenComponents/CartList'
import Scroll from 'common/scroll/Scroll'
import CartBottomBar from './childrenComponents/CartBottomBar'
import { mapGetters } from 'vuex'
export default {
  name: '',
  data() {
    return {}
  },
  props: {},
  components: {
    NavBar,
    CartList,
    Scroll,
    CartBottomBar
  },
  computed: {
    ...mapGetters(['cartLength'])
  },
  watch: {},
  created() {},
  methods: {}
}
</script>
<style lang="less" scoped>
.cart {
  height: 100vh;
}
.nav-bar {
  background-color: var(--color-tint);
  height: 44px;
  color: #fff;
}
// .wrapper {
//   height: calc(100vh - 44px - 49px);
//   overflow: hidden;
// }
.wrapper {
  position: absolute;
  overflow: hidden;
  left: 0;
  right: 0;
  top: 44px;
  bottom: 49px;
}
</style>
