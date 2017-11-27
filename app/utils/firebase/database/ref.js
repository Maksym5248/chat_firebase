import firebase from '../initializeApp';

function ref(url) {
  return firebase.database().ref(url);
}

export default ref;
