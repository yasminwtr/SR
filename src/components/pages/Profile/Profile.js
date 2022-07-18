import React, { useContext, useEffect, useState } from 'react'
import { View, Text, TouchableOpacity, ScrollView, Image, Linking, FlatList } from 'react-native';
import styles from './styles'
import { StatusBar } from 'expo-status-bar';
import Icon from 'react-native-vector-icons/FontAwesome5'
import { useRoute } from '@react-navigation/native';
import AuthContext from "../../contexts/auth";
import api from '../../../api/index'

const Profile = ({ navigation }) => {
  const { user } = useContext(AuthContext);
  const route = useRoute()

  const name = route.params?.name
  const email = route.params?.email
  const phonenumber = route.params?.phonenumber
  const price = route.params?.price
  const localization = route.params?.localization
  const city = route.params?.city
  const whatsapp = route.params?.whatsapp
  const description = route.params?.description
  const titleService = route.params?.titleService

  const [userServices, setUserServices] = useState([])

  async function getServices(idperson) {
    try {
      const response = await api.get(`/getServicesFromUser/${idperson}`);
      return setUserServices(response.data)
    } catch (error) {
      setUserServices([])
    }
  }
  
  useEffect(() => {
    getServices(user.idperson)
  }, [])

  return (
    <ScrollView>
      <View style={styles.page}>
        <View style={styles.container}>
          {route.params ? (
            <>
              <Image
                source={require('../../../../assets/circle3.png')}
                style={styles.profileIcon}/>
            </>
          ) : (
            <>
                <Image
                source={require('../../../../assets/circle2.png')}
                style={styles.profileIcon}/>
            </>
          )
          }

          <Text style={styles.name}>{name ? name : user.fullname}</Text>

          {route.params ? (
            <>
              <Text style={styles.service}>{titleService}</Text>
              <TouchableOpacity style={styles.button}
                onPress={() => { Linking.openURL(`${whatsapp}`) }}>
                <Text style={styles.buttonText}>WhatsApp</Text>
              </TouchableOpacity>
            </>
          ) : (
            <>
              <TouchableOpacity style={styles.button}
                onPress={() => { navigation.navigate('EditProfile') }}>
                <Text style={styles.buttonText}>Editar conta</Text>
              </TouchableOpacity>
            </>
          )
          }

        </View>

        {route.params ? (
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
                <Icon name='money-check-alt' size={17} color='#3f4040' />
                <Text style={styles.titleContact}>Preço médio dos serviços</Text>
              </View>
              <Text style={styles.textContact}>R$ {price}</Text>

              <View style={styles.viewContact}>
                <Icon name='map-marked-alt' size={17} color='#3f4040' />
                <Text style={styles.titleContact}>Localização</Text>
              </View>
              <Text style={styles.textContact}>{city}, {localization}</Text>

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
                <Icon name='thumbtack' size={17} color='#3f4040' />
                <Text style={styles.titleContact}>Serviços anunciados</Text>
              </View>

              <FlatList
                data={userServices}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({ item }) => {
                  return (
                    <View>
                      <TouchableOpacity
                        onPress={() => {
                          console.log('item', item);
                          navigation.navigate('Profile2',
                            {
                              workerId: `${item.idperson}`, name: `${item.fullname}`, email: `${item.email}`, phonenumber: `${item.phonenumber}`,
                              price: `${item.priceservice}`, localization: `${item.localization}`, whatsapp: `${item.whatsapp}`, description: `${item.descriptionservice}`,
                              titleService: `${item.titleservice}`, city: `${item.city}`
                            })
                        }
                        }>
                        <Text style={styles.textService}>{item.titleservice}</Text>
                      </TouchableOpacity>

                    </View>
                  )
                }}
              />

              <View style={{marginBottom: 20}}/>

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
            </View>
          </>
        )
        }
        <StatusBar style="auto" />
      </View>
    </ScrollView>
  )
}

export default Profile