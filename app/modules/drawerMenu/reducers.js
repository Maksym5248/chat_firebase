import { handleActions } from 'redux-actions';
import { combineReducers } from 'redux';

import types from './types';

const initialStateDrawerMenu = true;

const isLoadingReducer = handleActions({
  [types.SET_LOADING]: () => true,
  [types.SET_UNLOADING]: () => false,
}, initialStateDrawerMenu);


const DrawerMenuReducer = combineReducers({
  isLoading: isLoadingReducer,
});

export default DrawerMenuReducer;
