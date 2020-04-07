<template>
  <div>
    <nav-bar class="nav-bar">
      <div slot="left" class="back" @click="backClick">
        <img src="~assets/img/common/back.svg" alt />
      </div>
      <div slot="center" class="title">
        <div
          v-for="(item, index) in titles"
          :key="item"
          class="title-item"
          :class="{ active: currentIndex === index }"
          @click="titleClick(index)"
        >
          {{ item }}
        </div>
      </div>
    </nav-bar>
  </div>
</template>

<script>
import NavBar from 'common/navbar/NavBar'
export default {
  name: '',
  data() {
    return {
      titles: ['商品', '参数', '评论', '推荐'],
      currentIndex: 0
    }
  },
  props: {},
  components: {
    NavBar
  },
  computed: {},
  watch: {},
  created() {},
  methods: {
    titleClick(index) {
      this.currentIndex = index
      this.$emit('navControlClick', index)
    },
    backClick() {
      this.$router.go(-1)
    }
  }
}
</script>

<style lang="less" scoped>
.nav-bar {
  // background-color: pink;
  .back {
    height: 100%;
    padding-top: 5px;
  }
  .title {
    display: flex;
  }
  .title-item {
    flex: 1;
    font-size: 14px;
  }
  .active {
    color: var(--color-high-text);
  }
}
</style>
