import { StatusBar } from 'expo-status-bar';
import { Text, View, TouchableOpacity } from 'react-native';
import styles from '../../styles/setting'
import Icon from 'react-native-vector-icons/FontAwesome5'

export default function Setting() {
  return (
    <View>
      <View style={styles.container}>
        <Text style={styles.name}>Nome Sobrenome</Text>
        <Text style={styles.email}>email334454@gmail.com</Text>
      </View>

      <View>
        <View style={styles.configurations}>
          <TouchableOpacity style={styles.button}>
          <Icon name='user-alt' size={22} color='#454545'/>
          <Text style={styles.editText}>Editar conta</Text>
          </TouchableOpacity>

          <View style={styles.divider}/>

          <TouchableOpacity style={styles.button}>
          <Icon name='trash' size={22} color='#b52d2d'/>
          <Text style={styles.exitText}>Excluir conta</Text>
          </TouchableOpacity>

          <View style={styles.divider}/>

          <TouchableOpacity style={styles.button}>
          <Icon name='trash' size={22} color='#454545'/>
          <Text style={styles.editText}>Sair</Text>
          </TouchableOpacity>

          <View style={styles.divider}/>
        </View>
      </View>

      <StatusBar style="auto" />
    </View>
  );
}