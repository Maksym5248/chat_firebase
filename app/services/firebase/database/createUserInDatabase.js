function createUser(user) {
  return {
    displayName: user.displayName,
    photoURL: user.photoURL,
    uid: user.uid,
    online: true,
  };
}

export default createUser;
