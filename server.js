import express from 'express';
import handleRender from './server/handleRender';

const app = express();
const port = 3030;

// app.use(express.static('public'));

app.get('*', handleRender);

// app.get('*', (req, res) => (
//   res.sendFile(__dirname)
// ));

app.use(express.static(__dirname));

app.listen(port, () => {
  console.log('Listening on port 3030');
});