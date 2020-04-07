<template>
  <div>
    <swiper class="detail-swiper" v-if="topImage.length">
      <swiper-item v-for="(item, index) in topImage" :key="index" class="swiper-item">
        <img :src="item" alt />
      </swiper-item>
    </swiper>
  </div>
</template>

<script>
import { Swiper, SwiperItem } from 'common/swiper'
export default {
  name: '',
  data() {
    return {}
  },
  props: {
    topImage: {
      type: Array,
      dafault() {
        return []
      }
    }
  },
  components: {
    Swiper,
    SwiperItem
  },
  computed: {},
  watch: {},
  created() {},
  methods: {}
}
</script>

<style lang="less" scoped>
.detail-swiper {
  overflow: hidden;
  height: 250px;
}
</style>
