const webpack = require("webpack");
const path = require("path");
const merge = require("webpack-merge");
const webpackConfigBase = require("./webpack.base.config.js");
const openBrowserPlugin = require('open-browser-webpack-plugin');

const webpackConfigDev = {
    mode:'development',
    plugins:[
        new openBrowserPlugin({url:"http://local.broccoli.com"}),
        new webpack.DefinePlugin({
            'API_HOST': '"https://l94wc2001h.execute-api.ap-southeast-2.amazonaws.com/prod"'
        })
    ],
    devServer:{
        contentBase: path.join(__dirname,"../public"),
        hot: true,
        host:'0.0.0.0',
        inline: true,
        port: 80,
    }
}
module.exports = merge(webpackConfigBase, webpackConfigDev);