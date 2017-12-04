import React from 'react';
import PropTypes from 'prop-types';
import { View, Modal, TouchableOpacity, Text, alert } from 'react-native';
import styles from './styles';


const ModalMenu = ({
  isVisible, setUnVisible, onPress, text,
}) => (
  <Modal
    animationType='fade'
    transparent
    visible={isVisible}
    onRequestClose={() => { alert('меню закрито'); }}
  >
    <TouchableOpacity style={styles.container} onPress={setUnVisible} >
      <View style={styles.containerButton}>
        <TouchableOpacity onPress={onPress}>
          <Text style={styles.text}>{text}</Text>
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  </Modal>
);

ModalMenu.defaudefaultProps = {
  isVisible: false,
};

ModalMenu.propTypes = {
  isVisible: PropTypes.bool,
  setUnVisible: PropTypes.func,
  onPress: PropTypes.func,
  text: PropTypes.string,
};

export default ModalMenu;
