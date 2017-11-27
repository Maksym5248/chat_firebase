function createUser(res) {
  return Promise.resolve(res.getIdToken().then((accesToken) => ({
    displayName: res.displayName,
    email: res.providerData[0].email,
    phoneNumber: res.phoneNumber,
    photoURL: res.providerData[0].photoURL,
    uid: res.uid,
    accessToken: accesToken,
    refreshToken: res.refreshToken,
  })));
}

export default createUser;
