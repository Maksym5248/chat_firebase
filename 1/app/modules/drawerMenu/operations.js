import * as firebase from 'firebase';
import { initialized } from '../app/actions';
import { setCredentialFacebook, setEmailAndPassword } from '../authentication/actions';

const logOut = () => async dispatch => {
  firebase.auth().signOut().then(() => {
    console.log('Sign-out successful.');
    dispatch(setCredentialFacebook({ accessToken: null, providerId: null }));
    dispatch(setEmailAndPassword({ email: null, password: null }));
    dispatch(initialized(null));
  }).catch((error) => {
    console.log('An error happened.', error);
  });
};

export default {
  logOut,
};

