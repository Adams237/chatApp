import { View, Text } from 'react-native'
import React from 'react'
import styles from './style'
import relativeTime from 'dayjs/plugin/relativeTime';
import dayjs from 'dayjs'
dayjs.extend(relativeTime)

const Messages = ({item}) => {
    const isMine = ()=>{
        return item.user.id === 1;
    }
  return (
    <View style={[styles.container, {backgroundColor: isMine()?'#DCF8C5':'white', alignSelf: isMine()? 'flex-end':'flex-start'}]}>
      <Text style={styles.texte}>{item.message}</Text>
      <Text style={styles.texte}>{dayjs(item.createAt).fromNow(true)}</Text>
    </View>
  )
}

export default Messages