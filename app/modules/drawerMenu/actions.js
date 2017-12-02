import { createActions } from 'redux-actions';
import types from './types';

export const { setLoading, setUnloading } = createActions(
  types.SET_LOADING,
  types.SET_UNLOADING,
);
