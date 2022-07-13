import { StyleSheet } from "react-native"

export default StyleSheet.create({
    page: {
        backgroundColor: '#EBEAEA',
    },
    container: {
        justifyContent: 'center',
        alignContent: 'center',
        backgroundColor: '#F85C70',
        borderBottomEndRadius: 20,
        borderBottomStartRadius: 20,
        shadowColor: '#3d4379',
        shadowOffset: { width: -2, height: 4 },
        shadowOpacity: 0.2,
        shadowRadius: 6
    },
    profileIcon: {
        width: 120,
        height: 120,
        alignSelf: 'center',
        marginTop: 20
    },

    name: {
        marginTop: 10,
        fontSize: 25,
        textAlign: 'center',
        color: '#fff',
        fontFamily: 'Rubik'
    },
    email: {
        fontSize: 20,
        textAlign: 'center',
        color: '#EBEAEA',
        fontFamily: 'Rubik'
    },
    configurations: {
        marginTop: 20,
        backgroundColor: '#EBEAEA',
    },
    button: {
        flexDirection: 'row',
        marginBottom: 25,
        marginTop: 20,
        marginLeft: 40
    },
    editText: {
        fontSize: 18,
        color: '#3f4040',
        marginLeft: 10,
        fontFamily: 'Rubik'
    },
    divider: {
        width: 372,
        height: 1,
        backgroundColor: '#e3e3e3',
        marginLeft: 20
    },
    deleteText: {
        fontSize: 18,
        color: '#b52d2d',
        marginLeft: 10,
        fontFamily: 'Rubik'
    },
    exitText: {
        fontSize: 18,
        color: '#3f4040',
        marginLeft: 10,
        fontFamily: 'Rubik'
    },
    serviceText: {
        fontSize: 18,
        color: '#F85C70',
        marginLeft: 10,
        fontFamily: 'Rubik'
    },
    textInput: {
        margin: 10
    },
    divider: {
        width: 372,
        height: 1,
        backgroundColor: '#e3e3e3',
        marginLeft: 20
    },
    buttonChangePassword: {
        borderColor: '#dc9cae',
        width:'40%',
        alignSelf:'center',
        marginTop:20
    }
})