import React from 'react';
import PropTypes from 'prop-types';
import { View, Modal, TouchableOpacity, Text, alert } from 'react-native';
import styles from './styles';


const ModalDelete = ({ isVisible, setUnVisible, deleteItem }) => (
  <Modal
    animationType='fade'
    transparent
    visible={isVisible}
    onRequestClose={() => { alert('меню закрито'); }}
  >
    <TouchableOpacity style={styles.container} onPress={setUnVisible}>
      <View style={styles.containerButton}>
        <TouchableOpacity onPress={deleteItem}>
          <Text>Видалити</Text>
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  </Modal>
);

ModalDelete.defaudefaultProps = {
  isVisible: false,
};

ModalDelete.propTypes = {
  isVisible: PropTypes.bool.isRequired,
  setUnVisible: PropTypes.func,
  deleteItem: PropTypes.func,
};

export default ModalDelete;
