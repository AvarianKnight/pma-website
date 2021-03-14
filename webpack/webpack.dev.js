const { merge } = require('webpack-merge');
const common = require("./webpack.common");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const webpack = require("webpack");
const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = merge(common, {
    mode: "development",
    entry:["webpack/hot/dev-server","./src/index.tsx"],
    output: {
        path: __dirname,
        filename: 'bundle.js'
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            inject: true,
            template: "public/index.html",
        }),
    ],
    devServer: {
        contentBase: './',
        // contentBase: path.join(__dirname, '../src/'),
        historyApiFallback: true,
        hot: true,
    },
});