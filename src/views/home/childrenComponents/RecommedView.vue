<template>
  <div class="recommented">
    <div v-for="(item,index) in recommends" :key="index" class="recommented-item">
      <a :href="item.link">
        <img :src="item.image" alt />
        <div>{{item.title}}</div>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: '',
  props: {
    recommends: {
      type: Array,
      default() {
          return []
      }
    }
  },
  data() {
    return {}
  },
  computed: {},
  watch: {},
  created() {},
  methods: {}
}
</script>
<style lang='less' scoped>
.recommented {
  display: flex;
  text-align: center;
  padding: 15px 0 20px;
  border-bottom: 10px solid #eee;
  font-size: 12px
}
.recommented-item {
  flex: 1;
  a {
    width: 100%;
    // padding: 10px;
    display: block;
  }
  img {
    width: 70px;
    height: 70px;
    vertical-align: middle;
    margin-bottom: 10px;
  }
}
</style>