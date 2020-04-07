<template>
  <div class="goods-item">
    <div class="item-select">
      <check-button :is-checked="goodsItem.checked" @click.native="checkClick"></check-button>
    </div>
    <div class="item-img">
      <img :src="goodsItem.image" alt="" />
    </div>
    <div class="item-info">
      <div class="item-title">
        {{ goodsItem.title }}
      </div>
      <div class="item-desc">
        {{ goodsItem.desc }}
      </div>
      <div class="item-bottom">
        <div class="item-price">￥{{ goodsItem.price }}</div>
        <div class="item-count">X{{ goodsItem.count }}</div>
      </div>
    </div>
  </div>
</template>

<script>
import CheckButton from 'content/checkButton/CheckButton'

export default {
  name: '',
  data() {
    return {}
  },
  props: {
    goodsItem: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  components: {
    CheckButton
  },
  computed: {},
  watch: {},
  created() {},
  methods: {
    checkClick() {
      // console.log('---')
      this.goodsItem.checked = !this.goodsItem.checked
    }
  }
}
</script>

<style lang="less" scoped>
div.goods-item {
  width: 100%;
  display: flex;
  padding: 15px 10px;
  div.item-select {
    width: 14%;
    display: flex;
    justify-content: center;
    align-items: center;
    border-bottom: 1px solid #ccc;
  }

  div.item-img {
    padding: 5px;
    img {
      width: 80px;
      height: 100px;
      display: block;
      border-radius: 7px;
      margin-left: 5px;
    }
  }

  div.item-info {
    font-size: 17px;
    color: #333;
    padding: 5px 10px;
    overflow: hidden;
    div.item-title {
    }
    .item-desc {
      font-size: 14px;
      color: #666;
      margin-top: 15px;
    }
    .item-desc,
    .item-title {
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
    }

    div.item-bottom {
      margin-top: 25px;
      display: flex;
      justify-content: space-between;
      div.item-price {
        color: orangered;
      }

      div.item-count {
      }
    }
  }
}
</style>
