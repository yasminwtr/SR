import { StyleSheet } from "react-native"

export default StyleSheet.create({
    page: {
        backgroundColor: '#f3f8fe'
    },
    container: {
        padding: 15,
        justifyContent: 'center',
        alignContent: 'center',
        backgroundColor: '#3d4379',
        height: 130,
        borderBottomEndRadius: 20,
        borderBottomStartRadius: 20,
        shadowColor: '#3d4379',
        shadowOffset: {width: -2, height: 4},
        shadowOpacity: 0.2,
        shadowRadius: 6
    },
    name: {
        textAlign: 'center',
        fontSize: 22,
        color: '#fff'
    },
    email: {
        textAlign: 'center',
        fontSize: 16,
        color: '#e6e3e3'
    },
    configurations: {
        marginTop: 20,
        backgroundColor: '#f3f8fe'
    },
    button: {
        flexDirection: 'row',
        marginBottom: 25,
        marginTop: 25,
        marginLeft: 40
    },
    editText: {
        fontSize: 18,
        color: '#343434',
        marginLeft: 10
    },
    divider: {
        width: 320,
        height: 1,
        backgroundColor: '#e3e3e3',
        marginLeft: 20
    },
    deleteText: {
        fontSize: 18,
        color: '#b52d2d',
        marginLeft: 10
    },
    exitText: {
        fontSize: 18,
        color: '#a17792',
        marginLeft: 10
    }
})