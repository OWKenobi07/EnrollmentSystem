const Dotenv = require('dotenv-webpack')
const path = require('path')
const tailwindcss = require('tailwindcss');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');



module.exports = {

    entry: path.resolve(__dirname, './src/index.js'),

    optimization: {
      minimize: true,
      minimizer: [new TerserPlugin()],

    },

    output:{
      path: path.resolve(__dirname, "build"),
      filename: "bundle.js",
    },

    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html',
          }),
        new Dotenv(),

    ],

    module :{
            rules: [
                {
                  test: /\.(j|t)sx?$/,
                  resolve: {
                    extensions: ['.js', '.jsx', '.ts', '.tsx'],
                  },
                    use: {
                        loader: 'babel-loader',
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