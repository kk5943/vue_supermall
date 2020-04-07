<template>
  <div class="shop-info" v-if="Object.keys(shopInfo).length !== 0">
    <div class="shop-top">
      <img :src="shopInfo.shopLogo" alt="" />
      <span class="shop-name">{{ shopInfo.name }}</span>
    </div>
    <div class="shop-middle">
      <div class="shop-middle-item shop-middle-left">
        <div class="info-sells">
          <div class="sells-counts">{{ shopInfo.cSells | countsFormat }}</div>
          <div class="sells-text">总销量</div>
        </div>
        <div class="info-goods">
          <div class="goods-count">{{ shopInfo.cGoods }}</div>
          <div class="goods-text">全部宝贝</div>
        </div>
      </div>
      <div class="shop-middle-item shop-middle-right">
        <table>
          <tr v-for="(item, index) in shopInfo.score" :key="index">
            <td>{{ item.name }}</td>
            <td class="score" :class="{ 'score-better': item.isBetter }">{{ item.score }}</td>
            <td class="better" :class="{ 'better-more': item.isBetter }">{{ item.isBetter ? '高' : '低' }}</td>
          </tr>
        </table>
      </div>
    </div>
    <div class="shop-bottom">
      <a class="enter-shop" :href="shopInfo.shopUrl">进店逛逛</a>
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
    shopInfo: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  filters: {
    countsFormat(value) {
      let result = value
      if (value > 10000) {
        result = (value / 1000).toFixed(1) + '万'
      }
      return result
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
div.shop-info {
  padding: 20px 15px;
  border-bottom: 5px solid #f2f5f8;
  div.shop-top {
    display: flex;
    align-items: center;
    img {
      border-radius: 50%;
      width: 60px;
      height: 60px;
      // display: block;
      border: 1px solid rgba(0, 0, 0, 0.1);
      vertical-align: top;
    }

    span.shop-name {
      margin-left: 5px;
    }
  }

  div.shop-middle {
    display: flex;
    margin-top: 15px;

    .shop-middle-left {
      display: flex;
      align-items: center;
      color: #333;
      text-align: center;
    }
    div.shop-middle-item {
      flex: 1;
      font-size: 16px;
      div.info-sells {
        flex: 1;
        text-align: center;

        div.sells-text {
          margin-top: 5px;
        }
      }

      div.info-goods {
        border-right: 2px solid #eee;
        flex: 1;
        text-align: center;

        div.goods-text {
          margin-top: 5px;
        }
      }
    }

    .shop-middle-right {
      margin-left: 20px;
      color: #333;
      table {
        width: 140px;
        td {
          padding: 6px 0px;
        }
      }
      .score {
        color: #5ea732;
      }
      .score-better {
        color: #f13e3a;
      }
      .better {
        background-color: #5ea732;
        color: #fff;
        text-align: center;
      }
      .better-more {
        background-color: #f13e3a;
      }
    }
  }

  div.shop-bottom {
    margin-top: 20px;
    text-align: center;
    a.enter-shop {
      display: inline-block;
      padding: 10px 50px;
      border-radius: 10px;
      background-color: #eee;
    }
  }
}
</style>
