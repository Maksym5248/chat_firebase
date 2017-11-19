import { createStore, applyMiddleware, combineReducers } from 'redux';
import { composeWithDevTools } from 'remote-redux-devtools';
import thunk from 'redux-thunk';
import { persistStore, persistCombineReducers, persistReducer } from 'redux-persist';
import AsyncStorage from 'redux-persist/es/storage';
import appReducer from './modules';

const config = {
  key: 'root',
  storage: AsyncStorage,
};

const reducer = persistCombineReducers(config, appReducer);

let rootReducer = combineReducers({
  storage: combineReducers();
  persist: persistReducer(barPersistConfig, barReducer),
});

function configureStore() {
  const store = createStore(
    reducer,
    composeWithDevTools(applyMiddleware(thunk)),
  );

  const persistor = persistStore(store);

  return { persistor, store };
}

export default configureStore;


/*
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'remote-redux-devtools';
import thunk from 'redux-thunk';

import appReducer from './modules';


const store = createStore(
  appReducer,
  composeWithDevTools(applyMiddleware(thunk)),
);
*/
/*
  if (__DEV__) { // eslint-disable-line

    const devToolsEnhancer = require('remote-redux-devtools'); // eslint-disable-line
  const store = createStore(
    appReducer,
    {},
    compose(
      applyMiddleware(thunk),
      devToolsEnhancer.default({
        realtime: true,
        hostname: 'localhost',
        port: 8000,
      }),
    ),
  );
   } else {
    store = createStore(
      appReducer,
      {},
      applyMiddleware(thunk),
    );
  }
*/
