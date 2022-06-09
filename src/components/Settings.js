import { StatusBar } from 'expo-status-bar';
import { Text, View, TouchableOpacity } from 'react-native';
import styles from '../styles/setting'
import { LinearGradient } from 'expo-linear-gradient'
import Icon from 'react-native-vector-icons/FontAwesome5'

export default function Setting() {
  return (
    <View style={{backgroundColor: '#f3f8fe', height: 2000}}>
      <LinearGradient
      style={styles.container}
      colors={["#e7977e", "#d88b9f"]}
      >
        <Text style={styles.name}>Nome Sobrenome</Text>
        <Text style={styles.email}>email334454@gmail.com</Text>
      </LinearGradient>

      <View>
        <View style={styles.configurations}>
          <TouchableOpacity style={styles.button}>
          <Icon name='user-alt' size={22} color='#343434'/>
          <Text style={styles.editText}>Editar conta</Text>
          </TouchableOpacity>

          <View style={styles.divider}/>

          <TouchableOpacity style={styles.button}>
          <Icon name='trash' size={22} color='#b52d2d'/>
          <Text style={styles.deleteText}>Excluir conta</Text>
          </TouchableOpacity>

          <View style={styles.divider}/>

          <TouchableOpacity style={styles.button}>
          <Icon name='sign-out-alt' size={22} color='#a17792'/>
          <Text style={styles.exitText}>Sair</Text>
          </TouchableOpacity>

          <View style={styles.divider}/>
        </View>
      </View>

      <StatusBar style="auto" />
    </View>
  );
}