import {StyleSheet} from 'react-native';
import { COLOR } from '../../utils/constance';

const styles = StyleSheet.create({
    container:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        backgroundColor:'#eee'
    },
    input:{
        flex:1,
        backgroundColor:'white',
        color:'black'
    },
    send:{
        backgroundColor : COLOR.main,
        padding:10,
        paddingHorizontal:15,
        paddingVertical:12,
        alignItems:'center',
        color:'white'
    }
});
export default styles;
