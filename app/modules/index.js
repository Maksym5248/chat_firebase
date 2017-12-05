import app from './app';
import navigator from './navigator';
import authentication from './authentication';
import userList from './usersList';
import chatList from './chatList';
import drawerMenu from './drawerMenu';
import currentChatList from './currentChat';
import profileReducer from './profile';

export default {
  app,
  navigator,
  authentication,
  userList,
  chatList,
  drawerMenu,
  currentChatList,
  profileReducer,
};

/*
const appReducer = combineReducers({
  app,
  navigator,
  profile,
  authenticationReducer,
})

export default (state, action) =>
  // if (action.type === authTypes.SIGN_OUT) {
  //   state = { app: state.app }; // eslint-disable-line no-param-reassign
  // }

  appReducer(state, action);
*/
