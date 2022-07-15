import React, { useEffect, useState, useContext } from "react";
import { FlatList, SafeAreaView, Text, TouchableOpacity, View } from "react-native";
import api from '../../../../api'
import { Title } from 'react-native-paper';
import AuthContext from "../../../contexts/auth";

const Item = ({ item, onPress, backgroundColor }) => (
  <TouchableOpacity onPress={onPress} style={[backgroundColor]}>
    <Text>{item.titleservice}</Text>
  </TouchableOpacity>
);

const DeleteWorker = (props) => {
  const [selectedId, setSelectedId] = useState(null);
  const [services, setServices] = useState(null);

  const { user } = useContext(AuthContext);

  async function deleteWorker() {
    try {
        setSelectedId()
        const response = await api.delete('/DeleteWorkerService', { idPerson: user.idperson, idService: selectedId, idWorker: Worker.idworker });
        console.log('response', response);
        console.log('deu certo');
    } catch (error) {
      console.log('Não foi possível excluir');
      console.log('error:',error);
    }
  }
  useEffect(() => {
    const fetchData = async () => {
      const response = await api.get('/services');
      setServices(response.data)
      console.log('Serviços pegos');
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
        onPress={deleteWorker}
        backgroundColor={{ backgroundColor }}
        textColor={{ color }}
      />
    );
  };
  if (selectedId == null) {
    return (
      <SafeAreaView>
        <Title>
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
    console.log('nao sei mds');
  }
}

export default DeleteWorker;
