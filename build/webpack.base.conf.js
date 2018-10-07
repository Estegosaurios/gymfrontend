const path = require('path');
const webpack = require('webpack');
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
      },
      {
        test: /\.scss$/,
        use: [
          'vue-style-loader',
          {
            loader: 'css-loader',
            options: { importLoaders: 1 }
          },
          'postcss-loader',
          'sass-loader'
        ]
      }
    ]
  },
  devtool: '#cheap-module-eval-source-map',
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
    new webpack.HotModuleReplacementPlugin()
  ],
  devServer: {
    contentBase: resolve('dist'),
    port: 8080,
    historyApiFallback: true,
    hot: true
  }
}
