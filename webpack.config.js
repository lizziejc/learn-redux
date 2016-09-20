
const path = require('path');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

/***
 * * Webpack configuration
 * * */
module.exports = [{
  entry: {
    index: './www/components/index.jsx'
  },
  output: {
    path: path.join(__dirname, 'public', 'js'),
    filename: '[name].js'
  },
  module: {
    loaders: [{
      test: /\.jsx?$/,
      exclude: /node_modules/,
      loader: 'babel',
      query: {
        presets: ['es2015', 'react'],
        cacheDirectory: true
      }
    }]
  }
}, {
  entry: {
    index: './www/style/index.scss'
  },
  output: {
    path: path.join(__dirname, "public", 'css'),
    filename: '[name].css'
  },
  module: {
    loaders: [{
      test: /\.scss$/,
      loader: ExtractTextPlugin.extract('style', 'css!sass')
    }]
  },
  plugins: [
    new ExtractTextPlugin("[name].css")
  ]
}];
