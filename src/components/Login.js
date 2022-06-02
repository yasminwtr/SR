import {View, Text, TouchableOpacity} from 'react-native';
import styles from '../styles/login'
import React , { useState } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome5'
import { TextInput } from "@react-native-material/core";
// import { useForm } from 'react-hook-form'

// const [ name, setName ] = useForm('');
// const [ password, setPassword ] = useForm('');

function checkToNavigate() {
    if((name, password) !== '')
      return console.log('aa');
  }

    
    const Login = ({ navigation }) => {
        return (
            <View>
            <View style={styles.container}>
                <View>
                    <TextInput
                        leading={props => <Icon name="user" {...props} /> }
                        variant=""
                        label="E-mail"
                        placeholder='email@email.com'
                        style={styles.textInput}
                        type="text"
                        className="form-control"
            
                        />
                </View>
                    <TextInput
                    leading={props => <Icon name="lock" {...props} /> }
                    variant=""
                    label="Senha"
                    style={styles.textInput}
                    type="password"
                    placeholder='********'
                />
            </View>
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => {
                        // checkToNavigate()
                        navigation.navigate('NavigationBar')
                    }}
                >
                    <Text
                        style={{color:'white', textAlign:'center', fontSize:25}}>
                            Login
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity
                onPress={() => {
                    navigation.navigate('Register')
                }}>
                    <Text>
                        Não tenho uma conta
                    </Text>
                </TouchableOpacity>
        </View>
    )
}

export default Login;
