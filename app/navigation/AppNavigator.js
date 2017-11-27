import { DrawerNavigator, StackNavigator } from 'react-navigation';
import screens from '../constants/screens';
import {
  ChatListScreen,
  CollectionsScreen,
  SettingsScreen,
  DrawerMenuScreen,
} from '../screens';

const RootRoutes = {
  [screens.ChatList]: {
    screen: StackNavigator({ init: { screen: ChatListScreen } }),
  },
  [screens.Collections]: {
    screen: StackNavigator({ init: { screen: CollectionsScreen } }),
  },
  [screens.Settings]: {
    screen: StackNavigator({ init: { screen: SettingsScreen } }),
  },
};

const DrawerOptions = {
  contentComponent: DrawerMenuScreen,
};

export default DrawerNavigator(RootRoutes, DrawerOptions);
