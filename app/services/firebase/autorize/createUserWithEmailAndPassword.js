import firebase from '../initializeApp';

function createUserWithEmailAndPassword(user) {
  return firebase.auth().createUserWithEmailAndPassword(user.email, user.password);
}

export default createUserWithEmailAndPassword;
