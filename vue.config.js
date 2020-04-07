module.exports = {
  lintOnSave: false,
  configureWebpack: {
    resolve: {
      alias: {
        assets: '@/assets',
        components: '@/components',
        content: 'components/content',
        common: 'components/common',
        utils: '@/utils',
        views: '@/views'
      }
    }
  }
}
