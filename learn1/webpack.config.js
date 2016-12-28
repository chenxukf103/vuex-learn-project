/**
 * Created by suyc on 2016/12/28.
 */
var path = require('path');
var ROOT_PATH = path.resolve(__dirname);
var htmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    plugins:[
        new htmlWebpackPlugin({
            template:'',
            title:''
        })
    ]
};