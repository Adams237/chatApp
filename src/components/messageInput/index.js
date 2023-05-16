import { View, TouchableOpacity, TextInput } from 'react-native';
import React from 'react';
import styles from './style';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const MessageInput = () => {
  return (
    <View style={styles.container}>
      <TextInput style={styles.input} placeholder="message ici..."/>
      <TouchableOpacity>
        <MaterialCommunityIcons name="send" style={styles.send} size={25} />
      </TouchableOpacity>
    </View>
  );
};

export default MessageInput;
