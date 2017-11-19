import React from 'react';
import PropTypes from 'prop-types';
import { TouchableOpacity } from 'react-native';
import { EvilIcons } from '@expo/vector-icons';
import styles from './styles';


const ButtonFacebook = ({ onPress }) => (
  <TouchableOpacity onPress={onPress} style={styles.container}>
    <EvilIcons name='sc-facebook' size={36} color='white' />
  </TouchableOpacity>
);

ButtonFacebook.propTypes = {
  onPress: PropTypes.func,
};

export default ButtonFacebook;
