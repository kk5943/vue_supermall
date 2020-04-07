<template>
  <div class="comment-info">
    <div class="info-header">
      <div>用户评价</div>
      <div class="load-more">
        <span>更多</span>
        <i>></i>
      </div>
    </div>
    <div class="info-user">
      <img :src="commentInfo.user.avatar" v-if="commentInfo.user" alt="" />
      <span v-if="commentInfo.user">{{ commentInfo.user.uname }}</span>
    </div>
    <div class="info-content">
      <p>{{ commentInfo.content }}</p>
      <div class="info-detail">
        <span class="info-created">{{ (commentInfo.created * 1000) | dateformat('YYYY / MM / DD HH:mm:ss') }}</span>
        <span class="info-style">{{ commentInfo.style }}</span>
      </div>
    </div>
    <div class="info-image" v-if="commentInfo.images">
      <img :src="item" alt="" v-for="(item, index) in commentInfo.images" :key="index" />
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
    commentInfo: {
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
  methods: {}
}
</script>

<style lang="less" scoped>
div.comment-info {
  padding: 20px 25px;
  color: #333;
  // border-bottom: 2px solid rgba(100, 100, 100, 0.1);
  div.info-header {
    display: flex;
    justify-content: space-between;
    font-size: 18px;
    line-height: 30px;
    border-bottom: 1px solid rgba(100, 100, 100, 0.2);
    div {
    }

    div.load-more {
      padding-bottom: 10px;

      span {
      }

      i {
        position: relative;
        top: -2px;
        font-style: normal;
        margin-left: 6px;
      }
    }
  }

  div.info-user {
    padding: 20px 0;
    display: flex;
    align-items: center;
    img {
      width: 42px;
      height: 42px;
      display: block;
    }

    span {
      margin-left: 10px;
      font-style: 14px;
    }
  }

  div.info-content {
    p {
      font-size: 14px;
      line-height: 1.5;
    }

    div.info-detail {
      padding: 10px 0;
      span.info-created {
      }

      span.info-style {
        margin-left: 10px;
      }
    }
  }

  div.info-image {
    display: flex;
    width: 100%;
    img {
      // display: block;
      width: 70px;
      height: 70px;
      vertical-align: top;
      margin-left: 5px;
    }
  }
}
</style>
