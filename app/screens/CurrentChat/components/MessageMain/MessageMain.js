import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import Avatar from '../../../../components/Avatar/index';


const styles = StyleSheet.create({
  wrapperMain: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    padding: 5,
  },
  containerMain: {
    maxWidth: '70%',
    alignItems: 'flex-end',
    paddingTop: 5,
    paddingBottom: 5,
  },
  wrapperMessageMain: {
    backgroundColor: '#6fc2e8',
    alignItems: 'flex-end',
    margin: 5,
    marginBottom: 0,
    padding: 5,
    paddingLeft: 20,
    borderRadius: 20,
    borderTopRightRadius: 0,
  },
  timeMain: {
    padding: 5,
  },
  statusMessageMain: {
    paddingRight: 20,
  },
});


const MessageMain = ({ userCurrent, message, modalVisible }) => {

  return (
    <View style={styles.wrapperMain}>
      <View style={styles.containerMain}>
        <View style={styles.wrapperMessageMain}>
          <Text >
            {message.text}
          </Text>
          <Text style={styles.timeMain} >
            {moment(message.time).format('hh:mm')}
          </Text>
        </View>
        <Text style={styles.statusMessageMain} >
          {message.status}
        </Text>
      </View>
      <TouchableOpacity onPress={() => null}>
        <Avatar size={40} src={userCurrent.photoUrl} />
      </TouchableOpacity>
    </View>


  );
};

MessageMain.propTypes = {
  userCurrent: PropTypes.object,
  modalVisible: PropTypes.func,
  message: PropTypes.object,
};


export default MessageMain;
