import { View, StatusBar, SafeAreaView, Text, Vibration, TouchableOpacity } from 'react-native';
import React, { useContext, useState } from 'react';
import styles from './styles'
import AuthContext from '../../../contexts/auth';
import api from '../../../../api/index';
import { TextInput, Title } from 'react-native-paper';

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

      <Text style={styles.errorMessage}>{errorMessage}</Text>

    </SafeAreaView>
  )
}

export default EditProfile