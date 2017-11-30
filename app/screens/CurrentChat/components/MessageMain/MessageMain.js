import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
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


const MessageMain = ({ user, dispatch, modalVisible }) => {
  const title = 'Костін Максим';
  const date = '20.10.2017';
  const isNew = 'Нове';

  return (
    <View style={styles.wrapperMain}>
      <View style={styles.containerMain}>
        <View style={styles.wrapperMessageMain}>
          <Text >
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium
                      animi assumenda delectus earum, facere fuga harum inventore labore
          </Text>
          <Text style={styles.timeMain} >
                      20.00
          </Text>
        </View>
        <Text style={styles.statusMessageMain} >
                  Прочитано
        </Text>
      </View>
      <TouchableOpacity onPress={(e) => null}>
        <Avatar size={40} />
      </TouchableOpacity>
    </View>


  );
};

MessageMain.propTypes = {
  user: PropTypes.object,
  modalVisible: PropTypes.func,
  dispatch: PropTypes.func,
};


export default MessageMain;
