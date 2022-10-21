//require('dotenv').config({ path: './.env' });
const path = require('path')
const tailwindcss = require('tailwindcss');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = {

    entry: path.resolve(__dirname, './src/index.js'),
  
    devServer:{
        port: 3000,
        hot: true,
        open: true,
        historyApiFallback: true     
    },

    optimization: {
      splitChunks: {
        chunks:"all"
        }
    },

    plugins: [
        new HtmlWebpackPlugin({
            base: '/',
            template: './src/index.html',
          }),

        new BundleAnalyzerPlugin({
          generateStatsFile:false
        }),


    ],

    module :{
            rules: [
                {
                  test: /\.(j|t)sx?$/,
                  resolve: {
                    extensions: ['.js', '.jsx', '.ts', '.tsx'],
                  },
                    use: {
                        loader: 'babel-loader'
                    },
                    exclude: [/node_modules/],
                },

                {
                    test:/\.scss$/,
                    use:['style-loader', 
                         'css-loader', 
                         'sass-loader']
                },
                {
                    test: /\.(c|sc|sa)ss$/,
                    use: [
                      'style-loader',
                      'css-loader',
                      {
                        loader: 'postcss-loader',
                        options: {
                          postcssOptions: {
                            plugins: [tailwindcss],
                          },
                        },
                      },
                      'sass-loader',
                    ],
                  },
                ]
    }

}