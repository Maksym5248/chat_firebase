import { setCurrentUser } from './actions';
import { initialized, isLoading } from '../app/actions';
import getFacebookCredential from '../../services/firebase/autorize/getFacebookCredential';
import signInWithCredential from '../../services/firebase/autorize/signInWithCredential';
import signInWithEmailAndPassword from '../../services/firebase/autorize/signInWithEmailAndPassword';
import createUserWithEmailAndPassword from '../../services/firebase/autorize/createUserWithEmailAndPassword';
import createUser from '../../services/firebase/autorize/createUser';
import { setUnloading } from '../drawerMenu/actions';
// import { ToastAndroid } from 'react-native';
// import types from './types';
// import appTypes from '../app/types';

const ifSuccess = (user, dispatch) => {
  dispatch(isLoading(false));
  return setTimeout(() => {
    dispatch(initialized(user));
  }, 500);
};

const logInWithPasswordAndEmail = emailAndPassord => async dispatch => {
  dispatch(isLoading(true));
  signInWithEmailAndPassword(emailAndPassord)
    // .then(createUser)
    .then((user) => ifSuccess(user, dispatch))
    .catch((error) => {
      createUserWithEmailAndPassword(emailAndPassord)
        .then(createUser)
        .then((user) => ifSuccess(user, dispatch))
        .then(() => dispatch(setUnloading()))
        .catch((err) => {
          dispatch(isLoading(false));
          console.log('err createUserWithEmailAndPassword', err.code, err.message);
        });
      console.log('err createUserWithEmailAndPassword', error.code, error.message);
    });
  return null;
};

const logInWithFacebook = () => dispatch => {
  dispatch(isLoading(true));
  return getFacebookCredential()
    .then((token) => signInWithCredential(token))
    .then((user) => ifSuccess(user, dispatch))
    .catch((err) => {
      dispatch(isLoading(false));
      console.log('logInWithFacebook err', err);
    });
};


export default {
  logInWithPasswordAndEmail,
  logInWithFacebook,
  setCurrentUser,
};
