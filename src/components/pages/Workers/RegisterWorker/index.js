import React, { useEffect, useState, useContext } from "react";
import { FlatList, SafeAreaView, Text, TouchableOpacity, View } from "react-native";
import api from '../../../../api'
import Description from "./description";
import AuthContext from "../../../contexts/auth";
import { Snackbar, Title } from 'react-native-paper';
import styles from './styles'

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
  const [localization, setLocalization] = useState('');
  const [whatsapp, setWhatsapp] = useState('');
  const [snackbarVisible, setSnackbarVisible] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState('');

  const { user } = useContext(AuthContext);

  async function registerWorker() {
    try {
      if ((description, price, localization, whatsapp) !== '') {
        setSnackbarMessage('Serviço registrado com sucesso!')
        setSnackbarVisible(true)
        const response = await api.post('/registerWorker', { idPerson: user.idperson, idService: selectedId, descriptionService: description, priceService: price, localization: localization, whatsapp: whatsapp });
        console.log('response', response);
        // props.navigation.navigate('NavigationBar')
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
          localization={localization}
          setLocalization={setLocalization}
          whatsapp={whatsapp}
          setWhatsapp={setWhatsapp}
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

export default RegisterWorker;
