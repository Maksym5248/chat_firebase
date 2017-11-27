import { initialized } from '../app/actions';
import { setUser } from '../authentication/actions';
import signOut from '../../utils/firebase/autorize/signOut';

const logOut = () => async dispatch => {
  signOut().then(() => {
    console.log('Sign-out successful.');
    // dispatch(setCredentialFacebook({ accessToken: null, providerId: null }));
    // dispatch(setEmailAndPassword({ email: null, password: null }));
    // dispatch(setUser({
    //   displayName: null,
    //   email: null,
    //   phoneNumber: null,
    //   photoURL: null,
    //   uid: null,
    //   accessToken: null,
    //   refreshToken: null,
    // }));
    dispatch(initialized(null));
  }).catch((error) => {
    console.log('An error happened.', error);
  });
};

export default {
  logOut,
};

