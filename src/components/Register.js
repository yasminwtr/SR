import {View, Text, TouchableOpacity} from 'react-native';
import styles from '../styles/login'
import Icon from 'react-native-vector-icons/FontAwesome5'
import React from 'react';
import { TextInput } from "@react-native-material/core";



export default function Register(){
    return(
        <View> 
            <View style={styles.container}>
                <View>
                    <TextInput
                        leading={props => <Icon name="voicemail" {...props} /> }
                        variant=""
                        label="E-mail"
                        placeholder='email@email.com'
                        style={styles.textInput}
                        type="text" 
                        className="form-control"
                        // value={this.state.nickname}
                        // onChange={e => this.setState({nickname : e.target.value})}
                        id="nickName" 
                        />
                    <TextInput
                        leading={props => <Icon name="user" {...props} /> }
                        variant=""
                        label="Nome Completo"
                        // placeholder=''
                        style={styles.textInput}
                        type="text" 
                        className="form-control"
                        // value={this.state.nickname}
                        // onChange={e => this.setState({nickname : e.target.value})}
                        id="nickName" 
                        />
                </View>
                 <TextInput 
                    leading={props => <Icon name="lock" {...props} /> }
                    variant=""
                    label="Senha"
                    style={styles.textInput}
                    type="password" 
                    placeholder='********'
                    // value={this.state.password}
                    // onChange={e => this.setState({password : e.target.value})}
                /> 
                 <TextInput 
                    leading={props => <Icon name="phone" {...props} /> }
                    variant=""
                    label="Telefone"
                    style={styles.textInput}
                    type="text" 
                    // value={this.state.password}
                    // onChange={e => this.setState({password : e.target.value})}
                /> 
            </View>
                <TouchableOpacity
                    style={styles.button}
                >
                    <Text
                        style={{color:'white', textAlign:'center', fontSize:25}}>
                            Criar Conta
                    </Text>
                </TouchableOpacity>
            <Text style={{textAlign:'center', letterSpacing:1}}>
                Não tenho uma conta
                <Text>
                    Esqueci a Senha
                </Text>
            </Text>
            
            {/* <Link to="/cadastro/" className="btn">Cadastre-se</Link> */}
        </View>
    )
}
