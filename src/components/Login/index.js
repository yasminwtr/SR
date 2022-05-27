import { StatusBar } from 'expo-status-bar';
import {View, Text, TouchableOpacity} from 'react-native';
import styles from '../../styles/login'
import Icon from 'react-native-vector-icons/FontAwesome5'
import react from 'react';
import { TextInput } from "@react-native-material/core";


class LoginPage extends react.Component{
    constructor(props){
        super(props)
            this.state = {
                nickname: '',
                password: ''
        }
    }

    sendLogin = (event) => {
        event.preventDefault();
        let data = {
            nickname : this.state.nickname,
            password : this.state.password
        }
        console.log('data',data);
    }

    render() {
        return (
            <View> 
                <View style={styles.container}>
                    <View>
                        <TextInput
                            leading={props => <Icon name="user" {...props} /> }
                            variant="outlined"
                            label="E-mail"
                            style={{ margin: 16, width:300}}
                            type="text" 
                            className="form-control"
                            value={this.state.nickname}
                            onChange={e => this.setState({nickname : e.target.value})}
                            id="nickName" 
                            placeholder="Usuário"
                            />
                    </View>
                     <TextInput 
                        leading={props => <Icon name="lock" {...props} /> }
                        variant="outlined"
                        label="Senha"
                        style={{ margin: 16, width:300 }}
                        type="password" 
                        value={this.state.password}
                        onChange={e => this.setState({password : e.target.value})}
                    /> 
                </View>
                    <TouchableOpacity onPress={this.sendLogin}
                        style={styles.button}
                    >
                        <Text
                            style={{color:'white', textAlign:'center'}}>
                                Entrar
                        </Text>
                    </TouchableOpacity>
            </View>
        )
    }
}

export default LoginPage;
