const path = require('path');

module.exports = {
  publicPath: '/public/',
  assetsPath: path.join(__dirname, 'public'),
  commonLoaders: [
    {
      test: /\.js$/,
      loader: 'babel-loader',
      include: path.join(__dirname, 'app'),
      exclude: path.join(__dirname, 'node_modules'),
      query: {
        presets: ['es2015', 'react', 'stage-2'],
      },
    },
  ],
};
