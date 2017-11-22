import express from 'express';
const path = require('path');
import handleRender from './public/server_bundle';

const app = express();
const port = 3030;

// app.use(express.static('public'));

app.get('*', handleRender);

// app.get('*', (req, res) => (
//   res.sendFile(__dirname)
// ));

// app.use(express.static(__dirname));
app.use('/public', express.static(path.join(__dirname, 'built')));
app.listen(port, () => {
  console.log('Listening on port 3030');
});