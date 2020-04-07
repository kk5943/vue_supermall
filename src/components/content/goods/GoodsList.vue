<template>
  <div class="goods-list">
    <goods-list-item v-for="(item,index) in goods" :key="index" :goods-item="item"></goods-list-item>
  </div>
</template>

<script>
import GoodsListItem from 'content/goods/GoodsListItem'
export default {
  name: '',
  data() {
    return {}
  },
  props: {
    goods: {
      type: Array,
      default() {
        return []
      }
    }
  },
  computed: {},
  components: {
    GoodsListItem
  },
  watch: {},
  created() {},
  methods: {}
}
</script>

<style lang='less' scoped>
.goods-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  padding: 2px;
}
</style>
