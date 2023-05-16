import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'

import style from './styles'
const SymptomeItem = ({ item }) => {
    return (
        <TouchableOpacity >
            <View style={style.item}>
                <Image style={style.img} source={require(`../../assets/images/img1.jpg`)} />
                <Text style={style.libele}>{item.libele}</Text>
            </View>
        </TouchableOpacity>
    )
}

export default SymptomeItem