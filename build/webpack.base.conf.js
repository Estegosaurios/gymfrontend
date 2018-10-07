const path = require('path');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

function resolve(dir) {
  return path.join(__dirname, '..', dir);
}

module.exports = {
  mode: 'development',
  entry: {
    app: resolve('src/main.js'),
  },
  output: {
    path: path.join(__dirname, '../dist'),
    filename: '[name].bundle.js'
  },
  resolve: {
    extensions: ['.js', '.vue', '.json'],
    alias: {
      '@': resolve('src'),
      'store': resolve('src/store'),
      'router': resolve('src/router')
    }
  },
  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.(js|vue)$/,
        loader: 'eslint-loader',
        include: [resolve('src')],
        exclude: /node_modules/
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        exclude: /node_modules/
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        include: [resolve('src')]
      }
    ]
  },
  plugins: [
    new VueLoaderPlugin(),
    new HtmlWebpackPlugin({
      filename: resolve('dist/index.html'),
      template: resolve('public/index.html'),
      inject: true
    }),
    new CopyWebpackPlugin([
      {
        from: resolve('public/**/*'),
        to: resolve('dist'),
        ignore: ['*.html']
      }
    ]),
  ],
  devServer: {
    contentBase: resolve('dist'),
    compress: true,
    port: 8080,
    hot: true,
    historyApiFallback: true
  }
}
