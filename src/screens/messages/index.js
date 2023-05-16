import { View, Text, FlatList } from 'react-native';
import React from 'react';
import { MESSAGES } from '../../datas/messages';
import MessageList from '../../components/messageList';
import style from './style';

const Messages = ({navigation}) => {
  return (
    <FlatList 
    data={MESSAGES}
    keyExtractor={(item) => item.id}
    style={style.root}
    renderItem={({item})=>{
      return (
        <MessageList item={item} navigation={navigation}/>
      )
    }}
    />
  );
};

export default Messages;
