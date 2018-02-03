const path = require('path');

var HtmlWebpackPlugin = require('html-webpack-plugin');
var CopyWebpackPlugin = require('copy-webpack-plugin');
var CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
  entry: './src/main.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },

  module: {
    loaders: [
      { test: /\.js$/, loader: 'babel-loader' },
      // { test: /\.png|jpg|jpeg|gif$/, loader: 'file-loader' },
      { test: /\.css$/, loader: 'style-loader!css-loader' }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
      title: 'Roonyx Updater',
      filename: 'index.html',
      inject: 'body',
      hash: true
    }),
    new CopyWebpackPlugin([
      { from: 'src/manifest.json' },
      { from: 'src/assets', to: 'assets' }
    ]),
    new CleanWebpackPlugin('dist')
  ]
};


