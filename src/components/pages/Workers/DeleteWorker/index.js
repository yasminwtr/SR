import React, { useEffect, useState, useContext } from "react";
import { FlatList, SafeAreaView, Text, TouchableOpacity } from "react-native";
import api from '../../../../api'
import { Title, Snackbar } from 'react-native-paper';
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
  const [snackbarMessage, setSnackbarMessage] = useState('');
  const [snackbarVisible, setSnackbarVisible] = useState(false);

  const { user } = useContext(AuthContext);

  async function deleteService() {
    try {
        setSelectedId()
        setSnackbarMessage('Serviço removido com sucesso!')
        setSnackbarVisible(true)
        const idPerson = user.idperson;
        const response = await api.delete(`/workers/${idPerson}`, {data: {idService: selectedId}});
        console.log('response', response); console.log(selectedId)
      
    } catch (error) {
      console.log('error:', error);
      setSnackbarMessage('Não foi possível remover o serviço, certifique-se de que você está registrado nele.')
      setSnackbarVisible(true)
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

        <Snackbar
          visible={snackbarVisible}
          onDismiss={() => setSnackbarVisible(false)}
          action={{
            label: 'Ok',
            onPress: () => {
              deleteService
            },
          }}
          style={{ backgroundColor: "#fff" }}
          theme={{ colors: { surface: 'black', accent: 'red' }, }}
        >
          <Text>
            {snackbarMessage}
          </Text>
        </Snackbar>
      </SafeAreaView>
    )
  } else {
    return (
      deleteService()
      )
  }
}

export default DeleteWorker;
