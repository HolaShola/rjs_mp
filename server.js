import express from 'express';
import webpack from 'webpack';
import webpackConfig from './webpack.config.client';

import handleRender from './public/bundleSSR';

const app = express();
const port = 3030;

app.use(express.static('public'));

app.use(require('webpack-dev-middleware')(webpack(webpackConfig)));

app.get('/', handleRender);

app.listen(port, () => {
  console.log('Listening on port 3030');
});




// const compiler = webpack(webpackConfig);

// app.use(require('webpack-dev-middleware')(compiler, {
//   noInfo: true,
//   publicPath: webpackConfig.output.publicPath,
// }));

// app.get('/', render.default);

// const express = require('express');

// const app = express();

// app.get('*', (req, res) => (
//   res.sendFile(__dirname)
// ));

// app.use(express.static(__dirname));

// app.listen(3030);

// console.log('Listening on port 3030');