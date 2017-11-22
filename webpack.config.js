const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const nodeExternals = require('webpack-node-externals');

const config = {
    name: 'client',
    context: path.resolve(__dirname, 'app'),
    entry: './index.jsx',
    output: {
      filename: 'client_bundle.js',
      path: path.resolve(__dirname, 'public'),
      publicPath: '/public/',
    },
    
      devtool: 'source-map',
      resolve: {
        extensions: ['.js', '.jsx'],
      },
     watch: true,
      module: {
        loaders: [
          {
            test: /.jsx?$/,
            loader: 'babel-loader',
            exclude: /node_modules/,
            query: {
              presets: ['es2015', 'react', 'stage-2'],
            },
          },
        //   {
        //     test: /\.css$/,
        //     loader: ExtractTextPlugin.extract('style-loader!css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]')
        //   },
        // {
        //     test: /\.css/,
        //     loader: ExtractTextPlugin.extract('css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]'),
        //   }
        
        // {
        //   test: /\.css$/,
        //   loader: ExtractTextPlugin.extract('css-loader/locals?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]')
        // },

        {
            test: /\.css$/,
            exclude: '/node_modules/',
            use: ExtractTextPlugin.extract({
                fallback: [{
                    loader: 'style-loader',
                }],
                use: [{
                    loader: 'css-loader',
                    options: {
                        modules: true,
                        importLoaders: 1, 
                        localIdentName: '[name]__[local]___[hash:base64:5]',
                    },
                },
                //  {
                //     loader: 'postcss-loader',
                // }
            ],
            }),
        }
        ],
      },
      plugins: [
        new ExtractTextPlugin('bundle.css'),
      ]
};

const serverConfig = {
    name: 'server',
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
      loaders: [
        {
          test: /.jsx?$/,
          loader: 'babel-loader',
          exclude: /node_modules/,
          query: {
            presets: ['es2015', 'react', 'stage-2'],
          },
        },
        {
          test: /\.css$/,
          loader: 'css-loader/locals?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]'
        }
      ]
    }, 
};

module.exports = [config, serverConfig];
