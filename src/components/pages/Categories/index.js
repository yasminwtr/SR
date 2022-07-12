import React, { useEffect, useState } from 'react'
import { Text, TouchableOpacity, FlatList, Image, View } from 'react-native'
import api from '../../../api'
import styles from './styles'
import { Title } from 'react-native-paper';
import { SafeAreaView } from 'react-native-safe-area-context';

export const Categories = (props) => {

  const [services, setServices] = useState([]);
  const [refresh, setRefresh] = useState(false);

  const getWorkersByServiceId = async (service) => {
    const response = await api.get(`/getWorkersByServiceId?idService=${service.idservice}`);
    props.navigation.navigate('Worker',
      { serviceCategory: service.titleservice, filteredWorkers: response.data })
  }

  const fetchData = async () => {
    setServices(null)
    const response = await api.get('/services');
    setServices([...response.data])
    if (refresh) {
      setRefresh(null)
      setRefresh(false)
    } else {
      setRefresh(null)
      setRefresh(true)
    }
  }

  useEffect(() => {
    fetchData().catch(console.error);
  }, [])

  useEffect(() => {
  }, [services])

  useEffect(() => {
    const copyServices = [...services];
    setServices(null)
    setServices(undefined)
    setServices(copyServices);
  }, [refresh])

  const Item = ({ item, onPress }) => (
    <SafeAreaView style={styles.box}>
      <TouchableOpacity onPress={onPress} >
        <Image
          style={{ width: 50, height: 50 }}
          source={{
            uri: `${item.icon}`,
          }}
        />
        <Text style={styles.titleservice}>
          {item.titleservice}
        </Text>
      </TouchableOpacity>
    </SafeAreaView>
  );

  return (
    <View>
      <Title> Categorias </Title>
      <TouchableOpacity onPress={fetchData}>
        <Text>
          Atualizar
        </Text>
      </TouchableOpacity>
      <View style={styles.container}>
        {
          services?.map(service => {
            return (
              <Item
                item={service}
                onPress={() => { getWorkersByServiceId(service) }}
                key={service.titleservice}
              />
            );
          })
        }
      </View>
    </View>
  )
}

export default Categories