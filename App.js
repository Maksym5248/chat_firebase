import React from 'react';
import { Provider } from 'react-redux';
import { StatusBar, View } from 'react-native';
import { PersistGate } from 'redux-persist/es/integration/react';

import configureStore from './app/store';
import Navigation from './app/navigation';
import styles, { colors } from './app/styles';
import { LoadingModal } from './app/components/index';
import { initialized } from "./app/modules/app/actions";

const { persistor, store } = configureStore();

const onBeforeLift = () => {
  // немає параметрів
};
store.dispatch(initialized());

const App = () => (
  <View style={styles.fillAll}>
    <StatusBar
      statusBarStyle='light-content'
      backgroundColor={colors.black}
    />
    <Provider store={store}>
      <PersistGate
        loading={<LoadingModal isVisible={true} loadingText={'Завнтаження'} />}
        onBeforeLift={onBeforeLift}
        persistor={persistor}
      >
        <Navigation />
      </PersistGate>
    </Provider>
  </View>
);
export default App;

