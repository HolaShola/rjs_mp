const path = require('path');

module.exports = {

    context: path.resolve(__dirname, 'app'),

    entry: './index.js',

    output: {
        filename: 'bundle.js',
        path:  path.resolve(__dirname, 'built'),
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
              loader: "style-loader!css-loader"
            }]
          }
};