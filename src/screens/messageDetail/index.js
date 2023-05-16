import { View, Text, FlatList } from 'react-native'
import React, { useEffect } from 'react'
import { CONVERSATION } from '../../datas/conversation'
import Messages from '../../components/messages';
import MessageInput from '../../components/messageInput';
const MessageDetail = ({ route, navigation }) => {
    const { item } = route.params;
    useEffect(() => {
        navigation.setOptions({ title: item.fullName })
    })
    return (
        <View style={{flex:1}}>
            <FlatList
                data={CONVERSATION}
                keyExtractor={item => item.id}
                renderItem={({ item }) => {
                    return <Messages item={item}/>;
                }}
            />
            <MessageInput/>
        </View>
    )
}

export default MessageDetail;
