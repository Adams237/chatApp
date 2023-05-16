import { StyleSheet } from 'react-native';
import { COLOR, PAADING } from '../../utils/constance';

const dashboardStyle = StyleSheet.create({
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: PAADING.horizontal,
        paddingVertical: PAADING.vertical,
        backgroundColor: 'white',

    },
    userImage: {
        width: 50,
        height: 50,
        borderRadius: 50 / 2
    },
    userName: {
        fontSize: 16,
        color: 'black'
    },
    //style de la flatList
    flatStyle: {
        paddingHorizontal: PAADING.horizontal,
        paddingVertical: PAADING.vertical
    },

    //fin
    title: {

        paddingHorizontal: PAADING.horizontal,
        paddingVertical: PAADING.vertical
    },
    title_space_between: {

        paddingHorizontal: PAADING.horizontal,
        paddingVertical: PAADING.vertical,
        flexDirection: 'row',
        marginTop: 15,
        justifyContent: 'space-between'
    },
    titleBold: {
        fontWeight: 'bold',
        color: 'black',
    },
    link: {
        color: COLOR.main,
    },
    doctorContainer: {
        marginTop: 15,
        paddingHorizontal: PAADING.horizontal,
        paddingVertical: PAADING.vertical,
    },
    doctorCard: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: 'white',
        elevation: 5,
        padding: 10,
        paddingHorizontal: PAADING.horizontal,
        paddingVertical: PAADING.vertical,
        marginBottom: 20,
        borderRadius: 5
    },
    doctorImg: {
        width: 80,
        height: 80,
        borderRadius: 80 / 2,
        marginRight:15
    },
    doctorInfo:{
        flexDirection:'column'
    },
    doctorName:{
        fontWeight:'bold',
        fontSize:16,
        color:'black',
        marginBottom:15
    },
    doctorSpec:{
        backgroundColor:COLOR.main,
        fontSize:14,
        paddingHorizontal:PAADING.horizontal,
        padding:5,
        borderRadius:15
    }

});

export default dashboardStyle;
