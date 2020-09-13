const { merge } = require('webpack-merge')
const common = require('./webpack.common.config.js')

const config = merge(common, {
  mode: 'production',
  performance: {
    maxAssetSize: 5000000,
    maxEntrypointSize: 5000000
  },
  stats: 'errors-warnings'
})

module.exports = config
