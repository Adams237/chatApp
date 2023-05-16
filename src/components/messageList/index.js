import { View, Text, TouchableOpacity, Image } from 'react-native';
import React from 'react';
import styles from './style';
import relativeTime from 'dayjs/plugin/relativeTime';
import dayjs from 'dayjs';
dayjs.extend(relativeTime);

const MessageList = ({item, navigation}) => {
  return (
    <TouchableOpacity style={styles.messageContainer} onPress={()=>{
      navigation.navigate('messageDetails',{item});
    }}>
        <Image source={require('../../assets/images/p1.jpg')} style={styles.messageImage}/>
        <View style={styles.messageInfo}>
            <View style={styles.dateName}>
                <Text style={styles.name}>{item.fullName}</Text>
                <Text  style={styles.texte}>{dayjs(item.date).fromNow(true)}</Text>
            </View>
            <Text  style={styles.texte}>{item.lastMessage}</Text>
        </View>
    </TouchableOpacity>
  );
};

export default MessageList;
