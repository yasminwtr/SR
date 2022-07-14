import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    backgroundColor: '#fefefe',
    height: '100%',
    flex: 1,
    display: 'flex',
    justifyContent: 'center',
  },
  textInput: {
    backgroundColor: '#f9f9f9',
    borderColor: "gray",
    width: 300,
    margin: 6,
    borderRadius: 5,
    alignSelf: 'center',
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

    elevation: 3,
  },
  textNavigate: {
    textAlign: 'center',
    color: '#adaeb0'
  },
  errorMessage: {
    textAlign: 'center',
    marginTop: 5,
    color: '#F85C70'
  },
  title: {
    fontSize: 30,
    alignSelf: 'center',
    marginBottom: 15
  }
})