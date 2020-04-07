<template>
  <div class="bottom-bar">
    <div class="check-wrap">
      <check-button :is-checked="isSelectAll" @click.native="allClick" class="check-button"></check-button>
      <span>全选</span>
    </div>
    <div class="select-all-count">合计: {{ totalPrice }}</div>
    <div class="caluate">去结算: ({{ totalCount }})</div>
  </div>
</template>

<script>
import CheckButton from 'content/checkButton/CheckButton'
import { mapGetters } from 'vuex'

export default {
  name: '',
  data() {
    return {}
  },
  props: {},
  components: {
    CheckButton
  },
  computed: {
    ...mapGetters(['totalPrice', 'totalCount', 'isSelectAll'])
  },
  watch: {},
  created() {},
  methods: {
    allClick() {
      // console.log('---')
      this.$store.commit('allClick', this.isSelectAll)
    }
  }
}
</script>

<style lang="less" scoped>
div.bottom-bar {
  display: flex;
  height: 40px;
  line-height: 40px;
  background-color: #eee;
  position: fixed;
  left: 0;
  right: 0;
  bottom: 49px;
  div.check-wrap {
    display: flex;
    align-items: center;
    margin-left: 10px;
    .check-button {
      width: 20px;
      height: 20px;
      line-height: 20px;
    }

    span {
      margin-left: 5px;
    }
  }

  div.select-all-count {
    flex: 1;
    margin-left: 30px;
  }

  div.caluate {
    width: 100px;
    height: 40px;
    color: #fff;
    text-align: center;
    background-color: #f01212;
  }
}
</style>
