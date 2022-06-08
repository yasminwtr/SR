import {View, Text, TouchableOpacity} from 'react-native';
import styles from '../styles/login'
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome5'
import { TextInput } from "@react-native-material/core"

    const Login = ({ navigation }) => {
        return (
            <View style={styles.container}>
                <View style={styles.container2}>
                        <View style={styles.boxContainerLogin}>
                            <Text style={styles.title}>
                                Bem-vindo!
                            </Text>
                            <TextInput
                                leading={props => <Icon name="user" {...props} /> }
                                variant=""
                                label="E-mail"
                                placeholder='email@email.com'
                                style={styles.textInput}
                                type="text"
                                className="form-control"
                                />
                                <TextInput
                                leading={props => <Icon name="lock" {...props} /> }
                                variant=""
                                label="Senha"
                                style={styles.textInput}
                                type="password"
                                placeholder='********'
                                />
                                <TouchableOpacity
                                style={styles.buttonLogin}
                                onPress={() => {
                                    navigation.navigate('NavigationBar')
                                }}
                                >
                                <Text
                                    style={{color:'white', textAlign:'center', fontSize:25}}>
                                        Login
                                </Text>
                                </TouchableOpacity>
                                <TouchableOpacity
                                style = {styles.btnNavigate}
                                onPress={() => {
                                    navigation.navigate('Register')
                                }}>
                                <Text style={styles.textNavigate}>
                                    Não tenho uma conta
                                </Text>
                                <Text style={{textAlign:'center', marginBottom:20}}>
                                    Esqueci a senha
                                </Text>
                                </TouchableOpacity>
                        </View>
                </View>
            </View>
    )
}

export default Login;
