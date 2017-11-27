import React from 'react';
import PropTypes from 'prop-types';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from './styles';
import Avatar from '../../../../components/Avatar/index';


const ChatListItem = ({ onLongPress, onPress, message }) => (
  <TouchableOpacity onLongPress={onLongPress} onPress={onPress}>
    <View style={styles.container}>
      <View >
        <Avatar />
      </View>
      <View style={styles.wrapperContent}>
        <View style={styles.headerContent}>
          <Text style={styles.headerTitle}>
            {'Костін Максим'}
          </Text>
          <Text>
            {'20.10.2017'}
          </Text>
          <Text>
            {'Нове'}
          </Text>
        </View>
        <Text style={styles.content}>
                   Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id, provident, quae.
                   Assumenda dignissimos eaque molestiae nobis placeat.
                   Ab architecto fugit maxime minima mollitia neque temporibus.
        </Text>
      </View>
    </View>
  </TouchableOpacity>
);


ChatListItem.defaudefaultProps = {
  message: {
    title: 'Костін Максим',
    date: '20.10.2017',
    isNew: 'Нове',
  },
};

ChatListItem.propTypes = {
  onLongPress: PropTypes.func,
  onPress: PropTypes.func,
  message: PropTypes.object,
};

export default ChatListItem;
