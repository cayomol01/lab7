const path = require('path');
const HTMLWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    
    entry: {
        index: "./src/index.js"
     },
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, "dist"),
    },
    

    module: {
        rules: [
          {
            test: /\.s[ac]ss$/i,
            use: [
              // Creates `style` nodes from JS strings
              "style-loader",
              // Translates CSS into CommonJS
              "css-loader",
              // Compiles Sass to CSS
              "sass-loader",
            ],
          },
          {
          test: /\.(gif|png|jpe?g)$/,
          use: [
              {
                loader: 'file-loader',
                options: {
                  name: '[name].[ext]',
                  outputPath: 'img/',
                  publicPath: 'img/'
                }
              }
            ],
          },
          {
            test: /\.mp3$/,
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'aud/',
              publicPath: 'aud/'
            }
          },
        ],
      },
}