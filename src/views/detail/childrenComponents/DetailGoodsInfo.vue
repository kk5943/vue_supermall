<template>
  <div class="goods-info" v-if="Object.keys(detailInfo).length !== 0">
    <div class="info-desc clear-fix">
      <div class="start"></div>
      <div class="desc">{{ detailInfo.desc }}</div>
      <div class="end"></div>
    </div>
    <div v-for="(item, index) in detailInfo.detailImage" :key="index">
      <div class="info-key">{{ item.key }}</div>
      <div class="info-list">
        <img @load="imageLoad" v-for="(item2, index2) in item.list" :key="index2" :src="item2" alt="" />
      </div>
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
    detailInfo: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  components: {},
  computed: {},
  watch: {},
  created() {},
  methods: {
    imageLoad() {
      // console.log('hhh')
      this.$emit('detailImageLoad')
    }
  }
}
</script>

<style lang="less" scoped>
div.goods-info {
  width: 100%;
  padding: 20px 25px;
  border-bottom: 5px solid #f2f5f8;
  div.info-desc {
    padding: 10px 0;
    div.start,
    div.end {
      position: relative;
      width: 120px;
      height: 2px;
      background-color: #ddd;
    }
    div.start {
      float: left;
      &::before {
        left: 0;
      }
    }
    div.start::before,
    div.end::after {
      content: '';
      position: absolute;
      bottom: 0;
      width: 5px;
      height: 5px;
      background-color: #000;
    }
    div.desc {
      margin: 15px 0;
      line-height: 22px;
    }

    div.end {
      float: right;
      &::after {
        right: 0;
      }
    }
  }

  div {
    div.info-key {
      margin-top: 15px;
    }

    div.info-list {
      margin-top: 10px;
      img {
        padding: 5px 0;
        width: 100%;
        display: block;
      }
    }
  }
}
</style>
