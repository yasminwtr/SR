import { StyleSheet } from "react-native"
import { StatusBar } from "react-native"

export default StyleSheet.create({
    // pag index
    container: {
        flex: 1,
        marginTop: StatusBar.currentHeight || 0,
        backgroundColor: '#EBEAEA'
      },
      item: {
        margin: 20,
        padding: 10,
        marginVertical: 8,
        marginHorizontal: 16,
        borderRadius: 15,
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,
    
        elevation: 3,
      },
      titleService: {
        fontSize: 20,
        textAlign: 'center',
        color: '#3f4040',
      },
      title: {
        fontSize: 25,
        textAlign: 'left',
        margin: 30,
        marginTop: 50,
        marginBottom: 30,
        color: '#F85C70',
        fontFamily: 'Rubik-Medium'
      },

      // pag description
      titleInput: {
        fontSize: 20,
        textAlign: 'center',
        marginTop: 30,
        color: '#fdc9c9',
        fontFamily: 'Rubik'
      },
      TextInput: {
        borderRadius: 15,
        borderColor: '#fff',
        margin: 20,
        marginTop: 30,
        backgroundColor: '#fff',
        padding: 30,
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
      },
      btn: {
    
        // backgroundColor: '#ff9796',
        padding: 8,
        width: '70%',
        alignSelf: 'center',
        borderRadius: 20,
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        // borderRadius: 30,
        // margin: '5%',
        // textAlign: 'center',
        // color: '#fff'
      },
      CurrencyInput: {
        marginBottom: '30%',
        borderRadius: 15,
        width: '30%',
        height: 40,
        alignSelf: 'center',
        backgroundColor: '#fff',
        textAlign: 'center',
        flexDirection: 'row',
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
      }
})