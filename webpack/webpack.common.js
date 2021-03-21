const webpack = require('webpack')

const API_URL = {
    production: JSON.stringify('https://api.pmarp.com'),
    development: JSON.stringify('http://localhost:3000')
}

const environment = process.env.NODE_ENV === 'production' ? 'production' : 'development';

module.exports = {
    resolve: {
        extensions: ['.js', '.jsx', '.ts', '.tsx', '.json'],
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx|ts|tsx)$/,
                exclude: /node_modules/,
                loader: "babel-loader",
                options: {
                    presets: ["@babel/preset-env", "@babel/preset-react", "@babel/preset-typescript"],
                    plugins: ["@babel/plugin-transform-runtime"],
                },
            },
            {
                test: /\.html$/,
                use: [
                    {
                        loader: "html-loader",
                    },
                ],
            },
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"],
            },
            {
                // config for images
                test: /\.(png|svg|jpg|jpeg|gif)$/,
                use: [
                    {
                        loader: "file-loader",
                    },
                ],
            },
        ],
    },
    plugins: [
        new webpack.ProvidePlugin({
           "React": "react",
        }),
        new webpack.DefinePlugin({
            'API_URL': API_URL[environment]
        })
     ],
};
