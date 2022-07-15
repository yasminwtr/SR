import { StyleSheet } from "react-native"

export default StyleSheet.create({
  page: {
    backgroundColor: '#f8f8f8',
    height: '100%'
  },
  container: {
    justifyContent: 'center',
    alignContent: 'center',
    backgroundColor: '#F85C70',
    borderBottomEndRadius: 20,
    borderBottomStartRadius: 20,
    shadowColor: '#3d4379',
    shadowOffset: { width: -2, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 6,
    paddingBottom: 35,
  },
  profileIcon: {
    width: 120,
    height: 120,
    alignSelf: 'center',
    marginTop: 25
  },
  name: {
    marginTop: 10,
    fontSize: 25,
    textAlign: 'center',
    color: '#fff',
    fontFamily: 'Rubik'
  },
  email: {
    fontSize: 20,
    textAlign: 'center',
    color: '#EBEAEA',
    fontFamily: 'Rubik'
  },
  configurations: {
    marginTop: 20,
  },
  button: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    marginBottom: 10,
    borderRadius: 10,
    margin: 10,
    height: 50,
    alignItems: 'center',
    backgroundColor: '#fff'
  },
  editText: {
    fontSize: 18,
    color: '#3f4040',
    marginLeft: 10,
    fontFamily: 'Rubik'
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
    fontFamily: 'Rubik'
  },
  exitText: {
    fontSize: 18,
    color: '#fff',
    marginRight: 20,
    fontFamily: 'Rubik',
    textAlign: 'center',
    marginLeft: 5
  },
  serviceText: {
    fontSize: 18,
    color: '#F85C70',
    marginLeft: 10,
    fontFamily: 'Rubik'
  },
  textInput: {
    margin: 10
  },
  divider: {
    width: 372,
    height: 1,
    backgroundColor: '#e3e3e3',
    marginLeft: 20
  },
  buttonExit: {
    backgroundColor: '#F85C70',
    color: '#F85C70',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 25,
    marginTop: 20,
    marginLeft: 20,
    width: 100,
    height: 50,
    borderRadius: 10
  },
  icon: {
    marginLeft: 20
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  buttonModal: {
    borderRadius: 20,
    padding: 10,
    elevation: 2
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "#F85C70",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center"
  }
})