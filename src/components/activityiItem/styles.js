import { StyleSheet } from 'react-native';

const style = StyleSheet.create({
    flatItemStyle:{
        flexDirection:'column',
        paddingHorizontal:15,
        paddingVertical:15,
        marginRight:15,
        backgroundColor:'white',
        elevation:2,
    },
    mainText:{
        color:'black',
        fontWeight:'bold',
        fontSize:16
    },
    subText:{
        color:'black',
        marginTop:10,
        fontSize:12
    }
});
export default style