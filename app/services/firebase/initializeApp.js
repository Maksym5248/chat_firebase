import * as firebase from 'firebase';

const config = {
  apiKey: 'AIzaSyA-qUVBSXwQrwyAGTkNHKsB9sN_jdJl1C0',
  authDomain: 'chat-c96a7.firebaseapp.com',
  databaseURL: 'https://chat-c96a7.firebaseio.com',
  storageBucket: 'chat-c96a7.appspot.com',
};


firebase.initializeApp(config);

export default firebase;
