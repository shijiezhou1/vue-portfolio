module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
  ? '/vue-portfolio/'
  : '/',
  lintOnSave: process.env.NODE_ENV !== 'production',
  pages: {
    index: {
      // entry for the page
      entry: 'src/main.js',
      // the source template
      template: 'public/index.html',
      // output as dist/index.html
      filename: 'index.html',
      // when using title option,
      // template title tag needs to be <title><%= htmlWebpackPlugin.options.title %></title>
      title: 'Index Page',
      // chunks to include on this page, by default includes
      // extracted common chunks and vendor chunks.
      chunks: ['chunk-vendors', 'chunk-common', 'index']
    },
    // when using the entry-only string format,
    // template is inferred to be
    // and falls back to  if not found.
    // Output filename `is inferred to be .
    // subpage: 'src/subpage/main.js'
  },

  pluginOptions: {
    i18n: {
      locale: 'en',
      fallbackLocale: 'zh',
      localeDir: 'locales',
      enableInSFC: true
    }
  }
};
