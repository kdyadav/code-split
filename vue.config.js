module.exports = {
    // tweak internal webpack configuration.
    // see https://github.com/vuejs/vue-cli/blob/dev/docs/webpack.md
    chainWebpack: config => {
      // If you wish to remove the standard entry point
      config.entryPoints.delete('app')
  
      // then add your own
      config.entry('admin')
        .add('src/admin/index.js')
        .end()
      .entry('public')
        .add('src/public/index.js')
        .end()
    }
  }