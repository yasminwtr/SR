import { View, Text, TouchableOpacity, ScrollView, Image, Button } from 'react-native';
import styles from '../styles/worker'
import 'react-native-gesture-handler';
import { useEffect, useState } from 'react';
import WorkerItem from './WorkerItem';

export default function Worker(props) {

  const [workers, setWorkers] = useState([])

  const getWorkers = async() => {
    try{
      const response = await fetch('http://localhost:3000/registerPerson')
      const data = response.json()
      data.then(
        (val) => setWorkers(val)

      )
    } catch (error){
      console.log(error)
      setWorkers([])      
    }
  }

  useEffect( () => {
    getWorkers()
  }, [])


  
  return (
    <View style={styles.page}>
      {/* <TextInput
        style={styles.input}
        placeholder='Buscar mais próximo por CEP'
        keyboardType='numeric'
        maxLength={8}
      /> */}
      <ScrollView>

        <Text style={styles.title}>Diarista</Text>
        <Button title="Teste" onPress={() => props.navigation.navigate('Perfil')}></Button>
          {
            workers.map((data) => {
              return (
                <WorkerItem key={data.idperson} name={data.fullname} onPress={() => props.navigation.navigate('Perfil', data.idperson)}/>
              )
            })
          }
      </ScrollView>
    </View>
  )
}