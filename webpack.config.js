const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
    mode: "development", // development  (nomin), prod(min)
    devtool: false,
    entry: {
        index: "./src/index.js"
     },
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, "bundle_sinBabel"),
    }, 
    plugins: [
        new CleanWebpackPlugin(),
        new MiniCssExtractPlugin({ filename: "main.css" }),
        new HtmlWebpackPlugin({
          template: "./src/index.html",
        }),
    ],
    
    module: {
        rules: [
            {
                test: /\.s[ac]ss$/i,
                use: [MiniCssExtractPlugin.loader, "css-loader","sass-loader"]
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
    }}