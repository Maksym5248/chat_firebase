import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'remote-redux-devtools';
import thunk from 'redux-thunk';
import { persistStore, persistCombineReducers } from 'redux-persist';
import AsyncStorage from 'redux-persist/es/storage';
import appReducer from './modules';
//     'chatList',

const config = {
  key: 'root',
  whitelist: [
    'authentication',
    'currentChatList',
    'userList',
  ],
  storage: AsyncStorage,
};
const reducer = persistCombineReducers(config, appReducer);


function configureStore() {
  const store = createStore(
    reducer,
    composeWithDevTools(applyMiddleware(thunk)),
  );

  const persistor = persistStore(store);
  persistor.purge();
  return { persistor, store };
}

export default configureStore;

// import { createStore, applyMiddleware } from 'redux';
// import { composeWithDevTools } from 'remote-redux-devtools';
// import thunk from 'redux-thunk';
//
// import appReducer from './modules';
//
//
// const store = createStore(
//   appReducer,
//   composeWithDevTools(applyMiddleware(thunk)),
// );
//
//
//   if (__DEV__) { // eslint-disable-line
//
//     const devToolsEnhancer = require('remote-redux-devtools'); // eslint-disable-line
//   const store = createStore(
//     appReducer,
//     {},
//     compose(
//       applyMiddleware(thunk),
//       devToolsEnhancer.default({
//         realtime: true,
//         hostname: 'localhost',
//         port: 8000,
//       }),
//     ),
//   );
//    } else {
//     store = createStore(
//       appReducer,
//       {},
//       applyMiddleware(thunk),
//     );
//   }

