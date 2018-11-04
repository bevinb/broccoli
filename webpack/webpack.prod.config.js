const webpack = require("webpack");
const path = require("path");
const webpackConfigBase = require("./webpack.base.config.js");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const merge = require("webpack-merge");
const webpackConfigProd = {
    mode: "production",
    plugins:[
        new  CleanWebpackPlugin(["build"],{
            root: path.join(__dirname,"../")
        }),
        new webpack.DefinePlugin({
            'API_HOST': '"https://l94wc2001h.execute-api.ap-southeast-2.amazonaws.com/prod/"'
        })
    ]
};

module.exports = merge(webpackConfigBase, webpackConfigProd);