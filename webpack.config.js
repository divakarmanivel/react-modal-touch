const webpack = require("webpack");
const path = require('path');

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: '[name].js',
        libraryTarget: 'commonjs2'
    },
    module: {
        rules: [
            {
              test: /\.js$/,
              exclude: /node_modules/,
              use: {
                loader: "babel-loader",
              }
            },
            {
              test: /\.css$/,
              use: ['css-loader']
            }
        ]
    },
    plugins: []
};