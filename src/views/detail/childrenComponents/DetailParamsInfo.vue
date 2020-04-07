<template>
  <div class="params-info" v-if="Object.keys(paramsInfo).length !== 0">
    <table class="info-size" v-for="(table, index) in paramsInfo.rule.tables" :key="index">
      <tr v-for="(tr, indey) in table" :key="indey">
        <td v-for="(td, indez) in tr" :key="indez">{{ td }}</td>
      </tr>
    </table>

    <table class="info-params">
      <tr v-for="(item, index) in paramsInfo.info.set" :key="index">
        <td class="info-key">{{ item.key }}</td>
        <td class="info-value">{{ item.key }}</td>
      </tr>
    </table>

    <div v-if="paramsInfo.info.image">
      <img :src="paramsInfo.info.image[0]" alt="" />
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
    paramsInfo: {
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
div.params-info {
  padding: 25px 25px;
  border-bottom: 2px solid rgba(100, 100, 100, 0.1);
  table.info-size {
    width: 100%;
    border-collapse: collapse;
    tr {
      height: 45px;
      td {
        border-bottom: 1px solid rgba(100, 100, 100, 0.1);
      }
    }
  }

  table.info-params {
    width: 100%;
    border-collapse: collapse;
    border-top: 1px solid rgba(0, 0, 0, 0.1);
    tr {
      height: 45px;
      td {
        border-bottom: 1px solid rgba(100, 100, 100, 0.1);
      }
      td:last-child {
        border: none;
      }
      td.info-key {
      }

      td.info-value {
        color: var(--color-tint);
      }
    }
  }

  div {
    img {
      width: 100%;
      display: block;
    }
  }
}
</style>
