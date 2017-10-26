var webpack = require('webpack')
var HtmlWebpackPlugin = require('html-webpack-plugin');
var Dashboard = require('webpack-dashboard');
var DashboardPlugin = require('webpack-dashboard/plugin');

var dashboard = new Dashboard();


module.exports = {

  context: __dirname + '/src', 
  entry: [
    './index.js', 
  ],
  output: {
    filename: 'app.js', 
    path: __dirname + '/dist' 
  },

  resolve: {
    extensions: ['.js', '.jsx', '.json', '.css']
  },
  module: {
    loaders: [
      {
        test: /\.bundle\.js$/,
        loader: 'bundle-loader',
        options: {
          lazy: true
         }
      },
      {
        test: /\.js$/,
        exclude: [/node_modules/],
        loader: 'babel-loader',
        query: {
          presets: ["env", "react", "stage-0"],
          plugins: [
              ["transform-decorators-legacy"],
              ["transform-runtime"]
            ]
          }
      },
    ]
  },
  
  devServer: {
    hot: true,
    quiet: true, 
    historyApiFallback: true,
  },

  plugins: [
    new DashboardPlugin(dashboard.setData),
    new HtmlWebpackPlugin({
      title: 'Demo',
      filename: 'index.html',
      template: './index.html',
      inject: true
    }),
  ]
}