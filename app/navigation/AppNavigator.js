import { DrawerNavigator, StackNavigator } from 'react-navigation';
import screens from '../constants/screens';
import {
  ChatListScreen,
  UsersListScreen,
  ProfileScreen,
  DrawerMenuScreen,
  CurrentChatScreen,
} from '../screens';

const ChatListNav = StackNavigator({
  init: { screen: ChatListScreen },
  [screens.CurrentChat]: {
    screen: CurrentChatScreen,
  },
});

const UsersListNav = StackNavigator({
  init: { screen: UsersListScreen },
  [screens.CurrentChat]: {
    screen: CurrentChatScreen,
  },
});

const RootRoutes = {
  [screens.ChatList]: {
    screen: ChatListNav,
  },
  [screens.UsersList]: {
    screen: UsersListNav,
  },
  [screens.Profile]: {
    screen: StackNavigator({ init: { screen: ProfileScreen } }),
  },
};

const DrawerOptions = {
  contentComponent: DrawerMenuScreen,
};

export default DrawerNavigator(RootRoutes, DrawerOptions);
