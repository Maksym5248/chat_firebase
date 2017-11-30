import createUserToFb from './createUserToFb';
import ref from './ref';
import url from '../../../constants/url';

console.ignoredYellowBox = ['Setting a timer'];

const setUserInFb = (user) => (
  ref(`${url.users}/${user.uid}`).set(createUserToFb(user))
);

export default setUserInFb;

// users.push(createUserToFb(user));
