import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import Avatar from '../../../../components/Avatar/index';

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    padding: 5,
  },
  container: {
    maxWidth: '70%',
    alignItems: 'flex-start',
    paddingTop: 5,
    paddingBottom: 5,
  },
  wrapperMessage: {
    backgroundColor: '#c2c2c2',
    alignItems: 'flex-start',
    margin: 5,
    marginBottom: 0,
    padding: 5,
    paddingRight: 20,
    borderRadius: 20,
    borderTopLeftRadius: 0,
  },
  time: {
    padding: 5,
  },
  statusMessage: {
    paddingLeft: 20,
  },
});


const Message = ({ user, onVisibleModalVisible, src }) => (
  <View style={styles.wrapper}>
    <TouchableOpacity onPress={onVisibleModalVisible}>
      <Avatar size={40} src={src} />
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
  onVisibleModalVisible: PropTypes.func,
  src: PropTypes.string,
};


export default Message;
