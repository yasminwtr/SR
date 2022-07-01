import { View, Text, TouchableOpacity, ScrollView, Image, TextInput } from 'react-native';
import styles from '../styles/worker'

import 'react-native-gesture-handler';

export default function Worker() {
  return (
    <View style={styles.page}>
      <TextInput
        style={styles.input}
        placeholder='Buscar mais próximo por CEP'
        keyboardType='numeric'
        maxLength={8}
      />
      <ScrollView>

        <Text style={styles.title}>Diarista</Text>

        <View>
          <TouchableOpacity style={styles.profileButton}>
            <Image source={require("../../assets/circle.png")} style={styles.profileIcon} />
            <Text style={styles.name}>Alice Silva</Text>
            <Text style={styles.km}>2,4km</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.profileButton}>
            <Image source={require("../../assets/circle.png")} style={styles.profileIcon} />
            <Text style={styles.name}>Alice Silva</Text>
            <Text style={styles.km}>3,4km</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  )
}