import {View, Text, TouchableOpacity, ScrollView, Image} from 'react-native';
import styles from '../styles/profile'
import { StatusBar } from 'expo-status-bar';
import Icon from 'react-native-vector-icons/FontAwesome5'

export default function Profile(){
    return(
        <View style={styles.page}>
            <ScrollView>
            <View style={styles.container}>
                <Image source={require('../../assets/circle.png')}
                style={styles.profileIcon}/>

                <Text style={styles.name}>Alice Silva, 26 anos</Text>
                <Text style={styles.service}>Diarista</Text>


                <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>Enviar mensagem</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.containerContact}>
                <View style={styles.viewContact}>
                    <Icon name='envelope-open-text' size={17} color='#555c92'/> 
                    <Text style={styles.titleContact}>Email</Text>
                </View>
                <Text style={styles.textContact}>alicesilva@gmail.com</Text>

                <View style={styles.viewContact}>
                    <Icon name='phone-alt' size={17} color='#555c92'/>
                    <Text style={styles.titleContact}>Telefone</Text>
                </View>
                <Text style={styles.textContact}>(48) 99140-5923</Text>

                <View style={styles.viewContact}>
                    <Icon name='map-marked-alt' size={17} color='#555c92'/>
                    <Text style={styles.titleContact}>Localização</Text>
                </View>
                <Text style={styles.textContact}>Florianópolis, SC</Text>

                <View style={styles.viewContact}>
                    <Icon name='th-list' size={17} color='#555c92'/>
                    <Text style={styles.titleContact}>Descrição</Text>
                </View>
                <Text style={styles.textContact}>Limpeza, higienização e organização de todos os cômodos. Limpeza, higienização e organização de todos os cômodos. Limpeza, higienização e organização de todos os cômodos. Limpeza, higienização e organização de todos os cômodos. Limpeza, higienização e organização de todos os cômodos. Limpeza, umapa.</Text>
            </View>
            </ScrollView>
            <StatusBar style="auto" />
        </View>
    )
}