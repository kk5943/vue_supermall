<template>
  <div id="app">
    <keep-alive exclude="Detail">
      <router-view></router-view>
    </keep-alive>
    <main-tab-bar></main-tab-bar>
  </div>
</template>

<script>
import MainTabBar from 'content/mainTabBar/MainTabBar'
export default {
  name: '',
  data() {
    return {}
  },
  components: {
    MainTabBar
  },
  computed: {},
  watch: {},
  created() {},
  methods: {}
}
</script>

<style>
@import 'assets/css/base.css';
</style>
