import firebase from '../initializeApp';
import createUser from './createUser';
import { setCurrentUser } from '../../../modules/authentication/actions';
import setUserInFb from '../database/setUserInFb';

let interval;

const onAuthStateChanged = (dispatch) => new Promise((resolve, reject) => (
  firebase.auth().onAuthStateChanged((res) => {
    if (res !== null) {
      console.log('onAuthStateChanged res sing in');
      resolve(createUser(res).then((user) => {
        dispatch(setCurrentUser(user));
        setUserInFb(user);
        interval = setInterval(() => {
          // console.log('onAuthStateChanged setInterval');
          setUserInFb(user);
        }, 60000);
        return user;
      }));
    }
    clearTimeout(interval);
    // console.log('onAuthStateChanged res == null');
    // return null;
    reject('onAuthStateChanged res === null');
  })
));

export default onAuthStateChanged;
