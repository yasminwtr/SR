import { View, Text, TouchableOpacity } from 'react-native';
import styles from '../styles/login'
import React, { useState } from 'react';
import { TextInput } from 'react-native-paper';

const Login = ({ navigation }) => {

    const [emailInput, setEmailInput] = useState('')
    const [senhaInput, setSenhaInput] = useState('')
    const [errorMessage, setErrorMessage] = useState(null)

    async function validateLogin() {

        let dadosLogin = {
            email: '123',
            senha: '123'
        }

        if (emailInput === dadosLogin.email && senhaInput === dadosLogin.senha) {
            setSenhaInput(null)
            setEmailInput(null)
            navigation.navigate('NavigationBar')
        } else {
            setErrorMessage(null)
            setErrorMessage("Usuário ou Senha incorretos")
            return;
        }
    }

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
                        value={senhaInput}
                        onChangeText={setSenhaInput}
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
                            validateLogin()
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
