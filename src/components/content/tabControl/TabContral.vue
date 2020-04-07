<template>
  <div class="tab-contral">
    <div
      v-for="(item,index) in titles"
      :key="item"
      class="tab-contral-item"
      :class="{active: index===currentIndex}"
      @click="itemClick(index)"
    >
      <span>{{item}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: '',
  data() {
    return {
      // 当前的索引
      currentIndex: 0
    }
  },
  props: {
    titles: {
      type: Array,
      default() {
        return []
      }
    }
  },
  computed: {},
  watch: {},
  created() {},
  methods: {
    itemClick(index) {
      this.currentIndex = index
      this.$emit('tabClick', index)
    }
  }
}
</script>

<style lang='less' scoped>
.tab-contral {
  display: flex;
  font-size: 14px;
  text-align: center;
  height: 40px;
  line-height: 40px;
  background-color: #fff;
  .tab-contral-item {
    flex: 1;
    span {
      padding: 5px;
    }
  }
  .active {
    color: var(--color-high-text);
    span {
      border-bottom: 1px solid var(--color-tint);
    }
  }
}
</style>
