import React, { useContext } from 'react'
import { View, Text, TouchableOpacity, ScrollView, Image, Linking } from 'react-native';
import styles from './styles'
import { StatusBar } from 'expo-status-bar';
import Icon from 'react-native-vector-icons/FontAwesome5'
import { useRoute } from '@react-navigation/native';
import AuthContext from "../../contexts/auth";

const Profile = (navigation) => {
  const { user } = useContext(AuthContext);
  const route = useRoute()

  const name = route.params?.name
  const email = route.params?.email
  const phonenumber = route.params?.phonenumber
  const price = route.params?.price
  const localization = route.params?.localization
  const whatsapp = route.params?.whatsapp
  const description = route.params?.description

  return (
    <View style={styles.page}>
      <ScrollView>
        <View style={styles.container}>
          <Icon name='angle-left' size={50} color='fff'
          onPress={() => {navigation.pop()}}/>

          <Image source={require('../../../../assets/circle.png')}
            style={styles.profileIcon} />

          <Text style={styles.name}>{name}</Text>
          <Text style={styles.service}>Diarista</Text>

          { route.params ? (
            <>
             <TouchableOpacity style={styles.button}
             onPress={() => {Linking.openURL(`${whatsapp}`)}}>
              <Text style={styles.buttonText}>WhatsApp</Text>
             </TouchableOpacity>
            </>
          ) : (
            <>
             <TouchableOpacity style={styles.button}
             onPress={() => {navigation.navigate('NavigationBar')}}>
              <Text style={styles.buttonText}>Conferir link</Text>
             </TouchableOpacity>
            </>
          )
          }

        </View>

        { route.params ? (
            <>
            <View style={styles.containerContact}>
              <View style={styles.viewContact}>
                <Icon name='envelope-open-text' size={17} color='#3f4040' />
                <Text style={styles.titleContact}>Email</Text>
              </View>
              <Text style={styles.textContact}>{email}</Text>

              <View style={styles.viewContact}>
                <Icon name='phone-alt' size={17} color='#3f4040' />
                <Text style={styles.titleContact}>Telefone</Text>
              </View>
              <Text style={styles.textContact}>{phonenumber}</Text>

              <View style={styles.viewContact}>
                <Icon name='map-marked-alt' size={17} color='#3f4040' />
                <Text style={styles.titleContact}>Preço médio dos serviços</Text>
              </View>
              <Text style={styles.textContact}>{price}</Text>

              <View style={styles.viewContact}>
                <Icon name='map-marked-alt' size={17} color='#3f4040' />
                <Text style={styles.titleContact}>Localização</Text>
              </View>
              <Text style={styles.textContact}>{localization}</Text>

              <View style={styles.viewContact}>
                <Icon name='th-list' size={17} color='#3f4040' />
                <Text style={styles.titleContact}>Descrição</Text>
              </View>
              <Text style={styles.textContact}>{description}</Text>
            </View>
            </>
          ) : (
            <>
            <View style={styles.containerContact}>
              <View style={styles.viewContact}>
                <Icon name='envelope-open-text' size={17} color='#3f4040' />
                <Text style={styles.titleContact}>Email</Text>
              </View>
              <Text style={styles.textContact}>{user?.email}</Text>

              <View style={styles.viewContact}>
                <Icon name='phone-alt' size={17} color='#3f4040' />
                <Text style={styles.titleContact}>Telefone</Text>
              </View>
              <Text style={styles.textContact}>{user?.phonenumber}</Text>

              <View style={styles.viewContact}>
                <Icon name='map-marked-alt' size={17} color='#3f4040' />
                <Text style={styles.titleContact}>Localização</Text>
              </View>
              <Text style={styles.textContact}>Florianópolis, SC</Text>

              <View style={styles.viewContact}>
                <Icon name='th-list' size={17} color='#3f4040' />
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