import React from 'react';
import {
  View,
  Text,
} from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';


const ChatListScreen = ({
  loading,
}) => (
  <View>
    <Text>Hello from FeedScreen</Text>
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
