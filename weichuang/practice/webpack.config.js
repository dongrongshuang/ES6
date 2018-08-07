const path = require('path');
moudle.exports = {
    mode: 'development', //production
    entry: {
        'index': './src/index.js',
    },
    output: {
        path: path.resove(__dirname, 'dist'),
        filename: ['name'].js
    },
    devServer:{
        //设置基本目录结构
        contentBase:path.resolve(__dirname,'dist'),
        //服务器的IP地址，可以使用IP也可以使用localhost
        host:'localhost',
        //服务端压缩是否开启
        compress:true,
        //配置服务端口号
        port:8081
    }