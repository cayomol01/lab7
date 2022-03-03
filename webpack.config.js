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
                test: /\.css$/,
                use: ["style-loader", "css-loader"]
            },

            {
                test: /\.(png|jpe?g|gif|jpg|wav|mp3)$/i,
                use: ["file-loader"]

            }
        ]
    }}