const { HotModuleReplacementPlugin } = require('webpack')
const path = require('path')
const { merge } = require('webpack-merge')
const common = require('./webpack.common.config.js')

const config = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    historyApiFallback: true,
    contentBase: path.join(__dirname, "public/"),
    hotOnly: true
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: 'react-hot-loader/webpack',
        include: /node_modules/
      }
    ]
  },
  resolve: {
    extensions: ["*", ".js", ".jsx"]
  },
  plugins: [
    new HotModuleReplacementPlugin()
  ]
})

module.exports = config
