import React from 'react';
import PropTypes from 'prop-types';
import { View, Modal, TouchableOpacity } from 'react-native';
import { EvilIcons } from '@expo/vector-icons';
import Avatar from '../../../../components/Avatar/index';
import styles from './styles';


const ModalAvatar = ({ offVisibleModalVisible, src, visible }) => (
  <Modal
    animationType='slide'
    transparent
    visible={visible}
    onRequestClose={() => { alert('Modal has been closed.'); }}
  >
    <View style={styles.container}>
      <View style={styles.containerAvatar}>
        <Avatar src={src} size={300} />
        <TouchableOpacity onPress={() => offVisibleModalVisible()}>
          <EvilIcons name='close' size={32} color='black' />
        </TouchableOpacity>
      </View>
    </View>
  </Modal>
);

ModalAvatar.propTypes = {
  offVisibleModalVisible: PropTypes.func,
  visible: PropTypes.bool,
  src: PropTypes.string,
};

export default ModalAvatar;
