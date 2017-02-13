var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var LIBRARY_NAME = 'App';

module.exports = {
  context: __dirname,
  entry: {
    javascript: './src/scripts/index.js'
  },

  output: {
    path: __dirname + '/build',
    filename: 'bundle.js',
    library: LIBRARY_NAME,
  },
  devtool: 'source-map',
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query:{
          presets: ['react', 'es2015']
        }
      },
      {
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract('style-loader', 'css-loader!sass-loader')
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin('index.css')
  ]
};
