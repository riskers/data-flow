var webpack = require('webpack')
var fs = require('fs')
var path = require('path')
var ROOT = path.resolve(__dirname)
var ENV = process.env.ENV

var entry = {
  index: [
    ROOT + '/src/index.js'
  ]
}

module.exports = {
  entry: entry,
  devtool: 'eval-source-map',
  output: {
    path: ROOT + '/dist',
    publicPath: '//localhost:8888/dist/',
    filename: '[name].js'
  },
  devServer: {
    inline: true,
    quiet: true,
    contentBase: "./",
    port: 8888
  },
  module: {
    rules: [
      {
        test: /\.js[x]?$/,
        exclude: /node_modules/,
        use: ['babel-loader?cacheDirectory']
      },
      {
        test: /\.css$/,
        include: ROOT + '/src',
        use: [{
          loader: 'style-loader'
        },
        {
          loader: 'css-loader',
          options: {
            modules: true,
            localIdentName: '[local]___[hash:base64:5]'
          }
        }]
      }
    ]
  },
  plugins: [
    new webpack.NamedModulesPlugin()
  ],
  resolve: {
    extensions: ['.js', '.jsx'],
    alias: {
      'components': ROOT + '/src/components',
      'pages': ROOT + '/src/pages',
    }
  }
}