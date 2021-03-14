const { merge } = require('webpack-merge');
const common = require("./webpack.common");
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");

module.exports = merge(common, {
    mode: "production",
    entry: "./src/index.tsx",
    output: {
        path: path.resolve(__dirname, '../dist'),
        filename: "index.js",
    },
    plugins: [
        new HtmlWebpackPlugin({
            inject: true,
            template: "public/index.html",
        }),
        new CopyWebpackPlugin({
            patterns: [
                {
                    from: "public/icons",
                    to: path.resolve(__dirname, '../dist'),
                },
            ],
        }),
    ],
    devtool: "eval-source-map",
});
