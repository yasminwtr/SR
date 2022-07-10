import { View, StatusBar } from 'react-native';
import React from 'react';
import { Button, TextInput } from 'react-native-paper';
import styles from './styles'

const EditProfile = () => {
    return(
        <View>
            <StatusBar barStyle="dark-content" />
            <TextInput
                style={styles.textInput}
                activeOutlineColor='#0000'
                outlineColor='#0000'
                mode='outlined'
                label='Senha atual'>
            </TextInput>

            <View style={styles.divider} />

            <TextInput
                style={styles.textInput}
                activeOutlineColor='#0000'
                outlineColor='#0000'
                mode='outlined'
                label='Nova senha'>
            </TextInput>

            <View style={styles.divider} />
            
            <TextInput
                style={styles.textInput}
                activeOutlineColor='#0000'
                outlineColor='#0000'
                mode='outlined'
                label='Repita a nova senha'>
            </TextInput>

            <View style={styles.divider} />

            <Button
                mode='outlined'
                color='#dc9cae'
                style={styles.buttonChangePassword}>
                Alterar senha
            </Button>
            
        </View>
    )
}

export default EditProfile