const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const nodeExternals = require('webpack-node-externals');

module.exports = {
  context: path.resolve(__dirname),

  entry: './server/handleRender.js',

  output: {
    filename: 'server_bundle.js',
    path: path.resolve(__dirname, 'public'),
    libraryTarget: 'commonjs2',
  },

  devtool: 'source-map',

  resolve: {
    extensions: ['.js', '.jsx'],
  },

  watch: true,

  target: 'node',
  externals: nodeExternals(),
  
  module: {
    loaders: [{
      test: /.jsx?$/,
      loader: 'babel-loader',
      exclude: /node_modules/,
      query: {
        presets: ['es2015', 'react', 'stage-2'],
      },
    },
    // {
    //   test: /\.css$/,
    //   loader: 'style-loader!css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]',
    // }
    // {
    //   test: /\.css$/,
    //   loader: 'ignore-loader',
    // },
    {
      test: /\.css$/,
      use: [
        {
          loader: 'isomorphic-style-loader',
        },
        {
          loader: 'css-loader',
          options: {
            modules: true,
            importLoaders: 1,
            localIdentName: '[name]__[local]___[hash:base64:5]',
            sourceMap: true
          }
        }
      ]
    }    
    ],
  },
};