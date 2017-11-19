import React from 'react';
import T from 'prop-types';
import { addNavigationHelpers } from 'react-navigation';
import { Font, AppLoading } from 'expo';
import { withHandlers, compose, lifecycle } from 'recompose';
import { appOperations } from '../modules/app';
import Navigator from './RootNavigator';
import { authenticationOperations } from '../modules/authentication';

const { logInWithFacebook, logInWithPasswordAndEmail } = authenticationOperations;


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

const enhance = compose(
  withHandlers({
    asyncJob: (props) => () => Promise.all([
      Font.loadAsync({
        'gill-sans': require('../assets/fonts/GillSans.ttf'), // eslint-disable-line global-require
      }),
      () => {
        /*console.log('NavigatorView credentialFacebook !== null ===========', this.props);
        if (this.props.credentialFacebook.accessToken !== null &&
          this.props.credentialFacebook.providerId !== null) {
          this.props.dispatch(logInWithFacebook());
          console.log('NavigatorView credentialFacebook !== null ===========', this.props.credentialFacebook);
        }

        if (this.props.emailAndPassword.email !== null &&
          this.props.emailAndPassword.password !== null) {
          this.props.dispatch(logInWithPasswordAndEmail(this.props.emailAndPassword));
        }
        console.log('NavigatorView credentialFacebook  ===========', props.credentialFacebook);
        */
      },
    ]),
    finishJob: props => () => {
      props.dispatch(appOperations.imagesLoaded(true));
    },
    jobError: props => error => {
      console.warn(error);
      props.dispatch(appOperations.imagesLoaded(true));
    },
  }),

);

export default enhance(NavigatorView);
