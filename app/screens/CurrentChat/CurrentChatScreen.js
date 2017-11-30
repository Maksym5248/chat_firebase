import React from 'react';
import { StyleSheet, FlatList, KeyboardAvoidingView } from 'react-native';
import Type from 'prop-types';

import Message from './components/Message/index';
import MessageMain from './components/MessageMain/MessageMain';
import ModalAvatar from './components/ModalAvatar/ModalAvatar';
import InputMessage from './components/InputMessage/index';

const color = '#F5FCFF';

const styles = StyleSheet.create({
  container: {
    flex: 2,
    justifyContent: 'flex-start',
    alignItems: 'stretch',
    backgroundColor: color,
  },
});

// read || notSent || sending || delivered
const arr = [{
  user: {
    photoUrl: 'https://lh3.googleusercontent.com/3qybHqE4ff9MOts7v5l4S09W3HtOymwDic4LYzNVU-PhDIFvYAbju8qfRKB7AoxeWA=w170',
  },
  message: {
    id: 'g',
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam culpa cumque delectus eos impedit modi nihil nisi, nulla rerum ullam.',
    time: Date.now(),
    status: 'read',
    author: 'id',
  },
},
{
  user: {
    photoUrl: 'https://lh3.googleusercontent.com/3qybHqE4ff9MOts7v5l4S09W3HtOymwDic4LYzNVU-PhDIFvYAbju8qfRKB7AoxeWA=w170',
  },
  message: {
    id: 'b',
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam culpa cumque delectus eos impedit modi nihil nisi, nulla rerum ullam.',
    time: Date.now(),
    status: 'read',
    author: 'id',
  },
},
{
  user: {
    photoUrl: 'https://lh3.googleusercontent.com/3qybHqE4ff9MOts7v5l4S09W3HtOymwDic4LYzNVU-PhDIFvYAbju8qfRKB7AoxeWA=w170',
  },
  message: {
    id: 'a',
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam culpa cumque delectus eos impedit modi nihil nisi, nulla rerum ullam.',
    time: Date.now(),
    status: 'read',
    author: 'id',
  },
},
{
  user: {
    photoUrl: 'https://lh3.googleusercontent.com/3qybHqE4ff9MOts7v5l4S09W3HtOymwDic4LYzNVU-PhDIFvYAbju8qfRKB7AoxeWA=w170',
  },
  message: {
    id: 'c',
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam culpa cumque delectus eos impedit modi nihil nisi, nulla rerum ullam.',
    time: Date.now(),
    status: 'read',
    author: 'id',
  },
},
];


const CurrentChatScreen = ({ modal, setUnVisible, setVisible }) => (
  <KeyboardAvoidingView
    style={styles.container}
    behavior='padding'
    keyboardVerticalOffset={50}
  >
    <FlatList
      data={arr}
      keyExtractor={(item) => item.message.id}
      renderItem={({ item }) => item.id === 'a' ?
        <Message
          key={item.id}
          setVisibleModal={() => setVisible(item.photoURL)}
          user={item.user}
        /> :
        <MessageMain />
      }
    />
    <ModalAvatar
      offVisibleModalVisible={setUnVisible}
      src={modal.photoURL}
      visible={modal.isVisible}
    />
    <InputMessage
      value=''
      onChangeText={() => null}
      send={() => null}
      openCamera={() => null}
      openGallery={() => null}
    />
  </KeyboardAvoidingView>
);

CurrentChatScreen.navigationOptions = ({ navigation }) => ({
  title: 'Чат',
});

CurrentChatScreen.defaudefaultProps = {

};

CurrentChatScreen.propTypes = {
  chatList: Type.object,
  chatsListId: Type.array,
  userList: Type.object,
  modal: Type.object,
  setVisible: Type.func,
  setUnVisible: Type.func,
  moveToChat: Type.func,
  itemOnLongPress: Type.func,
  deleteChat: Type.func,
};


export default CurrentChatScreen;
