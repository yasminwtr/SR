import {View, Text, TouchableOpacity} from 'react-native';
import styles from '../styles/login'
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome5'
import { TextInput } from "@react-native-material/core"

    const Login = ({ navigation }) => {
        return (
            <View>
                <View style={styles.container}>
                    <Text style={styles.title}>
                        Bem-vindo!
                    </Text>
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
                    <Text>
                        Não tenho uma conta
                    </Text>
                    <Text>
                        Esqueci a senha
                    </Text>
                </TouchableOpacity>
                {/* <svg style={{position:'absolute', marginTop:'190%'}} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#3e4685"  d="M0,32L48,42.7C96,53,192,75,288,74.7C384,75,480,53,576,42.7C672,32,768,32,864,58.7C960,85,1056,139,1152,154.7C1248,171,1344,149,1392,138.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg> */}
            </View>
    )
}

export default Login;
