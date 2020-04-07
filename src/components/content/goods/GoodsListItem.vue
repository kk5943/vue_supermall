<template>
  <div class="goods-item" @click="itemClick">
    <img v-lazy="showImage" @load="imgLoad" />
    <div class="goods-info">
      <p>{{ goodsItem.title }}</p>
      <span class="price">￥{{ goodsItem.price }}</span>
      <span class="collect">{{ goodsItem.cfav }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: '',
  data() {
    return {}
  },
  props: {
    goodsItem: {
      type: Object,
      dafault() {
        return {}
      }
    }
  },
  computed: {
    showImage() {
      return this.goodsItem.image || this.goodsItem.show.img
    }
  },
  watch: {},
  created() {
    // console.log(this.$root)
  },
  methods: {
    // 监听图片加载完成
    imgLoad() {
      console.log('图片加载完成')
      this.$bus.$emit('itemImageLoad')
    },
    // 点击商品
    itemClick() {
      this.$router.push({
        path: '/detail',
        query: {
          iid: this.goodsItem.iid
        }
      })
      console.log(this.goodsItem.iid)
    }
  }
}
</script>

<style lang="less" scoped>
.goods-item {
  width: 48%;
  padding-bottom: 20px;
  // position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  img {
    width: 100%;
    // height: 100%;
    display: block;
    border-radius: 5px;
  }
  .goods-info {
    // position: absolute;
    // bottom: 0;
    // left: 0;
    font-size: 12px;
    line-height: 16px;
    text-align: center;
    margin-top: 15px;
    p {
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
      margin-bottom: 3px;
    }
    .price {
      margin-right: 20px;
      color: var(--color-high-text);
    }
    .collect {
      position: relative;
      &::before {
        content: '';
        position: absolute;
        left: -15px;
        top: -1px;
        width: 13px;
        height: 13px;
        // background: url(~assets/img/common/collect.svg) 0px 0px/14px 14px;
        background-image: url('~assets/img/common/collect.svg');
        background-position: 0, 0;
        background-size: 14px, 14px;
      }
    }
  }
}
</style>
