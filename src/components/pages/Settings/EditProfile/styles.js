import { StyleSheet } from "react-native"

export default StyleSheet.create({
  container:{
    backgroundColor:'#fefefe',
    height: '100%',
    flex: 1,
    display: 'flex',
    justifyContent: 'center',
  },
  containerInputs:{
    margin:50
  },
  title: {
    color: '#F85C70',
    alignSelf: 'center',
    fontSize:30
  },
  btn: {
    backgroundColor: '#F85C70',
    padding: 10,
    borderRadius: 5,
    margin: '4%',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 3,
    borderColor: '#dc9cae',
    width: '40%',
    alignSelf: 'center',
    marginTop: 20,
  },
  textBtn: {
    color: '#fff',
    textAlign:'center'
  },
  errorMessage: {
    textAlign: 'center',
    marginTop: 5,
    color: '#F85C70'
  }
})
