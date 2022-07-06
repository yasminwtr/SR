import React, { useEffect, useState, useContext } from "react";
import { FlatList, SafeAreaView, StatusBar, StyleSheet, Text, TouchableOpacity } from "react-native";
import api from '../../../api'
import Description from "./description";
import AuthContext from "../contexts/auth";

const Item = ({ item, onPress, backgroundColor, textColor }) => (
  <TouchableOpacity onPress={onPress} style={[styles.item, backgroundColor]}>
    <Text style={[styles.title, textColor]}>{item.titleservice}</Text>
  </TouchableOpacity>
);

const RegisterWorker = (props) => {
  const [selectedId, setSelectedId] = useState(null);
  const [services, setServices] = useState(null);
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');

  const { user } = useContext(AuthContext);

  console.log('user', user);
  async function registerWorker() {
    const response = await api.post('/registerWorker', { idPerson: user.idperson, idService: selectedId, descriptionService: description, priceService: price });
    console.log('response registerWorker:', response);
  }

  useEffect(() => {
    const fetchData = async () => {
      const response = await api.get('/services');
      setServices(response.data)
    }
    fetchData()
      .catch(console.error);
  }, [])
  console.log('services', services);

  const renderItem = ({ item }) => {
    console.log('item', item);
    const backgroundColor = item.idservice === selectedId ? "#6e3b6e" : "#f9c2ff";
    const color = item.idservice === selectedId ? 'white' : 'black';

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
      <Description
        finish={registerWorker}
        description={description}
        setDescription={setDescription}
        price={price}
        setPrice={setPrice}
      />
    )
  }

};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
});

export default RegisterWorker;
