import { handleActions } from 'redux-actions';

import { mergeIn } from '../../utils/stateHelpers';
import types from './types';

const initialState = {
  isImagesLoaded: false,
  initialized: false,
  isLoading: false,
};

const authReducer = handleActions({
  [types.IMAGES_LOADED]: mergeIn(action => ({ isImagesLoaded: action.payload })),
  [types.IS_LOADING]: mergeIn(action => ({ isLoading: action.payload })),
}, initialState);

export default authReducer;
