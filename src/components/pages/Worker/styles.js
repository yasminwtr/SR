import { StyleSheet } from "react-native"

export default StyleSheet.create({
    page: {
        backgroundColor: '#EBEAEA',
        minHeight: 2000
    },
    flatlist: {
        padding: 10
    },
    title: {
        color: '#F85C70',
        fontSize: 23,
        marginLeft: 20,
        marginTop: 60,
        fontFamily: 'Rubik-Medium'
    },
    profileButton: {
        width: 340,
        height: 60,
        alignSelf: 'center',
        flexDirection: 'row',
        backgroundColor: '#F8F8F8',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
        borderRadius: 20,
        marginTop: 20,
        shadowColor: '#a3a3a3',
        shadowOffset: {width: -2, height: 4},
        shadowOpacity: 0.2,
        shadowRadius: 6
    },
    profileIcon: {
        width: 35,
        height: 35,
        position: 'absolute',
        left: 20
    },
    name: {
        fontSize: 17,
        position: 'absolute',
        color: '#3f4040',
        left: 70,
        fontFamily: 'Rubik'
    }
})