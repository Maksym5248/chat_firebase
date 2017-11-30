import { initialized } from '../app/actions';
import { setCurrentUser } from '../authentication/actions';
import signOut from '../../services/firebase/autorize/signOut';
import createUser from '../../services/firebase/autorize/createUser';

const logOut = () => async dispatch => {
  signOut().then(() => {
    console.log('Sign-out successful.');
    dispatch(initialized(null));
    dispatch(setCurrentUser(createUser()));
  }).catch((error) => {
    console.log('An error happened.', error);
  });
};

export default {
  logOut,
};

