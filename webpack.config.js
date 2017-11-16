const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  context: path.resolve(__dirname, 'app'),

  entry: './index_2.jsx',

  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'public'),
  },

  devtool: 'source-map',

  resolve: {
    extensions: ['.js', '.jsx'],
  },

  watch: true,

  module: {
    loaders: [{
      test: /.jsx?$/,
      loader: 'babel-loader',
      exclude: /node_modules/,
      query: {
        presets: ['es2015', 'react', 'stage-2'],
      },
    },
    //  {
    //   test: /\.css$/,
    //   loader: ExtractTextPlugin.extract({
    //     fallback: 'style-loader',
    //     use: 'css-loader',
    //   }),
    // },
    // {
    //   test: /\.css$/,
    //   loader: ExtractTextPlugin.extract({
    //     loader: [
    //       {
    //         loader: 'css-loader',
    //         query: {
    //           localIdentName: '[hash:8]',
    //           modules: true,
    //         }
    //       }
    //     ]
    //   })
    // },
    {
      test: /\.css$/,
      loader: 'style-loader!css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]'
    },
    ],
  },
  plugins: [
    new ExtractTextPlugin('bundle.css'),
  ],
};
