const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyPlugin = require("copy-webpack-plugin");



module.exports = env => {
  return {
    entry: './src/client/index.js',
    output: {
      filename: '[name].js',
      path: path.resolve(__dirname, 'dist')
    },
    optimization: {
      runtimeChunk: 'single',
      splitChunks: {
        cacheGroups: {
          vendor: {
            test: /[\\/]node_modules[\\/]/,
            name: 'vendors',
            chunks: 'all'
          }
        }
      }
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader'
          }
        },
        {
          test: /\.css$/,
          use: ['style-loader', 'css-loader']
        },
        {
          test: /\.(png|jpg|woff|woff2|eot|ttf|svg|gif)$/,
          use: {
            loader: 'url-loader?limit=100000'
          }
        },
        {
          test: /\.less$/,
          use: ['style-loader', 'css-loader']
        }
      ]
    },
    devServer: {
      port: 3000,
      open: true,
      proxy: {
        '/api': 'http://localhost:8080'
      }
    },
    plugins: [
      new CleanWebpackPlugin(),
      new HtmlWebpackPlugin({
        template: './public/index.html',
        favicon: './public/favicon.ico'
      }),
      new CopyPlugin({
        patterns: [
          { from: "./images", to: "./images" },
          { from: "./sounds", to: "./sounds" },
        ],
      })
    ]
  }
};
