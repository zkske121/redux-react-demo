var path = require('path')
var webpack = require('webpack')

module.exports = {
  entry: {
    app:'./index',
    vendor: [
      'react',
      'react-dom',
      'react-redux',
      'antd'
    ]
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/static/'
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin("vendor", "vendor.bundle.js")
  ],
  module: {
    loaders: [
      {
        test: /\.js$/,
        loaders: ['babel'],
        exclude: /(node_modules|bower_components)/
      },
      {
        test: /\.css$/, 
        loader: "style!css"
      }
    ]
  }
}