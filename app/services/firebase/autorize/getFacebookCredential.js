import Expo from 'expo';
import firebase from '../initializeApp';

function getFacebookCredential() {
  return Promise.resolve(Expo.Facebook.logInWithReadPermissionsAsync(
    '1144476165685142',
    {
      permissions: ['public_profile', 'email'],
      behavior: 'web',
    },
  ).then((response) => {
    console.log('response', response);
    if (response.type === 'success') {
      return firebase.auth.FacebookAuthProvider.credential(response.token);
    }
    return Promise.reject('getFacebookCredential type !== \'success\'"');
  }));
}

export default getFacebookCredential;
