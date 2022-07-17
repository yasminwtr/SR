import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  box: {
    width: 110,
    height: 110,
    backgroundColor: '#fff',
    borderRadius: 8,
    margin: 6,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.18,
    shadowRadius: 1.00,
    elevation: 1,
    fontFamily: 'Rubik'
  },
  containerBox: {
    backgroundColor: '#f8f8f8 ',
    flex: 1,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    flexWrap: 'wrap',
    fontFamily: 'Rubik'
  },
  header: {
    display: 'flex',
    flexDirection: 'row',
    margin: 10,
    backgroundColor: '#F85C70',
    margin: 'auto',
    height: '32%',
    alignItems: 'center',
    marginBottom: 20,
    color: '#fff',
    width:'100%',
    fontFamily: 'Rubik',
    justifyContent: 'center'
  },
  titleHeader: {
    color: '#fff',
    fontSize: 25,
    fontFamily: 'Rubik-Medium',
    marginTop: 10
  },
  icon: {
    width: 45,
    height: 45,
    marginLeft:8
  },
  titleContainer: {
    color: '#3f4040',
    margin:20,
    marginBottom:20,
    fontFamily: 'Rubik-Medium',
    fontSize: 20
  },
  btnContainer: {
    color: '#3f4040',
    marginRight: 20,
    fontFamily: 'Rubik'
  },
  container: {
    justifyContent:'space-between',
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'row',
    fontFamily: 'Rubik'
  },
})

export default styles
