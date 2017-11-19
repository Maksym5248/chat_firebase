import { NavigationActions } from 'react-navigation';
import screens from '../../constants/screens';
import { appTypes } from '../app';
import { getResetAction } from '../../utils/navHelper';
import Navigator from '../../navigation/RootNavigator';

const getResetState = (state, screen) =>
  Navigator.router.getStateForAction(getResetAction(screen, undefined, null), state);
// let count = 0;
const navigatorReducer = (state, action) => {
  // count++;
  // console.log(' count--------------------------', count );
  if (action.type === appTypes.INITIALIZED) {
    if (action.payload) {
      return getResetState(state, screens.App);
    }

    return getResetState(state, screens.Authentication);
  }

  const newState = Navigator.router.getStateForAction(action, state);
  // if (count > 7){
  return (newState || state);
  // }

  // return getResetState(state, screens.authentication);
};

export default navigatorReducer;
