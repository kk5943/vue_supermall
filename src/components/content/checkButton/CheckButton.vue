<template>
  <div class="check-button" :class="{ checked: isChecked }">
    <img src="~assets/img/cart/tick.svg" alt="" />
  </div>
</template>

<script>
export default {
  name: '',
  data() {
    return {}
  },
  props: {
    isChecked: {
      type: Boolean,
      default: false
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
.check-button {
  border-radius: 50%;
  border: 2px solid #aaa;
}
.checked {
  border-color: red;
  background-color: red;
}
</style>
