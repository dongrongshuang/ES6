const path = require('path');
const webpack = require ('webpack');
const HtmlWebpackPlugin = require ('html-webpack-plugin');
const ExtractTextWebpackPlugin = require("extract-text-webpack-plugin")

module.exports = {
    mode:'development',
    entry:{
        'index':'./src/index.js',
        'index2':'./src/index2.js',
    },
    output:{
        path:path.resolve(__dirname,'dist'),
        filename:'[name].js'
    },
    module:{
        rules:[{
            test:/\.css$/,
            // use:['style-loader','css-loader']
            use: ExtractTextWebpackPlugin.extract({
                fallback:"style-loader",
                use:"css-loader"
            })
        }]

    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new HtmlWebpackPlugin({
            filename:'index.html',
            chunks:['index'],
            title:'index---1',
            minify:{
                removeAttributeQuotes:true,
                collapseWhitespace:false,
            },
            hash:true,
            template:'./src/index.html'
        }),
        // new HtmlWebpackPlugin({
        //     filename: 'index2.html',
        //     chunks: ['index'],
        //     title: 'index---2',
        //     minify: {
        //         removeAttributeQuotes: true,
        //         collapseWhitespace: false,
        //     },
        //     hash: true,
        //     template: './src/index2.html'
        // }),
        new ExtractTextWebpackPlugin("css/index.css")
    ],
    devServer: {
        contenBase:path.resolve(__dirname,'dist'),
        host:'localhost',
        compress:true,
        port:8081,
        open:true,
        hot:true
    }
}
devServer:{
    contentBase:path.resolve(__dirname, 'dist')
    host: 'localhost'
    compress:true
    port:8081
}