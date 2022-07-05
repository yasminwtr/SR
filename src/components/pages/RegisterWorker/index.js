import React, { useEffect, useState } from "react";
import { View, FlatList, SafeAreaView, StatusBar, StyleSheet, Text, TouchableOpacity, TextInput } from "react-native";
import api from '../../../api'

const Item = ({ item, onPress, backgroundColor, textColor }) => (
  <TouchableOpacity onPress={onPress} style={[styles.item, backgroundColor]}>
    <Text style={[styles.titleService, textColor]}>{item.titleservice}</Text>
  </TouchableOpacity>
);

const RegisterWorker = () => {
  const [selectedId, setSelectedId] = useState(null);
  const [services, setServices] = useState(null);

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
    const backgroundColor = item.idservice === selectedId ? "#ff9796" : "#fff";
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

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text style={styles.title}>Escolha o serviço que deseja anunciar</Text>
      </View>
      <FlatList
        data={services}
        renderItem={renderItem}
        keyExtractor={(item) => item.idservice}
        extraData={selectedId}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    padding: 10,
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 30
  },
  titleService: {
    fontSize: 25,
    textAlign: 'center'
  },
  title: {
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'left',
    margin: 20
  }
});

export default RegisterWorker;
