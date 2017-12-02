import app from './app';
import navigator from './navigator';
import authentication from './authentication';
import userList from './usersList/reducers';
import chatList from './chatList/reducers';
import drawerMenu from './drawerMenu/reducers';
import currentChatList from './currentChat/reducers';

export default {
  app,
  navigator,
  authentication,
  userList,
  chatList,
  drawerMenu,
  currentChatList,
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
