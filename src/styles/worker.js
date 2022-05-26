import { StyleSheet } from "react-native"

export default StyleSheet.create({
    page: {
        backgroundColor: '#f3f8fe',
        minHeight: 2000
    },
    input: {
        marginTop: 40,
        borderRadius: 10,
        padding: 15,
        backgroundColor: '#fcfcfc',
        borderColor: '#a3a3a3',
        width: 340,
        alignSelf: 'center',
        shadowColor: '#a3a3a3',
        shadowOffset: {width: -2, height: 4},
        shadowOpacity: 0.2,
        shadowRadius: 6,
        marginBottom: 15
    },
    title: {
        color: '#3d4379',
        fontSize: 23,
        marginLeft: 20,
        marginTop: 40
    },
    profileButton: {
        width: 340,
        height: 60,
        alignSelf: 'center',
        flexDirection: 'row',
        backgroundColor: '#fcfcfc',
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
        color: '#3d4379',
        left: 70
    },
    km: {
        fontSize: 14,
        position: 'absolute',
        left: 260,
        color: '#343434'
    }
})