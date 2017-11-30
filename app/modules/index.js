import app from './app';
import navigator from './navigator';
import settings from './settings';
import authentication from './authentication';
import userList from './usersList/reducers';
import chatList from './chatList/reducers';

export default {
  app,
  navigator,
  settings,
  authentication,
  userList,
  chatList,
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
