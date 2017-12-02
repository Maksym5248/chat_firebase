function createUserToFb(user) {
  // console.log('user++++++++++++++++++++++', user);
  return {
    displayName: user.displayName !== null ? user.displayName : 'none',
    photoURL: user.photoURL !== null ? user.photoURL : 'none',
    uid: user.uid !== null ? user.uid : 'none',
    online: Date.now(),
  };
}

export default createUserToFb;

// if (answer) {
//   // console.log('user=====================', user);
//   return {
//     displayName: user.val().uid !== null ? user.val().displayName : 'none',
//     photoURL: user.val().photoURL !== null ? user.val().photoURL : 'none',
//     uid: user.val().uid !== null ? user.val().uid : 'none',
//     online: user.val().online !== null ? user.val().online : 'none',
//   };
// }
