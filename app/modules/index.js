import app from './app';
import navigator from './navigator';
import settings from './settings';
import authentication from './authentication';

export default {
  app,
  navigator,
  settings,
  authentication,
};

/*
const appReducer = combineReducers({
  app,
  navigator,
  settings,
  authenticationReducer,
})

export default (state, action) =>
  // if (action.type === authTypes.SIGN_OUT) {
  //   state = { app: state.app }; // eslint-disable-line no-param-reassign
  // }

  appReducer(state, action);
*/
