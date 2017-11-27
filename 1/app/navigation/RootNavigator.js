import { StackNavigator } from 'react-navigation';

import screens from '../constants/screens';
import AppNavigator from './AppNavigator';
import { AuthenticationScreen } from '../screens';


const Routes = {
  [screens.Authentication]: {
    screen: StackNavigator({
      initial: {
        screen: AuthenticationScreen,
      },
    }),
  },
  [screens.App]: {
    screen: AppNavigator,
  },
};

export default StackNavigator(Routes, { headerMode: 'none' });
