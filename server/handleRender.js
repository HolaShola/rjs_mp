import React from 'react';
import { renderToString } from 'react-dom/server';

import App from '../app/components/App';

function renderFullPage(html) {
  return `
    <!doctype html>
    <html>
      <head>
        <meta charset=utf-8>
        <title>React_Mentoring with SSR</title>
      </head>
      <body>
        <div id='root'>${html}</div>
        <script src="./public/server_bundle.js"></script>
        </body>
    </html>
  `;
}

export default function handleRender(req, res) {
  const html = renderToString(<App />);
  return res.send(renderFullPage(html));
}