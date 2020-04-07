<template>
  <div class="toast" v-show="isShow">
    <div>{{ message }}</div>
  </div>
</template>

<script>
export default {
  name: '',
  data() {
    return {
      message: '',
      isShow: false
    }
  },
  props: {},
  components: {},
  computed: {},
  watch: {},
  created() {},
  methods: {
    show(message, duration = 2000) {
      this.message = message
      this.isShow = true
      setTimeout(() => {
        this.message = ''
        this.isShow = false
      }, duration)
    }
  }
}
</script>

<style lang="less" scoped>
.toast {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 999;
  padding: 8px 10px;
  color: #fff;
  background-color: rgba(0, 0, 0, 0.75);
}
</style>
