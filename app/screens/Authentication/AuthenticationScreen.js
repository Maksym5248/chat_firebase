import React from 'react';
import {
  KeyboardAvoidingView,
  View,
  Text,
  TextInput,
  Button,
} from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles';
import ButtonFacebook from './components/ButtonFacebook';

const AuthenticationScreen = ({
  email,
  setEmail,
  password,
  setPassword,
  logInWithPasswordAndEmail,
  logInWithFaceBook,
}) => (
  <KeyboardAvoidingView
    style={styles.containerRoot}
    behavior='padding'
  >
    <View style={styles.container}>
      <Text style={styles.title}>
        Приєднатись до чату
      </Text>
      <TextInput
        style={styles.input}
        placeholder='Введіть email'
        onChangeText={setEmail}
        value={email}
      />
      <TextInput
        style={styles.input}
        placeholder='Введіть пароль'
        secureTextEntry
        onChangeText={setPassword}
        value={password}
      />
      <View style={styles.buttonContainer}>
        <Button
          onPress={logInWithPasswordAndEmail}
          title='Приєднатись'
        />
        <ButtonFacebook
          onPress={logInWithFaceBook}
        />
      </View>
    </View>
  </KeyboardAvoidingView>
);

AuthenticationScreen.propTypes = {
  navigation: PropTypes.object.isRequired,
  email: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  setEmail: PropTypes.func.isRequired,
  setPassword: PropTypes.func.isRequired,
  logInWithPasswordAndEmail: PropTypes.func.isRequired,
  logInWithFaceBook: PropTypes.func.isRequired,
};


AuthenticationScreen.navigationOptions = {
  title: 'Аутентифікація',
};


/*
AuthenticationScreen.navigationOptions = ({ navigation }) => ({
  title: 'Вхід у чат',
  headerLeft: <MaterialIcons
    name='menu'
    size={35}
    onPress={() => navigation.navigate('DrawerOpen')}
  />,
});
 */

export default AuthenticationScreen;
