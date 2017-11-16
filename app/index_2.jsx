import 'core-js/es6/map';
import 'core-js/es6/set';

import React from 'react';
// import { hydrate } from 'react-dom';
import ReactDOM, { hydrate } from 'react-dom';
// import { BrowserRouter } from 'react-router-dom';
// import { Provider } from 'react-redux';
// import App from './components/App';
import App_2 from './components/App_2';
// import configureStore from './store/configureStore';

// const store = configureStore();
// const store = configureStore(window.PRELOADED_STATE);
// delete window.PRELOADED_STATE;

ReactDOM.hydrate((
  <App_2 />
), document.getElementById('root'));
