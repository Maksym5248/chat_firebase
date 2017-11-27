import firebase from '../initializeApp';
import createUser from './createUser';

const onAuthStateChanged = () => {
  return new Promise((resolve, reject) => (
    firebase.auth().onAuthStateChanged((res) => {
      if (res !== null) {
        return resolve(createUser(res));
      }
      return reject(' onAuthStateChanged res !== null');
    })
  ));
};
/*
function onAuthStateChanged() {
  return new Promise((resolve, reject) => (
    firebase.auth().onAuthStateChanged((res) => {
      if (res !== null) {
        return resolve(res.getIdToken().then((accesToken) => ({
          displayName: res.displayName,
          email: res.providerData[0].email,
          phoneNumber: res.phoneNumber,
          photoURL: res.providerData[0].photoURL,
          uid: res.uid,
          accessToken: accesToken,
          refreshToken: res.refreshToken,
        })));
      }
      return reject(' onAuthStateChanged res !== null');
    })
  ));
}
 */

export default onAuthStateChanged;
