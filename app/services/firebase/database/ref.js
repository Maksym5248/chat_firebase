import firebase from '../initializeApp';

console.ignoredYellowBox = [
  'Setting a timer',
];

function ref(url) {
  return firebase.database().ref(url);
}

export default ref;
