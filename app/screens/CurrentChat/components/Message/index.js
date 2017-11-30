import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import Avatar from '../../../../components/Avatar/index';
import styles from './styles';

const Message = ({ user, setVisibleModal }) => (
  <View style={styles.wrapper}>
    <TouchableOpacity onPress={setVisibleModal}>
      <Avatar size={40} src={user.photoUrl} />
    </TouchableOpacity>
    <View style={styles.container}>
      <View style={styles.wrapperMessage}>
        <Text >
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium
        </Text>
        <Text style={styles.time} >
                      20.00
        </Text>
      </View>
      <Text style={styles.statusMessage} >
                  Прочитано
      </Text>
    </View>
  </View>
);

Message.propTypes = {
  user: PropTypes.object,
  setVisibleModal: PropTypes.func,
  src: PropTypes.string,
};


export default Message;
