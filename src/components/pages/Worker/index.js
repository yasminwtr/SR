import { View, Text, TouchableOpacity, ScrollView, ImageBackground, Button, FlatList } from 'react-native';
import styles from './styles'
import 'react-native-gesture-handler';
import React, { useEffect, useState } from 'react';
import { useRoute } from '@react-navigation/native';
import api from '../../../api';

const Worker = ({ navigation }) => {
  const [workers, setWorkers] = useState([])

  const route = useRoute()

  const { serviceCategory, filteredWorkers } = route.params ?? {}
  console.log('filteredWorkers',filteredWorkers);

  const getWorkers = async () => {
    try {
      const response = await api.get('/registerPerson')
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
    filteredWorkers?.length ?
      setWorkers(filteredWorkers)
      : getWorkers()
  }, [])

  useEffect(() => {
    if (filteredWorkers?.length) {
      setWorkers(filteredWorkers)
    }
  }, [filteredWorkers])

  return (
    <View style={styles.page}>
      <ScrollView>

        <Text style={styles.title}>{serviceCategory ?? 'Trabalhadores'}</Text>

        <FlatList
          style={styles.flatlist}
          data={workers}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => {
            return (
              <View>
                <TouchableOpacity style={styles.profileButton}
                  onPress={() => navigation.navigate('Profile',
                    { workerId: `${item.idperson}`, name: `${item.fullname}`, email: `${item.email}`, phonenumber: `${item.phonenumber}`,
                    price: `${item.priceservice}`, localization: `${item.localization}`, whatsapp: `${item.whatsapp}`, description: `${item.descriptionservice}`,
                    titleService: `${item.titleservice}`, city: `${item.city}`})}>
                  <ImageBackground
                    source={'https://64.media.tumblr.com/35f8d891314ddb3e5d0b6eb57c6dad90/tumblr_p05g8ldYED1sbghg6o6_250.jpg'}
                    style={styles.profileIcon}
                    imageStyle={{borderRadius: 100}}>
                  </ImageBackground>
                  <Text style={styles.name}>{item.fullname}</Text>
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