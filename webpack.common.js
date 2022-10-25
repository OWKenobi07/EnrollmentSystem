//require('dotenv').config({ path: './.env' });
const path = require('path')
const glob = require('glob')
const tailwindcss = require('tailwindcss');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');



const PATHS = {
  src: path.join(__dirname, 'src')
}

module.exports = {

    entry: path.resolve(__dirname, './src/index.js'),

    optimization: {
      minimize: true,
      minimizer: [new TerserPlugin()],
    },

    output:{
      path: path.resolve(__dirname, './build'),
      filename: 'bundle.js',
    },

    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html',
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
                        loader: 'babel-loader',
                        // options: {

                        //   plugins: [
                        //     // modularly import the JS and styles that we use from ‘antd’
                        //     [
                        //       'import',
                        //       { libraryName: 'antd', style: true },
                        //       'antd',
                        //     ],
                        //     // modularly import the JS that we use from ‘@ant-design/icons’
                        //     [
                        //       'import',
                        //       {
                        //         libraryName: '@ant-design/icons',
                        //         libraryDirectory: 'es/icons',
                        //       },
                        //       'antd-icons',
                        //     ],
                        //   ]

                        // }

                   
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