<template>
  <div class="bottom-bar">
    <div class="bar-item bar-left">
      <div>
        <i class="icon service"></i>
        <span>客服</span>
      </div>
      <div>
        <i class="icon shop"></i>
        <span>店铺</span>
      </div>
      <div>
        <i class="icon collect"></i>
        <span>收藏</span>
      </div>
    </div>
    <div class="bar-item bar-right">
      <div class="cart" @click="addToCart">加入购物车</div>
      <div class="buy">购买</div>
    </div>
  </div>
</template>

<script>
export default {
  name: '',
  data() {
    return {}
  },
  props: {},
  components: {},
  computed: {},
  watch: {},
  created() {},
  methods: {
    addToCart() {
      this.$emit('addToCart')
    }
  }
}
</script>

<style lang="less" scoped>
div.bottom-bar {
  height: 49px;
  background-color: #fff;
  display: flex;
  text-align: center;
  div.bar-item {
    display: flex;
    flex: 1;
    align-items: center;
    div {
      flex: 1;
    }
  }
  .bar-left {
    div {
      .icon {
        display: block;
        width: 22px;
        height: 22px;
        margin: 10px auto 0;
        background: url('~assets/img/detail/detail_bottom.png') 0 0 / cover;
      }
      .service {
        background-position: 0 -54px;
      }
      .shop {
        background-position: 0 -98px;
      }
      .collect {
      }
      span {
        font-size: 13px;
      }
    }
  }

  .bar-right {
    line-height: 49px;

    div.cart {
      background-color: #ffe817;
      color: #333;
    }

    div.buy {
      background-color: #f69;
      color: #fff;
    }
  }
}
</style>
