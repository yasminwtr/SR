import { View, Text, TouchableOpacity, ScrollView, Image, Button } from 'react-native';
import styles from '../styles/worker'
import 'react-native-gesture-handler';
import { useEffect, useState } from 'react';
import WorkerItem from './WorkerItem';

export default function Worker(props, onPress) {

  const [workers, setWorkers] = useState([])
  const [id, setId] = useState([])

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
      <ScrollView>

        <Text style={styles.title}>Diarista</Text>
        <Button title="Teste" onPress={() => props.navigation.navigate('Profile')}></Button>
          {
            workers.map((data) => {
              return (
                <View>
                <TouchableOpacity style={styles.profileButton} onPress={() => props.navigation.navigate('Profile', data.idperson)}>
                    <Image source={require("../../assets/circle.png")} style={styles.profileIcon} />
                    <Text style={styles.name}>{data.email}</Text>
                    <Text style={styles.km}>{data.idperson}</Text>
                </TouchableOpacity>
                </View>
              )
            })
          }
      </ScrollView>
    </View>
  )
}