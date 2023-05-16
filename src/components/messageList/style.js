import { StyleSheet } from "react-native";
import { PAADING } from "../../utils/constance";

const styles = StyleSheet.create({
    messageContainer:{
        flexDirection:'row',
        alignItems:'center',
        backgroundColor:'white',
        elevation:5,
        marginTop:15,
        paddingVertical:PAADING.vertical,
        paddingHorizontal:PAADING.horizontal
    },
    messageImage:{
        width:50,
        height:50,
        borderRadius: 50/2,
        marginRight:15
    },
    messageInfo:{
        flexDirection:'column',
        flex:1,
        paddingVertical:PAADING.vertical,
       
    },
    texte:{
        color:'black'
    },
    dateName:{
        flexDirection:'row',
        justifyContent:'space-between',
        marginBottom:5
    },
    name:{
        fontWeight:'bold',
        color:'black',
        marginRight:5
    }
});

export default styles