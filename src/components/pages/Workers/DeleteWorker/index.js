import React, { useEffect, useState, useContext } from "react";
import { FlatList, SafeAreaView, Text, TouchableOpacity, View } from "react-native";
import api from '../../../../api'
import { Title } from 'react-native-paper';
import AuthContext from "../../../contexts/auth";
import styles from '../styles'

const Item = ({ item, onPress, backgroundColor }) => (
  <TouchableOpacity onPress={onPress} style={[styles.item, backgroundColor]}>
    <Text style={styles.titleService}>{item.titleservice}</Text>
  </TouchableOpacity>
);

const DeleteWorker = (props) => {
  const [selectedId, setSelectedId] = useState(null);
  const [services, setServices] = useState(null);

  const { user } = useContext(AuthContext);

  async function deleteService() {
    try {
        setSelectedId()
        const idPerson = user.idperson;
        const response = await api.delete(`/workers/${idPerson}`, {data: {idService: selectedId}});
        console.log('response', response); console.log(selectedId)
      
    } catch (error) {
      console.log('Não foi possível excluir');
      console.log('error:', error);
    }
  }

  useEffect(() => {
    const fetchData = async () => {
      const response = await api.get('/services');
      setServices(response.data)
    }
    fetchData()
      .catch(console.error);
  }, [])

  const renderItem = ({ item }) => {
    const backgroundColor = item.idservice === selectedId ? "black" : "#fff";
    const color = item.idservice === selectedId ? '#b899ad' : '#b899ad';

    return (
      <Item
        item={item}
        onPress={() => setSelectedId(item.idservice)}
        backgroundColor={{ backgroundColor }}
        textColor={{ color }}
      />
    );
  };

  if (selectedId == null) {
    return (
      <SafeAreaView style={styles.container}>
        <Title style={styles.title}>
          Escolha o serviço
          anunciado que deseja remover
        </Title>
        <FlatList
          data={services}
          renderItem={renderItem}
          keyExtractor={(item) => item.idservice}
          extraData={selectedId}
        />
      </SafeAreaView>
    )
  } else {
    return (
      deleteService()
      )
  }
}

export default DeleteWorker;
