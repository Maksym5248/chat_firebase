import firebase from '../initializeApp';
import createUser from './createUser';
import { setUser } from '../../../modules/authentication/actions';

const onAuthStateChanged = (dispatch) => new Promise((resolve) => (
  firebase.auth().onAuthStateChanged((res) => {
    if (res !== null) {
      console.log('onAuthStateChanged res sing in');
      return resolve(createUser(res).then((user) => {
        dispatch(setUser(user));
        return user;
      }));
    }
    console.log('onAuthStateChanged res == null');
    return null;
    // return reject('onAuthStateChanged res === null');
  })
));

export default onAuthStateChanged;
