import { setUser } from './actions';
import { initialized, isLoading } from '../app/actions';
import getFacebookCredential from '../../utils/firebase/autorize/getFacebookCredential';
import signInWithCredential from '../../utils/firebase/autorize/signInWithCredential';
import signInWithEmailAndPassword from '../../utils/firebase/autorize/signInWithEmailAndPassword';
import createUserWithEmailAndPassword from '../../utils/firebase/autorize/createUserWithEmailAndPassword';
import createUser from '../../utils/firebase/autorize/createUser';
import { ToastAndroid } from 'react-native';
import types from './types';
import appTypes from '../app/types';

const ifSuccess = (user, dispatch) => {
  // console.log('-----------------------', user);
  // dispatch(setUser(user));
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
    // .then(createUser)
    .then((user) => ifSuccess(user, dispatch))
    .catch((err) => {
      dispatch(isLoading(false));
      console.log('logInWithFacebook err', err);
    });
};


export default {
  logInWithPasswordAndEmail,
  logInWithFacebook,
  setUser,
};


// function ifSuccess(user, dispatch) {
//   console.log('-----------------------', user, dispatch);
//   dispatch(setUser(user));
//   dispatch(isLoading(false));
//   return setTimeout(() => {
//     dispatch(initialized(user));
//   }, 500);
// }
//
// const logInWithPasswordAndEmail = emailAndPassord => async dispatch => {
//   dispatch(isLoading(true));
//   signInWithEmailAndPassword(emailAndPassord)
//     .then(createUser)
//     .then((user) => ifSuccess(user, dispatch))
//     .catch((error) => {
//       createUserWithEmailAndPassword(emailAndPassord)
//         .then((user) => ifSuccess(user, dispatch))
//         .catch((err) => {
//           dispatch(isLoading(false));
//           console.log('err createUserWithEmailAndPassword', err.code, err.message);
//         });
//       console.log('err createUserWithEmailAndPassword', error.code, error.message);
//     });
// };
//
// const logInWithFacebook = () => dispatch => {
//   dispatch(isLoading(true));
//   return getFacebookCredential()
//     .then((token) => signInWithCredential(token))
//     .then(createUser)
//     .then((user) => ifSuccess(user, dispatch))
//     .catch((err) => {
//       dispatch(isLoading(false));
//       console.log('logInWithFacebook err', err);
//     });
// };
