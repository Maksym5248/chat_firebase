import Expo from 'expo';
import firebase from '../initializeApp';

function getFacebookCredential() {
  return Promise.resolve(Expo.Facebook.logInWithReadPermissionsAsync(
    '1144476165685142',
    { permissions: ['public_profile', 'email'] },
  ))
    .then((response) => {
      if (response.type === 'success') {
        return Promise.resolve(firebase.auth.FacebookAuthProvider.credential(response.token));
      }
      return Promise.reject("getFacebookCredential type !== 'success'");
    });
}

export default getFacebookCredential;
