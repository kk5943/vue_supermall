<template>
  <div>
    <swiper>
      <swiper-item v-for="(item,index) in banners" :key="index">
        <a :href="item.link">
          <img :src="item.image" alt="" @load="imageLoad">
        </a>
      </swiper-item>
    </swiper>
  </div>
</template>

<script>
import { Swiper, SwiperItem } from 'common/swiper'
export default {
  name: '',
  data() {
    return {
      imgLoad: false
    }
  },
  props: {
    banners: {
      type: Array,
      default() {
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
  methods: {
    imageLoad() {
      if(!this.imgLoad)
      this.$emit('swiperImageLoad')
      this.imgLoad = true
    }
  }
}
</script>

<style lang='less' scoped>
</style>
