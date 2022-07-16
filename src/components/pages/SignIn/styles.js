import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    backgroundColor: '#fefefe',
    height: '100%',
    flex: 1,
    display: 'flex',
    justifyContent: 'center',
    fontFamily: 'Rubik'
  },
  textInput: {
    backgroundColor: '#f9f9f9',
    borderColor: "gray",
    width: 300,
    margin: 6,
    borderRadius: 5,
    alignSelf: 'center',
    fontFamily: 'Rubik',
    color: '#3f4040'
  },
  buttonLogin: {
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
    fontFamily: 'Rubik',
    elevation: 3,
  },
  textNavigate: {
    textAlign: 'center',
    color: '#adaeb0',
    fontFamily: 'Rubik'
  },
  errorMessage: {
    textAlign: 'center',
    marginTop: 5,
    color: '#F85C70'
  },
  title: {
    fontSize: 30,
    alignSelf: 'center',
    marginBottom: 15,
    fontFamily: 'Rubik',
    color: '#3f4040'
  }
})