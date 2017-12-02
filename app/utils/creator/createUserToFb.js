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
