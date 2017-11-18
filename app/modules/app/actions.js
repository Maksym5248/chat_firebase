import { createActions } from 'redux-actions';
import types from './types';


export const { imagesLoaded, initialized } = createActions(
  {
    [types.INITIALIZED]: payload => payload,
  },
  types.IMAGES_LOADED,
  types.INITIALIZED,
);

/*

 */
