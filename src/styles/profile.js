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
        height: 300,
        borderBottomEndRadius: 20,
        borderBottomStartRadius: 20,
        shadowColor: '#3d4379',
        shadowOffset: {width: -2, height: 4},
        shadowOpacity: 0.2,
        shadowRadius: 3
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
        color: '#fff'
    },
    service: {
        fontSize: 20,
        textAlign: 'center',
        color: '#e6e3e3'
    },
    button: {
        backgroundColor: '#e6e3e3',
        padding: 18,
        borderRadius: 30,
        width: 280,
        alignSelf: 'center',
        marginTop: 40,
        shadowColor: '#3d4379',
        shadowOffset: {width: -2, height: 4},
        shadowOpacity: 0.2,
        shadowRadius: 3
    },
    buttonText: {
        fontSize: 15,
        textAlign: 'center',
        color: '#343434'
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
        color: '#555c92',
        fontWeight: 'bold',
        fontSize: 17,
        marginLeft: 5
    },
    textContact: {
        fontSize: 16,
        textAlign: 'justify',
        marginBottom: 30,
        marginTop: 5,
        color: '#343434'
    }
})