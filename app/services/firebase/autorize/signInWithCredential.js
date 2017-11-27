import firebase from '../initializeApp';

function signInWithCredential(credential) {
  return firebase.auth().signInWithCredential(credential);
}

export default signInWithCredential;
