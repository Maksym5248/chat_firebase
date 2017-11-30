function createUser(res) {
  if (!res) {
    return {
      displayName: null,
      email: null,
      phoneNumber: null,
      photoURL: null,
      uid: null,
      accessToken: null,
      refreshToken: null,
    };
  }

  return Promise.resolve(res.getIdToken().then((accesToken) => ({
    displayName: res.displayName !== null ? res.displayName : 'none',
    email: res.providerData[0].email !== null ? res.providerData[0].email : 'none',
    phoneNumber: res.phoneNumber !== null ? res.phoneNumber : 'none',
    photoURL: res.providerData[0].photoURL !== null ? res.providerData[0].photoURL : 'none',
    uid: res.uid,
    accessToken: accesToken,
    refreshToken: res.refreshToken,
  })));
}

export default createUser;
