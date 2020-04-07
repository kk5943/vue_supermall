<template>
  <div id="home">
    <!-- 导航区域 -->
    <nav-bar class="nav-bar">
      <div slot="center">女人坊</div>
    </nav-bar>
    <tab-contral
      v-show="isTabFixed"
      ref="tabContral1"
      class="tab-control"
      :titles="['流行', '新款', '精选']"
      @tabClick="handleTabClick"
    ></tab-contral>
    <!-- 滚动区域 -->
    <scroll class="wrapper" ref="scroll" :probeType="3" :pullUpLoad="true" @pullingUp="handlePullUpLoad" @scroll="backTop">
      <!-- 轮播图区域 -->
      <home-swiper :banners="banners" @swiperImageLoad="swiperImageLoad"></home-swiper>

      <!-- 信息推荐区域 -->
      <recommed-view :recommends="recommends"></recommed-view>
      <feature-view></feature-view>
      <!-- tab标签页 -->
      <tab-contral ref="tabContral2" :titles="['流行', '新款', '精选']" @tabClick="handleTabClick"></tab-contral>

      <!-- 商品列表区域 -->
      <goods-list :goods="showGoods"></goods-list>
    </scroll>
    <back-top @click.native="backClick" v-show="isShowTop"></back-top>
  </div>
</template>

<script>
import HomeSwiper from 'views/home/childrenComponents/HomeSwiper'
import RecommedView from 'views/home/childrenComponents/RecommedView'
import FeatureView from 'views/home/childrenComponents/FeatureView'

import NavBar from 'common/navbar/NavBar'
import TabContral from 'content/tabControl/TabContral'
import GoodsList from 'content/goods/GoodsList'
import Scroll from 'common/scroll/Scroll'
import BackTop from 'content/backTop/BackTop'

import { getHomeMultiData, getHomeGoodsData } from 'utils/home.js'
import { imageLoadListenerMixin } from 'utils/mixin.js'

export default {
  name: '',
  data() {
    return {
      // 轮播图数据
      banners: [],

      // 推荐信息数据
      recommends: [],

      // 商品列表数据结构
      goods: {
        pop: { pagenum: 0, list: [] },
        new: { pagenum: 0, list: [] },
        sell: { pagenum: 0, list: [] }
      },
      // 当前类别
      currentType: 'pop',
      // 是否展示返回顶部
      isShowTop: false,
      saveY: 0,
      TabContralOffsetTop: 0,
      isTabFixed: false
    }
  },
  mixins: [imageLoadListenerMixin],
  components: {
    HomeSwiper,
    RecommedView,
    FeatureView,
    NavBar,
    TabContral,
    GoodsList,
    Scroll,
    BackTop
  },
  computed: {
    showGoods() {
      return this.goods[this.currentType].list
    }
  },
  watch: {},
  activated() {
    // console.log('home激活');
    this.$refs.scroll.scrollTo(0, this.saveY, 0)
    this.$refs.scroll.refresh()
  },
  deactivated() {
    //  console.log('home失效');
    // 记录离开时候的y值
    this.saveY = this.$refs.scroll.getScrollY
    // console.log( this.saveY );

    // 取消全局事件的监听
    this.$bus.$off('itemImageLoad', this.imageLoadListener)
  },
  created() {
    // 请求多类数据
    this.getHomeMultiData()
    //  请求商品数据
    this.getHomeGoodsData('pop')
    this.getHomeGoodsData('new')
    this.getHomeGoodsData('sell')
  },
  mounted() {
    // 1.图片加载完成的事件监听
    console.log('mounted')
  },
  updated() {
    console.log('updated')
  },
  methods: {
    // 事件监听处理相关方法

    // tab标签页点击处理
    handleTabClick(index) {
      switch (index) {
        case 0:
          this.currentType = 'pop'
          break
        case 1:
          this.currentType = 'new'
          break
        case 2:
          this.currentType = 'sell'
          break
      }
      this.$refs.tabContral1.currentIndex = index
      this.$refs.tabContral2.currentIndex = index
    },
    // 监听轮播图加载
    swiperImageLoad() {
      this.TabContralOffsetTop = this.$refs.tabContral2.$el.offsetTop
    },
    // 回到顶部
    backClick() {
      this.$refs.scroll.scrollTo(0, 0, 300)
    },
    // 处理上拉加载数据
    handlePullUpLoad() {
      this.getHomeGoodsData(this.currentType)
    },
    // 监听滚动到一定距离
    backTop(position) {
      // console.log(position)
      // 判断backtop按钮是否显示
      this.isShowTop = -position.y > 1500
      // 决定tabcontrol是否产生吸顶效果
      this.isTabFixed = -position.y > this.TabContralOffsetTop
    },

    // 网络请求相关方法
    // 获取首页轮播图和信息面板数据
    async getHomeMultiData() {
      const res = await getHomeMultiData()
      // console.log(res)
      this.banners = res.data.banner.list
      this.recommends = res.data.recommend.list

      // 下次更新DOM时,获取新的tabOffsetTop值(不保险,可以在updated钩子中获取)
      // this.$nextTick(() => {
      //   this.tabOffsetTop = this.$refs.tabControl.$el.offsetTop
      // })
    },
    // 商品列表数据
    async getHomeGoodsData(type) {
      const res = await getHomeGoodsData(type, this.goods[type].pagenum + 1)
      console.log(res)
      this.goods[type].pagenum += 1
      this.goods[type].list.push(...res.data.list)

      // 完成上拉加载更多
      this.$refs.scroll && this.$refs.scroll.finishPullUp()
    }
  }
}
</script>

<style lang="less" scoped>
#home {
  // padding-top: 44px;
  position: relative;
  height: 100vh;
}
.nav-bar {
  background-color: var(--color-tint);
  font-weight: 600;
  color: #fff;
  /*在使用浏览器原生滚动时, 为了让导航不跟随一起滚动*/
  // position: fixed;
  // left: 0;
  // top: 0;
  // right: 0;
  // z-index: 99;
}

// .tab-control {
//   position: sticky;
//   top: 40px;
// }
.tab-control {
  position: relative;
  z-index: 9;
}
.wrapper {
  position: absolute;
  overflow: hidden;
  left: 0;
  right: 0;
  top: 44px;
  bottom: 49px;
}
</style>
