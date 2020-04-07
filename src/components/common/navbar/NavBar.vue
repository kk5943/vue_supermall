<template>
  <div id="nav-bar">
        <div class="left"><slot name="left"></slot></div>
        <div class="center"><slot name="center">标题</slot></div>
        <div class="right"><slot name="right"></slot></div>
  </div>
</template>

<script>
export default {
  name: '',
  data () {
    return {
    };
  },
  computed:{
  },
  watch:{
  },
  created () {},
  methods: {},
};
</script>

<style lang='less' scoped>
  #nav-bar {
    display: flex;
    height: 44px;
    line-height: 44px;
    text-align: center;

  }
  .left,.right {
     width: 60px; 
   }
  .center {
    flex: 1
  }
</style>
