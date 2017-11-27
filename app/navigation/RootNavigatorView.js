import React from 'react';
import T from 'prop-types';
import { addNavigationHelpers } from 'react-navigation';
import { Font, AppLoading } from 'expo';
import { withHandlers, compose } from 'recompose';
import { appOperations } from '../modules/app';
import Navigator from './RootNavigator';
import onAuthStateChanged from '../utils/firebase/autorize/onAuthStateChanged';
import { authenticationOperations } from '../modules/authentication/index';
// import { authenticationOperations } from '../modules/authentication';
// import firebaseInitialize from '../utils/firebase/initializeApp';
// import getFacebookCredential from '../utils/firebase/getFacebookCredential';
// import signInWithCredential from '../utils/firebase/signInWithCredential';

// const { logInWithFacebook, logInWithPasswordAndEmail } = authenticationOperations;

const NavigatorView = ({
  dispatch,
  navigator,
  isReady,
  asyncJob,
  finishJob,
  jobError,
}) => (
  isReady ? (
    <Navigator navigation={addNavigationHelpers({ dispatch, state: navigator })} />
  ) : (
    <AppLoading
      startAsync={asyncJob}
      onFinish={finishJob}
      onError={jobError}
    />
  )
);

NavigatorView.propTypes = {
  dispatch: T.func,
  navigator: T.object,
  isReady: T.bool,
  asyncJob: T.func,
  finishJob: T.func,
  jobError: T.func,
};
// { dispatch }
const enhance = compose(withHandlers({
  asyncJob: ({ dispatch }) => () => Promise.all([
    Font.loadAsync({
      'gill-sans': require('../assets/fonts/GillSans.ttf'), // eslint-disable-line global-require
    }),
    onAuthStateChanged(dispatch).then((userResponse) => {
      console.log('authentication', userResponse);
      dispatch(authenticationOperations.setUser(userResponse));
      dispatch(appOperations.initialized(userResponse));
      console.log('navigator sing in', userResponse);
    }),
    // () => {
    //   console.log('init');
    //   const { accessToken, providerId } = credentialFacebook;
    //   const { email, password } = emailAndPassword;
    //
    //   if (accessToken !== null && providerId !== null) {
    //     return getFacebookCredential()
    //       .then((token) => signInWithCredential(token))
    //       .then((user) => {
    //         setTimeout(() => {
    //           console.log('aaaa');
    //           dispatch(appOperations.initialized(user));
    //         }, 500);
    //       }).catch((err) => console.log('logInWithFacebook err', err),
    //       );
    //   }
    //   return null;
    //
    //   /*if (email !== null && password !== null) {
    //     props.dispatch(logInWithPasswordAndEmail(props.emailAndPassword));
    //   }*/
    // },
    // signInWithCustomToken(accessToken).then(() => {
    //   // accessToken найти
    //   dispatch(appOperations.initialized({ user: 'aaaaa' }));
    //   // console.log('accessToken-----------------------------------------', accessToken);
    //   console.log('signInWithCustomToken ++++++++++++++++++++++++++++++++++');
    // }),
  ]),
  finishJob: props => () => {
    props.dispatch(appOperations.imagesLoaded(true));
  },
  jobError: props => error => {
    console.warn(error);
    props.dispatch(appOperations.imagesLoaded(true));
  },
}));

export default enhance(NavigatorView);
