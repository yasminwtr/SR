import { StyleSheet } from "react-native"

export default StyleSheet.create({
    page: {
        backgroundColor: '#F2F2F2'
    },
    container: {
        padding: 15,
        justifyContent: 'center',
        alignContent: 'center',
        backgroundColor: '#F85C70',
        height: 300,
        borderBottomEndRadius: 20,
        borderBottomStartRadius: 20,
        shadowColor: '#3d4379',
        shadowOffset: {width: -2, height: 4},
        shadowOpacity: 0.2,
        shadowRadius: 6
    },
    profileIcon: {
        width: 120,
        height: 120,
        alignSelf: 'center',
        marginTop: 70
    },
    name: {
        marginTop: 10,
        fontSize: 25,
        textAlign: 'center',
        color: '#fff',
        fontFamily: 'Rubik'
    },
    service: {
        fontSize: 20,
        textAlign: 'center',
        color: '#EBEAEA',
        fontFamily: 'Rubik'
    },
    button: {
        backgroundColor: '#fafafa',
        padding: 18,
        borderRadius: 30,
        width: 280,
        alignSelf: 'center',
        marginTop: 40,
        shadowColor: '#3d4379',
        shadowOffset: {width: -2, height: 4},
        shadowOpacity: 0.2,
        shadowRadius: 6
    },
    buttonText: {
        fontSize: 15,
        textAlign: 'center',
        color: '#3f4040',
        fontFamily: 'Rubik'
    },
    containerContact: {
        marginTop: 50,
        padding: 20,
        marginBottom: 20,
    },
    viewContact: {
        flexDirection: 'row'
    },
    titleContact: {
        color: '#3f4040',
        fontSize: 17,
        marginLeft: 5,
        fontFamily: 'Rubik-Medium'
    },
    textContact: {
        fontSize: 16,
        textAlign: 'justify',
        marginBottom: 20,
        marginTop: 5,
        color: '#3f4040',
        fontFamily: 'Rubik'
    },
    service:{
      fontSize: 16,
      textAlign: 'justify',
      // marginBottom: 5,
      marginTop: 5,
      color: '#3f4040',
      fontFamily: 'Rubik'
    }
})