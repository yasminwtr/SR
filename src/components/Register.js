import { View, Text, TouchableOpacity, Pressable, Keyboard, Vibration } from 'react-native';
import styles from '../styles/login'
import React, { useState } from "react";
import { TextInput } from 'react-native-paper';

export default function Register() {
    const [email, setEmail] = useState('')
    const [fullName, setFullName] = useState('')
    const [password, setPassword] = useState('')
    const [number, setNumber] = useState('')
    const [errorMessage, setErrorMessage] = useState(null)

    function validationFields() {
        if ((email, fullName, password, number) !== '') {
            setEmail(null)
            setFullName(null)
            setPassword(null)
            setFullName(null)
            setFullName(null)
            setNumber(null)
        } else {
            setErrorMessage(null)
            setErrorMessage("Todos os campos são obrigatórios!")
            Vibration.vibrate()
            return;
        }
    }

    return (
        <View style={styles.container}>
            <Pressable onPress={Keyboard.dismiss} style={styles.container2}>
                <View style={styles.boxContainerRegister}>
                    <TextInput
                        onChangeText={setFullName}
                        value={fullName}
                        label="Nome Completo"
                        style={styles.textInput}
                        type="text"
                        left={<TextInput.Icon name="account" />}
                        activeUnderlineColor="pink"
                        underlineColor="pink"
                    />
                    <TextInput
                        onChangeText={setEmail}
                        value={email}
                        label="E-mail"
                        placeholder='email@email.com'
                        style={styles.textInput}
                        type="text"
                        left={<TextInput.Icon name="email" />}
                        activeUnderlineColor="pink"
                        underlineColor="pink"
                    />
                    <TextInput
                        onChangeText={setNumber}
                        value={number}
                        label="Telefone"
                        placeholder='ex. (48)991234-4567'
                        style={styles.textInput}
                        type="text"
                        left={<TextInput.Icon name="phone" />}
                        activeUnderlineColor="pink"
                        underlineColor="pink"
                    />
                    <TextInput
                        onChangeText={setPassword}
                        value={password}
                        label="Senha"
                        placeholder='********'
                        style={styles.textInput}
                        type="text"
                        left={<TextInput.Icon name="lock" />}
                        activeUnderlineColor="pink"
                        underlineColor="pink"
                    />
                    <Text style={styles.errorMessage}>{errorMessage}</Text>
                    <TouchableOpacity onPress={() => validationFields()}
                        style={styles.buttonRegister}
                    >
                        <Text
                            style={{ color: '#ffff', textAlign: 'center', fontSize: 25 }}>
                            Criar Conta
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.btnNavigate}
                        onPress={() => {
                            navigation.navigate('Login')
                        }}>
                        <Text style={styles.textNavigate}>
                            Não tenho uma conta
                        </Text>
                        <Text style={{ color: '#7abcdb', textAlign: 'center', marginBottom: 20 }}>
                            Esqueci a senha
                        </Text>
                    </TouchableOpacity>
                </View>
            </Pressable>
        </View>
    )
}

