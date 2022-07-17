import { View, StatusBar, SafeAreaView, Text, Vibration, TouchableOpacity } from 'react-native';
import React, { useContext, useState } from 'react';
import styles from './styles'
import AuthContext from '../../../contexts/auth';
import api from '../../../../api/index';
import { TextInput, Title, Snackbar } from 'react-native-paper';

const EditProfile = () => {
  const { user } = useContext(AuthContext)

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [phoneNumber, setPhoneNumber] = useState('')
  const [snackbarMessage, setSnackbarMessage] = useState('');
  const [snackbarVisible, setSnackbarVisible] = useState(false);

  function validationFields() {
    if ((email && password && phoneNumber) !== '') {
      updateUser()
      setSnackbarMessage('Conta editada com sucesso!')
      setSnackbarVisible(true)
    } else {
      setSnackbarMessage('Preencha todos os campos.')
      setSnackbarVisible(true)
      Vibration.vibrate()
      return;
    }
  }

  const updateUser = async () => {
    const idPerson = user.idperson;
    try {
      const response = await api.put(`/users/${idPerson}`, { email, password, phoneNumber })
      const data = response;
      console.log('updateUserData', data);

      user.email = data.email;
      user.password = data.password;
      user.phoneNumber = data.phoneNumber;

      setEmail(email)
      setPassword(password)
      setPhoneNumber(phoneNumber)

    } catch (error) {
      console.log(error)
    }
  }

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <Title style={styles.title}>Editar conta</Title>
      <View style={styles.containerInputs}>
        <TextInput
          mode='outlined'
          activeOutlineColor="#F85C70"
          outlineColor="#fff"
          style={styles.textInput}
          label='Novo e-mail'
          value={email}
          placeholder='email@email.com'
          onChangeText={setEmail}>
        </TextInput>

        <TextInput
          mode='outlined'
          activeOutlineColor="#F85C70"
          outlineColor="#fff"
          style={styles.textInput}
          label='Nova senha'
          placeholder='*******'
          value={password}
          onChangeText={setPassword}>
        </TextInput>

        <TextInput
          mode='outlined'
          activeOutlineColor="#F85C70"
          outlineColor="#fff"
          style={styles.textInput}
          label='Alterar número de telefone'
          value={phoneNumber}
          placeholder='48 991304290'
          onChangeText={setPhoneNumber}>
        </TextInput>

        <View style={styles.divider} />

        <TouchableOpacity
          mode='contained'
          color='#F85C70'
          onPress={() => validationFields()}
          style={styles.btn}>
          <Text style={styles.textBtn}> Editar </Text>
        </TouchableOpacity>
      </View>

      
      <Snackbar
        visible={snackbarVisible}
        onDismiss={() => setSnackbarVisible(false)}
        action={{
          label: 'Ok',
          onPress: () => {
            updateUser
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
}

export default EditProfile