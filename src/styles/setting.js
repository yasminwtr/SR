import { StyleSheet } from "react-native"

export default StyleSheet.create({
    page: {
        backgroundColor: '#f3f8fe',
    },
    container: {
        justifyContent: 'center',
        alignContent: 'center',
        backgroundColor: '#3d4379',
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
        marginTop: 20
    },

    name: {
        marginTop: 10,
        fontSize: 25,
        textAlign: 'center',
        color: '#fff'
    },
    email: {
        fontSize: 20,
        textAlign: 'center',
        color: '#e6e3e3'
    },
    configurations: {
        marginTop: 20,
        backgroundColor: '#f3f8fe'
    },
    button: {
        flexDirection: 'row',
        marginBottom: 25,
        marginTop: 20,
        marginLeft: 40
    },
    editText: {
        fontSize: 18,
        color: '#565d61',
        marginLeft: 10
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
    },
    exitText: {
        fontSize: 18,
        color: '#a17792',
        marginLeft: 10,
    },
})