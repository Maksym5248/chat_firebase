import React from 'react';
import PropTypes from 'prop-types';
import { View, Modal, Text, TouchableOpacity } from 'react-native';
import styles from './styles';
import AvatarWithStatus from '../../../../components/AvatarWithStatus';

const defaultAvatar = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8B0hBF1hdy4mTfoMA1Gp0kxYtbp8hSXjbWyTUHoQWs0xbRIs-';


const ModalProfile = ({ setUnVisible, selectedUser, isVisible }) => (
  <Modal
    animationType='slide'
    visible={isVisible}
    onRequestClose={() => null}
    transparent
  >
    <TouchableOpacity style={styles.container} onPress={setUnVisible} >
      <View style={styles.contentContainer}>
        <AvatarWithStatus
          time={typeof user !== 'undefined' ? selectedUser.online.valueOf() : null}
          size={250}
          src={selectedUser.photoURL !== 'none' ? selectedUser.photoURL : defaultAvatar}
        />
        <Text style={styles.text}>
          {selectedUser.displayName}
        </Text>
      </View>
    </TouchableOpacity>
  </Modal>
);

ModalProfile.propTypes = {
  selectedUser: PropTypes.object,
  setUnVisible: PropTypes.func,
  isVisible: PropTypes.bool,
};

export default ModalProfile;
