import React from 'react';
import Type from 'prop-types';
import { View, TextInput, TouchableOpacity } from 'react-native';
import { FontAwesome, MaterialIcons } from '@expo/vector-icons';
import styles from './styles';


const InputMessage = ({
  value, onChangeText, send, openCamera, openGallery,
}) => (
  <View style={styles.wrapper}>
    <View style={styles.containerInput}>
      <TouchableOpacity onPress={openCamera}>
        <MaterialIcons style={styles.icon} name='photo-camera' size={36} />
      </TouchableOpacity>
      <TouchableOpacity style={styles.icon} onPress={openGallery}>
        <FontAwesome name='photo' size={36} />
      </TouchableOpacity>
      <TextInput
        style={styles.input}
        placeholder='Введіть повідомлення'
        onChangeText={onChangeText}
        value={value}
      />
    </View>
    <TouchableOpacity onPress={send}>
      <FontAwesome name='send' size={40} />
    </TouchableOpacity>
  </View>
);


InputMessage.propTypes = {
  value: Type.string.isRequired,
  onChangeText: Type.func.isRequired,
  send: Type.func,
  openCamera: Type.func,
  openGallery: Type.func,
};

export default InputMessage;
