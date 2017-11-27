import { initialized } from '../app/actions';
import { setUser } from '../authentication/actions';
import signOut from '../../services/firebase/autorize/signOut';

const logOut = () => async dispatch => {
  signOut().then(() => {
    console.log('Sign-out successful.');
    dispatch(initialized(null));
  }).catch((error) => {
    console.log('An error happened.', error);
  });
};

export default {
  logOut,
};

