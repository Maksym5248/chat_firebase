import React from 'react';
import { StyleSheet, FlatList, KeyboardAvoidingView } from 'react-native';
import Type from 'prop-types';

import Message from './components/Message/Message';
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


const arr = [{
  key: 'a',
  photoURL: 'https://lh3.googleusercontent.com/3qybHqE4ff9MOts7v5l4S09W3HtOymwDic4LYzNVU-PhDIFvYAbju8qfRKB7AoxeWA=w170',
}, {
  key: 'b',
  photoURL: 'https://lh3.googleusercontent.com/3qybHqE4ff9MOts7v5l4S09W3HtOymwDic4LYzNVU-PhDIFvYAbju8qfRKB7AoxeWA=w170',
}, {
  key: 'c',
  photoURL: 'https://lh3.googleusercontent.com/3qybHqE4ff9MOts7v5l4S09W3HtOymwDic4LYzNVU-PhDIFvYAbju8qfRKB7AoxeWA=w170',
}, {
  key: 'd',
  photoURL: 'https://lh3.googleusercontent.com/3qybHqE4ff9MOts7v5l4S09W3HtOymwDic4LYzNVU-PhDIFvYAbju8qfRKB7AoxeWA=w170',
}, {
  key: 'e',
  photoURL: 'https://lh3.googleusercontent.com/3qybHqE4ff9MOts7v5l4S09W3HtOymwDic4LYzNVU-PhDIFvYAbju8qfRKB7AoxeWA=w170',
}, {
  key: 'f',
  photoURL: 'https://lh3.googleusercontent.com/3qybHqE4ff9MOts7v5l4S09W3HtOymwDic4LYzNVU-PhDIFvYAbju8qfRKB7AoxeWA=w170',
}, {
  key: 'x',
  photoURL: 'https://lh3.googleusercontent.com/3qybHqE4ff9MOts7v5l4S09W3HtOymwDic4LYzNVU-PhDIFvYAbju8qfRKB7AoxeWA=w170',
}, {
  key: 'g',
  photoURL: 'https://lh3.googleusercontent.com/3qybHqE4ff9MOts7v5l4S09W3HtOymwDic4LYzNVU-PhDIFvYAbju8qfRKB7AoxeWA=w170',
}, {
  key: 'q',
  photoURL: 'https://lh3.googleusercontent.com/3qybHqE4ff9MOts7v5l4S09W3HtOymwDic4LYzNVU-PhDIFvYAbju8qfRKB7AoxeWA=w170',
}];


const CurrentChatScreen = ({ modal, setUnVisible, setVisible }) => (
  <KeyboardAvoidingView
    style={styles.container}
    behavior='padding'
    keyboardVerticalOffset={50}
  >
    <FlatList
      data={arr}
      renderItem={({ item }) => item.key === 'a' ?
        <Message
          onVisibleModalVisible={() => setVisible(item.photoURL)}
          src={item.photoURL}
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
      value={''}
      onChangeText={() => null}
      send={() => null}
      openCamera={() => null}
      openGallery={() => null}
    />
  </KeyboardAvoidingView>
);

CurrentChatScreen.navigationOptions = ({ navigation }) => ({
  title: 'Список чатів',
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
