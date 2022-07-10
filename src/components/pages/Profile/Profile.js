import React, { useContext } from 'react'
import { View, Text, TouchableOpacity, ScrollView, Image } from 'react-native';
import styles from './styles'
import { StatusBar } from 'expo-status-bar';
import { LinearGradient } from 'expo-linear-gradient'
import Icon from 'react-native-vector-icons/FontAwesome5'
import { useRoute } from '@react-navigation/native';
import AuthContext from "../../contexts/auth";

const Profile = () => {
  const { user } = useContext(AuthContext);
  const route = useRoute()

  const name = route.params?.name
  const email = route.params?.email
  const phonenumber = route.params?.phonenumber

  return (
    <View style={styles.page}>
      <ScrollView>
        <LinearGradient
          style={styles.container}
          colors={["#e7977e", "#d88b9f"]}
        >
          <Image source={require('../../../../assets/circle.png')}
            style={styles.profileIcon} />

          <Text style={styles.name}>{name}</Text>
          <Text style={styles.service}>Diarista</Text>

          { route.params ? (
            <>
             <TouchableOpacity style={styles.button}
             onPress={() => {navigation.navigate('NavigationBar')}}>
              <Text style={styles.buttonText}>Enviar mensagem</Text>
            </TouchableOpacity>
            </>
          ) : (
            <>
             <TouchableOpacity style={styles.button}
             onPress={() => {navigation.navigate('NavigationBar')}}>
              <Text style={styles.buttonText}>Teste</Text>
            </TouchableOpacity>
            </>
          )
          }

        </LinearGradient>

        { route.params ? (
            <>
            <View style={styles.containerContact}>
              <View style={styles.viewContact}>
                <Icon name='envelope-open-text' size={17} color='#565d61' />
                <Text style={styles.titleContact}>Email</Text>
              </View>
              <Text style={styles.textContact}>{email}</Text>

              <View style={styles.viewContact}>
                <Icon name='phone-alt' size={17} color='#565d61' />
                <Text style={styles.titleContact}>Telefone</Text>
              </View>
              <Text style={styles.textContact}>{phonenumber}</Text>

              <View style={styles.viewContact}>
                <Icon name='map-marked-alt' size={17} color='#565d61' />
                <Text style={styles.titleContact}>Localização</Text>
              </View>
              <Text style={styles.textContact}>Florianópolis, SC</Text>

              <View style={styles.viewContact}>
                <Icon name='th-list' size={17} color='#565d61' />
                <Text style={styles.titleContact}>Descrição</Text>
              </View>
              <Text style={styles.textContact}>Limpeza, higienização e organização de todos os cômodos. Limpeza, higienização e organização de todos os cômodos. Limpeza, higienização e organização de todos os cômodos. Limpeza, higienização e organização de todos os cômodos. Limpeza, higienização e organização de todos os cômodos. Limpeza, umapa.</Text>
            </View>
            </>
          ) : (
            <>
            <View style={styles.containerContact}>
              <View style={styles.viewContact}>
                <Icon name='envelope-open-text' size={17} color='#565d61' />
                <Text style={styles.titleContact}>Email</Text>
              </View>
              <Text style={styles.textContact}>{user?.email}</Text>

              <View style={styles.viewContact}>
                <Icon name='phone-alt' size={17} color='#565d61' />
                <Text style={styles.titleContact}>Telefone</Text>
              </View>
              <Text style={styles.textContact}>{user?.phonenumber}</Text>

              <View style={styles.viewContact}>
                <Icon name='map-marked-alt' size={17} color='#565d61' />
                <Text style={styles.titleContact}>Localização</Text>
              </View>
              <Text style={styles.textContact}>Florianópolis, SC</Text>

              <View style={styles.viewContact}>
                <Icon name='th-list' size={17} color='#565d61' />
                <Text style={styles.titleContact}>Descrição</Text>
              </View>
              <Text style={styles.textContact}>Limpeza, higienização e organização de todos os cômodos. Limpeza, higienização e organização de todos os cômodos. Limpeza, higienização e organização de todos os cômodos. Limpeza, higienização e organização de todos os cômodos. Limpeza, higienização e organização de todos os cômodos. Limpeza, umapa.</Text>
            </View>
            </>
          )
          }
      </ScrollView>
      <StatusBar style="auto" />
    </View>
  )
}

export default Profile