import React from 'react';
import PropTypes from 'prop-types';
import { View, TextInput, TouchableOpacity } from 'react-native';
import { Ionicons, Feather } from '@expo/vector-icons';
import styles from './styles';

const Search = ({
  isVisibleInput, setVisible, setUnVisible, search,
}) => {
  if (isVisibleInput) {
    return (
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          onChange={search}
          underlineColorAndroid='transparent'
          placeholder="Введіть ім\'я"
        />
        <TouchableOpacity onPress={setUnVisible}>
          <Ionicons name='md-close-circle' size={36} color='black' />
        </TouchableOpacity>
      </View>
    );
  }
  return (
    <View style={styles.containerButton}>
      <TouchableOpacity onPress={setVisible} >
        <Feather name='search' size={36} color='black' />
      </TouchableOpacity>
    </View>
  );
};

Search.defaudefaultProps = {
  isVisibleInput: false,
};

Search.propTypes = {
  isVisible: PropTypes.bool.isRequired,
  setVisible: PropTypes.func,
  setUnVisible: PropTypes.func,
  search: PropTypes.func,
};

export default Search;
