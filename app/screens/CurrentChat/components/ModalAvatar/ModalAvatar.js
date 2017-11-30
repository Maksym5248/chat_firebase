import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, View, Modal, TouchableOpacity } from 'react-native';
import { EvilIcons } from '@expo/vector-icons';
import Avatar from '../../../../components/Avatar/index';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 48, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 5,
  },
  containerAvatar: {
    borderRadius: 5,
    flexDirection: 'row',
    alignItems: 'flex-start',
    padding: 5,
  },
});

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
