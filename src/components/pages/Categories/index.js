import React, { useEffect, useState } from 'react'
import { View, Text, Image, TouchableOpacity, FlatList } from 'react-native'
import styles from './styles'
import api from '../../../api'

export const Categories = (props) => {

  const [services, setServices] = useState(null);

  const getWorkersByServiceId = async (service) => {
    console.log('service', service);
    const response = await api.get(`/getWorkersByServiceId?idService=${service.idservice}`);
    console.log('response', response);
    props.navigation.navigate('Worker',
    { serviceCategory: service.titleservice, filteredWorkers: response.data })  
  }

  useEffect(() => {
    const fetchData = async () => {
      const response = await api.get('/services');
      setServices(response.data)
    }
    fetchData()
      .catch(console.error);
  }, [])

  const Item = ({ item, onPress, backgroundColor }) => (
    <TouchableOpacity onPress={onPress} style={[styles.item, backgroundColor]}>
      <Text style={styles.titleService}>{item.titleservice}</Text>
    </TouchableOpacity>
  );

  const renderItem = ({ item }) => {
    return (
      <Item
        item={item}
        onPress={() => { getWorkersByServiceId(item) }}
      />
    );
  };

  return (
    <View style={styles.container1}>
      <Text style={styles.text}>
        Serviços Disponíveis
      </Text>
      <FlatList
        data={services}
        renderItem={renderItem}
        keyExtractor={(item) => item.idservice}
      />
    </View>
  )
}

export default Categories