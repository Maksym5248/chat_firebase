import { connect } from 'react-redux';
import NavigatorView from './RootNavigatorView';

const mapStateToProps = ({ navigator, app, authentication }) => ({
  navigator,
  isReady: app.isImagesLoaded,
  credentialFacebook: authentication.credentialFacebook,
  emailAndPassword: authentication.emailAndPassword,
});

const NavigatorContainer = connect(mapStateToProps)(NavigatorView);

export default NavigatorContainer;
