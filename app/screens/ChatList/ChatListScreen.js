import React from 'react';
import {
  View,
  ScrollView,
} from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import ModalDelete from './components/ModalMenuDelete/index';
import ChatListItem from './components/ChatListItem/index';

const ChatListScreen = () => (
  <View>
    <ScrollView>
      <ChatListItem onLongPress={() => null} onPress={() => null} />
      <ChatListItem onLongPress={() => null} onPress={() => null} />
      <ChatListItem onLongPress={() => null} onPress={() => null} />
      <ChatListItem onLongPress={() => null} onPress={() => null} />
      <ChatListItem onLongPress={() => null} onPress={() => null} />
      <ChatListItem onLongPress={() => null} onPress={() => null} />
      <ChatListItem onLongPress={() => null} onPress={() => null} />
      <ChatListItem onLongPress={() => null} onPress={() => null} />
      <ChatListItem onLongPress={() => null} onPress={() => null} />
      <ChatListItem onLongPress={() => null} onPress={() => null} />
    </ScrollView>
    <ModalDelete
      isVisible={false}
      setUnVisible={() => null}
      deleteItem={() => null}
    />
  </View>
);

ChatListScreen.navigationOptions = ({ navigation }) => ({
  title: 'Список чатів',
  headerLeft: <MaterialIcons
    name='menu'
    size={35}
    onPress={() => navigation.navigate('DrawerOpen')}
  />,
});

export default ChatListScreen;
