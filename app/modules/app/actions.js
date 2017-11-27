import { createActions } from 'redux-actions';
import types from './types';


export const {
  imagesLoaded, initialized, isLoading,
} = createActions(
  {
    [types.INITIALIZED]: payload => payload,
    [types.IS_LOADING]: payload => payload,
  },
  types.IMAGES_LOADED,
  types.INITIALIZED,
);
