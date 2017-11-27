import firebase from '../initializeApp';

function signOut() {
  return firebase.auth().signOut();
}

export default signOut;
