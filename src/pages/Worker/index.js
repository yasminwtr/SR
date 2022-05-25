import {View, Text, TouchableOpacity, ScrollView, Image, TextInput} from 'react-native';
import styles from '../../styles/worker'
import { StatusBar } from 'expo-status-bar';
import Icon from 'react-native-vector-icons/FontAwesome5'

export default function Worker(){
    return(
        <View style={styles.page}>
            <ScrollView>
                <TextInput
                style={styles.input}
                placeholder='Buscar mais perto por CEP'
                keyboardType='numeric'
                maxLength={8}
                />
            </ScrollView>
        </View>
    )
}