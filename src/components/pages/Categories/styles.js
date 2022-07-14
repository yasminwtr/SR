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
  },
  containerBox: {
    backgroundColor: '#f8f8f8 ',
    flex: 1,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    flexWrap: 'wrap'
  },
  header: {
    display: 'flex',
    flexDirection: 'row',
    margin: 10,
    backgroundColor: '#F85C70',
    margin: 'auto',
    height: '40%',
    alignItems: 'center',
    marginBottom:20,
    color: '#fff',
    width:'100%'
  },
  titleHeader: {
    color: '#fff',
    marginLeft: 20,
    fontSize:25
  },
  icon: {
    width: 45,
    height: 45,
    marginLeft:8
  },
  titleContainer: {
    color:'#000000',
    margin:20,
    marginBottom:20
  },
  btnContainer: {
    color:'#000000',
    marginRight: 20
  },
  container: {
    justifyContent:'space-between',
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'row',
  },
})

export default styles
