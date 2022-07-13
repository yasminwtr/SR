import { View, StatusBar, SafeAreaView, Text, Vibration } from 'react-native';
import React, { useContext, useState } from 'react';
import styles from './styles'
import AuthContext from '../../contexts/auth';
import api from '../../../api/index';
import { TextInput, Title, Button } from 'react-native-paper';

const EditProfile = () => {
  const { user } = useContext(AuthContext)

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [phoneNumber, setPhoneNumber] = useState('')
  const [errorMessage, setErrorMessage] = useState(null)

  function validationFields() {
    if ((email || password || phoneNumber) !== '') {
      updateUser()
    } else {
      setErrorMessage(null)
      setErrorMessage("Preencha o campo que você deseja alterar.*")
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
    <SafeAreaView>
      <StatusBar barStyle="dark-content" />
      <Title style={styles.title}>Alterar Dados</Title>
      <TextInput
        mode='outlined'
        activeOutlineColor="#F85C70"
        outlineColor="#fff"
        style={styles.textInput}
        mode='outlined'
        label='Novo email'
        value={email}
        onChangeText={setEmail}>
      </TextInput>

      <TextInput
        mode='outlined'
        activeOutlineColor="#F85C70"
        outlineColor="#fff"
        style={styles.textInput}
        mode='outlined'
        label='Nova senha'
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
        onChangeText={setPhoneNumber}>
      </TextInput>

      <View style={styles.divider} />

      <Button
        mode='contained'
        color='#F85C70'
        onPress={() => validationFields()}
        style={styles.buttonChangePassword}>
        Editar
      </Button>

      <Text style={styles.errorMessage}>{errorMessage}</Text> 

    </SafeAreaView>
  )
}

export default EditProfile