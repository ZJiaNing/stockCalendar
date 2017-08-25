var path = require('path')
var webpack = require('webpack')
// 这个插件是用来将js、css抽离出来的
// var ExtractTextPlugin = require("extract-text-webpack-plugin");
// 这个插件是生成独立的html的——不要和上面的那个记混了
// 当使用这个插件的是需要，需要将publicPath指向“/”！！！
var HtmlWebpackPlugin = require('html-webpack-plugin');
console.log(__dirname);

module.exports = {
  entry: path.resolve(__dirname, './main.js'),
  output: {
    filename: 'build.js'
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          loaders: {
          }
          // other vue-loader options go here
        }
      },
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader'
      },
      {
        test: /\.(png|jpg|gif|svg|eot|svg|ttf|woff|woff2)(\?\S*)?$/,
        loader: 'file-loader'
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    extensions: [' ', 'css', '.js', '.vue'],    // 第一个单引号里面有一个空格的
    alias: {
      'vue$': 'vue/dist/vue'
    }
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'stock calendar',
      filename: 'src/index.html',
      template: path.resolve(__dirname, '../src/index.html'),
      inject: true
    })
  ],
  devServer: {
    historyApiFallback: true,
    noInfo: true
  },
  performance: {
    hints: false
  },
  devtool: '#eval-source-map'
}
