<template>
  <div class="base-info" v-if="Object.keys(goodsInfo).length !== 0">
    <div class="info-title">
      {{ goodsInfo.title }}
    </div>
    <div class="info-price">
      <span class="new-price">{{ goodsInfo.newPrice }}</span>
      <span class="old-price">{{ goodsInfo.oldPrice }}</span>
      <span class="discount-price" :style="{ backgroundColor: goodsInfo.discountBgColor }">{{ goodsInfo.discountDesc }}</span>
    </div>
    <div class="info-other">
      <span>{{ goodsInfo.columns[0] }}</span>
      <span>{{ goodsInfo.columns[1] }}</span>
      <span>{{ goodsInfo.services[goodsInfo.services.length - 1].name }}</span>
    </div>
    <div class="info-service">
      <span v-for="index in goodsInfo.services.length - 1" :key="index">
        <img :src="goodsInfo.services[index - 1].icon" alt="" />
        <span> {{ goodsInfo.services[index - 1].name }}</span>
      </span>
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
    goodsInfo: {
      type: Object,
      deafult() {
        return {}
      }
    }
  },
  components: {},
  computed: {},
  watch: {},
  created() {},
  methods: {}
}
</script>

<style lang="less" scoped>
div.base-info {
  // margin-top: 15px;
  padding: 15px 8px 0 8px;
  color: #999;
  border-bottom: 5px solid #f2f5f8;
  div.info-title {
    line-height: 25px;
    color: #222;
    font-size: 18px;
  }

  div.info-price {
    margin-top: 20px;
    .new-price {
      font-size: 30px;
      color: var(--color-high-text);
    }
    .old-price {
      margin-left: 10px;
      text-decoration: line-through;
      font-size: 16px;
    }
    .discount-price {
      position: relative;
      top: -4px;
      padding: 5px;
      margin-left: 5px;
      border-radius: 10px;
      color: #fff;
      font-size: 14px;
    }
  }

  div.info-other {
    margin-top: 15px;
    line-height: 30px;
    display: flex;
    justify-content: space-between;
    // text-align: center;
    font-size: 13px;
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
    span {
      // flex: 1;
    }
  }

  div.info-service {
    line-height: 60px;
    font-size: 14px;
    display: flex;
    justify-content: space-between;
    span {
      img {
        width: 14px;
        height: 14px;
      }

      span {
      }
    }
  }
}
</style>
