import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import App2 from '../app/components/App_2';
// import App from '../app/components/App';

import configureStore from '../app/store/configureStore';

function renderFullPage(html, preloadedState) {
  return `
    <!doctype html>
    <html>
      <head>
        <meta charset=utf-8>
        <title>React_Mentoring with SSR</title>
      </head>
      <body>
        <div id='root'>${html}</div>
        <script>
          window.PRELOADED_STATE = ${JSON.stringify(preloadedState).replace(/</g, '\\u003c')}
        </script>
        <script src="./public/bundle.js"></script>
        </body>
    </html>
  `;
}

export default function handleRender(req, res) {
  const store = configureStore();
  const context = {};
  const app = (
    <Provider store={store}>
      <StaticRouter location={req.url} context={context} >
        <App2 />
      </StaticRouter>
    </Provider>
  );
  const html = renderToString(app);

  if (context.url) {
    return res.redirect(context.url);
  }

  const preloadedState = store.getState();

  return res.send(renderFullPage(html, preloadedState));
}
