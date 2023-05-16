import { Text, TouchableOpacity, Image } from 'react-native'
import React from 'react';
import style from './styles';

const ActivityItem = ({item}) => {
    return (
        <TouchableOpacity style={style.flatItemStyle}>
            <Image style={{ width: 48, height: 48 }} source={require('../../assets/images/h1.jpg')} />
            <Text style={style.mainText}>{item.mainText}</Text>
            <Text style={style.subText}>{item.subText}</Text>
        </TouchableOpacity>
    )
}

export default ActivityItem