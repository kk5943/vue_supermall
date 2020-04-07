<template>
  <div>
    <cart-list-item v-for="(item, index) in cartList" :key="index" :goods-item="item"></cart-list-item>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import CartListItem from './CartListItem'
export default {
  name: '',
  data() {
    return {}
  },
  props: {},
  components: {
    CartListItem
  },
  computed: {
    ...mapGetters(['cartList'])
  },
  watch: {},
  created() {},
  methods: {}
}
</script>

<style lang="less" scoped></style>
