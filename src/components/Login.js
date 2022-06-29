import { View, Text, TouchableOpacity } from 'react-native';
import styles from '../styles/login'
import React, { useState } from 'react';
import api from "../api";
import { TextInput } from 'react-native-paper';
import axios from 'axios';

const Login = ({ navigation }) => {

    const [emailInput, setEmailInput] = useState('')
    const [passwordInput, setPasswordInput] = useState('')
    const [errorMessage, setErrorMessage] = useState(null)

    function validationLogin() {
        if ((emailInput, passwordInput) !== '') {
            login()
        } else {
            setErrorMessage(null)
            setErrorMessage("Todos os campos são obrigatórios!*")
            Vibration.vibrate()
            return;
        }
    }

    async function login() {
        const response = await api.post('/login', { email: emailInput, password: passwordInput });
        console.log('response login:',response);
    }



    // function validateLogin() {

    //     let dadosLogin = {
    //         email: '123',
    //         senha: '123'
    //     }

    //     if (emailInput === dadosLogin.email && passwordInput === dadosLogin.senha) {
    //         setPasswordInput(null)
    //         setEmailInput(null)
    //         navigation.navigate('NavigationBar')
    //     } else {
    //         setErrorMessage(null)
    //         setErrorMessage("Usuário ou Senha incorretos")
    //         return;
    //     }
    // }

    return (
        <View style={styles.container}>
            <TouchableOpacity
                onPress={() =>
                    navigation.navigate('NavigationBar', {
                    })
                }
            >

            </TouchableOpacity>
            <View style={styles.container2}>
                <View style={styles.boxContainerLogin}>
                    <Text style={styles.title}>
                        Bem-vindo!
                    </Text>
                    <TextInput
                        value={emailInput}
                        onChangeText={setEmailInput}
                        label="E-mail"
                        placeholder='email@email.com'
                        style={styles.textInput}
                        type="text"
                        left={<TextInput.Icon name="account" />}
                        activeUnderlineColor="pink"
                        underlineColor="pink"
                    />
                    <TextInput
                        value={passwordInput}
                        onChangeText={setPasswordInput}
                        label="Senha"
                        left={<TextInput.Icon name="lock" />}
                        style={styles.textInput}
                        placeholder='********'
                        secureTextEntry={true}
                        activeUnderlineColor="pink"
                        underlineColor="pink"
                    />
                    <Text style={styles.errorMessage}>{errorMessage}</Text>
                    <TouchableOpacity
                        style={styles.btnNavigate}
                        onPress={() => {
                            navigation.navigate('Register')
                        }}>
                        <Text style={styles.textNavigate}>
                            Não tenho uma conta
                        </Text>
                        <Text style={{ color: '#7abcdb', textAlign: 'center', marginBottom: 20 }}>
                            Esqueci a senha
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.buttonLogin}
                        onPress={() => {
                            validationLogin()
                        }}
                    >
                        <Text
                            style={{ color: 'white', textAlign: 'center', fontSize: 25 }}>
                            Login
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

export default Login;
