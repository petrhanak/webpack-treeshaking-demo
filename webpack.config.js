const webpack = require('webpack')

module.exports = {
  entry: './src/index.js',
  output: {
    path: './build',
    filename: 'bundle.js'
  },
  plugins: [
    // disable to see non-minified with 'unused harmony export' comment
    new webpack.optimize.UglifyJsPlugin()
  ],
}
