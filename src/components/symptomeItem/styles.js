import { StyleSheet } from 'react-native';
import { PAADING } from '../../utils/constance';

const style = StyleSheet.create({
    item:{
        marginRight:15,
        flexDirection:'row',
        alignItems:'center',
        borderRadius:5,
        backgroundColor:'white',
        paddingHorizontal: PAADING.horizontal,
        paddingVertical:PAADING.vertical
    },
    img:{
        width:30,
        height:30,
        marginRight:5,
        borderRadius: 30 / 2
    },
    libele:{
        color:'black',
    }
});
export default style;
