import firebase from '../initializeApp';

function signInWithCustomToken(token) {
  console.log('signInWithCustomToken');
  return new Promise((resolve, reject) => {
    if (!token) return reject('token === null');
    console.log('signInWithCustomToken', token);
    return resolve(firebase.auth().signInWithCustomToken(token));
  }).catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log('errorMessage', errorCode, errorMessage);
  });
}

export default signInWithCustomToken;

