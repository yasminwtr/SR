import {View, Text, TouchableOpacity} from 'react-native';
import styles from '../styles/login'
import Icon from 'react-native-vector-icons/FontAwesome5'
import React, { useState } from "react";
import { TextInput } from "@react-native-material/core";
import RadioForm, {RadioButton, RadioButtonInput, RadioButtonLabel} from 'react-native-simple-radio-button';


export default function Register(){
    return(
        <View style={styles.container}> 
            <View style={styles.container2}>
                <View style={styles.boxContainerRegister}>
                    <TextInput
                    leading={props => <Icon name="voicemail" {...props} /> }
                    variant=""
                    label="E-mail"
                    placeholder='email@email.com'
                    style={styles.textInput}
                    type="text" 
                    className="form-control"
                    id="nickName" 
                    />
                    <TextInput
                    leading={props => <Icon name="user" {...props} /> }
                    variant=""
                    label="Nome Completo"
                    style={styles.textInput}
                    type="text" 
                    className="form-control"
                    id="nickName" 
                    />
                    <TextInput 
                    leading={props => <Icon name="lock" {...props} /> }
                    variant=""
                    label="Senha"
                    style={styles.textInput}
                    type="password" 
                    placeholder='********'
                    /> 
                    <TextInput 
                    leading={props => <Icon name="phone" {...props} /> }
                    variant=""
                    label="Telefone"
                    style={styles.textInput}
                    type="text" 
                    /> 
                    <TouchableOpacity
                        style={styles.buttonRegister}
                        >
                        <Text
                            style={{color:'#ffff', textAlign:'center', fontSize:25}}>
                                Criar Conta
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style = {styles.btnNavigate}
                        onPress={() => {
                            navigation.navigate('Login')
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

