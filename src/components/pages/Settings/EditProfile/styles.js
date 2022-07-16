import { StyleSheet } from "react-native"

export default StyleSheet.create({
  container:{
    backgroundColor:'#F2F2F2',
    height: '100%',
    flex: 1,
    display: 'flex',
    justifyContent: 'center',
  },
  containerInputs:{
    margin:50,
    fontFamily: 'Rubik',
  },
  title: {
    color: '#F85C70',
    alignSelf: 'center',
    fontSize: 25,
    fontFamily: 'Rubik'
  },
  btn: {
    backgroundColor: '#F85C70',
    padding: 13,
    borderRadius: 5,
    margin: '4%',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    fontFamily: 'Rubik',
    elevation: 3,
    borderColor: '#dc9cae',
    width: '50%',
    alignSelf: 'center',
    marginTop: 30,
    color: '#3f4040'
  },
  textBtn: {
    color: '#fff',
    textAlign:'center',
    fontFamily: 'Rubik'
  },
  errorMessage: {
    textAlign: 'center',
    marginTop: 5,
    color: '#F85C70'
  },
  textInput: {
    backgroundColor: '#fcfcfc'
  }
})
