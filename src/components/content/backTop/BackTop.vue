<template>
  <div class="back-top">
      <img src="~assets/img/common/top.png" alt="">
  </div>
</template>

<script>
export default {
  name: '',
  data() {
    return {}
  },
  props: {},
  computed: {},
  watch: {},
  created() {},
  methods: {}
}
</script>

<style lang='less' scoped>
.back-top {
  position: fixed;
  z-index: 99;
  right: 36px;
  bottom: 64px;
  img {
    width: 43px;
    height: 43px;
  }
}
</style>
