'use strict';

var path = require('path');
var webpack = require('webpack');
module.exports = {
  mode: 'development',
  entry: './src/js/main.js',
  output: {
    path: path.resolve(__dirname, 'src/js'),
    filename: 'main.bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        query: {
          presets: ['@babel/preset-env']
        }
      }
    ]
  },
  stats: {
    colors: true
     },
    watch: true,
    devtool: 'source-map'
 };
