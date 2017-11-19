import * as firebase from 'firebase';
import Expo from 'expo';
import { setUser, setCredentialFacebook, setEmailAndPassword } from './actions';
import { initialized } from '../app/actions';

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
      console.log('err createUserWithEmailAndPassword', err.code, err.message);
    });
    console.log('err createUserWithEmailAndPassword', error.code, error.message);
  });
};

const logInWithFacebook = () => dispatch => {
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
    dispatch(setCredentialFacebook({ accessToken: credential.accessToken, providerId: credential.providerId }));
  })
    .catch((error) => {
      console.log('error logInWithFace signInWithCredential', error);
    });
};


const onAuthStateChanged = () => async dispatch => {
  firebase.auth().onAuthStateChanged((res) => {
    if (res !== null) {
      const user = {
        displayName: res.displayName,
        email: res.providerData[0].email,
        phoneNumber: res.phoneNumber,
        photoURL: res.providerData[0].photoURL,
        uid: res.uid,
      };
      dispatch(initialized(user));
      dispatch(setUser(user));
      console.log('We are authenticated now!');
    } else {
      dispatch(initialized({}));
      console.log('We are out');
      // dispatch({ type: 'Logout' });
    }
  });
};

const logOut = () => () => {
  firebase.auth().signOut().then(() => {
    console.log('Sign-out successful.');
  }).catch((error) => {
    console.log('An error happened.', error);
  });
};

export default {
  logInWithPasswordAndEmail,
  logInWithFacebook,
  signInWithCredential,
  logOut,
};

/*
firebase.auth().currentUser.getToken(forceRefresh  true).then(function(idToken) {
  // Send token to your backend via HTTPS
  // ...
}).catch(function(error) {
  // Handle error
});

admin.auth().verifyIdToken(idToken)
  .then(function(decodedToken) {
    var uid = decodedToken.uid;
    // ...
  }).catch(function(error) {
    // Handle error
  });

firebase.auth().signInWithCustomToken(token).catch(function(error) {
  // Handle Errors here.
  var errorCode = error.code;
  var errorMessage = error.message;
  // ...
});

firebase.auth().driverContent().then(function() {
  // Sign-out successful.
}).catch(function(error) {
  // An error happened.
});
 */
