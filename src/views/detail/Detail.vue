<template>
  <div class="detail">
    <!-- <h1>详情页{{$route.query.iid}}</h1> -->
    <detail-nav-bar ref="detailNav" @navControlClick="navControlClick"></detail-nav-bar>
    <scroll :probe-type="3" @scroll="contentScroll" class="wrapper" ref="scroll">
      <detail-swiper :top-image="topImage"></detail-swiper>
      <detail-base-info :goods-info="goodsInfo"></detail-base-info>
      <detail-shop-info :shop-info="shopInfo"></detail-shop-info>
      <detail-goods-info :detail-info="detailInfo" @detailImageLoad="detailImageLoad"></detail-goods-info>
      <detail-params-info ref="params" :params-info="paramsInfo"></detail-params-info>
      <detail-comment-info ref="comment" :comment-info="commentInfo"></detail-comment-info>
      <goods-list ref="recommend" :goods="recommends" class="detail-recommend"></goods-list>
    </scroll>
    <detail-bottom-bar @addToCart="addCart"></detail-bottom-bar>
    <back-top @click.native="backClick" v-show="isShowTop"></back-top>
  </div>
</template>

<script>
import Scroll from 'common/scroll/Scroll'

import DetailNavBar from './childrenComponents/DetailNavBar'
import DetailSwiper from './childrenComponents/DetailSwiper'
import DetailBaseInfo from './childrenComponents/DetailBaseInfo'
import DetailShopInfo from './childrenComponents/DetailShopInfo'
import DetailGoodsInfo from './childrenComponents/DetailGoodsInfo'
import DetailParamsInfo from './childrenComponents/DetailParamsInfo'
import DetailCommentInfo from './childrenComponents/DetailCommentInfo'
import DetailBottomBar from './childrenComponents/DetailBottomBar'

import { getDetail, getRecommend, Goods } from 'utils/detail.js'
import { imageLoadListenerMixin, backTopMixin } from 'utils/mixin.js'
import { debounce } from 'utils/utils.js'
import GoodsList from 'content/goods/GoodsList'
export default {
  name: 'Detail',
  data() {
    return {
      iid: null,
      topImage: [],
      goodsInfo: {},
      shopInfo: {},
      detailInfo: {},
      paramsInfo: {},
      commentInfo: {},
      recommends: [],
      themesTopYs: [],
      themeTopY: null,
      currentIndex: 0
    }
  },
  props: {},
  mixins: [imageLoadListenerMixin, backTopMixin],
  components: {
    Scroll,
    DetailNavBar,
    DetailSwiper,
    DetailBaseInfo,
    DetailShopInfo,
    DetailGoodsInfo,
    DetailParamsInfo,
    DetailCommentInfo,
    GoodsList,
    DetailBottomBar
  },
  computed: {},
  watch: {},
  created() {
    this.getDetaiData()
    this.getRecommend()
  },
  mounted() {
    this.$nextTick(() => {
      this.themeTopY = debounce(() => {
        this.themesTopYs = []
        this.themesTopYs.push(0)
        this.themesTopYs.push(this.$refs.params.$el.offsetTop)
        this.themesTopYs.push(this.$refs.comment.$el.offsetTop)
        this.themesTopYs.push(this.$refs.recommend.$el.offsetTop)
        this.themesTopYs.push(Number.MAX_VALUE)
        console.log(this.themesTopYs)
      })
    })
  },
  destroyed() {
    this.$bus.$off('itemImageLoad', this.imageLoadListener)
  },
  methods: {
    // 获取商品详情数据
    getDetaiData() {
      // 获取iid
      this.iid = this.$route.query.iid
      // 请求详情数据
      getDetail(this.iid).then(res => {
        console.log(res.result)
        const data = res.result

        // 获取轮播图数据
        this.topImage = data.itemInfo.topImages

        // 商品详情
        this.goodsInfo = new Goods(data.itemInfo, data.columns, data.shopInfo.services)

        // 店铺信息
        this.shopInfo = data.shopInfo

        // 商品信息
        this.detailInfo = data.detailInfo

        // 商品参数信息
        this.paramsInfo = data.itemParams

        // 商品评论信息
        if (data.rate.cRate) {
          this.commentInfo = data.rate.list[0]
        }
      })
    },
    // 获取推荐商品数据
    getRecommend() {
      getRecommend().then(res => {
        console.log(res)
        this.recommends = res.data.list
      })
    },
    // 监听图片加载完成
    detailImageLoad() {
      this.newRefresh()
      this.themeTopY()
    },
    navControlClick(index) {
      // console.log(index)
      this.$refs.scroll.scrollTo(0, -this.themesTopYs[index], 200)
    },
    contentScroll(position) {
      // console.log(position)
      const positionY = -position.y
      for (let i = 0; i < this.themesTopYs.length - 1; i++) {
        // console.log(i)
        if (this.currentIndex !== i && positionY > this.themesTopYs[i] && positionY < this.themesTopYs[i + 1]) {
          this.currentIndex = i
          this.$refs.detailNav.currentIndex = this.currentIndex
        }
      }
      // 是否显示回到顶部
      this.listenShowBack(position)
    },
    addCart() {
      // 获取购物车需要展示的商品信息
      let cartInfo = {}
      cartInfo.image = this.topImage[0]
      cartInfo.title = this.goodsInfo.title
      cartInfo.price = this.goodsInfo.nowPrice
      cartInfo.desc = this.goodsInfo.desc
      cartInfo.iid = this.iid

      // 将商品添加到购物车
      this.$store.dispatch('addCart', cartInfo).then(res => {
        console.log(res)
        this.$toast.show('添加商品成功')
      })
    }
  }
}
</script>

<style lang="less" scoped>
.detail {
  height: 100vh;
  position: relative;
  z-index: 1;
  background-color: #fff;
}
.wrapper {
  height: calc(100vh - 44px - 49px);
  overflow: hidden;
}
</style>
