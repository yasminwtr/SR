import { View, Text, TouchableOpacity, Pressable, Keyboard, Vibration } from 'react-native';
import styles from './styles'
import React, { useState, useContext  } from "react";
import { TextInput, Title } from 'react-native-paper';
import api from "../../../api";
import AuthContext from '../../contexts/auth';

export default function Register(props) {
  const [email, setEmail] = useState('')
  const [name, setName] = useState('')
  const [password, setPassword] = useState('')
  const [phoneNumber, setPhoneNumber] = useState('')
  const [errorMessage, setErrorMessage] = useState(null)
  const { signIn } = useContext(AuthContext);

  function validationFields() {
    if ((email, name, password, phoneNumber) !== '') {
      registerNewUser()
    } else {
      setErrorMessage(null)
      setErrorMessage("Todos os campos são obrigatórios!*")
      Vibration.vibrate()
      return;
    }
  }
  
  async function registerNewUser() {
    try {
      const response = await api.post('/registerPerson', { name, email, password, phoneNumber });
      await signIn({ email, password })
      console.log('response registerPerson:', response);
      props.navigation.navigate('NavigationBar')
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <View style={styles.container}>
      <Pressable onPress={Keyboard.dismiss} style={styles.container2}>
        <View style={styles.boxContainerRegister}>
          <TextInput
            mode='outlined'
            onChangeText={setName}
            value={name}
            label="Nome completo"
            style={styles.textInput}
            type="text"
            left={<TextInput.Icon name="account-outline" />}
            activeOutlineColor="#F85C70"
            outlineColor="#fff"
            maxLength={45}
          />
          <TextInput
            mode='outlined'
            onChangeText={setEmail}
            value={email}
            label="E-mail"
            placeholder='email@email.com'
            style={styles.textInput}
            type="text"
            left={<TextInput.Icon name="email-outline" />}
            activeOutlineColor="#F85C70"
            outlineColor="#fff"
            maxLength={45}
          />
          <TextInput
            mode='outlined'
            onChangeText={setPhoneNumber}
            value={phoneNumber}
            label="Telefone"
            placeholder='ex: 48 991234456'
            style={styles.textInput}
            type="text"
            left={<TextInput.Icon name="phone-outline" />}
            activeUnderlineColor="pink"
            underlineColor="pink"
            maxLength={14}
            activeOutlineColor="#F85C70"
            outlineColor="#fff"
          />
          <TextInput
            mode='outlined'
            onChangeText={setPassword}
            value={password}
            label="Senha"
            placeholder='********'
            style={styles.textInput}
            type="text"
            left={<TextInput.Icon name="key-outline" />}
            activeUnderlineColor="pink"
            underlineColor="pink"
            maxLength={25}
            activeOutlineColor="#F85C70"
            outlineColor="#fff"
            secureTextEntry={true}
          />
          <Text style={styles.errorMessage}>{errorMessage}</Text>
          <TouchableOpacity onPress={() => validationFields()}
            style={styles.buttonRegister}
          >
            <Text
              style={{ color: '#ffff', textAlign: 'center', fontSize: 25 }}>
              Criar conta
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.btnNavigate}
            onPress={() => {
              props.navigation.navigate('SignIn')
            }}>
            <Text style={styles.textNavigate}>
              Já tenho uma conta
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.btnNavigate}
            onPress={() => {
              navigation.navigate('Login')
            }}>
            <Text style={styles.textNavigate}>
              Esqueci a senha
            </Text>
          </TouchableOpacity>
        </View>
      </Pressable>
    </View>
  )
}

