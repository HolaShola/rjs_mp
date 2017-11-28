import express from 'express';
import path from 'path';
import handleRender from './public/server_bundle';

const app = express();
const port = 3030;

// app.use(express.static('public'));
app.use('/public', express.static(path.join(__dirname, 'public')));

app.get('*', handleRender);

app.listen(port, () => {
  console.log('Listening on port 3030');
});
