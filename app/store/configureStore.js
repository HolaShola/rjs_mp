import { createStore, applyMiddleware, compose } from 'redux';
import appReducer from '../reducers';
import DataLoading from '../Logger/DataLoading';

export default function configureStore() {
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  const store = createStore(
    appReducer,
    composeEnhancers(
      applyMiddleware(
        DataLoading,
      ),
    ),
  );

  return store;
}
