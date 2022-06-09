import { View, Text, TouchableOpacity } from 'react-native';
import styles from '../styles/login'
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome5'
import { TextInput } from 'react-native-paper';

const Login = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <View style={styles.container2}>
                <View style={styles.boxContainerLogin}>
                    <Text style={styles.title}>
                        Bem-vindo!
                    </Text>
                    <TextInput
                        label="E-mail"
                        placeholder='email@email.com'
                        style={styles.textInput}
                        type="text"
                        left={<TextInput.Icon name="account" />}
                        activeUnderlineColor="pink"
                        underlineColor="pink"
                    />
                    <TextInput
                        label="Senha"
                        left={<TextInput.Icon name="lock" />}
                        style={styles.textInput}
                        placeholder='********'
                        secureTextEntry={true}
                        activeUnderlineColor="pink"
                        underlineColor="pink"
                    />
                    <TouchableOpacity
                        style={styles.btnNavigate}
                        onPress={() => {
                            navigation.navigate('Register')
                        }}>
                        <Text style={styles.textNavigate}>
                            Não tenho uma conta
                        </Text>
                        <Text style={{ color:'#7abcdb', textAlign: 'center', marginBottom: 20 }}>
                            Esqueci a senha
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.buttonLogin}
                        onPress={() => {
                            navigation.navigate('NavigationBar')
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
