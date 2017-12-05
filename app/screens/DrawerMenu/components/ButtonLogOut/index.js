import React from 'react';
import PropTypes from 'prop-types';
import { TouchableOpacity, Text } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import styles from './styles';

const ButtonLogOut = ({ onPress }) => (
  <TouchableOpacity onPress={onPress} style={styles.container}>
    <Text style={styles.text}> Вийти </Text>
  </TouchableOpacity>
);
//  <MaterialCommunityIcons name='exit-to-app' size={18} />
ButtonLogOut.propTypes = {
  onPress: PropTypes.func,
};

export default ButtonLogOut;
