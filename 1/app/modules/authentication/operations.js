import * as firebase from 'firebase';
import Expo from 'expo';
import { setUser, setCredentialFacebook, setEmailAndPassword } from './actions';
import { initialized, isLoading } from '../app/actions';

// import types from './types';
// import appTypes from '../app/types';

const config = {
  apiKey: 'AIzaSyA-qUVBSXwQrwyAGTkNHKsB9sN_jdJl1C0',
  authDomain: 'chat-c96a7.firebaseapp.com',
  databaseURL: 'https://chat-c96a7.firebaseio.com',
  storageBucket: 'chat-c96a7.appspot.com',
};

firebase.initializeApp(config);

const logInWithPasswordAndEmail = (user) => async dispatch => {
  dispatch(onAuthStateChanged());

  firebase.auth().signInWithEmailAndPassword(user.email, user.password).then(() => {
    dispatch(setEmailAndPassword(user));
  }).catch((error) => {
    firebase.auth().createUserWithEmailAndPassword(user.email, user.password).then(() => {
      dispatch(setEmailAndPassword(user));
    }).catch((err) => {
      dispatch(isLoading(false));
      console.log('err createUserWithEmailAndPassword', err.code, err.message);
    });
    console.log('err createUserWithEmailAndPassword', error.code, error.message);
  });
};

const logInWithFacebook = () => dispatch => {
  dispatch(isLoading(true));
  dispatch(onAuthStateChanged());
  logInWithFace(dispatch);
};

async function logInWithFace(dispatch) {
  const { type, token } = await Expo.Facebook.logInWithReadPermissionsAsync(
    '1144476165685142',
    { permissions: ['public_profile', 'email'] },
  );

  if (type === 'success') {
    const credential = await firebase.auth.FacebookAuthProvider.credential(token);
    dispatch(signInWithCredential(credential));
  }
}


const signInWithCredential = (credential) => async dispatch => {
  firebase.auth().signInWithCredential(credential).then(() => {
    dispatch(
      setCredentialFacebook(
        { accessToken: credential.accessToken, providerId: credential.providerId }));
  })
    .catch((error) => {
      dispatch(isLoading(false));
      console.log('error logInWithFace signInWithCredential', error);
    });
};


const onAuthStateChanged = () => async dispatch => (
  firebase.auth().onAuthStateChanged((res) => {
    if (res !== null) {
      const user = {
        displayName: res.displayName,
        email: res.providerData[0].email,
        phoneNumber: res.phoneNumber,
        photoURL: res.providerData[0].photoURL,
        uid: res.uid,
      };
      console.log(res);


      dispatch(setUser(user));

      // замінити цей костиль
      dispatch(isLoading(false));
      setTimeout(() => {
        dispatch(initialized(user));
      }, 500);

      console.log('We are authenticated now!');
    } else {
      console.log('We are out');
    }
  })
);

export default {
  logInWithPasswordAndEmail,
  logInWithFacebook,
  signInWithCredential,
};
