const path = require("path");
const webpack = require("webpack");
const ReactHotLoader = require('react-hot-loader/patch');

module.exports = {
    entry : [
        "babel-polyfill",
        "react-hot-loader/patch",
        "./src/Entry.js",
    ],
    output : {
        path: path.resolve(__dirname, "dist"),
        filename : "bundle.js"
    },
    module : {
        rules : [
            {
                test : [/\.js$/, /\.jsx$/],
                exclude : /node_modules/,
                use : {
                    loader : "babel-loader"
                }
            },
            {
                test : /\.html$/,
                use : {
                    loader : "html-loader"
                }
            },
            {
                test : /\.css$/,
                use: [ "style-loader", "css-loader" ]
            },
            {
                test: /\.scss$/,
                use: [{
                    loader: "style-loader" // creates style nodes from JS strings
                }, {
                    loader: "css-loader" // translates CSS into CommonJS
                }, {
                    loader: "sass-loader" // compiles Sass to CSS
                }]
            }
        ]
    },
    devServer : {
        contentBase : path.join(__dirname, "dist"),
        port : 4555,
        hot : true
    },
    plugins : [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NamedModulesPlugin()
    ]
};