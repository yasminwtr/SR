import {View, Text, TouchableOpacity} from 'react-native';
import styles from '../../styles/login'
import Icon from 'react-native-vector-icons/FontAwesome5'
import react from 'react';
import { TextInput } from "@react-native-material/core";
// import { Link } from 'react-router-dom';


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
                            variant=""
                            label="E-mail"
                            placeholder='email@email.com'
                            style={styles.textInput}
                            type="text" 
                            className="form-control"
                            value={this.state.nickname}
                            onChange={e => this.setState({nickname : e.target.value})}
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
                        value={this.state.password}
                        onChange={e => this.setState({password : e.target.value})}
                    /> 
                </View>
                    <TouchableOpacity onPress={this.sendLogin}
                        style={styles.button}
                    >
                        <Text
                            style={{color:'white', textAlign:'center', fontSize:25}}>
                                Login
                        </Text>
                    </TouchableOpacity>
                    {/* <BrowserRouter>
                        <Route component = { Login }  path="./Register/index.js" exact />
                        <Route component = { Register }  path="/./Register/index.js" />
                    </BrowserRouter> */}
            </View>
        )
    }
}

export default LoginPage;
