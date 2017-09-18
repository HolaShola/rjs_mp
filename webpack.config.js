const path = require('path');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {

    context: path.resolve(__dirname, 'app'),

    entry: './index.js',

    output: {
        filename: 'bundle.js',
        path:  path.resolve(__dirname, 'app'),
    },

    resolve: {
        extensions: ['.js', '.jsx']
    },

    watch: false,

    module: {
        loaders: [{
            test: /.jsx?$/,
            loader: 'babel-loader',
            exclude: /node_modules/,
            query: {
                presets: ['es2015', 'react', 'stage-2']
            }
        }, {
            test: /\.css$/,
            loader: ExtractTextPlugin.extract({
                fallback: "style-loader",
                use: "css-loader"
            })
        }]
    },
    plugins: [
        new ExtractTextPlugin('bundle.css') 
    ]
};