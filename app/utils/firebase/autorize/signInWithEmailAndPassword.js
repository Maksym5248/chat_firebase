import firebase from '../initializeApp';

function signInWithEmailAndPassword(user) {
  return firebase.auth().signInWithEmailAndPassword(user.email, user.password);
}

export default signInWithEmailAndPassword;
