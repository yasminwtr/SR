import { View, Text, TouchableOpacity, ScrollView, Image, Button, FlatList } from 'react-native';
import styles from './styles'
import 'react-native-gesture-handler';
import React, { useEffect, useState } from 'react';

const Worker = ({ navigation }) => {
  const [workers, setWorkers] = useState([])

  const getWorkers = async () => {
    try {
      const response = await fetch('http://localhost:3000/registerPerson')
      const data = response.json()
      data.then(
        (val) => setWorkers(val)

      )
    } catch (error) {
      console.log(error)
      setWorkers([])
    }
  }

  useEffect(() => {
    getWorkers()
  }, [])


  return (
    <View style={styles.page}>
      <ScrollView>

        <Text style={styles.title}>Diarista</Text>
        <Button title="Teste" onPress={() => props.navigation.navigate('Profile')}></Button>

        <FlatList
          data={workers}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => {
            return (
              <View>
                <TouchableOpacity style={styles.profileButton}
                  onPress={() => navigation.navigate('Profile',
                    { workerId: `${item.idperson}`, name: `${item.fullname}`, email: `${item.email}`, phonenumber: `${item.phonenumber}` })}>


                  <Image source={require("../../../../assets/circle.png")} style={styles.profileIcon} />
                  <Text style={styles.name}>{item.email}</Text>
                  <Text style={styles.km}>{item.idperson}</Text>
                </TouchableOpacity>
              </View>
            )
          }}
        />
      </ScrollView>
    </View>
  )
}

export default Worker