import React, { useEffect, useState, useContext } from "react";
import { FlatList, SafeAreaView, StatusBar, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import api from '../../../api'
import Description from "./description";
import AuthContext from "../../contexts/auth";
import { Snackbar, Title } from 'react-native-paper';

const Item = ({ item, onPress, backgroundColor }) => (
  <TouchableOpacity onPress={onPress} style={[styles.item, backgroundColor]}>
    <Text style={styles.titleService}>{item.titleservice}</Text>
  </TouchableOpacity>
);

const RegisterWorker = (props) => {
  const [selectedId, setSelectedId] = useState(null);
  const [services, setServices] = useState(null);
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [snackbarVisible, setSnackbarVisible] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState('');

  const { user } = useContext(AuthContext);

  async function registerWorker() {
    try {
      if ((description, price) !== '') {
        setSnackbarMessage('Serviço registrado com sucesso!')
        setSnackbarVisible(true)
        const response = await api.post('/registerWorker', { idPerson: user.idperson, idService: selectedId, descriptionService: description, priceService: price });
        props.navigation.navigate('NavigationBar')
      }
      else {
        setSnackbarMessage('Preencha todos os campos')
        setSnackbarVisible(true)
      }
    } catch (error) {

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
          que deseja anunciar
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
      <View>
        <Description
          finish={registerWorker}
          description={description}
          setDescription={setDescription}
          price={price}
          setPrice={setPrice}
        />
        <Snackbar
          visible={snackbarVisible}
          onDismiss={() => setSnackbarVisible(false)}
          action={{
            label: 'Ok',
            onPress: () => {
              registerWorker
            },
          }}
          style={{ backgroundColor: "#fff" }}
          theme={{ colors: { surface: 'black', accent: 'red' }, }}
        >
          <Text>
            {snackbarMessage}
          </Text>
        </Snackbar>
      </View>
    )
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    margin: 20,
    padding: 10,
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 15,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,

    elevation: 3,
  },
  titleService: {
    fontSize: 20,
    textAlign: 'center',
    color: '#b899ad',
  },
  title: {
    fontSize: 32,
    textAlign: 'left',
    margin: 30,
    marginTop: 50,
    marginBottom: 30,
    color: '#ff9796'
  },
});

export default RegisterWorker;
