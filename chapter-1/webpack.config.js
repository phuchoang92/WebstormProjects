const HtmlWebpackPlugin = require('html-webpack-plugin');
const {plugins} = require("@babel/preset-env/lib/plugins-compat-data");

module.exports = {
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
        ]
    },

    plugins:[
        new HtmlWebpackPlugin(
            {
                template: './public/index.html',
                filename: './index.html',
            }),

    ]
}

