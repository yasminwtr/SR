import { View, Text, TouchableOpacity, StatusBar, SafeAreaView, Vibration, Image } from 'react-native';
import React, { useState, useContext } from 'react';
import styles from './styles'
import { TextInput, Title } from 'react-native-paper';
import AuthContext from '../../contexts/auth';


const SignIn = ({navigation}) => {
  const { signed, signIn, user } = useContext(AuthContext);
  const [emailInput, setEmailInput] = useState('')
  const [passwordInput, setPasswordInput] = useState('')
  const [errorMessage, setErrorMessage] = useState(null)
  const [passwordVisible, setPasswordVisible] = useState(true);


  async function validateLogin() {
    if ((emailInput, passwordInput) === '') {
      setErrorMessage(null)
      setErrorMessage("Todos os campos são obrigatórios!*")
      Vibration.vibrate()
      return;
    }
      const incorrectCredentials = await signIn({ email: emailInput, password: passwordInput })
      if(incorrectCredentials) {
        setErrorMessage("Usuário ou senha incorretos")
      }
    }
  
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        animated={true}
        backgroundColor="#F85C70"
      />

      <Title style={styles.title}> Bem-vindo </Title>
      <TouchableOpacity onPress={() => navigation.navigate('NavigationBar', {})} />
      <View>
          <TextInput
            mode='outlined'
            value={emailInput}
            onChangeText={setEmailInput}
            label="E-mail"
            placeholder='email@email.com'
            style={styles.textInput}
            type="text"
            left={<TextInput.Icon name="account-outline" />}
            activeOutlineColor="#F85C70"
            outlineColor="#fff"
            maxLength={45}
            />
          <TextInput
            mode='outlined'
            value={passwordInput}
            onChangeText={setPasswordInput}
            label="Senha"
            left={<TextInput.Icon name="key-outline" />}
            right={<TextInput.Icon name={passwordVisible ? "eye" : "eye-off"} onPress={() => setPasswordVisible(!passwordVisible)} />}
            style={styles.textInput}
            placeholder='********'
            secureTextEntry={passwordVisible}
            activeOutlineColor="#F85C70"
            outlineColor="#fff"
            maxLength={25}
            />
          <Text style={styles.errorMessage}>{errorMessage}</Text>
          <TouchableOpacity
            style={styles.btnNavigate}
            onPress={() => {
              navigation.navigate('RegisterUser')
            }}>
            <Text style={styles.textNavigate}>
              Não tenho uma conta
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.buttonLogin}
            onPress={validateLogin}
            >
            <Text
              style={{ color: 'white', textAlign: 'center', fontSize: 20 }}>
              Entrar
            </Text>
          </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}
export default SignIn;