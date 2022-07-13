import { View, StatusBar } from 'react-native';
import React, { useContext, useState } from 'react';
import { Button, TextInput } from 'react-native-paper';
import styles from './styles'
import AuthContext from '../../contexts/auth';
import api from '../../../api/index';

const EditProfile = () => {
    const { user } = useContext(AuthContext)

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [phoneNumber, setPhoneNumber] = useState('')

    function validationFields() {
        if ((email || password || phoneNumber) !== '') {
          updateUser()
        } else {
          setErrorMessage(null)
          setErrorMessage("Preencha o campo que você deseja alterar.*")
          Vibration.vibrate()
          return;
        }
      }

    const updateUser = async () => {
        const idPerson = user.idperson; 
        try{
            const response = await api.put(`/users/${idPerson}`, {email, password, phoneNumber})
            const data = response;    
            console.log('updateUserData', data);
  
            user.email = data.email;
            user.password = data.password;
            user.phoneNumber = data.phoneNumber;

            setEmail(email)
            setPassword(password)
            setPhoneNumber(phoneNumber)

        } catch (error) {
            console.log(error)
        }
      }
    

    return(
        <View>
            <StatusBar barStyle="dark-content" />
            <TextInput
                style={styles.textInput}
                activeOutlineColor='#0000'
                outlineColor='#0000'
                mode='outlined'
                label='Novo email'
                value={email}
                onChangeText={setEmail}>
            </TextInput>

            <TextInput
                style={styles.textInput}
                activeOutlineColor='#0000'
                outlineColor='#0000'
                mode='outlined'
                label='Nova senha'
                value={password}
                onChangeText={setPassword}>
            </TextInput>

            <TextInput
                style={styles.textInput}
                activeOutlineColor='#0000'
                outlineColor='#0000'
                mode='outlined'
                label='Mudar número de telefone'
                value={phoneNumber}
                onChangeText={setPhoneNumber}>
            </TextInput>

            <View style={styles.divider} />

            <Button
                mode='outlined'
                color='#dc9cae'
                onPress={() => validationFields()}
                style={styles.buttonChangePassword}>
                Editar
            </Button>
            
        </View>
    )
}

export default EditProfile