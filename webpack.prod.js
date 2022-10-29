const { merge } = require('webpack-merge');
const webpack = require('webpack');
const { CleanWebpackPlugin }= require('clean-webpack-plugin');
const common = require('./webpack.common.js');
//const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;


module.exports = merge(common, {
  
  mode:"production",
  devtool: false,

  optimization:{
    nodeEnv: 'production'
  },
  
  plugins: [

    new CleanWebpackPlugin(),
    //new BundleAnalyzerPlugin(),  
    new webpack.DefinePlugin({
        'process.env.NODE_ENV': JSON.stringify('production')
    })
  ],

});