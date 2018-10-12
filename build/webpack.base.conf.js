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
    app: resolve('src/main.js')
  },
  output: {
    path: resolve('dist'),
    publicPath: '/',
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
      },
      {
        from: resolve('src/service-worker.js'),
        to: resolve('dist')
      }
    ]),
    new webpack.HotModuleReplacementPlugin()
  ],
  devServer: {
    hot: true,
    host: 'localhost',
    port: 8080,
    publicPath: '/',
    contentBase: false,
    historyApiFallback: {
      rewrites: [
        { from: /.*/, to: path.posix.join('/', 'index.html') },
      ],
    },
    proxy: {
      '/api': {
        target: 'http://localhost:8000',
        pathRewrite: {'^/api' : ''}
      }
    }
  }
}
